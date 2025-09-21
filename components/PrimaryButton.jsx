import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../utils/constants';

export function PrimaryButton({ name, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 48,
        borderRadius: 12,
        backgroundColor: COLORS.PRIMARY
    },
    text: {
        fontFamily: FONTS.REGULAR,
        fontSize: 14,
        color: COLORS.LIGHTEST,
        textTransform: 'capitalize'
    }
});