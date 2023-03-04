import { ScrollView, TouchableOpacity, Text, TextInput, View, Image } from 'react-native'
import { useEffect } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Style from './style'
import CustomConstant from '../../constants/key'

const IMG_URL = 'https://dog.ceo/api/breeds/image/random'

const getImage = async () => {
    let response = await axios.get(IMG_URL)
    let tmpImg: { uri: string } = {
        uri: response.data.message
    }
    AsyncStorage.setItem(CustomConstant.IMG_KEY, response.data.message)
    return tmpImg
}

const Login = ({ navigation }: any) => {
    useEffect(() => {
        AsyncStorage.getItem(CustomConstant.IMG_KEY).then(value => {
            if (value) {
                navigation.navigate('Home')
            }
        })
    }, []);

    const goToImageScreen = async (navigation: any) => {
        await getImage()
        navigation.navigate('Home')
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
                    <TextInput style={Style.textInput} placeholder="username"></TextInput>
                    <TextInput style={Style.textInput} placeholder="password"></TextInput>
                    <BouncyCheckbox
                        size={20}
                        fillColor="lightblue"
                        // unfillColor="#FFFFFF"
                        text="Stay logged in"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine: "none", }}
                        onPress={(isChecked: boolean) => { }}
                    />
                    <TouchableOpacity style={Style.button} onPress={() => goToImageScreen(navigation)}>
                        <Text style={Style.buttonText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.button]} onPress={() => goToRegistScreen(navigation)}>
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