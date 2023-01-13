// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image, Button, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import BookPage from "./BookPage";

const StatisticsCrime = ({navigation, route}) => {

    return (
        <>
            <SafeAreaView style={styles.page}>
                <View style={styles.body}>
                    <Text style={styles.title}>
                        Statistics
                    </Text>
                    <View style={styles.statistics_body}>
                        <View style={styles.column_1}>
                            <View style={styles.statistics_container}>
                                <View style={styles.sub_container_1}>
                                    <Text style={styles.text_1}>
                                        Favorite Genre
                                    </Text>
                                </View>
                                <View style={styles.sub_container_2}>
                                    <Text style={styles.text_2}>
                                        Crime
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.statistics_container}>
                                <View style={styles.sub_container_1}>
                                    <Text style={styles.text_1}>
                                        Total Books Rated
                                    </Text>
                                </View>
                                <View style={styles.sub_container_2}>
                                    <Text style={styles.text_2}>
                                        14
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.statistics_container}>
                                <View style={styles.sub_container_1}>
                                    <Text style={styles.text_1}>
                                        Favorite Author
                                    </Text>
                                </View>
                                <View style={styles.sub_container_2}>
                                    <Text style={styles.text_2_author}>
                                        Stephen King
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.column_2}>
                            <View style={styles.line}/>
                        </View>
                    </View>
                </View>
                <Footer navigation={navigation} isCrime/>
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
        backgroundColor: 'black',
    },
    title: {
        fontSize: 46,
        textAlign: "right",
        marginRight: 34,
        marginBottom: 40,
        letterSpacing: 3,
        color: "red"
    },
    statistics_body: {
        display: "flex",
        flexDirection: "row"
    },
    column_1: {
        flex: 1,
        paddingLeft: 20,
    },
    column_2: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    statistics_container: {
        marginVertical: 25,
        marginHorizontal: 20,
        height: 100,
        width: 200,
        backgroundColor: "#959CD6",
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        display: "flex",
        flexDirection: "column"
    },
    sub_container_1: {
        flex: 1,
        display: "flex",
        borderBottomWidth: 0.6,
        borderColor: "gray"
    },
    sub_container_2: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    text_1: {
        fontSize: 18,
        marginLeft: 12,
        marginTop: 10
    },
    text_2 : {
        fontSize: 36,
        fontWeight: "bold",
        marginRight: 12,
        marginBottom: 4,
        color: "white"
    },
    text_2_author : {
        fontSize: 24,
        fontWeight: "bold",
        marginRight: 12,
        marginBottom: 9,
        color: "white"
    },
    line: {
        borderWidth: 0.6,
        borderColor: "red",
        height: 500,
        marginLeft: 60,
        width: 0
    }
})  

export default StatisticsCrime;