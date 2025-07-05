import { COLOR } from "@/ui/ThemeConfig";
import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

type Variant = 'close' | 'open'
type Status = "pending" | "in-progress" | "completed" | "canceled" | "on_hold" | "overdue"
type Priority = "low" | "medium" | "high"

export const cardStyle = () => {
    const colorScheme: ColorScheme = useColorScheme() || "dark"

    const statusColor = StyleSheet.create({
        pending: {
            tintColor: COLOR.orange200,
            color: COLOR.orange200
        },
        "in-progress": {
            tintColor: COLOR.green300,
            color: COLOR.green300
        },
        completed: {
            tintColor: COLOR.green400,
            color: COLOR.green400
        },
        canceled: {
            tintColor: COLOR.red300,
            color: COLOR.red300
        },
        on_hold: {
            tintColor: COLOR.yellow200,
            color: COLOR.yellow200
        },
        overdue: {
            tintColor: COLOR.red300,
            color: COLOR.red300
        },
    })

    const priorityColor = StyleSheet.create({
        low: {
            tintColor: COLOR.green400,
            color: COLOR.green400
        },
        medium: {
            tintColor: COLOR.yellow200,
            color: COLOR.yellow200
        },
        high: {
            tintColor: COLOR.red300,
            color: COLOR.red300
        },
    })

    const base = StyleSheet.create({
        card: {
            backgroundColor: colorScheme === 'dark' ? '#2b2b2b' : '#8b92a3',
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
        },
        closeInfos: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingLeft: "2%",
        },
        open: {
        }
    })

    const compose = (variantType: Variant = 'close') => {
        return {
            card: StyleSheet.flatten([
                base.card,
                card[variantType]
            ])
        }
    }

    const composePriority = (priorityType: Priority = 'low') => {
        return {
            priorityText: StyleSheet.flatten([
                card.closeInfos,
                priorityColor[priorityType]
            ])
        }
    }

    const composeStatus = (statusType: Status = 'pending') => {
        return {
            statusText: StyleSheet.flatten([
                card.closeInfos,
                statusColor[statusType]
            ])
        }
    }

    return { base, card, compose, composePriority, composeStatus };
};