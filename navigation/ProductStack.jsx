import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CatalogueScreen } from '../screens/CatalogueScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { ROUTES } from '../utils/constants';

const Stack = createNativeStackNavigator();

export function ProductStack() {
    return (
        <Stack.Navigator id={ROUTES.PRODUCT}>
            <Stack.Screen
                name={ROUTES.CATALOGUE}
                component={CatalogueScreen}
            />
            <Stack.Screen
                name={ROUTES.DETAILS}
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
}