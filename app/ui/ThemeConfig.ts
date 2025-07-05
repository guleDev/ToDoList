import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

export const COLOR = {
    'neutral-100': '#f5f5f5',
    'neutral-400': '#a1a1a1',
    'neutral-500': '#737373',
    'neutral-600': '#525252',
    'neutral-700': '#404040',
    'neutral-800': '#262626',
    'neutral-950': '#0a0a0a',

    'green-500' : '#00c950',
    
    'lime-700' : '#497d00',
    
    'orange-600' : '#f54900',
    
    'ambar-600': '#e17100',

    'red-500' : '#fb2c36',
    'red-600' : '#e7000b',
    'red-700' : '#c10007',
    
    'yellow-400' : '#fdc700'
}

export const style = () => {
    const colorScheme: ColorScheme = useColorScheme() || "dark"

    const base = StyleSheet.create({
        content: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? COLOR["neutral-950"] : COLOR["neutral-100"],
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
        strong: {
            fontWeight: 'bold',
        },
        sm: {
            fontSize: 15
        },
        md: {
            fontSize: 25
        },
        lg: {
            fontSize: 30
        }
    });

    const color = StyleSheet.create({
        lightGray: {
            tintColor: colorScheme === 'dark' ? COLOR["neutral-400"] : COLOR["neutral-800"],
            color: colorScheme === 'dark' ? COLOR["neutral-400"] : COLOR["neutral-800"],
        },
    })

    return { base, icon, text, color }
}