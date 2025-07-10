import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

export const COLOR /* colors to use in project */ = {
    "neutral-100": "#f5f5f5",
    "neutral-400": "#a1a1a1",
    "neutral-500": "#737373",
    "neutral-600": "#525252",
    "neutral-700": "#404040",
    "neutral-800": "#262626",
    "neutral-950": "#0a0a0a",

    "green-500": "#00c950",

    "lime-700": "#497d00",

    "orange-600": "#f54900",

    "ambar-600": "#e17100",

    "red-500": "#fb2c36",
    "red-600": "#e7000b",
    "red-700": "#c10007",

    "yellow-400": "#fdc700"
}

export const style = () => {
    const colorScheme: ColorScheme = "dark"
    // const colorScheme: ColorScheme = useColorScheme() || "dark"

    const base /* base contents style */ = StyleSheet.create({
        content: {
            flex: 1,
            backgroundColor: colorScheme === "dark" ? COLOR["neutral-950"] : COLOR["neutral-100"], // Operador ternário para escolher a cor dependente do tema do usuário
            alignItems: "center",
        }
    })

    const icon /* icon size & color */ = StyleSheet.create({
        sm: {
            width: 30,
            height: 30,
        },
        md: {
            width: 40,
            height: 40,
        },
        lightGray: {
            tintColor: colorScheme === "dark" ? COLOR["neutral-400"] : COLOR["neutral-800"], // Operador ternário para escolher a cor dependente do tema do usuário
        },
    })

    const text /* font weight & size */ = StyleSheet.create({
        base: {
            overflow: "hidden",
            flexShrink: 1
        },
        strong: {
            fontWeight: "bold",
        },
        sm: {
            fontSize: 15
        },
        md: {
            fontSize: 25
        },
        lg: {
            fontSize: 30
        },
        lightGray: {
            color: colorScheme === "dark" ? COLOR["neutral-400"] : COLOR["neutral-800"], // Operador ternário para escolher a cor dependente do tema do usuário
        },
    });

    const composeTitle /* compose to title text */ = StyleSheet.flatten([
        text.lightGray,
        text.base,
        text.md,
        text.strong
    ])

    const statusColor /* text color */ = StyleSheet.create({
        pending: {
            tintColor: COLOR["ambar-600"],
            color: COLOR["ambar-600"]
        },
        "in-progress": {
            tintColor: COLOR["green-500"],
            color: COLOR["green-500"]
        },
        completed: {
            tintColor: COLOR["ambar-600"],
            color: COLOR["ambar-600"]
        },
        canceled: {
            tintColor: COLOR["red-600"],
            color: COLOR["red-600"]
        },
        "on-hold": {
            tintColor: COLOR["yellow-400"],
            color: COLOR["yellow-400"]
        },
        overdue: {
            tintColor: COLOR["red-600"],
            color: COLOR["red-600"]
        },
    })

    const priorityColor /* text color */ = StyleSheet.create({
        low: {
            tintColor: COLOR["green-500"],
            color: COLOR["green-500"]
        },
        medium: {
            tintColor: COLOR["yellow-400"],
            color: COLOR["yellow-400"]
        },
        high: {
            tintColor: COLOR["red-600"],
            color: COLOR["red-600"]
        },
    })

    return { base, icon, text, composeTitle, statusColor, priorityColor }
}