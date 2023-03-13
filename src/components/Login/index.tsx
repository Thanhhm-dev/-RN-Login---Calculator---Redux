import { ScrollView, TouchableOpacity, Text, TextInput, View, Image, Alert } from 'react-native'
import { useEffect, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Style from './style'
import CONST from '../../constants/key'
import auth from '@react-native-firebase/auth';
import { useIsFocused } from '@react-navigation/native';

const Login = (props: any) => {
    const form = useRef(CONST.USER_INIT)
    const isFocused = useIsFocused();

    useEffect(() => {
        AsyncStorage.getItem(CONST.USER_HANDLE_LOGIN).then(value => {
            if (value) {
                props.navigation.navigate('Home')
            }
        })
    }, []);

    // check when navigate to current screen
    useEffect(() => {
        if (isFocused) {
            // show alert if user create new account
            AsyncStorage.getItem(CONST.USER_REGIST_TMP).then(value => {
                if (value) {
                    AsyncStorage.removeItem(CONST.USER_REGIST_TMP)
                    Alert.alert(`Hi ${value}! Create successful!`, 'Please login the account you just registered')
                }
            })
        }
    }, [isFocused])

    const getDataInput = (text: (string|boolean), name: string) => {
        if (typeof text != 'boolean') {
            if (name == 'email') {
                form.current.email = text;
            } else {
                form.current.password = text;
            }
        } else {
            if (text) {
                AsyncStorage.setItem(CONST.USER_HANDLE_LOGIN, 'true');
            }
        }
    }

    const checkLogin = (navigation: any) => {
        if (form.current.email == '' || form.current.password == '') {
            Alert.alert('Error', 'Please input your account.')
            return;
        }
        auth().signInWithEmailAndPassword(form.current.email, form.current.password)
            .then(async (firebaseUser) => {
                form.current = CONST.USER_INIT
                AsyncStorage.setItem(CONST.USER_INFO, firebaseUser.user.uid).then(() => {
                    return navigation.navigate('Home')
                });
            })
            .catch(error => {
                Alert.alert('Login failed!', 'Please try again')
            });
    }

    const goToRegistScreen = (navigation: any) => {
        navigation.navigate('Regist')
    }

    return (
        <ScrollView style={Style.container}>
            <View style={Style.login}>
                <View style={Style.header}>
                    <Image source={require('../../assets/images/header.jpg')} />
                </View>
                <View style={Style.form}>
                    <TextInput style={Style.textInput} placeholder="email" onChangeText={text => getDataInput(text, 'email')}></TextInput>
                    <TextInput style={Style.textInput} placeholder="password" onChangeText={text => getDataInput(text, 'password')}></TextInput>
                    <BouncyCheckbox
                        size={20}
                        fillColor="lightblue"
                        text="Stay logged in"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine: "none", }}
                        onPress={isChecked => getDataInput(isChecked, 'handleLogin')}
                    />
                    <TouchableOpacity style={Style.button} onPress={() => checkLogin(props.navigation)}>
                        <Text style={Style.buttonText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.button]} onPress={() => goToRegistScreen(props.navigation)}>
                        <Text style={[Style.buttonText, Style.btnRegist]}>Create new account</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.footer}>
                    <Image style={Style.footerImg} source={require('../../assets/images/footer.png')} />
                </View>
            </View>
        </ScrollView>
    );
}

export default Login