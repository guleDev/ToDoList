import { COLOR } from "@/ui/ThemeConfig";
import { ColorScheme } from "@data/types";
import { StyleSheet, useColorScheme } from "react-native";

type Variant = 'close' | 'open'
type Status = "pending" | "in-progress" | "completed" | "canceled" | "on-hold" | "overdue"
type Priority = "low" | "medium" | "high"

export const cardStyle = () => {
    const colorScheme: ColorScheme = useColorScheme() || "dark"

    const statusColor = StyleSheet.create({
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

    const priorityColor = StyleSheet.create({
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

    const base = StyleSheet.create({
        card: {
            backgroundColor: colorScheme === 'dark' ? COLOR["neutral-800"] : COLOR["neutral-500"],
            width: "75%",
            padding: 12,
            borderRadius: 12,
        },

    });

    const card = StyleSheet.create({
        close: {
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        closeContainer: {
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: "2%",
        },
        closeInfos: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
        },
        open: {
            flex: 0.1,
            flexDirection: "column",
            justifyContent: "space-between",
        },
        openHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        openContainer: {
            flex: 1,
            alignItems: "center",
        },
        openInfos: {
            flexDirection: "row",
            justifyContent: "space-around"
        },
    })

    const compose = (variantType: Variant = 'close') => {
        return {
            card: StyleSheet.flatten([
                base.card,
                card[variantType]
            ]),
        }
    }

    const composePriority = (priorityType: Priority = 'low') => {
        return {
            close: StyleSheet.flatten([
                card.closeInfos,
                priorityColor[priorityType]
            ]),
            open: StyleSheet.flatten([
                card.openInfos,
                priorityColor[priorityType]
            ])
        }
    }

    const composeStatus = (statusType: Status = 'pending') => {
        return {
            close: StyleSheet.flatten([
                card.closeInfos,
                statusColor[statusType]
            ]),
            open: StyleSheet.flatten([
                card.openInfos,
                statusColor[statusType]
            ])
        }
    }

    return { base, card, compose, composePriority, composeStatus };
};