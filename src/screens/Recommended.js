// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";
import Book from "../components/Book";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image } from "react-native";
import { Icon } from "@rneui/themed";

// Importing images
import darkSide from '../../assets/book.jpg'

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
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                            </ScrollView>
                        </View>

                        <Text style={styles.description}>
                            You might like the following authors:
                        </Text>
                        <View style={{height: 315, marginBottom: 20}}>
                            <ScrollView style={styles.book_container} horizontal>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
                                <Book navigation={navigation} title={'The Dark Side of Winter'} author={'Morgan Maxwell'} cover={darkSide} genre={'Crime'}/>
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