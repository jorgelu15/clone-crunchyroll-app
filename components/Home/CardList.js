import { Image, Text, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
const CardList = (props) => {
    const { 
        item
     } = props;
    return (
        <View style={{ marginHorizontal: 5, display: "flex", flexDirection: "column" }}>
            <Image
                style={{ width: 160, height: 284 }}
                source={{ uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpg" }}
            />
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
                <View>
                    <Text style={{ color: "white", marginVertical: 2 }}>One Piece</Text>
                    <Text style={{ color: "#b1b2b4", marginVertical: 2 }}>Dob | sub</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                    <SimpleLineIcons name="options" size={18} color="#b1b2b4" />
                </View>
            </View>
        </View>
    );
}

export default CardList;