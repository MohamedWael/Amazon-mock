import {View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "@/app/pages/home";
import Item from "@/app/pages/item";
import Product from "@/app/response/product";

export type HomeNavigatorStackParamList = {
    Home: undefined;
    ItemDetails: { product?: Product };
};

export default function HomeNavigator() {
    let Stack = createStackNavigator<HomeNavigatorStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"ItemDetails"} component={Item}/>
        </Stack.Navigator>
    )
}