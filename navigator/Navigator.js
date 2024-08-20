import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Serie from '../screens/Serie';
const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name='home-outline' color={color} size={size} />
                },
                tabBarActiveTintColor:  "#e15f19",  //color icono activo
                tabBarInactiveTintColor:  "#ffffff", // color de icono inactivo
                tabBarStyle: {
                    backgroundColor: "#24252a",
                    paddingBottom: 5,
                    height: 50
                },
                headerShown: false, //para ocultar el encabezado
            })}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Serie"
                    component={Serie}
                    options={{
                        
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;

