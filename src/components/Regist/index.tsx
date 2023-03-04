import { ScrollView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Style from './style'

const RegistScreen = () => {

    const createAccountFireBase = () => {

    }

    return (
        <ScrollView style={Style.container}>
            <View style={Style.login}>
                <View style={Style.footer}>
                    <Image style={Style.footerImg} source={require('../../assets/images/sign-up.jpg')} />
                </View>
                <View style={Style.form}>
                    <TextInput style={Style.textInput} placeholder="username"></TextInput>
                    <TextInput style={Style.textInput} placeholder="password"></TextInput>

                    <TouchableOpacity style={Style.button} onPress={() => createAccountFireBase()}>
                        <Text style={Style.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

export default RegistScreen