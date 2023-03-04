import { Text, View, TouchableOpacity } from 'react-native'
import Style from './style'

const CalculatorScreen = (props: any) => {
    return (
        <View style={Style.container}>
            <View style={Style.screen}>
                <Text style={Style.show}>0</Text>
            </View>
            <View style={Style.listButton}>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>±</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Style.button]}>
                    <Text style={[Style.btnText, Style.key]}>÷</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={[Style.btnText, Style.key]}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={[Style.btnText, Style.key]}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={[Style.btnText, Style.key]}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Style.button, Style.buttonZero]}>
                    <Text style={Style.btnText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.btnText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={[Style.btnText, Style.key]}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CalculatorScreen
