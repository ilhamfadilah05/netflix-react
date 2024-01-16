
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { API_URL } from "@env"

const userLogo = require('../../assets/user-logo.png');
const netflixLogo = require('../../assets/netflix-logo.jpg');
const searchLogo = require('../../assets/search.png');

const Home = ({ navigation }) => {
    const [dataAllMovies, setDataAllMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        getAllMovies();
    }, [])

    async function getAllMovies() {
        const apiUrl = "https://3a49-223-255-229-76.ngrok-free.app"

        try {
            const response = await fetch(apiUrl + '/movies', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.ok) {
                if (data.data) {
                    console.log("data", data.data);
                    setDataAllMovies(data.data);
                    setLoading(false);
                } else {
                    console.error("Data is missing in the response");
                }
            } else {
                getAllMovies()
            }
        } catch (error) {
            getAllMovies()
        }
        finally {
            setLoading(false)
        }
    }


    const renderPopularMovies = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
                navigation.navigate('DetailMovie', {
                    videoUrl: item.video,
                    nameMovie: item.name,
                    ratingMovie: item.rating,
                    yearMovie: item.years,
                    descMovie: item.description,
                    dataAllMovies: dataAllMovies
                });
            }}>
                <Image source={{ uri: item.image }} referrerpolicy="no-referrer" style={{ width: 150, height: 220, borderRadius: 10 }} />
            </TouchableOpacity>
        );
    };

    const renderAllMovies = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ marginRight: 15, marginBottom: 15 }} onPress={() => {
                navigation.navigate('DetailMovie', {
                    videoUrl: item.video,
                    nameMovie: item.name,
                    ratingMovie: item.rating,
                    yearMovie: item.years,
                    descMovie: item.description,
                    dataAllMovies: dataAllMovies
                });
            }}>
                <Image source={{ uri: item.image }} referrerpolicy="no-referrer" style={{ width: 125, height: 180, borderRadius: 10 }} />
            </TouchableOpacity>
        );
    };

    const { width } = Dimensions.get('window');
    const renderCarousel = ({ item, index }) => {
        return (
            <TouchableOpacity style={{}} onPress={() => {
                navigation.navigate('DetailMovie', {
                    videoUrl: item.video,
                    nameMovie: item.name,
                    ratingMovie: item.rating,
                    yearMovie: item.years,
                    descMovie: item.description,
                    dataAllMovies: dataAllMovies
                });
            }}>
                <Image source={{ uri: item.image }} referrerpolicy="no-referrer" style={{ width: width - 40, height: 150, borderRadius: 10, resizeMode: 'contain' }} />
            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            {loading ? (
                <ActivityIndicator size="large" color="white" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} /> // Display loading indicator
            ) : <FlatList
                data={dataAllMovies}
                keyExtractor={(item, index) => `item-name-${index}`}
                ListHeaderComponent={() => (
                    <View style={{ padding: 20 }}>
                        <View style={styles.header}>
                            <View />
                            <Image source={netflixLogo} style={{ width: 150, height: 30 }} />
                            <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}><Image source={userLogo} style={{ width: 30, height: 30 }} /></TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
                            <View style={styles.search}>
                                <TextInput placeholder="" style={{ color: 'white' }} />
                                <Image source={searchLogo} style={{ tintColor: 'white', width: 30, height: 30 }} />
                            </View>
                        </TouchableOpacity>
                        <FlatList style={{ marginTop: 10, marginBottom: 10 }}
                            data={dataAllMovies}
                            renderItem={renderCarousel}
                            keyExtractor={(item, index) => `item-name-${index}`}
                            horizontal={true}
                            pagingEnabled
                        />
                        <Text style={{ color: 'white', fontSize: 30, marginBottom: 20 }}>Popular Movies</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <FlatList
                                data={dataAllMovies}
                                renderItem={renderPopularMovies}
                                keyExtractor={(item, index) => `item-name-${index}`}
                                horizontal={true}
                            />
                        </View>
                        <Text style={{ color: 'white', fontSize: 30, marginBottom: 20 }}>All Movies</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <FlatList
                                data={dataAllMovies}
                                renderItem={renderAllMovies}
                                keyExtractor={(item, index) => `item-name-${index}`}
                                numColumns={3}
                            />
                        </View>
                    </View>
                )}
            />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    search: {
        backgroundColor: '#0C1B2A',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
        marginBottom: 20,
    },
});

export default Home;
