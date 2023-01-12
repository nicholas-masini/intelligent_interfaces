import React from "react";

import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image } from "react-native";

const image = require('../../assets/book.jpg') 

const Book = ({navigation, isCrime}) => {
    return (
        <View style={styles.book}>
            <View style={styles.book_cover}>
                <Image 
                    source={image}
                    style={styles.image}
                />
            </View>
            <View style={styles.text_container}>
                <Text style={[styles.book_title, (isCrime ? styles.white : null)]}>The Dark Side of Winter</Text>
                <Text style={[styles.book_author, (isCrime ? styles.white : null)]}>Morgan Maxwell</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    book: {
        height: "100%",
        width: 125,
        marginRight: 25,
        borderWidth: 0,
        display: "flex",
        flexDirection: "column",
    },
    book_cover: {
        margin: 2,
        borderWidth: 0,
        height: 200
    },
    image: {
        width: "100%",
        height: "100%"
    },
    text_container: {
        margin: 2
    },
    book_title: {
        textAlign: "center", 
        fontWeight: "bold"
    },
    book_author: {
        textAlign: "center", 
        fontSize: 10, 
        opacity: 0.5
    },
    white: {
        color: "white"
    }
})

export default Book;