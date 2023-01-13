// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image, Button, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const AccountCrime = ({navigation, route}) => {

    return (
        <>
            <SafeAreaView style={styles.page}>
                <View style={styles.body}>
                    <Icon
                        name="account-circle"
                        type='materialcommunityicons'
                        iconStyle={styles.profile_icon}
                    />
                    <Text style={styles.name}>
                        Nicholas Masini
                    </Text>
                    <View style={styles.line}/>
                    <View style={styles.details}>
                        <View style={styles.detail_container_1}>
                            <Text style={{marginBottom: 12, color: "white"}}>nicholasmasini1998@gmail.com</Text>
                            <Text style={{paddingTop: 8, color: "white"}}>********</Text>
                        </View>
                        <View style={styles.detail_container_2}>
                            <View style={styles.button}>
                                <Text style={{fontSize: 10}}>Change email</Text>
                            </View>
                            <View style={styles.button}>
                                <Text style={{fontSize: 10}}>Change password</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.logout_text}>Log out</Text>
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
        padding: 12,
        paddingVertical: 50,
        backgroundColor: 'black',
        display: "flex",
        alignItems: "center",
    },
    profile_icon: {
        fontSize: 80
    },
    name: {
        fontSize: 28,
        marginTop: 8,
        color: "red"
    },
    details: {
        marginTop: 30,
        width: "100%",
        height: 300,
        display: "flex",
        flexDirection:"row"
    },
    detail_container_1: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    detail_container_2: {
        flex: 1.4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: "#959CD6",
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    logout: {
        width: 200,
        height: 50,
        backgroundColor: "#DD5353",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    logout_text: {
        color: "white",
        fontSize: 18
    },
    line: {
        width: "85%",
        borderWidth: 0.4,
        borderColor: "darkgray",
        marginTop: 16,
    }
})  

export default AccountCrime;