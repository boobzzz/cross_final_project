import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, ROUTES } from '../utils/constants';

export function CatalogueItem({ id, image, title, price }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate(ROUTES.DETAILS, { id })}
        >
            <Image source={image} style={styles.image} />
            <View style={styles.text}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.price}>
                    {`${price.toFixed(2)} €`}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        width: '45%',
        borderWidth: 1,
        borderColor: COLORS.SECONDARY,
        borderRadius: 12,
        backgroundColor: 'transparent',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover'
    },
    text: {
        padding: 8
    },
    title: {
        fontFamily: FONTS.EXTRA_BOLD,
        fontSize: 16,
        color: COLORS.PRIMARY
    },
    price: {
        fontFamily: FONTS.REGULAR,
        fontSize: 16,
        color: COLORS.PRIMARY
    }
});