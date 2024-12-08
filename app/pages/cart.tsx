import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {RouteProp} from "@react-navigation/core";
import {CartNavigatorStackParamList} from "@/app/navigation/cartNavigator";
import {useSelector} from "react-redux";
import {RootState} from "@/app";
import Product from "@/app/response/product";
import React, {useState} from "react";
import colors from "@/app/theme/colors";
import fonts from "@/app/theme/fonts";
import DeliverToAddress from "@/app/components/deliverToAddress";
import {ProductDetails} from "@/app/components/ProductItem";
import BuyButton from "@/app/components/BuyButton";


// Define the type for the route prop
type DetailsScreenRouteProp = RouteProp<CartNavigatorStackParamList, 'Cart'>;

interface Props {
    route: DetailsScreenRouteProp;
}


export default function Cart({route}: Props) {
    console.log("------cart screen------")
    const [subTotal, setSubTotal] = useState(0);
    const products = useSelector((state: RootState) => {
        let products = state.cartReducer as Product[];

        let total: number = 0
        for (let i = 0; i < products.length; i++) {
            let productPrice = (products[i].quantity || 0) * products[i].price
            total += productPrice;
        }
        if (total != subTotal) {
            setSubTotal(total)
        }
        return products
    })

    return (
        <ScrollView>
            <View>
                <DeliverToAddress/>

                <View
                    style={{
                        borderStyle: "solid",
                        borderRadius: 10,
                        margin: 4,
                    }}
                >
                    <View style={{
                        marginVertical: 18,
                        marginStart: 8,
                        flexDirection: "row"
                    }}>
                        <Text
                            style={{
                                fontSize: fonts.size.font18,
                                color: colors.black
                            }}
                        >Subtotal: </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: fonts.size.font14,
                                color: colors.black
                            }}
                        >EGP</Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: fonts.size.font18,
                                color: colors.black
                            }}
                        >{subTotal}</Text>
                    </View>

                    <BuyButton
                        text={"Proceed to buy"}
                        onPress={() => {
                            console.log("Pressed")
                        }}
                    />

                    <View style={{
                        marginTop: 8,
                        elevation: 2,
                        borderColor: colors.borderColor,
                        borderWidth: .1,
                    }}/>
                </View>

                <FlatList
                    style={{
                        marginBottom: 8
                    }}
                    data={products}
                    scrollEnabled={false}
                    renderItem={({item}) => {
                        return (<ProductDetails item={item}
                                                showBrand={true}
                        />)
                    }}/>
            </View>
        </ScrollView>

    )
}