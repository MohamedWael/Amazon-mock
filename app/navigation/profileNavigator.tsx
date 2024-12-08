import {View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Cart from "@/app/pages/cart";
import Profile from "@/app/pages/profile";


export default function ProfileNavigator() {
    let Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Profile"} component={Profile}/>
        </Stack.Navigator>
    )
}