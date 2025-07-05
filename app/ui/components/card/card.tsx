import { View, Text, Image, TouchableOpacity, Pressable } from "react-native"
import { useEffect, useState } from "react"

import { toDoList } from "@data/data"
import { cardStyle } from "./card.style"
import { style } from "@/ui/ThemeConfig"


export default function ToDoCard() {
    const [isOpen, setIsOpen] = useState(true)
    const textStyle = style().text
    const color = style().color
    const priorityText = cardStyle().composePriority(toDoList[0].priority)
    const statusText = cardStyle().composeStatus(toDoList[0].status)

    function toggleCard() {
        setIsOpen(isOpen => !isOpen)
    }

    const closeInfoPriority = [priorityText.close, textStyle.sm, textStyle.strong]
    const closeInfoStatus = [statusText.close, textStyle.sm, textStyle.strong]

    const openInfoPriority = [priorityText.open, textStyle.sm, textStyle.strong]
    const openInfoStatus = [statusText.open, textStyle.sm, textStyle.strong]

    const title = [color.lightGray, textStyle.base, textStyle.md, textStyle.strong]


    // return ( //close
    //     <View style={cardStyle().compose(isOpen ? 'open' : 'close').card}>
    //         <View style={cardStyle().card.closeContainer}>
    //             <Text numberOfLines={1} style={title}>{toDoList[0].title}</Text>
    //         </View>
    //         <View style={cardStyle().card.closeInfos}>
    //             <Text numberOfLines={1} style={closeInfoPriority}>{toDoList[0].priority}</Text>
    //             <Text numberOfLines={1} style={closeInfoStatus}>{toDoList[0].status}</Text>
    //         </View>
    //         <Text>{isOpen ? 'open' : 'closed'}</Text>
    //         <Pressable onPress={toggleCard} style={{ justifyContent: "center" }}>
    //             <Image source={require("@icons/double-down.svg")} style={[style().icon.md, color.lightGray]} alt="imagem" />
    //         </Pressable>
    //     </View>
    // )

    return (
        <>
            {!isOpen ?
                <View style={cardStyle().compose('close').card}>
                    <View style={cardStyle().card.closeContainer}>
                        <Text numberOfLines={1} style={title}>{toDoList[0].title}</Text>
                    </View>
                    <View style={cardStyle().card.closeInfos}>
                        <Text numberOfLines={1} style={closeInfoPriority}>{toDoList[0].priority.toUpperCase()}</Text>
                        <Text numberOfLines={1} style={closeInfoStatus}>{toDoList[0].status.toUpperCase()}</Text>
                    </View>
                    <Pressable onPress={toggleCard} style={{ justifyContent: "center" }}>
                        <Image source={require("@icons/double-down.svg")} style={[style().icon.md, color.lightGray]} alt="double down" />
                    </Pressable>
                </View>
                :
                <View style={cardStyle().compose('open').card}>
                    <View>
                        <View>
                            <View style={cardStyle().card.openInfos}>
                                <Text numberOfLines={1} style={openInfoPriority}>{toDoList[0].priority.toUpperCase()}</Text>
                                <Text numberOfLines={1} style={openInfoStatus}>{toDoList[0].status.toUpperCase()}</Text>
                            </View>
                            <View style={cardStyle().card.openContainer}>
                                <Text numberOfLines={1} style={title}>{toDoList[0].title}</Text>
                            </View>
                        </View>
                        <Pressable onPress={toggleCard} style={{ justifyContent: "center" }}>
                            <Image source={require("@icons/alpha-x.svg")} style={[style().icon.md, color.lightGray]} alt="alpha x" />
                        </Pressable>
                    </View>
                    <View>
                        <Text>{toDoList[0].description}</Text>
                        <View>
                            <Text>{
                                toDoList[0].updatedAt ?
                                    toDoList[0].updatedAt.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: "numeric" }) :
                                    toDoList[0].createdAt.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: "numeric" })
                            }</Text>
                        </View>
                    </View>
                </View>
            }
        </>
    )
}