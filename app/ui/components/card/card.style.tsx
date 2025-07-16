import { COLOR } from "@/ui/ThemeConfig";
import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

type Variant = "close" | "open"

export const cardStyle = () => {
    const colorScheme: ColorScheme = "dark"
    // const colorScheme: ColorScheme = useColorScheme() || "dark"

    const base /* base card style */ = StyleSheet.create({
        card: {
            backgroundColor: colorScheme === "dark" ? COLOR["neutral-800"] : COLOR["neutral-500"],
            width: "75%",
            padding: 12,
            borderRadius: 12,
            marginTop: 20,
            minHeight: 115,
        },

    });

    const card /* componets card */ = StyleSheet.create({
        header: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        headerTitle: {
            flex: 1,
            width: "100%",
            alignItems: "center",
        },
        headerInfos: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        headerStatusPriority: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        close: {
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        open: {
            height: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    })

    const composeCard /* compose to change open | close card */ = (variantType: Variant = "close") => {
        return {
            card: StyleSheet.flatten([
                base.card,
                card[variantType]
            ]),
        }
    }
    return { base, card, composeCard };
};