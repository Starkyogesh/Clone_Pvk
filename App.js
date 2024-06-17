import React from "react";
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LogBox } from "react-native";


import { createTables } from "./Screens/SqlData";

import { ShoppingProvider } from "./Screens/ShoppingContext";


import homePage from "./Screens/HomePage";
import splashPage from "./Screens/SplashPage";
import WishPage from "./Screens/WishlistPage";
import cartPage from "./Screens/CartPage"
import morePage from "./Screens/MorePage";
import detailPage from "./Screens/DetailsScreen";
import mobileViewPage from "./Screens/mobileViewAll";
import laptopViewPage from "./Screens/laptopViewAll";
import CategoryPage from "./Screens/CategoryScreen";
import policiesPage from "./Screens/PoliciesScreen";
import loginPage from "./Screens/LoginScreen";
import signUpPage from "./Screens/SignUpScreen";
import accountPage from "./Screens/MyAccountScreen";


import applePage from './Screens/AppleScreen';
import samsungPage from './Screens/SamsungScreen';
import realmePage from './Screens/RealmeScreen';
import hpPage from './Screens/HpScreen';
import oppoPage from './Screens/OppoScreen';
import lenovoPage from './Screens/LenovoScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//tabBar Icons
const homeIcon_active = require("./images/home.png")
const homeIcon = require("./images/home.png")
const wishIcon_active = require("./images/heart.png")
const wishIcon = require("./images/heart.png")
const cartIcon_active = require("./images/shopping-cart.png")
const cartIcon = require("./images/shopping-cart.png")
const moreIcon_active = require("./images/menu.png")
const moreIcon = require("./images/menu.png")



function HomeTab() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //headBtn
        headerShown: false,

        //Icon
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? homeIcon_active : homeIcon
          } else if (route.name === "Wishlist") {
            iconName = focused ? wishIcon_active : wishIcon
          } else if (route.name === "Cart") {
            iconName = focused ? cartIcon_active : cartIcon
          } else if (route.name === "More") {
            iconName = focused ? moreIcon_active : moreIcon
          }

          return (
            <Image source={iconName} tintColor={color} resizeMode="contain" style={styles.icons} />
          )
        },

        //show label style
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom:5,
        },

        //icon txt Option
        tabBarActiveTintColor: "#ff4b23",
        tabBarInactiveTintColor: "#C7C9CB",

        //tabBar style
        tabBarStyle: {
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          height: 60,
        }
      })}
    >
      <Tab.Screen name="Home" component={homePage} />
      <Tab.Screen name="Wishlist" component={WishPage} />
      <Tab.Screen name="Cart" component={cartPage} />
      <Tab.Screen name="More" component={morePage} />
    </Tab.Navigator>
  );
}


const App = () => {

  LogBox.ignoreAllLogs();

  createTables();

  return (
    <ShoppingProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={splashPage} />
          <Stack.Screen name="Home" component={HomeTab} />
          <Stack.Screen name="Detail" component={detailPage} />
          <Stack.Screen name="MobileView" component={mobileViewPage} />
          <Stack.Screen name="LaptopView" component={laptopViewPage} />
          <Stack.Screen name="AppleView" component={applePage} />
          <Stack.Screen name="SamsungView" component={samsungPage} />
          <Stack.Screen name="RealmeView" component={realmePage} />
          <Stack.Screen name="HpView" component={hpPage} />
          <Stack.Screen name="OppoView" component={oppoPage} />
          <Stack.Screen name="LenovoView" component={lenovoPage} />
          <Stack.Screen name="CategoryView" component={CategoryPage} />
          <Stack.Screen name="PolicyView" component={policiesPage} />
          <Stack.Screen name="LoginView" component={loginPage} />
          <Stack.Screen name="SignUpView" component={signUpPage} />
          <Stack.Screen name="AccountView" component={accountPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ShoppingProvider>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: 25,
    height: 25,
  }
});

export default App;