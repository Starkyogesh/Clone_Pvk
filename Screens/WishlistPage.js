import React, { useContext } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image
} from "react-native";

import { ShoppingContext } from "./ShoppingContext";


const bin = require('../images/bin.png')

const Wish = ({ navigation }) => {

    const { wishlist, removeFromWishlist } = useContext(ShoppingContext);


    const renderWishlistItem = ({ item }) => (
        <View style={styles.body}>
            <View style={{ marginBottom: 30 }}>
                <View style={styles.productView}>
                    <View style={{ width: '50%',marginLeft:10, alignItems:'center' }}>
                        <Image
                            source={{ uri: item.Images }}
                            style={{
                                width: 150,
                                height: 150
                            }}
                        />
                    </View>

                    <View style={{flex:1, width: '50%', marginLeft: 5 , marginRight:10}}>
                        <Text numberOfLines={2} style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: 'black',
                            marginTop: 15
                        }}>{item.Name}</Text>

                        <Text style={{
                            fontSize: 12,
                            color: 'black',
                            marginTop: 5,

                        }}>{item.Price}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{
                                fontSize: 12,
                                color: 'black',
                                marginTop: 5,
                                textDecorationLine: 'line-through'
                            }}>{item.Real_Price}</Text>

                            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 12, top: 3 }}>  {item.Discount}</Text>
                        </View>


                        <TouchableOpacity
                            onPress={() => removeFromWishlist(item.id)}
                            style={{
                                alignItems: 'center',
                                backgroundColor: 'red',
                                width: '95%',
                                borderRadius: 30,
                                marginTop: 10,
                                height: 30,
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={bin}
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 5,
                                    tintColor:'white'
                                }}
                            />
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 14,
                                textAlign: 'center'
                            }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* back button */}
                <View style={styles.backView}>
                    <Text style={styles.backTxt}>Wishlist</Text>
                </View>


                {
                    wishlist.length === 0 ? (

                        <View style={{flex:1}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'black', fontSize:16}}>Your Wishlist Is Empty</Text>
                            </View>
                        </View>

                    ): (

                        <FlatList
                        data = { wishlist }
                        renderItem = { renderWishlistItem }
                        keyExtractor = { (item) => item.id }
                        contentContainerStyle = {{
                                paddingBottom: 70
                            }}
                        />
                )
                }

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
        fontWeight:'bold'
    },

    body: {
        flex:1,
        height: 170,
        
    },

    productView: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 30,
        borderRadius: 40,
        flexDirection: 'row',
        borderWidth: 0.5,
    },
});

export default Wish;