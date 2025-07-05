import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

export const COLOR = {
    green300 : '#6aba51',
    green400 : '#5fc931',
    orange200 : '#e9851d',
    red300 : '#cc0000',
    yellow200 : '#f1c232'
}

export const style = () => {
    const colorScheme: ColorScheme = useColorScheme() || "dark"

    const base = StyleSheet.create({
        content: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? '#010409' : '#cacaca',
            alignItems: "center",
        }
    })

    const icon = StyleSheet.create({
        sm: {
            width: 30,
            height: 30
        },
        md: {
            width: 40,
            height: 40,
        },
    })

    const text = StyleSheet.create({
        base: {
            overflow: "hidden",
            flexShrink: 1
        },
        title: {
            fontWeight: 'bold',
            fontSize: 20
        }
    });

    const color = StyleSheet.create({
        lightGray: {
            tintColor: colorScheme === 'dark' ? '#cacaca' : '#2b2b2b',
            color: colorScheme === 'dark' ? '#cacaca' : '#2b2b2b',
        },
    })

    return { base, icon, text, color }
}