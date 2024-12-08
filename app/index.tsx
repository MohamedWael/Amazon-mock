import {Text, View, StyleSheet} from "react-native";
import {NavigationContainer, NavigationIndependentTree} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Tabs from "@/app/navigation/tabs";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import adsReducer from "@/app/reducers/adsReducer";
import cartReducer from "@/app/reducers/cartReducer";

const rootReducer = combineReducers({adsReducer, cartReducer})
export type RootState = ReturnType<typeof rootReducer>;

export default function Index() {

    const store = createStore(rootReducer)
    const Stack = createNativeStackNavigator()
    return (
        <Provider store={store}>
            <NavigationIndependentTree>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="tabs"
                                      component={Tabs}
                                      options={{headerShown: false}}>
                        </Stack.Screen>
                    </Stack.Navigator>


                </NavigationContainer>
            </NavigationIndependentTree>
        </Provider>
    );
}


