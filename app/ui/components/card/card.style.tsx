import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

type Variant = 'close' | 'open'

export const cardStyle = () => {
    const colorScheme: ColorScheme = useColorScheme() || "dark"

    const base = StyleSheet.create({
        card: {
            backgroundColor: colorScheme === 'dark' ? '#2b2b2b' : '#cacaca',
            borderRadius: 12,
            padding: 12,
        },

    });

    const card = StyleSheet.create({
        close: {
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "75%"
        },
        closeContainer: {
            flex: 1,
            flexDirection: "row",
            paddingLeft: "2%",
            gap:"15%"
        },
        open: {
        }
    })

    const compose = (variantType: Variant = 'close') => {
        return {
            card: StyleSheet.flatten([
                base.card,
                card[variantType]
            ]),
        };
    };

    return { base, card, compose };
};