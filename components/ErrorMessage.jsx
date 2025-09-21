import { StyleSheet, Text } from 'react-native';
import { COLORS, FONTS } from '../utils/constants';

export function ErrorMessage({ message }) {
    return (
        <Text style={styles.errorMessage}>
            {message}
        </Text>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        flex: 1,
        justifyContent: 'center',
        fontFamily: FONTS.EXTRA_BOLD,
        fontSize: 18,
        color: COLORS.ERROR
    }
});