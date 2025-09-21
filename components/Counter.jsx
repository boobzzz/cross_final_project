import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS, ICONS } from '../utils/constants';

export function Counter({ color, value, increment, decrement }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={decrement}>
                <MaterialDesignIcons
                    name={ICONS.MINUS}
                    size={26}
                    color={color} />
            </TouchableOpacity>
            <Text style={[styles.text, color === COLORS.LIGHTEST && styles.textAlt]}>
                {value}
            </Text>
            <TouchableOpacity onPress={increment}>
                <MaterialDesignIcons
                    name={ICONS.PLUS}
                    size={26}
                    color={color} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    text: {
        fontFamily: FONTS.REGULAR,
        fontSize: 18,
        color: COLORS.PRIMARY,
        textTransform: 'capitalize'
    },
    textAlt: {
        color: COLORS.LIGHTEST
    }
});