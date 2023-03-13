import { useState, useEffect, useRef } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import Style from './style'
import { launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONST from '../../constants/key'

const avatar = (props: any) => {
    const [image, setImage] = useState({ uri: 'https://reactjs.org/logo-og.png' })
    const hasImage = useRef('')

    useEffect(() => {
        AsyncStorage.getItem(CONST.USER_INFO).then((uuid) => {
            if (uuid != '') {
                firestore()
                    .collection(CONST.USER_TABLE)
                    .where('uuid', '==', uuid)
                    .limit(1)
                    .get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(documentSnapshot => {
                            if (documentSnapshot.data().avatar) {
                                setImage({ uri: documentSnapshot.data().avatar })
                                hasImage.current = documentSnapshot.id
                            }
                        });
                    });
            }
        });

    }, [])

    const chooseFile = () => {
        enum mediaType {
            photo = 'photo',
            mixed = 'mixed',
            video = 'video'
        }
        const options = {
            mediaType: mediaType['photo'],
            noData: true,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchImageLibrary(options, data => {
            const source = data.assets
            if (typeof source != 'undefined') {
                AsyncStorage.getItem(CONST.USER_INFO).then((uuid) => {
                    if (uuid && typeof source[0].uri != 'undefined') {
                        if (hasImage.current != '') {
                            firestore().collection(CONST.USER_TABLE)
                            .doc(hasImage.current)
                            .update({
                                avatar: source[0].uri
                            })
                            .then(() => {
                                console.log('User updated!');
                                setImage({ uri: source[0].uri })
                            });
                            return;
                        }
                        firestore().collection(CONST.USER_TABLE)
                            .add({
                                uuid: uuid,
                                avatar: source[0].uri
                            })
                            .then(() => {
                                console.log('User added!');
                                setImage({ uri: source[0].uri })
                            });
                    }
                });
            }
        })
    }

    return (
        <View style={Style.containerImg}>
            <View style={Style.mainImg}>
                <Image source={image} style={Style.img} ></Image>
            </View>
            <View style={Style.btnUpdate}>
                <TouchableOpacity style={Style.button} onPress={() => chooseFile()}>
                    <Text style={Style.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default avatar