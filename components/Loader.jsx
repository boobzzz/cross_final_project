import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

export function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
