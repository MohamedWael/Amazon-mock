import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeNavigator from "@/app/navigation/homeNavigator";
import ProfileNavigator from "@/app/navigation/profileNavigator";
import CartNavigator from "@/app/navigation/cartNavigator";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse'
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping'


export default function Tabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name={"HomeNavigator"} component={HomeNavigator}
                        options={{
                            headerShown: false, title: "",
                            tabBarIcon: ({focused}) => {
                                return (<FontAwesomeIcon icon={faHouse}/>)
                            }
                        }}/>
            <Tab.Screen name={"ProfileNavigator"} component={ProfileNavigator}
                        options={{
                            headerShown: false, title: "",
                            tabBarIcon: ({focused}) => {
                                return (<FontAwesomeIcon icon={faUser}/>)
                            }
                        }}/>
            <Tab.Screen name={"CartNavigator"} component={CartNavigator}
                        options={{
                            headerShown: false, title: "",
                            tabBarIcon: ({focused}) => {
                                return (<FontAwesomeIcon icon={faCartShopping}/>)
                            }
                        }}/>
        </Tab.Navigator>
    )
}