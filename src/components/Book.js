import React from "react";

import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image, TouchableOpacity } from "react-native";

const Book = ({navigation, isCrime, title, author, cover, genre}) => {

    // const image = require(cover) 

    return (
        <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('Book', { title: title, author: author, cover: cover, genre: genre})}>
            <View style={styles.book_cover}>
                <Image 
                    source={cover}
                    style={styles.image}
                />
            </View>
            <View style={styles.text_container}>
                <Text style={[styles.book_title, (isCrime ? styles.white : null)]}>{title}</Text>
                <Text style={[styles.book_author, (isCrime ? styles.white : null)]}>{author}</Text>
            </View>
        </TouchableOpacity>
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