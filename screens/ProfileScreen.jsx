import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, ICONS } from '../utils/constants';

export function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
            />
            <View style={styles.action}>
                <Text>Continue with</Text>
                <TouchableOpacity style={styles.icon}>
                    <MaterialDesignIcons
                        name={ICONS.GOOGLE}
                        size={64}
                        color={COLORS.LIGHTEST}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 64
    },
    logo: {
        width: 300,
        height: 300,
    },
    action: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: COLORS.PRIMARY
    }
});