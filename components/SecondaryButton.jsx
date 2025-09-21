import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withRepeat, withTiming} from 'react-native-reanimated';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS } from '../utils/constants';


export function SecondaryButton({ label, icon, onPress, disableOnPress }) {
    const color = useSharedValue(COLORS.SECONDARY);

    const startGlowAnimation = () => {
        color.value = withRepeat(
            withTiming(COLORS.ERROR, { duration: 1500 }),
            -1,
            true
        );
    }

    const animatedStyle = useAnimatedStyle(() => ({
        borderColor: color.value
    }));

    useEffect(() => {
        startGlowAnimation();
    }, []);

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Animated.View style={[styles.wrapper, animatedStyle]}>
                {icon &&
                    <MaterialDesignIcons
                        name={icon}
                        size={24}
                        color={COLORS.PRIMARY}
                    />
                }
                {label &&
                    <Text style={styles.text}>
                        {label}
                    </Text>
                }
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
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
    text: {
        fontFamily: FONTS.REGULAR,
        fontSize: 14,
        color: COLORS.PRIMARY,
        textTransform: 'capitalize'
    }
});