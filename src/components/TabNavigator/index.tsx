import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import CalculatorScreen from '../Calculator'
import ImageScreen from '../Image'

const Tab = createBottomTabNavigator();
const Tabs = ({navigation}: any) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Image"
                component={ImageScreen}
                options={{
                    tabBarLabel: 'Image',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="image" size={20}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={CalculatorScreen}
                options={{
                    tabBarLabel: 'Calculator',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calculator" size={20}/>
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