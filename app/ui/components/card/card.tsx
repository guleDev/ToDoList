import { View, Text, Image, TouchableOpacity, Pressable } from "react-native"
import { useState } from "react"

import { toDoList } from "@data/data"
import { cardStyle } from "./card.style"
import { style } from "@/ui/ThemeConfig"


export default function ToDoCard() {
    const [isOpen, setIsOpen] = useState(false)
    const textStyle = style().text
    const color = style().color
    const priorityText = cardStyle().composePriority(toDoList[0].priority)
    const statusText = cardStyle().composeStatus(toDoList[0].status)

    const toggleCard = (id: string) => setIsOpen(open => !open)

    return (
        <View key={toDoList[0].id} style={cardStyle().compose("close").card}>
            <View style={cardStyle().card.closeContainer}>
                <Text numberOfLines={1} style={[color.lightGray, textStyle.base, textStyle.title]}>{toDoList[0].title}</Text>
            </View>
            <View style={cardStyle().card.closeInfos}>
                <Text numberOfLines={1} style={priorityText.priorityText}>{toDoList[0].priority}</Text>
                <Text numberOfLines={1} style={statusText.statusText}>{toDoList[0].status}</Text>
            </View>
            <Text>{isOpen ? 'open' : 'closed'}</Text>
            <Pressable onPress={() => setIsOpen(open => !open)} >
                <Image source={require("@icons/down-circle-outline.svg")} style={[style().icon.md, color.lightGray]} alt="imagem" />
            </Pressable>
        </View>
    )

    // return !isOpen ? (
    //     <View key={toDoList[0].id} style={cardStyle().compose("close").card}>
    //         <View style={cardStyle().card.closeContainer}>
    //             <Text numberOfLines={1} style={[color.lightGray, textStyle.base, textStyle.title]}>{toDoList[0].title}</Text>
    //         </View>
    //         <View style={cardStyle().card.closeInfos}>
    //             <Text numberOfLines={1} style={priorityText.priorityText}>{toDoList[0].priority}</Text>
    //             <Text numberOfLines={1} style={statusText.statusText}>{toDoList[0].status}</Text>
    //         </View>
    //         <Text>{isOpen ? 'open' : 'closed'}</Text>
    //         <Pressable onPress={() => setIsOpen(open => !open)} >
    //             <Image source={require("@icons/down-circle-outline.svg")} style={[style().icon.md, color.lightGray]} alt="imagem" />
    //         </Pressable>
    //     </View>
    // ) : (
    //     <View key={toDoList[0].id}>
    //         <Text>{toDoList[0].priority}</Text>
    //         <Text>{toDoList[0].title}</Text>
    //         <Text>{toDoList[0].status}</Text>
    //         <Text>{ }</Text>
    //     </View>
    // )
}