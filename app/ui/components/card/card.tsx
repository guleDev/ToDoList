import { View, Text, Image, Pressable } from "react-native"
import React, { memo, useState } from "react"

import { toDoList } from "@data/data"
import { cardStyle } from "./card.style"
import { style } from "@/ui/ThemeConfig"

export default memo(function ToDoCard() {
    const currentItem = toDoList[0]

    const [isOpen, setIsOpen] = useState(true)

    const { icon, composeTitle, statusColor, priorityColor } = style()
    const { card, composeCard } = cardStyle()

    const toggleCard = () => setIsOpen(state => !state) // usa callback para atualizar estado corretamente

    return (
        <View style={composeCard(!isOpen ? 'close' : 'open').card}>{/* Card View */}
            <View style={card.header}>{/* Header View */}
                <View style={card.headerInfos}>{/* Header Infos View */}
                    <View style={card.headerStatusPriority}>{/* Header Priority & Status View */}
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="clip"
                            style={[priorityColor[currentItem.priority], { fontWeight: 'bold' }]}
                        >
                            {currentItem.priority.toUpperCase()}{/* Priority Text */}
                        </Text>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="clip"
                            style={[statusColor[currentItem.status], { fontWeight: 'bold' }]}
                        >
                            {currentItem.status.toUpperCase()}{/* Status Text */}
                        </Text>
                    </View>
                    <View style={card.headerTitle}>{/* To Do Title View */}
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="clip"
                            style={composeTitle}
                        >
                            {currentItem.title}{/* To Do Title Text */}
                        </Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center" }}>{/* Center Button View */}
                    <Pressable
                        onPress={toggleCard}
                        hitSlop={10}
                        accessibilityLabel={!isOpen ? "Open card" : "Close card"}
                    >{/* Button */}
                        <Image
                            source={!isOpen
                                ? require("@icons/arrow-down-circle.png")
                                : require("@icons/close-circle.png")}
                            style={icon.md}
                            tintColor={icon.lightGray.tintColor}
                        />{/* Button Image */}
                    </Pressable>
                </View>
            </View>
        </View>
    )
})