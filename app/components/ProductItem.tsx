import Product from "@/app/response/product";
import colors from "@/app/theme/colors";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Metrics} from "@/app/theme/metrics";
import ItemCounter from "@/app/components/ItemCounter";


export function ProductDetails(
    {item, showBrand}: { item: Product; showBrand: boolean }
) {
    return (
        <View>
            <View
                style={{
                    marginStart: 8,
                    marginTop: 8,
                    marginEnd: 8,
                    flexDirection: "row",
                    backgroundColor: colors.lighterGrey,
                    borderColor: colors.borderColor,
                    borderWidth: .5,
                    paddingVertical: 20
                }}>

                <View>
                    <Image
                        style={{
                            marginEnd: 8,
                            width: Metrics.screenWidth * .3,
                            height: Metrics.screenWidth * .2
                        }}
                        source={{uri: item.imageLink}}/>

                    {(
                        item.quantity != undefined && item.quantity >= 0
                    ) ? (<ItemCounter item={item} topMargin={8}/>) : (<View/>)}
                </View>

                <View
                    style={{
                        marginEnd: 8,
                        width: "65%"
                    }}>
                    <Text
                        numberOfLines={3}
                        ellipsizeMode={"tail"}
                        style={{
                            flexWrap:"wrap"
                        }}>
                        {item.description}
                    </Text>

                    {showBrand ? (
                        <View style={{
                            marginTop: 4,
                            flexDirection: "row"
                        }}>
                            <Text
                                style={{
                                    fontWeight: "bold"
                                }}
                            >Brand: </Text>
                            <Text>{item.brand}</Text>
                        </View>
                    ) : (<View/>)}


                    <View style={{
                        marginTop: 8,
                        flexDirection: "row"
                    }}>
                        <Text
                            style={{fontWeight: "bold"}}>
                            {item.price}
                        </Text>
                        <Text>{" "}EGP</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

export function ClickableProductDetails(
    {item, onProductItemClick}: { item: Product; onProductItemClick: (item: Product) => void }
) {
    return (
        <TouchableOpacity onPress={() => {
            onProductItemClick(item)
        }}>
            <ProductDetails item={item}
                            showBrand={false}
            />
        </TouchableOpacity>
    )
}
