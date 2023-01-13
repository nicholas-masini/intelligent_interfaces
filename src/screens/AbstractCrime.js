// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image, Button, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const AbstractCrime = ({navigation, route}) => {

    const { title, abstract } = route.params

    return (
        <>
            <SafeAreaView style={styles.page}>
                <View style={styles.body}>
                    <ScrollView>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text style={styles.subtitle}>
                            Abstract
                        </Text>
                        <Text style={styles.abstract}>
                            {abstract}
                        </Text>
                    </ScrollView>
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
        paddingVertical: 50,
        backgroundColor: 'black',
        display: "flex",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        alignSelf: "center",
        textAlign: "center",
        padding: 4,
        color: "white"
    },
    subtitle: {
        fontSize: 28,
        marginTop: 12,
        color: "gray",
        alignSelf: "center"
    },
    abstract: {
        fontSize: 16,
        padding: 16,
        textAlign: "justify",
        marginTop: 12,
        color: "white"
    },
    content_container: {
        display: "flex",
        alignItems: "center"
    }
})

export default AbstractCrime;