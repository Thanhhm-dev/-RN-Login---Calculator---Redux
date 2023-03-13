import { useEffect, useRef } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONST from '../../constants/key'
import Style from './style'
import axios from 'axios'
import { saveUriAction } from '../../redux/actions/imageAction'
import { connect } from 'react-redux'
import TextCount from './countDown'
import Avatar from './avatar'

const ImageScreen = (props: any) => {
    useEffect(() => {
        const getImg = setTimeout(() => {
            console.log(props.position)
            axios(CONST.IMG_URL).then(value => {
                if (value.data?.status) {
                    props.saveUriAction(value.data)
                }
            });
        }, CONST.IMGAE_TIME)
        if (props.position == CONST.IMAGE_MAX_SHOW) {
            clearInterval(getImg)
        }
    }, [props.position])

    const logout = (navigation: any) => {
        AsyncStorage.removeItem(CONST.USER_INFO)
        AsyncStorage.removeItem(CONST.USER_HANDLE_LOGIN).then(() => {
            navigation.navigate('Login')
        })
    }

    const showImageDog = () => {
        return props.listImg.map((source: { uri: string }, index: number) => {
            if (source.uri != '') {
                return <View style={Style.currentImg} key={index}>
                    <Image source={source} style={Style.dogImage}></Image>
                </View>
            }
            return <View style={Style.currentImg} key={index}>
                <View style={Style.dogImage}>
                    {
                        props.position == index ? <TextCount position={props.position} /> : <Text style={Style.countDow}>waiting...</Text>
                    }
                </View>
            </View>
        })
    }

    return (
        <View style={Style.container}>
            <View style={Style.userImage}>
                <View style={Style.btnLogout}>
                    <TouchableOpacity style={Style.button} onPress={() => logout(props.navigation)}>
                        <Text style={[Style.buttonText, Style.buttonColor]}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <Avatar/>
            </View>
            <View style={Style.apiImage}>
                {
                    showImageDog()
                }
            </View>
        </View>
    );
}
const mapStateToProps = (reducer: any) => ({
    listImg: reducer.imageReducer.listImg,
    position: reducer.imageReducer.position
});
const mapDispatchToProps = (dispatch: Function) => ({
    saveUriAction: saveUriAction(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageScreen)