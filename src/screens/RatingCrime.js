// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image, Button, TouchableOpacity } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

const RatingScreenCrime = ({navigation, route}) => {

    const { title } = route.params

    return (
        <>
            <SafeAreaView style={styles.page}>
                <View style={styles.body}>
                    <Text style={styles.rating_text}>After reading {title}, how much do you rate it?</Text>
                    <View style={{marginVertical: 30}}>
                        <AirbnbRating/>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeCrime')}>
                        <Text style={{fontSize: 20}}>Confirm</Text>
                    </TouchableOpacity>
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
        padding: 18,
        paddingVertical: 80,
        backgroundColor: 'black',
        display: "flex",
        alignItems: "center"
    },
    rating_text: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 16,
        color: "white"
    },
    button: {
        marginTop: 50,
        height: 60,
        backgroundColor: "lightgreen",
        borderRadius: 30,
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.4
    }
})  

export default RatingScreenCrime;
