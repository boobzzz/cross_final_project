import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { ROUTES } from '../utils/constants';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <Stack.Navigator id={ROUTES.ROOT}>
            <Stack.Screen
                name={ROUTES.MAIN_TABS}
                component={TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}