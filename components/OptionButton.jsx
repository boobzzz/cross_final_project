import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS } from '../utils/constants';

export function OptionButton({ label, icon, selected, value, onPress, setValue }) {
    const isSelected = selected === value;

    const onSelect = () => {
        onPress(value);
        setValue(value);
    }

    return (
        <TouchableOpacity
            onPress={onSelect}
            style={[styles.container, isSelected && styles.containerSelected]}>
            {icon &&
                <MaterialDesignIcons
                    name={icon}
                    size={24}
                    color={isSelected ? COLORS.PRIMARY : COLORS.SECONDARY}
                />
            }
            {label &&
                <Text style={[styles.text, isSelected && styles.textSelected]}>
                    {label}
                </Text>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        height: 40,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: COLORS.SECONDARY,
        borderRadius: 20,
        backgroundColor: COLORS.LIGHTEST
    },
    containerSelected: {
        borderColor: COLORS.PRIMARY
    },
    text: {
        fontFamily: FONTS.REGULAR,
        fontSize: 14,
        color: COLORS.SECONDARY,
        textTransform: 'capitalize'
    },
    textSelected: {
        fontFamily: FONTS.REGULAR,
        fontSize: 14,
        color: COLORS.PRIMARY,
        textTransform: 'capitalize'
    }
});