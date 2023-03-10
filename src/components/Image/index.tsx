import { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONST from '../../constants/key'
import Style from './style'

const ImageScreen = (props: any) => {
    const [img, setImg] = useState<{ uri: string }>({ uri: 'https://reactjs.org/logo-og.png' })

    const logout = (navigation: any) => {
        AsyncStorage.removeItem(CONST.USER_HANDLE_LOGIN).then(() => {
            navigation.navigate('Login')
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
                <View style={Style.mainImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.img} ></Image>
                </View>
                <View style={Style.btnUpdate}>
                    <TouchableOpacity style={Style.button} >
                        <Text style={Style.buttonText}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Style.apiImage}>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={Style.dogImage}></Image>
                </View>
                <View style={Style.currentImg}>
                    <View style={Style.dogImage}>
                        <Text style={Style.countDow}>waiting</Text>
                    </View>
                </View> 
            </View>
        </View>
    );
}

export default ImageScreen