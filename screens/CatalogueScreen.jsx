import { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogueItem } from '../components/CatalogueItem';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { fetchProducts } from '../redux/productsOps';
import { images } from '../products';

export function CatalogueScreen() {
    const { items, loading, error } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            {items.length > 0 &&
                <FlatList
                    data={items}
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
            }
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        padding: 8
    }
});