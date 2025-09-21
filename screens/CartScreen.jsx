import { useSelector } from 'react-redux';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { CartItem } from '../components/CartItem';
import { PrimaryButton } from '../components/PrimaryButton';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS, ICONS } from '../utils/constants';

export function CartScreen() {
    const { items } = useSelector(state => state.cart);

    return items.length > 0
        ? <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) =>
                    <CartItem key={item.id} item={item} />
                }
                keyExtractor={item => item.id}
                contentContainerStyle={styles.fullCart}
            />
            <View style={styles.checkout}>
                <PrimaryButton name={'checkout'} onPress={() => {}} />
            </View>
        </View>
        : <View style={styles.emptyCart}>
            <Text style={styles.emptyText}>
                Nothing here. For now
            </Text>
            <MaterialDesignIcons
                name={ICONS.NO_IMG}
                size={160}
                color={COLORS.SECONDARY}
            />
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
    },
    fullCart: {
        gap: 8
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    emptyText: {
        fontFamily: FONTS.BOLD,
        fontSize: 28
    },
    checkout: {
        alignItems: 'center',
        paddingTop: 16,
    }
});