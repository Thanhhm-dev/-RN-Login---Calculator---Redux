import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Image } from 'react-native'
import CalculatorScreen from '../Calculator'
import ImageScreen from '../Image'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator();
const Tabs = ({navigation}: any) => {
    const [position, listImg]= useSelector((state: any) => {
        return [
            state.imageReducer.position,
            state.imageReducer.listImg
        ]
    })
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Image"
                component={ImageScreen}
                options={{
                    tabBarLabel: 'Image',
                    tabBarIcon: ({ color, size }) => (
                        position != 0 ? <Image source={listImg[position - 1]} style={{ width: 30, height: 30 }}></Image> : <Icon name="image" size={20}/>            
                    ),
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={CalculatorScreen}
                options={{
                    tabBarLabel: 'Calculator',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calculator" size={30}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const TabNavigator = (props: any) => {
    return (
        <Tabs navigation={props.navigation} />
    );
}

export default TabNavigator