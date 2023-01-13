// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";
import Book from "../components/Book";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image } from "react-native";
import { Icon } from "@rneui/themed";

import { recommendedBooks, recommendedAuthors } from "../data/data";

// Importing images
import darkSide from '../../assets/book.jpg'

const abstract = "Before Alexandria Marzano-Lesnevich begins a summer job at a law firm in Louisiana, working to help defend men accused of murder, she thinks her position is clear. The child of two lawyers, she is staunchly anti-death penalty. But the moment convicted murderer Ricky Langley’s face flashes on the screen as she reviews old tapes―the moment she hears him speak of his crimes―she is overcome with the feeling of wanting him to die. Shocked by her reaction, she digs deeper and deeper into the case. Despite their vastly different circumstances, something in his story is unsettlingly, uncannily..."

const Recommended = ({navigation}) => {

    return (
        <>
            <SafeAreaView style={styles.page}>
                <View style={styles.body}>
                    <ScrollView>
                        <Text style={styles.title}>
                            Recommended
                        </Text>
                        <View
                            style={{
                                alignSelf: "center",
                                borderBottomWidth: 0.5,
                                width: "70%",
                                marginBottom: 10
                            }}
                        />
                        <Text style={styles.description}>
                            Based on your reading habits, you will probably enjoy these books:
                        </Text>
                        <View style={{height: 315, marginBottom: 20}}>
                            <ScrollView style={styles.book_container} horizontal>
                                {
                                    recommendedBooks.map((book, i) => {
                                        return (
                                            <Book 
                                                key={i+'_new_books'}
                                                navigation={navigation} 
                                                title={book.title} 
                                                author={book.author} 
                                                cover={book.cover} 
                                                genre={book.genre} 
                                                abstract={book.abstract}
                                            />
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>

                        <Text style={styles.description}>
                            You might like the following authors:
                        </Text>
                        <View style={{height: 315, marginBottom: 20}}>
                            <ScrollView style={styles.book_container} horizontal>
                                {
                                    recommendedAuthors.map((book, i) => {
                                        return (
                                            <Book 
                                                key={i+'_new_books'}
                                                navigation={navigation} 
                                                title={book.title} 
                                                author={book.author} 
                                                cover={book.cover} 
                                                genre={book.genre} 
                                                abstract={book.abstract}
                                            />
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </ScrollView>
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
        backgroundColor: '#ffffff',
        display: "flex",
    },
    title: {
        alignSelf:"center",
        fontSize: 50,
        marginVertical: 60,
        color: "indigo"
    },
    description: {
        margin: 10,
        fontSize: 20
    },
    book_container: {
        marginTop: 15,
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 300,
        backgroundColor: "#E8E8E8",
        display: "flex",
    }
})

export default Recommended;