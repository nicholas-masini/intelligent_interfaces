// Here I am importing the 'Footer' component which can be found in src/components
// The returned HTML from these components is rendered at the place of the components in the current 'Home' component
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Book from "../components/Book";

// Necessary imports from React Native
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { Icon } from "@rneui/themed";

import { homePageData, homePageNewBooks } from "../data/data";

import axios from "axios";

let book_data = []
let book_data_first_half = []
let book_data_second_half = []

const Home = ({navigation}) => {

    const [books, setBooks] = useState("");
    const [search, setSearch] = useState(false);
    const [loading, setLoading] = useState(false);

    const searchBooksGoogleAPI = () => {
        setSearch(false);
        setLoading(true);
        setSearch(true);
        let query_term = books.replaceAll(" ", "+");
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+query_term+'&printType=books&key=AIzaSyCtfF4iFWRe_QgLtfb-od0-va01b1izA3Y')
            .then((response) => {
                book_data = []
                book_data_first_half = []
                book_data_second_half = []
                const books = response["data"]["items"]
                books.forEach(book => {
                    let volumeInfo = book["volumeInfo"];
                    book_data.push({
                        title: (volumeInfo["title"] != undefined) ? volumeInfo["title"] : null,
                        author: (volumeInfo["authors"] != undefined) ? volumeInfo["authors"][0] : null,
                        abstract: (volumeInfo["description"] != undefined) ? volumeInfo["description"] : null,
                        genre: (volumeInfo["categories"] != undefined) ? volumeInfo["categories"][0] : null,
                        cover: (volumeInfo["imageLinks"] != undefined) ? volumeInfo["imageLinks"]["smallThumbnail"] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQutPpPRlxuO5ngkxE8YGvcWLUjE5wyNYvCA&usqp=CAU"
                    })
                });
                let half_length = Math.ceil(book_data.length / 2);
                book_data_first_half = book_data.slice(0, half_length);
                book_data_second_half = book_data.slice(half_length, book_data.length);
                setSearch(true);
                setLoading(false);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        if(books.length == 0) setSearch(false);
    }, [books])

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
                                    onPress={searchBooksGoogleAPI}
                                />
                            </View>
                        </View>
                        {
                            (!search)
                            ?
                            (
                                <>
                                    <Text style={styles.welcomeBack}>
                                        Welcome back, Nicholas
                                    </Text>
                                    <Text style={styles.headers}>
                                        New Books
                                    </Text>
                                    <View style={{height: 290, marginBottom: 30}}>
                                        <ScrollView style={styles.books_container} horizontal>
                                            {
                                                homePageNewBooks.map((book, i) => {
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
                                    <Text style={styles.headers}>
                                        Recommended for you
                                    </Text>
                                    <View style={{height: 290, marginBottom: 30}}>
                                        <ScrollView style={styles.books_container} horizontal>
                                            {
                                                homePageData.map((book, i) => {
                                                    return (
                                                        <Book 
                                                            key={i+'home_page_data'}
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
                                </>
                            )
                            :
                            (loading)
                            ?
                            (
                                <View style={styles.loading_container}>
                                    <ActivityIndicator size="large"/>
                                </View>
                            )
                            :
                            (
                                <>
                                    <View style={styles.search_books_container}>
                                        <View style={styles.search_books_column}>
                                            {
                                                book_data_first_half.map((book, i) => {
                                                    return (
                                                        <View style={styles.book_wrapper} key={i}>
                                                            <Book
                                                                key={i + '_book'}
                                                                navigation={navigation} 
                                                                title={book.title} 
                                                                author={book.author} 
                                                                cover={book.cover} 
                                                                genre={book.genre} 
                                                                abstract={book.abstract}
                                                            />
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                        <View style={styles.search_books_column}>
                                            {
                                                book_data_second_half.map((book, i) => {
                                                    return (
                                                        <View style={styles.book_wrapper} key={i+'_second'}>
                                                            <Book
                                                                key={i + '_book_second'}
                                                                navigation={navigation} 
                                                                title={book.title} 
                                                                author={book.author} 
                                                                cover={book.cover} 
                                                                genre={book.genre} 
                                                                abstract={book.abstract}
                                                            />
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    </View>
                                </>
                            )
                        }
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
    search_books_container: {
        marginTop: 30,
        marginLeft: 25,
        display: "flex",
        flexDirection: "row"
    },
    search_books_column: {
        flex: 1,
        alignItems: "center",
        display: "flex", 
        flexDirection: "column"
    },
    book_wrapper: {
        height: 280
    },
    loading_container: {
        width: "100%",
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

// This line of code specifies that by default, the 'Home' component is exported, meaning that when importing from this file, the 'Home' component/variable 
// is automatically imported into the file. Check the file 'src/screens/Home.js' or 'App.js'  to understand better
export default Home;