import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogueItem } from '../components/CatalogueItem';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { RadioButtonGroup } from '../components/RadioButtonGroup';
import { fetchProducts } from '../redux/productsOps';
import { changeFilter } from '../redux/filtersSlice';
import { selectFilteredProducts } from '../redux/productsSlice';
import { images } from '../products';
import { FILTERS } from '../utils/constants';

const filterOptions = [
    { label: FILTERS.ALL, value: FILTERS.ALL },
    { label: FILTERS.ARABICA, value: FILTERS.ARABICA },
    { label: FILTERS.ROBUSTA, value: FILTERS.ROBUSTA },
    { label: FILTERS.ESPRESSO, value: FILTERS.ESPRESSO },
    { label: FILTERS.MOCHA, value: FILTERS.MOCHA }
];

export function CatalogueScreen() {
    const { loading, error } = useSelector(state => state.products);
    const filter = useSelector(state => state.filters.name);
    const filteredProducts = useSelector(selectFilteredProducts);
    const dispatch = useDispatch();

    const updateFilter = (value) => {
        dispatch(changeFilter(value));
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            {filteredProducts.length > 0 &&
                <>
                    <View style={styles.filter}>
                        <RadioButtonGroup
                            options={filterOptions}
                            initialValue={filter}
                            setSelectedValue={updateFilter}
                        />
                    </View>
                    <FlatList
                        data={filteredProducts}
                        renderItem={({ item }) =>
                            <CatalogueItem
                                id={item.id}
                                image={images[item.id]}
                                title={item.title}
                                price={item.price}
                            />
                        }
                        keyExtractor={item => item.id}
                        numColumns={2}
                        key={2}
                        columnWrapperStyle={{
                            justifyContent: 'center',
                            gap: 8
                        }}
                        contentContainerStyle={styles.container}
                    />
                </>
            }
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>
    );
}

const styles = StyleSheet.create({
    filter: {
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    container: {
        gap: 8,
        padding: 8
    }
});