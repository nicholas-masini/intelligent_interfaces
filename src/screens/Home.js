// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useState } from "react";
import Footer from "../components/Footer";
import Book from "../components/Book";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image } from "react-native";
import { Icon } from "@rneui/themed";

const image = require('../../assets/book.jpg') 

const Home = ({navigation}) => {
    
    // This is called a state. A state basically re-renders the component each time its value changes.
    // What's important in our case is to set a state in the following syntax for every 'TextInput', where 
    // the value of each 'TextInput' matches a particular state variable.
    const [books, setBooks] = useState("");

    return (
        // NOTE: You can only return a single element from a return statement otherwise you get a compiler error, but you can have as many child elements as you want.
        // That is why here I am using what's known as a fragment (<>...</>), which is similar to an empty div.
        <>
            { /* The purpose of 'SafeAreaView' is to render content within the safe boundaries of a device i.e. modern iPhones such as iPhone 13 etc. */}
            <SafeAreaView style={styles.page}>
                {/* Here is the body of the Home page */}
                <View style={styles.body}>
                    <ScrollView style={{padding: 14}}>
                        <View style={styles.searchBar}>
                            { /* 'TextInput' is used as an input field, as the name implies. 'onChangeText' is a function which changes the 
                                value of the variable specified by the 'value' property.  */}
                            <TextInput
                                style={styles.input}
                                placeholder="Search books..."
                                onChangeText={setBooks}
                                value={books}
                            />
                            <View style={styles.searchIcon}>
                                <Icon
                                    name='search1'
                                    type='antdesign'
                                />
                            </View>
                        </View>
                        <Text style={styles.welcomeBack}>
                            Welcome back, Nicholas
                        </Text>
                        <Text style={styles.headers}>
                            New Crime Books
                        </Text>
                        <View style={{height: 290, marginBottom: 30}}>
                            <ScrollView style={styles.books_container} horizontal>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                            </ScrollView>
                        </View>
                        <Text style={styles.headers}>
                            Recommended for you
                        </Text>
                        <View style={{height: 290, marginBottom: 30}}>
                            <ScrollView style={styles.books_container} horizontal>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                                <Book/>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
                {/* Rendering Footer code */}
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
    searchBar: {
        width: "90%",
        borderWidth: 0.6,
        alignSelf: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        height: 40
    },
    input: {
        flex: 5,
        padding: 10,
        height: "100%"
    },
    searchIcon: {
        flex: 1,
        alignSelf: "center"
    },
    welcomeBack: {
        fontSize: 28,
        padding: 12,
        marginBottom: 50,
        alignSelf: "center"
    },
    headers: {
        fontSize: 22,
        marginBottom: 10,
    },
    books_container: {
        borderLeftWidth: 1,
        marginLeft: 18,
        paddingVertical: 20,
        paddingLeft: 15,
    },
})

// This line of code specifies that by default, the 'Home' component is exported, meaning that when importing from this file, the 'Home' component/variable 
// is automatically imported into the file. Check the file 'src/screens/Home.js' or 'App.js'  to understand better
export default Home;