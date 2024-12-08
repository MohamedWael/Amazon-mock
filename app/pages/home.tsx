import {ActivityIndicator, FlatList, Text, View} from "react-native";
import {styles} from "@/app/styles/Styles";
import {useDispatch, useSelector} from "react-redux";
import {ADS_UPDATE_ACTION} from "@/app/reducers/adsReducer";
import {Dispatch, useEffect, useState} from "react";
import {RootState} from "@/app";
import {UnknownAction} from "redux";
import Product from "@/app/response/product";
import {Button} from "react-native-paper";
import fonts from "@/app/theme/fonts";
import colors from "@/app/theme/colors";
import {StackNavigationProp} from "@react-navigation/stack";
import {HomeNavigatorStackParamList} from "@/app/navigation/homeNavigator";
import DeliverToAddress from "@/app/components/deliverToAddress";
import {ClickableProductDetails} from "@/app/components/ProductItem";


function getItems(
    dispatch: Dispatch<UnknownAction>,
    isLoading: (isLoading: boolean) => void,
) {

    isLoading(true)
    fetch("https://omardiaa.com/YouTube/ReactNative/amazonProducts.php", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    }).then((response: Response) => {
        console.log("Reloaded");
        isLoading(false)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log("All Response: " + response);
        return response.json();
    }).then(data => {
        isLoading(false)
        const products: Product[] = data as Product[];
        dispatch({
            type: ADS_UPDATE_ACTION,
            payload: products,
        })
        return products;
    }).catch((error: Error) => {
        isLoading(false)
        console.error(error);
    })
}

function openProductDetailsScreen(navigation: HomeScreenNavigationProp, item: Product) {
    navigation.navigate("ItemDetails", {product: item})
}

// Type for the navigation prop
type HomeScreenNavigationProp = StackNavigationProp<HomeNavigatorStackParamList, 'Home'>;

// Props for the component
type Props = { navigation: HomeScreenNavigationProp; };

export default function Home({navigation}: Props) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getItems(dispatch, (loading) => {
            setIsLoading(loading);
        })
    }, [])

    const ads = useSelector((state: RootState) => {
        return state.adsReducer[0] as Product[];
    })

    return (
        <View style={styles.screenContainer}>
            {
                isLoading ? (
                    <ActivityIndicator
                        style={{
                            padding: 8
                        }}
                        size="large" color="#0ff"/>
                ) : (
                    <View>
                        <Text style={{
                            fontSize: fonts.size.font18,
                            fontWeight: "semibold",
                            padding: 10
                        }}>Results</Text>

                        <DeliverToAddress/>

                        <FlatList
                            data={ads}
                            renderItem={({item}) => {
                                return (
                                    <ClickableProductDetails
                                        item={item}
                                        onProductItemClick={
                                            (item: Product) => {
                                                openProductDetailsScreen(navigation, item)
                                            }
                                        }
                                    />
                                )
                            }}
                        />
                    </View>
                )
            }
        </View>
    )
}
