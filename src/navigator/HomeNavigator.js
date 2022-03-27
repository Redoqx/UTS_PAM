import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//icons
import Home from "../screens/Home";
import PesananKu from "../screens/PesananKu";
import BatalYa from "../screens/BatalYa";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lainnya from "../screens/Lainnya";

const Tab = createBottomTabNavigator();

const HomeNavigator = ({navigation}) =>{
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarStyle: {position: 'absolute'},
                tabBarStyle: {height: 70}
            }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size}) =>(
                        <MaterialCommunityIcons name="home" color={"navy"} size={30} />
                    )
                }}
                />
            <Tab.Screen 
                name="Pesanan" 
                component={PesananKu} 
                options={{
                    tabBarIcon: ({color, size}) =>(
                        <MaterialCommunityIcons name="book-check" color={"navy"} size={30} />
                    )
                }}
                />
            <Tab.Screen 
                name="Batal" 
                component={BatalYa} 
                options={{
                    tabBarIcon: ({color, size}) =>(
                        <MaterialCommunityIcons name="book-cancel" color={"navy"} size={30} />
                    )
                }}
                />
            <Tab.Screen 
                name="Lainnya" 
                component={Lainnya} 
                options={{
                    tabBarIcon: ({color, size}) =>(
                        <MaterialCommunityIcons name="view-headline" color={"navy"} size={30} />
                    )
                }}
                />
        </Tab.Navigator>
    );
};

export default HomeNavigator;