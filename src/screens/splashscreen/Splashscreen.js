import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const logoNetflix = require('../../assets/netflix-logo.jpg');
const Splashscreen = ({ navigation }) => {
    useEffect(() => {
        const delay = 3000;
        const timeoutId = setTimeout(() => {
            getToken();
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);

    async function getToken() {
        try {
            const result = await AsyncStorage.getItem("dataUser"); // Retrieve data using await
            if (result === null) {
                navigation.replace('Login');
            } else {
                navigation.replace('Home');
            }
        } catch (error) {
            Alert.alert('Error', error.message);
            console.log("ERROR MESSAGE " + error);
        }

    }
    return (
        <View style={styles.container}>
            <Image source={logoNetflix} style={{ width: 300, height: 100 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default Splashscreen