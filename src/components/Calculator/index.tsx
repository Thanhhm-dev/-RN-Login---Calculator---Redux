import { Text, View, TouchableOpacity } from 'react-native'
import Style from './style'
import CONST from '../../constants/key'
import { connect } from 'react-redux';
import { countAction } from '../../redux/actions/calculatorAction'

const CalculatorScreen = (props: any) => {
    const callToCalculatorAction = (item: string)  => {
        props.countAction(item)
    }
    let items = CONST.CALCULATE_KEYS.map((item, index) => {
        return <TouchableOpacity style={[
                    Style.button,
                    index == 16 ? Style.buttonZero : {}
                ]} key={index} onPress={() => callToCalculatorAction(item)}>
                    <Text style={[
                            Style.btnText, 
                            [3, 7, 11, 15, 18].indexOf(index) != -1 ? 
                                (props.calculateData.clicked == item && index != 18 ? Style.btnClicked : Style.key) : {}
                        ]} 
                        >{ item }</Text>
                </TouchableOpacity>
    })

    return (
        <View style={Style.container}>
            <View style={Style.screen}>
                <Text style={Style.show}>{ props.calculateData.display }</Text>
            </View>
            <View style={Style.listButton}>
                {
                    items.map(view => {
                        return view
                    })
                }
            </View>
        </View>
    );
}
// show
const mapStateToProps = (reducer: any) => ({
    calculateData: reducer.calculateReducer,
});
// action
const mapDispatchToProps = (dispatch: Function) => ({
    countAction: countAction(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen);
