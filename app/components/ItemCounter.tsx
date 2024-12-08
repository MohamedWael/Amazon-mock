import Product from "@/app/response/product";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import colors from "@/app/theme/colors";
import {CART_ADD_PRODUCT_ACTION, CART_REMOVE_PRODUCT_ACTION} from "@/app/reducers/cartReducer";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function ItemCounter(
    {item, topMargin}: { item: Product, topMargin: number }
) {
    const dispatch = useDispatch();

    const [itemCounter, setItemCounter] = useState((item.quantity || 0));
    const borderRadius = 8
    const incrementorButtonBackgroundColor = colors.lightGrey

    return <View style={{
        margin: 8,
        flexDirection: "row",
        alignItems: "center",
        marginTop: topMargin,
        borderWidth: 1,
        borderColor: incrementorButtonBackgroundColor,
        borderRadius: borderRadius,
        justifyContent: "center",
        alignSelf: "flex-start"
    }}>

        <TouchableOpacity
            style={{
                borderEndWidth: 0,
                backgroundColor: incrementorButtonBackgroundColor,
                borderTopStartRadius: borderRadius,
                borderBottomStartRadius: borderRadius,
                padding: 5,
            }}
            onPress={() => {

                dispatch({
                    type: CART_REMOVE_PRODUCT_ACTION,
                    payload: item,
                })
                setItemCounter(itemCounter - 1);
            }}>

            <FontAwesomeIcon icon={faMinus}/>
        </TouchableOpacity>

        <Text style={{marginHorizontal: 8}}>{itemCounter}</Text>

        <TouchableOpacity
            style={{
                borderStartWidth: 0,
                backgroundColor: incrementorButtonBackgroundColor,
                borderTopEndRadius: borderRadius,
                borderBottomEndRadius: borderRadius,
                padding: 5,
            }}
            onPress={() => {
                dispatch({
                    type: CART_ADD_PRODUCT_ACTION,
                    payload: item,
                })
                setItemCounter(itemCounter + 1);
            }}>

            <FontAwesomeIcon icon={faPlus}/>
        </TouchableOpacity>
    </View>;
}