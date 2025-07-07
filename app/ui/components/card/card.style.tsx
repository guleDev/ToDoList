import { style, COLOR } from "@/ui/ThemeConfig";
import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

type Variant = 'close' | 'open'

export const cardStyle = () => {
    const colorScheme: ColorScheme = useColorScheme() || "dark"

    const base /* base card style */ = StyleSheet.create({
        card: {
            backgroundColor: colorScheme === 'dark' ? COLOR["neutral-800"] : COLOR["neutral-500"],
            width: "75%",
            padding: 12,
            borderRadius: 12,
        },

    });

    const card /* componets card */ = StyleSheet.create({
        headerContainer: {
            flex: 1,
            alignItems: "center",
        },
        headerInfos: {
            flexDirection: "row",
            justifyContent: "space-around"
        },
        close: {
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        open: {
            height: 'auto',
            flexDirection: "column",
            justifyContent: "space-between",
        },
    })

    const composeCard /* compose to change open | close card */ = (variantType: Variant = 'close') => {
        return {
            card: StyleSheet.flatten([
                base.card,
                card[variantType]
            ]),
        }
    }
    return { base, card, composeCard };
};