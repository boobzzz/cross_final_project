import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { ProductStack } from './ProductStack';
import { CartScreen } from '../screens/CartScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { COLORS, FONTS, ICONS, LABELS, ROUTES } from '../utils/constants';

const Tab = createBottomTabNavigator();
const tabs = [
    { name: ROUTES.PRODUCT, label: LABELS.CATALOGUE, icon: ICONS.CUP, component: ProductStack },
    { name: ROUTES.CART, label: LABELS.CART, icon: ICONS.CART, component: CartScreen },
    { name: ROUTES.PROFILE, label: LABELS.PROFILE, icon: ICONS.PROFILE, component: ProfileScreen }
];

export function TabNavigator() {
    return (
        <Tab.Navigator id={ROUTES.MAIN_TABS} screenOptions={{
            tabBarActiveTintColor: COLORS.PRIMARY,
            tabBarInactiveTintColor: COLORS.SECONDARY
        }}>
            {tabs.map(({ name, label, icon, component }) => (
                <Tab.Screen name={name} component={component} options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialDesignIcons
                            name={icon}
                            size={24}
                            color={focused ? COLORS.PRIMARY : COLORS.SECONDARY}
                        />
                    ),
                    animation: 'shift',
                    headerShown: false,
                    tabBarLabel: label,
                    tabBarLabelStyle: {
                        fontFamily: FONTS.REGULAR,
                        fontSize: 12
                    }
                }} />
            ))}
        </Tab.Navigator>
    );
}

