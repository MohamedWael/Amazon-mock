import {Text, TouchableOpacity} from "react-native";
import colors from "@/app/theme/colors";
import fonts from "@/app/theme/fonts";
import React from "react";

export default function BuyButton({text, onPress}: { text: string, onPress: () => void }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: colors.yellow,
                alignItems: "center",
                margin: 8,
                borderCurve: "circular",
                borderRadius: 20,
                padding: 8,
                elevation: 4,
            }}
            onPress={() => {
                onPress()
            }}>
            <Text style={{
                fontSize: fonts.size.font16,
                fontWeight: "600",
                color: colors.black
            }}>{text}</Text>

        </TouchableOpacity>
    );
}