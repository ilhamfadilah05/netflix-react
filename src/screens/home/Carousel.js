import { Dimensions, StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';


const CarouselScreen = ({ navigation }) => {
    const { width } = Dimensions.get('window');
    const data = [
        {
            "id": "1f28370e-8ae4-11ee-9d49-c673c12ef0bd",
            "name": "Wira",
            "image": "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBYNqBGem8jEWyhQG3qD0rEwzATWl9trB5VB40c-neX6KZV5acIOY2l2AvUnAWK2Zforw9qqKQtgCslhhJEGqVVk-YshQ=s1600",
            "video": "https://gdurl.com/Jy51",
            "rating": "9.5",
            "years": "2019",
            "description": "Wira is a 2019 Malaysian Malay-language action thriller film directed by Adrian Teh. The plot revolves around an ex-military man returning home after a long absence to help his family out of a situation with a local thug named Raja.[1][2]"
        },
        {
            "id": "38684312-8ae4-11ee-9d49-c673c12ef0bd",
            "name": "Comic 8",
            "image": "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCKivnn6qO0JFHnZcz6yq1pL_Ahp5Vyhy5eMTE9WyAlbO-lovWdmOYdLqH1M6AzsxZwajkKmbf6LOwR1xlW2XvE2bkRyw=s2560",
            "video": "https://gdurl.com/Dp_k",
            "rating": "5.8",
            "years": "2020",
            "description": "Comic 8 adalah film aksi-komedi Indonesia yang disutradarai oleh Anggy Umbara dan diproduseri oleh Hb Naveen dan Frederica. Film ini rilis pada tanggal 29 Januari 2014."
        },
        {
            "id": "9a99bc9c-8ae3-11ee-9d49-c673c12ef0bd",
            "name": "Moana",
            "image": "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDpsDWNAWsrs04S2kG8WuH8zVuXIR_etX4po35EGM4qxRvD3sU2Ez_DNnyF7J4d_nTovnr_PH5Z-ovzThWAVo_qGAGB=s1600",
            "video": "https://gdurl.com/2w8c",
            "rating": "7.8",
            "years": "2017",
            "description": "Moana (also known as Vaiana[4] or Oceania[5] in some markets) is a 2016 American animated musical fantasy action-adventure film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The film was directed by John Musker and Ron Clements, co-directed by Chris Williams and Don Hall, and produced by Osnat Shurer, from a screenplay written by Jared Bush and a story by Clements, Musker, Williams, Hall, Pamela Ribon, and the writing team of Aaron and Jordan Kandell."
        },
        {
            "id": "bc56d40a-8ae3-11ee-9d49-c673c12ef0bd",
            "name": "Avengers",
            "image": "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCndt62uh58CTS-MyDIDF2rx62WApVm13FSXehts-pGDdfhKMKwrDABQliVfh2pm9f9WyGVAFNdz9eZwm86WRigxH8CQA=s1600",
            "video": "https://gdurl.com/TdnF",
            "rating": "6.4",
            "years": "2015",
            "description": "Marvel's The Avengers[5] (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),[1][6] or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[a] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth."
        },
        {
            "id": "cab29956-8a13-11ee-8362-c673c12ef0bd",
            "name": "Ejen Ali Movie",
            "image": "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDEO7H4hiRegs-83p2tr7lz2OJznX1HxXzrmD1AL1wom1Qb92E7hxyKXue6nKh7BC5zUV9XB-1R1SzVSxVW7RqGyzmYTw=s1600",
            "video": "https://gdurl.com/tNV6",
            "rating": "8.9",
            "years": "2019",
            "description": "After being accidentally recruited as a spy, 12-year-old Ejen Ali has now grown to embrace his role in secret agency Meta Advance Tactical Agency (MATA) to protect the futuristic city of Cyberaya from outside threats. Ali is surprised to discover that he is no longer the only master of the Infinity Retinal Intelligence System (IRIS) gadget, since MATA has now upgraded to IRIS Neo for all MATA agents. When the new invention leads Ali to question his place and usefulness to MATA, he is approached by a rogue figure who claims to know about a surprising personal connection to Ali. Risking his loyalty to MATA, Ejen Ali embarks on a thrilling chase to unravel these mysterious links."
        }
    ];

    const renderForYou = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => {
                navigation.navigate('DetailMovie', {
                    videoUrl: item.video,
                    nameMovie: item.name,
                    ratingMovie: item.rating,
                    yearMovie: item.years,
                    descMovie: item.description,
                    dataAllMovies: data
                });
            }}>
                <Image source={{ uri: item.image }} style={{ width: width - 20, height: 150, borderRadius: 10, resizeMode: 'contain' }} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList style={{ marginTop: 20 }}
                data={data}
                renderItem={renderForYou}
                keyExtractor={(item, index) => `item-name-${index}`}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                pagingEnabled

            />

        </View>
    );
}

export default CarouselScreen;