import { ScrollView, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { useRef } from 'react'
import Style from './style'
import auth from '@react-native-firebase/auth';
import CONST from '../../constants/key'
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistScreen = (props: any) => {
    const formData = useRef(CONST.USER_INIT);

    const getUserNameAndPassword = (text: string, name: string) => {
        if (name == 'email') {
            let tmp = formData.current
            tmp.email = text
            formData.current = tmp;
        } else {
            let tmp = formData.current
            tmp.password = text
            formData.current = tmp;
        }
    }

    const createAccountFireBase = () => {
        if (formData.current.email == '' || formData.current.password == '') {
            Alert.alert(`Warning!`, 'Please input email and password')
            return;
        }
        auth()
            .createUserWithEmailAndPassword(formData.current.email, formData.current.password)
            .then(() => {
                const setLocalStore = async () => {
                    await AsyncStorage.setItem(CONST.USER_REGIST_TMP, formData.current.email)
                }
                setLocalStore().then(() => {
                    AsyncStorage.getItem(CONST.USER_REGIST_TMP).then(value => {
                        props.navigation.navigate('Login')
                    })
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            });
    }

    return (
        <ScrollView style={Style.container}>
            <View style={Style.login}>
                <View style={Style.footer}>
                    <Image style={Style.footerImg} source={require('../../assets/images/sign-up.jpg')} />
                </View>
                <View style={Style.form}>
                    <TextInput style={Style.textInput} placeholder="email" onChangeText={text => getUserNameAndPassword(text, 'email')}></TextInput>
                    <TextInput style={Style.textInput} placeholder="password" onChangeText={text => getUserNameAndPassword(text, 'password')}></TextInput>
                    <TouchableOpacity style={Style.button} onPress={() => createAccountFireBase()}>
                        <Text style={Style.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

export default RegistScreen
