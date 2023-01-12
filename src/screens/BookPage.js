// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image, Button, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const BookPage = ({navigation, route}) => {

    const {title, author, cover, genre} = route.params

    return (
        <>
            <SafeAreaView style={styles.page}>
                <View style={styles.body}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.author}>
                        by {author}
                    </Text>
                    <Text style={styles.genre}>
                        {genre}
                    </Text>
                    <View style={styles.book_cover}>
                        <Image
                            source={cover}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.buttons_container}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.button_text}>Abstract</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => navigation.navigate('Rating', {title: title})}
                        >
                            <Text style={styles.button_text}>Mark as Read</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.button_text}>Abstract</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
                <Footer navigation={navigation}/>
            </SafeAreaView>
        </>
    )
}

// Styles for home page
const styles = StyleSheet.create({
    page: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#959CD6"
    },
    body: {
        flex: 12,
        padding: 12,
        paddingVertical: 50,
        backgroundColor: '#ffffff',
        display: "flex",
        alignItems: "center"
    },
    title: {
        fontSize: 30
    },
    author: {
        fontSize: 20,
        marginTop: 2,
        color: "gray"
    },
    genre: {
        marginTop: 4,
    },
    book_cover: {
        marginBottom: 30,
        marginTop: 20,
        height: 250,
        width: 150
    },
    image: {
        width: "100%",
        height: "100%"
    },
    buttons_container: {
        height: 180,
        padding: 10,
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    button: {
        width: "100%",
        backgroundColor: "#E8E8E8",
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    button_text: {
        fontSize: 18
    }
})  

export default BookPage;