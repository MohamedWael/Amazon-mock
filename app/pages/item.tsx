import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/app/styles/Styles";
import {RouteProp} from "@react-navigation/core";
import {HomeNavigatorStackParamList} from "@/app/navigation/homeNavigator";
import uri from "ajv/lib/runtime/uri";
import {Metrics} from "@/app/theme/metrics";
import {Button} from "react-native-paper";
import fonts from "@/app/theme/fonts";
import {useDispatch, useSelector} from "react-redux";
import {ADS_UPDATE_ACTION} from "@/app/reducers/adsReducer";
import {CART_ADD_PRODUCT_ACTION} from "@/app/reducers/cartReducer";
import colors from "@/app/theme/colors";
import {CartNavigatorStackParamList} from "@/app/navigation/cartNavigator";
import ItemCounter from "@/app/components/ItemCounter";
import Product from "@/app/response/product";
import {RootState} from "@/app";


// Define the type for the route prop
type DetailsScreenRouteProp = RouteProp<HomeNavigatorStackParamList, 'ItemDetails'>;

interface Props {
    route: DetailsScreenRouteProp;
}

export default function Item({route}: Props) {
    const product = route.params.product

    const state = useSelector((state: RootState) => {return state.cartReducer as Product[]});
    const productItem = state[state.findIndex(product => product.id === product.id)];

    return (
        <View style={styles.screenContainer}>
            <View
                style={{
                    alignItems: "center"
                }}>
                <Text
                    style={{
                        marginHorizontal: 8,
                        alignSelf: "flex-start",
                        fontSize: fonts.size.font14
                    }}
                >Brand: {product?.brand}</Text>
                <Text
                    style={{
                        marginHorizontal: 8,
                        alignSelf: "flex-start",
                        fontSize: fonts.size.font16
                    }}
                    ellipsizeMode={"tail"}>{product?.description}</Text>
                <Image
                    style={{}}
                    resizeMode={"center"}
                    resizeMethod={"resize"}
                    source={{
                        uri: product?.imageLink,
                        width: Metrics.screenWidth * .9,
                        height: Metrics.screenWidth * .7,
                    }}
                />

                <View
                    style={{
                        alignItems: "flex-start",
                        width: Metrics.screenWidth,
                        marginHorizontal: 8,
                    }}>

                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 8,
                    }}>
                        <Text
                            style={{
                                fontSize: fonts.size.font16
                            }}
                        >{product?.price}</Text>
                        <Text
                            style={{
                                alignSelf: "flex-end",
                                fontSize: fonts.size.font12
                            }}
                        > EGP</Text>
                    </View>

                    {product != undefined ? (<ItemCounter item={product}
                                                          topMargin={0}
                    />) : (<View/>)}


                </View>


            </View>

        </View>
    )
}