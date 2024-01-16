
import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './src/screens/splashscreen/Splashscreen';
import Carousel from './src/screens/home/Carousel';
import Home from './src/screens/home/Home';
import SelectProfile from './src/screens/profile/SelectProfile';
import Search from './src/screens/movie/SearchMovie';
import DetailMovie from './src/screens/movie/DetailMovie';
import Profile from './src/screens/profile/Profile';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

const Stack = createNativeStackNavigator();

export default function Appjs() {

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
                <NavigationContainer>
                    <View style={styles.container}>
                        <Stack.Navigator>
                            <Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }} />
                            <Stack.Screen name="Carousel" component={Carousel} options={{ headerShown: false }} />
                            <Stack.Screen name="SelectProfile" component={SelectProfile} options={{ headerShown: false }} />
                            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                            <Stack.Screen name="DetailMovie" component={DetailMovie} options={{ headerShown: false }} />
                            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </View>
                </NavigationContainer>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
});
