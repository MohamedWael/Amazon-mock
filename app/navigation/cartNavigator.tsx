import {View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Cart from "@/app/pages/cart";
import Product from "@/app/response/product";


export type CartNavigatorStackParamList = {
    Cart: { products?: Product[] };
};

export default function CartNavigator() {
    let Stack = createStackNavigator<CartNavigatorStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Cart"} component={Cart}/>
        </Stack.Navigator>
    )
}