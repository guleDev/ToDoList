import { View, Text, Image, TouchableOpacity, ViewStyle } from "react-native"
import { useState } from "react"

import { toDoList } from "@data/data"
import { cardStyle } from "./card.style"
import { style } from "@/ui/ThemeConfig"


export default function ToDoCard() {
    const [isOpen, setIsOpen] = useState(false)
    const textStyle = style().text

    const toggleCard = (id: string) => setIsOpen(open => !open)

    return !isOpen ? (
        <View key={toDoList[0].id} style={cardStyle().compose("close").card}>
            <View style={cardStyle().card.closeContainer}>
                <Text style={[textStyle.base, textStyle.title]}>{toDoList[0].title}</Text>
                <Text style={textStyle.base}>{toDoList[0].priority}</Text>
                <Text style={textStyle.base}>{toDoList[0].status}</Text>
            </View>
                <TouchableOpacity>
                    <Image source={require("@icons/down-circle-outline.svg")} style={[style().icon.md, ]} alt="imagem" />
                </TouchableOpacity>
        </View>
    ) : (
        <View key={toDoList[0].id}>
            <Text>{toDoList[0].priority}</Text>
            <Text>{toDoList[0].title}</Text>
            <Text>{toDoList[0].status}</Text>
            <Text>{ }</Text>
        </View>
    )
}