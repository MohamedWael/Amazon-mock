import colors from "@/app/theme/colors";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {Text, View} from "react-native";
import fonts from "@/app/theme/fonts";

export default function DeliverToAddress() {
    return (
        <View style={{
            padding: 16,
            flexDirection: "row",
            backgroundColor: colors.primary,
            alignItems: "flex-start",

        }}>
            {/*delivery view*/}
            <FontAwesomeIcon style={{
                marginEnd: 4
            }} icon={faLocationDot}/>
            <Text style={{
                fontSize: fonts.size.font16
            }}>Deliver to Cairo - Mohamed</Text>
        </View>
    )
}
