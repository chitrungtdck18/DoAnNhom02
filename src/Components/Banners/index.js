import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "./styles";


export default function Banner(props) {
    const { item } = props

    return (
        <ImageBackground
            source={{ uri: item.photo }}
            imageStyle={styles.image} style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                {/* <Text style={styles.description}>
                        {item.description}
                    </Text> */}

            </View>

        </ImageBackground>
    )
}
