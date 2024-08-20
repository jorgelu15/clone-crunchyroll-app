import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Rating, AirbnbRating } from 'react-native-ratings';

import Header from "../components/Header";
import CardList from "../components/Home/CardList";
import useText from "../hooks/useText";


//mis dependencias
const { width, height } = Dimensions.get("window");

const Serie = () => {
    const { subStringText } = useText();

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#181818" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, position: "relative" }}>
                <View style={{ position: "relative", top: 0 }}>
                    <LinearGradient
                        colors={['#181818', 'transparent']}
                        style={styles.backgroundTop}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />
                    <Image
                        width={width}
                        height={height * 0.77}
                        style={{ position: "absolute", width: width, height: height * 0.77 }}
                        source={{ uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840/cr/portrait_large/1f1ebc09-c20f-45b0-8fb8-29e58ec000e3.png" }}
                    />
                    <LinearGradient
                        colors={['#181818', 'transparent']}
                        style={styles.background}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    />
                </View>

                <View style={styles.container}>
                    <Header />
                </View>

                <View style={styles.contentContainer}>
                    <Text style={{ color: "white", fontSize: 24, marginBottom: 10 }}>Wistoria: Wand and Sword</Text>
                    <Text style={{ color: "#b1b2b4", marginBottom: 10 }}>Series | Subtitulos</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                        <AirbnbRating
                            count={5}
                            reviews={[]}
                            defaultRating={0}
                            size={20}
                            showRating={false}
                        />
                        <Text style={{ color: "white" }}>  |  Media: 4.4 (5.2k)</Text>
                    </View>
                    <Text style={{ color: "#ffffff", marginBottom: 10, fontSize: 20 }}>+ Anadir a crunchylista</Text>
                    <Text style={{ color: "white" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.playButton}>
                            <Feather name="play" size={24} color="black" />
                            <Text style={{ fontWeight: "500", textTransform: "uppercase" }}>Comenzar a ver</Text>
                        </View>
                        <View style={styles.bookmarkButton}>
                            <Feather name="bookmark" size={24} color="black" />
                        </View>
                    </View>

                    {/* <View style={styles.recommendationsContainer}>
                        <Text style={{ color: "#FFFFFF", fontSize: 18, marginBottom: 10 }}>Nuestras recomendaciones</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={new Array(10).fill("")}
                            keyExtractor={(item, idx) => idx.toString()}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <CardList item={item} />
                            )}
                        />
                    </View> */}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        alignSelf: "center",
        zIndex: 1000,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: height * -0.73,
        height: 150,
        zIndex: 100,
    },
    backgroundTop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 150,
        zIndex: 100,
    },
    contentContainer: {
        paddingHorizontal: 20,
        marginTop: height * 0.60,
        zIndex: 1000,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    playButton: {
        backgroundColor: "#fe5e00",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        width: (width - 40) * 0.8,
        justifyContent: "center",
    },
    bookmarkButton: {
        backgroundColor: "#fe5e00",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
    recommendationsContainer: {
        marginBottom: 30
    }
});

export default Serie;
