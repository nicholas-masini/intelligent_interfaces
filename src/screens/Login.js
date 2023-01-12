// Necessary imports from React and React Native so that we can use the elements in our code
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";

const image = { uri: '../../assets/background.png'}

const Login = ({navigation}) => {

    // These are called states. A state basically re-renders the component each time its value changes.
    // What's important in our case is to set a state in the following syntax for every 'TextInput', where 
    // the value of each 'TextInput' matches a particular state variable.
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            {/* Here we are returning the code */}
            <View style={styles.page}>
                <Text style={styles.title}>SmartLibrary</Text>
                { /* 'TextInput' is used as an input field, as the name implies. 'onChangeText' is a function which changes the 
                    value of the variable specified by the 'value' property.  */}
                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    style={styles.input}
                    placeholder="Username"
                />
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                />
                {/* The TouchableOpacity element is exactly the same as the 'View' element except that it can allow an 'onPress' event,
                    which is a function that is executed once the element is tapped on.  */}
                <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.button_text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.signup]}>
                    <Text style={styles.button_text}>Signup</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

// Styles used for this screen
const styles = StyleSheet.create({
    page: {
        flex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: "50",
        color: "purple",
        marginBottom: 100
    },
    input: {
        height: 50,
        padding: 10,
        borderWidth: 0.3,
        margin: 10,
        width: "80%",
        borderRadius: 10,
        fontSize: 15
    },
    button: {
        height: 50,
        padding: 10,
        height: 50,
        marginTop: 30,
        width: "80%",
        borderRadius: 10,
        backgroundColor: "#959CD6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button_text: {
        color: "white",
        fontSize: 20,
        zIndex: 99
    },
    signup: {
        backgroundColor: "#B99095",
        marginTop: 10
    }
})

// This line of code specifies that by default, the 'Login' component is exported, meaning that when importing from this file, the 'Login' component/variable 
// is automatically imported into the file. Check the file 'src/screens/Home.js' or 'App.js'  to understand better
export default Login;