// Here I am importing the necessary elements from the React Native library
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// Here I am also importing the Icon component from the NPM package '@renui/themed'
import { Icon } from '@rneui/themed'

// Below I am defining the Footer component, it is taking 'navigation' as a parameter, which can be used to change screens programmatically
const Footer = ({navigation}) => {
    // Like every other React Native component, below I am returning the elements, 
    // written similar to HTML, that the Footer component renders when it is imported into another file
    return (
        <View style={styles.footer}>
          <View style={styles.footer_element}>
            <Icon
              name='book'
              type='entypo'
              style={{marginBottom: 6}}
              onPress={() => navigation.navigate('Recommended')}
            />
            <Text>Recommendations</Text>
          </View>
          <View style={styles.footer_element}>
            <Icon
              name='barschart'
              type='antdesign'
              style={{marginBottom: 6}}
            />
            <Text>Statistics</Text>
          </View>
          <View style={styles.footer_element}>
            <Icon
              name='account-circle'
              type='materialcommunityicons'
              style={{marginBottom: 6}}
              onPress={() => navigation.navigate('HomeCrime')}
            />
            <Text>Account</Text>
          </View>
        </View>
    )
}

// These are the styles used for the Footer component
const styles = StyleSheet.create({
    footer: {
        flex: 0.8,
        backgroundColor: "#959CD6",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 12
    },
    footer_element: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})

// This line of code specifies that by default, the 'Footer' component is exported, meaning that when importing from this file, the 'Footer' component/variable 
// is automatically imported into the file. Check the file 'src/screens/Home.js' or 'App.js'  to understand better
export default Footer;