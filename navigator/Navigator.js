import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }} 
                    />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;