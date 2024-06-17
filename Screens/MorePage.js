import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Image,
    Linking,
} from "react-native";

const menu = require('../images/menus.png');
const folder = require('../images/document.png');
const phone = require('../images/telephone.png');
const whatsapp = require('../images/whatsapp.png')

const More = ({ navigation }) => {

    const number = `7448706610`

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* back button */}
                <View style={styles.backView}>
                    <Text style={styles.backTxt}>More</Text>
                </View>


                <View style={styles.accountView}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Hii !</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>Access all your Wishlist, Cart {'\n'}& Reviews</Text>

                        <TouchableOpacity onPress={() => navigation.navigate("AccountView")} style={{
                            backgroundColor: '#ff4b23',
                            marginRight: 30,
                            width: 120,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>My Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* sub content */}
                <View style={{ flex: 1, marginTop: 60, paddingLeft: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CategoryView')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={menu}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: 30, color: 'black', fontSize: 15 }}>Shop by Category</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("PolicyView")}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <Image
                            source={folder}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: 30, color: 'black', fontSize: 15 }}>Legal Policies</Text>
                    </TouchableOpacity>
                </View>



                <View style={{ alignItems: 'center', width: '100%', height: 50, justifyContent: 'center' }}>
                    <Text style={{ bottom: 20, color: 'black' }}>App Version 8.9</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://wa.me/+917448706610')
                        }}
                            style={{ flexDirection: 'row', marginLeft: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={whatsapp}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: 'green'
                                }}
                            />
                            <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Chat with us</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            Linking.openURL(`tel:${number}`)
                        }}
                            style={{ flexDirection: 'row', marginRight: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={phone}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: 'green'
                                }}
                            />
                            <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Speak to us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },

    backView: {
        backgroundColor: '#ff4b23',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },

    backTxt: {
        color: 'white',
        fontSize: 18,
        marginLeft: 30,
        fontWeight: 'bold'
    },

    accountView: {
        marginLeft: 20,
        marginTop: 20
    },
});

export default More;