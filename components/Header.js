import { View, Text, StyleSheet, Image, ImageComponent } from "react-native";
import { MaterialIcons, } from '@expo/vector-icons';
import Logo from "../assets/Crunchyroll.svg.png";
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.logo}>
                <Image source={Logo}  style={{height: 50, width: 100, resizeMode: "contain"}} />
            </View>
            <View style={styles.nav}>
                <MaterialIcons name="cast" size={24} color="white" style={{marginHorizontal: 5}} />
                <MaterialIcons name="search" size={24} color="white" style={{marginHorizontal: 5}}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 1000
    },
    logo: {
        marginVertical: 20,
    },
    nav: {
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    nav_item: {
        marginHorizontal: 10
    }
})

export default Header;