import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../components/Header";
import CardList from "../components/Home/CardList";
import CardListContinue from "../components/Home/CardListContinue";
import useText from "../hooks/useText";

//mis dependencias
const { width, height } = Dimensions.get("window");

const Home = () => {
    const { subStringText } = useText();
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
                        height={height * 0.5}
                        style={{ position: "absolute", width: width, height: height * 0.5 }}
                        source={{ uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=420/cr/portrait_large/b9cde9aa-7faf-418d-bb20-c156f3925cfe.png" }}
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
                    <Text style={{ color: "white", fontSize: 30 }}>Logo</Text>
                    <Text style={{ color: "#b1b2b4" }}>Dob | Sub</Text>
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

                    <View style={styles.recommendationsContainer}>
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
                    </View>

                    <View style={styles.recommendationsContainer}>
                        <Text style={{ color: "#FFFFFF", fontSize: 18, marginBottom: 10 }}>Seguir Viendo</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={new Array(10).fill("")}
                            keyExtractor={(item, idx) => idx.toString()}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <CardListContinue item={item} />
                            )}
                        />
                    </View>
                    <View style={styles.recommendationsContainer}>
                        <Text style={{ color: "#FFFFFF", fontSize: 18, marginBottom: 10 }}>De tus favoritos</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={new Array(10).fill("")}
                            keyExtractor={(item, idx) => idx.toString()}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <View style={{ display: "flex", flexDirection: "column", marginRight: 10 }}>
                                    <View style={{}}>
                                        <Image width={150} height={84} source={{ uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/941fbe49ed8aa8e19121520aa997dbae.jpg" }} />
                                    </View>
                                    <Text style={{ color: "white", fontWeight: "400", fontSize: 16, marginVertical: 5 }}>
                                        {subStringText("My Hero Academy", 15)}
                                    </Text>
                                    <Text style={{ color: "#b1b2b4", fontWeight: "400", fontSize: 14 }}>
                                        Continuar: T5 E115
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 3 }}>
                                        <Text style={{ color: "#b1b2b4", fontWeight: "400", fontSize: 14 }}>
                                            Dob | sub
                                        </Text>
                                        <SimpleLineIcons name="options" size={18} color="#b1b2b4" />
                                    </View>

                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.recommendationsContainer}>
                        <Text style={{ color: "#FFFFFF", fontSize: 18, marginBottom: 10 }}>Episodios nuevos</Text>
                        <Text style={{ color: "#b1b2b4", fontSize: 16, fontWeight: "400", marginBottom: 10 }}>Hoy</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={new Array(10).fill("")}
                            keyExtractor={(item, idx) => idx.toString()}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <View style={{ display: "flex", flexDirection: "column", marginRight: 10 }}>
                                    <Text style={{color: "#b1b2b4", fontSize: 12, fontWeight: "500", marginVertical: 5}}>5:00 p.m.</Text>
                                    <View style={{}}>
                                        <Image width={320} height={180} source={{ uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/941fbe49ed8aa8e19121520aa997dbae.jpg" }} />
                                    </View>
                                    <Text style={{ color: "white", fontWeight: "400", fontSize: 16, marginVertical: 5 }}>
                                        {subStringText("My Hero Academy dawdawd awdawdawd awd", 35)}
                                    </Text>
                                    <Text style={{ color: "#b1b2b4", fontWeight: "400", fontSize: 14 }}>
                                        Continuar: T5 E115
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 3 }}>
                                        <Text style={{ color: "#b1b2b4", fontWeight: "400", fontSize: 14 }}>
                                            Dob | sub
                                        </Text>
                                        <SimpleLineIcons name="options" size={18} color="#b1b2b4" />
                                    </View>

                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.recommendationsContainer}>
                        <Text style={{ color: "#FFFFFF", fontSize: 18, marginBottom: 10 }}>Lo mas popular</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={new Array(10).fill("")}
                            keyExtractor={(item, idx) => idx.toString()}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <CardList item={item} />
                            )}
                        />
                    </View>
                </View>

                {/* Extra space to ensure scrolling */}
                <View style={{ height: 100 }} />

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
        bottom: height * -0.5,
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
        marginTop: height * 0.35,
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

export default Home;
