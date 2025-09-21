import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Image } from 'react-native';
import { fetchProductDetails } from '../services/api';
import { RadioButtonGroup } from '../components/RadioButtonGroup';
import { SecondaryButton } from '../components/SecondaryButton';
import { Counter } from '../components/Counter';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { getPriceFormat } from '../utils/utils';
import { addItem } from '../redux/cartSlice';
import { COLORS, FONTS, ICONS } from '../utils/constants';
import { images } from '../products';

export function DetailsScreen({ route }) {
    const [ details, setDetails ] = useState(null);
    const [ packageOptions, setPackageOptions ] = useState([]);
    const [ format, setFormat ] = useState( null );
    const [ packaging, setPackaging ] = useState(null);
    const [ quantity, setQuantity ] = useState(1);
    const [ total, setTotal ] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const dispatch = useDispatch();

    const formatOptions = [
        { label: 'beans', value: ICONS.BEANS, icon: ICONS.BEANS },
        { label: 'ground', value: ICONS.GROUND, icon: ICONS.GROUND }
    ];

    const initFormatOptions = () => {
        setFormat(formatOptions[0].value);
    }

    const initPackageOptions = (values) => {
        setPackageOptions(values.map((value) => {
            return {
                label: `${value.toString()}g`,
                value: value,
            }
        }));
        setPackaging(values[0]);
    }

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    const addItemToCart = (item) => {
        dispatch(addItem({
            id: item.id,
            title: item.title,
            packaging: packaging,
            quantity: quantity,
            format: format,
            price: item.price / 1000 * packaging,
            total: total
        }));
    }

    async function getProductDetails() {
        try {
            setError('');
            setLoading(true);

            const result = await fetchProductDetails(route.params.id);
            setDetails(result);
            initFormatOptions();
            initPackageOptions(result.packaging);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    useEffect(() => {
        if (details?.price) {
            setTotal(details.price / 1000 * packaging * quantity);
        }
    }, [packaging, quantity]);

    return (
        <>
            {details &&
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Image source={images[details.id]} style={styles.image} />
                        <View>
                            <Text style={styles.title}>
                                {details.title}
                            </Text>
                            <Text style={styles.price}>
                                {`${getPriceFormat(details.price)} / kg`}
                            </Text>
                        </View>
                        <Text style={styles.desc}>
                            {details.desc}
                        </Text>
                        <RadioButtonGroup
                            options={formatOptions}
                            initialValue={format}
                            setSelectedValue={setFormat}
                        />
                        <View style={styles.packaging}>
                            <Text style={styles.packagingText}>
                                Choose packaging:
                            </Text>
                            <RadioButtonGroup
                                options={packageOptions}
                                initialValue={packaging}
                                setSelectedValue={setPackaging}
                            />
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Counter
                            color={COLORS.LIGHTEST}
                            value={quantity}
                            increment={increaseQuantity}
                            decrement={decreaseQuantity}
                        />
                        <SecondaryButton
                            label={getPriceFormat(total)}
                            icon={ICONS.CART_PLUS}
                            onPress={() => addItemToCart(details)}
                            disableOnPress={true}
                        />
                    </View>
                </View>
            }
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY
    },
    container: {
        gap: 16,
        padding: 16,
        paddingBottom: 72,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: COLORS.LIGHTEST
    },
    image: {
        width: '100%',
        height: 180,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: COLORS.PRIMARY
    },
    title: {
        fontFamily: FONTS.REGULAR,
        fontSize: 24,
    },
    price: {
        fontFamily: FONTS.BOLD,
        fontSize: 24,
    },
    desc: {
        fontFamily: FONTS.REGULAR,
        fontSize: 16,
    },
    packaging: {
        gap: 8
    },
    packagingText: {
        alignSelf: 'center',
        fontFamily: FONTS.REGULAR
    },
    bottomContainer: {
        flex: 1,
        gap: 64,
        padding: 16,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.PRIMARY
    }
});