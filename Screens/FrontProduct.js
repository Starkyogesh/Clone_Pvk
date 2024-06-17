import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { ShoppingContext } from './ShoppingContext';

const heart = require('../images/heart.png');

const FrontProduct1 = ({ item }) => {
    const navigation = useNavigation();

    const { addToWishlist, wishlist, removeFromWishlist } = useContext(ShoppingContext);

    const isWishlisted = (productId) => wishlist.some(item => item.id === productId);


    return (
        <TouchableOpacity style={styles.bodyView} onPress={() => navigation.navigate("Detail", { item })}>
            <Image
                source={{ uri: item.Images }}
                style={styles.coverImg}
            />

            <View style={{ marginTop: 10, marginLeft: '70%', position: 'absolute' }}>
                <TouchableOpacity
                    onPress={() => isWishlisted(item.id) ? removeFromWishlist(item.id) : addToWishlist(item)}
                    style={{
                        backgroundColor: 'white',
                        width: 38,
                        height: 38,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                        borderWidth: 0.5
                    }}>
                    <Image
                        source={heart}

                        style={{ width: 20, height: 20, tintColor: isWishlisted(item.id) ? "red" : "silver" }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 5, marginRight: 5 }}>
                <Text numberOfLines={1} style={styles.Txt}>{item.Name}</Text>
                <Text style={styles.Txt}>{item.Price}</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent:'space-around', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: 'black', textDecorationLine: 'line-through', marginLeft: 10 }}>{item.Real_Price}</Text>
                <View style={{ width: 60, backgroundColor: 'green', borderRadius: 10, height: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.Txts}>{item.Discount}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    bodyView: {
        flex: 1,
        borderWidth: 0.2,
        borderRadius: 10,
        backgroundColor: 'white',
        marginRight: 10,
        marginLeft:10,
        height:250,
        marginBottom:10,
        marginTop:10
    },

    coverImg: {
        height:140,
        width:'100%',
        borderRadius: 10,
        marginTop: 10,
    },

    Txt: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },

    Txts: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    },
});

export default FrontProduct1;