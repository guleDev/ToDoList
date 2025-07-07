import { View, Text, Image, Pressable, StyleSheet } from "react-native"
import React, { memo, useState } from "react"

import { toDoList } from "@data/data"
import { cardStyle } from "./card.style"
import { style } from "@/ui/ThemeConfig"


export default memo(function ToDoCard() {
    const currentItem = toDoList[0]

    const [isOpen, setIsOpen] = useState(false)

    const { base, icon, text, composeText } = style()

    const titleStyle = StyleSheet.flatten([
        icon.lightGray,
        base,
        text.md,
        text.strong
    ])

    const toggleCard = () => setIsOpen(state => !state) // usa callback para atualizar estado corretamente

    return (
        <View style={cardStyle().composeCard(!isOpen ? 'close' : 'open').card}>
            <View style={cardStyle().card.headerInfos}>
                <Text
                    numberOfLines={1}
                    style={composeText("priority", currentItem.priority)}
                >
                    {currentItem.priority.toUpperCase()}
                </Text>
                <Text
                    numberOfLines={1}
                    style={composeText("status", currentItem.status)}
                >
                    {currentItem.status.toUpperCase()}
                </Text>
            </View>
            <View style={cardStyle().card.headerContainer}>
                <Text
                    numberOfLines={1}
                    style={titleStyle}
                >
                    {currentItem.title}
                </Text>
            </View>
            <View style={{ justifyContent: "center" }}>
                <Pressable
                    onPress={toggleCard}
                    hitSlop={10}
                    accessibilityLabel={!isOpen ? "Open card" : "Close card"}
                >
                    <Image
                        source={!isOpen
                            ? require("@icons/double-arrow-down.svg")
                            : require("@icons/alpha-x.svg")}
                        style={[icon.md, icon.lightGray]}
                        accessibilityLabel={!isOpen ? "double arrow down" : "X"}
                    />
                </Pressable>
            </View>
        </View>
    )
})