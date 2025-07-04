import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

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
            height: 40
        },
    })

    const text = StyleSheet.create({
        base: {
            color: colorScheme === 'dark' ? '#cacaca' : '#2b2b2b',
        },
        title: {
            fontWeight: 'bold',
            fontSize: 20
        }
    });

    return { base, icon, text }
}