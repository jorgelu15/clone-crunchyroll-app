import { Image, Text, View } from "react-native";
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
const CardListContinue = (props) => {
    const {
        item
    } = props
    return (
        <View style={{ position: "relative", marginHorizontal: 5 }}>
            <View style={{ opacity: .5 }}>
                <Image width={320} height={180} source={{ uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/941fbe49ed8aa8e19121520aa997dbae.jpg" }} />
            </View>
            <View style={{ display: "flex", flexDirection: "column", position: "absolute", justifyContent: "space-between", height: 180, width: 320, padding: 5 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                    <SimpleLineIcons name="options" size={18} color="#b1b2b4" />
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ display: "flex", flexDirection: "row", marginRight: 10 }}>
                        <AntDesign name="play" size={40} color="white" />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", marginRight: 10 }}>
                        <View style={{ display: "flex", flexDirection: "column" }}>
                            <Text style={{ color: "white" }}>Dr. Stone</Text>
                            <Text style={{ color: "white" }}>Temporada 1, episodio 1</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                        <Text style={{ color: "white", backgroundColor: "rgba(0,0,0,0.5)", padding: 3, borderRadius: 5 }}>23m restantes</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CardListContinue;