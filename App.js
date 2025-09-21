import { useFonts, Inter_500Medium, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigation/RootNavigator';
import { store } from './redux/store';

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_700Bold,
        Inter_800ExtraBold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </Provider>
    );
}
