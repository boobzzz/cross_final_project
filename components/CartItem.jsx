import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Counter } from './Counter';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS } from '../utils/constants';
import { removeItem, updateItem } from '../redux/cartSlice';
import { getPriceFormat } from '../utils/utils';

export function CartItem({ item }) {
    const { id, title, packaging, quantity, format, total } = item;
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        dispatch(updateItem({
            id: id,
            quantity: quantity + 1
        }));
    }

    const decreaseQuantity = () => {
        if (quantity === 1) {
            dispatch(removeItem(id));
            return;
        }
        dispatch(updateItem({
            id: id,
            quantity: quantity - 1
        }));
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.packaging}>
                        Packaging: {packaging}g
                    </Text>
                </View>
                <Counter
                    value={quantity}
                    increment={increaseQuantity}
                    decrement={decreaseQuantity}
                />
            </View>
            <View style={styles.rightSide}>
                <MaterialDesignIcons
                    name={format}
                    color={COLORS.PRIMARY}
                    size={30}
                />
                <Text style={styles.total}>
                    {getPriceFormat(total)}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 12,
        backgroundColor: COLORS.LIGHTEST,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.1,
                shadowRadius: 8
            },
            android: {
                elevation: 6
            },
            default: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.1,
                shadowRadius: 8
            }
        }),
    },
    leftSide: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16
    },
    title: {
        fontFamily: FONTS.REGULAR,
        fontSize: 20,
    },
    packaging: {
        fontFamily: FONTS.REGULAR,
        fontSize: 16,
    },
    rightSide: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    total: {
        fontFamily: FONTS.REGULAR,
        fontSize: 16,
    }
});
