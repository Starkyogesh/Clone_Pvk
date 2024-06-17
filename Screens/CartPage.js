import React, { useContext } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ToastAndroid
} from "react-native";

import { ShoppingContext } from "./ShoppingContext";

const CartPages = ({ navigation }) => {

    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal, calculateRealTotal, calculateDiscount } = useContext(ShoppingContext);


    const cartProvider = ({ item, index }) => {
        return (
            <View style={{ flex:1 }}>
                <View style={{
                    marginLeft: 10,
                    marginTop: 20,
                    width: '95%',
                    height: 240,
                    borderRadius: 20,
                    flexDirection: 'row',
                    borderWidth: 0.5,
                }}>
                    <View style={{ flex:1,marginLeft:10,marginRight:10 }}>
                        <Image
                            source={{ uri: item.Images }}
                            style={{
                                height: 170,
                                width: '100%',
                            }}
                        />
                    </View>

                    <View style={{ flex:1,marginRight:5 }}>
                        <Text numberOfLines={2} style={{
                            marginTop: 20,
                            marginLeft: 10,
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 14,
                        }}
                        >{item.Name}</Text>

                        <View style={{
                            marginRight: 10,
                            marginLeft: 10,
                        }}>
                            <Text style={{ color: 'black', fontSize: 14 }}>{item.Price}</Text>

                        </View>


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginRight: 20,
                            marginLeft: 10,
                        }}>
                            <Text style={{ color: 'black', fontSize: 14, textDecorationLine: 'line-through' }}>{item.Real_Price}</Text>

                            <Text style={{ color: 'darkgreen', fontSize: 14 }}>  {item.Discount}</Text>

                        </View>

                        <View style={{ width: '95%', height: 40, marginTop: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                onPress={() => decreaseQuantity(item.id)}
                                style={{ justifyContent: 'center', alignContent: 'center', borderWidth: 0.5, width: '31%', borderRadius: 15 }}
                            >
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>-</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', borderWidth: 0.5, width: '31%', borderRadius: 15 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{item.quantity}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => increaseQuantity(item.id)}
                                style={{ justifyContent: 'center', alignContent: 'center', borderWidth: 0.5, width: '31%', borderRadius: 15 }}
                            >
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ position: 'absolute', marginLeft: 10, marginTop: 180, width:'100%' }}>
                        <TouchableOpacity
                            onPress={() => removeFromCart(item.id)}
                            style={{ backgroundColor: 'red', height: 40, width: 350, justifyContent: 'center', alignItems: 'center', borderRadius: 30, width:'94%' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Remove</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* back button */}
                <View style={styles.backView}>
                    <Text style={styles.backTxt}>My Cart</Text>
                </View>

                {
                    cart.length === 0 ? (

                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={{ uri: "https://img.poorvika.com/common/emty-cart.jpg" }}
                                    style={{
                                        width: 250,
                                        height: 200
                                    }}
                                />

                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate("Home")}
                                    style={{ backgroundColor: '#ff4b23', height: 50, width: '70%', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Continue Shopping</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    ) : (

                        <FlatList
                            data={cart}
                            renderItem={cartProvider}
                            ListFooterComponent={<>
                                <View style={{ height: 270, width: '100%', alignItems: 'center', marginTop: 30, borderWidth: 1 }}>
                                    <Text style={{color:'black',fontWeight:'bold',fontSize:18,textDecorationLine:'underline'}}>Cart Summary</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginTop: 20, marginRight: 20 }}>
                                        <Text style={{ width: '50%', color: 'black', fontSize: 16, fontWeight: 'bold' }}>Cart Total</Text>
                                        <Text style={{ width: '50%', color: 'black', fontSize: 16, fontWeight: 'bold' }}>:   Rs. {calculateRealTotal()}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                                        <Text style={{ width: '50%', color: 'black', fontSize: 16, fontWeight: 'bold' }}>Discount Price</Text>
                                        <Text style={{ width: '50%', color: 'darkgreen', fontSize: 16, fontWeight: 'bold' }}>:   Rs. {calculateDiscount()}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                                        <Text style={{ width: '50%', color: 'black', fontSize: 16, fontWeight: 'bold' }}>OneAssist Charges</Text>
                                        <Text style={{ width: '50%', color: 'black', fontSize: 16, fontWeight: 'bold' }}>:   Rs. 0</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, borderTopWidth: 1, marginRight: 20, marginTop: 20 }}>
                                        <Text style={{ width: '50%', color: 'black', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Total</Text>
                                        <Text style={{ width: '50%', color: 'black', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>:   Rs. {calculateTotal()}</Text>
                                    </View>

                                    <View style={{
                                        marginTop: 20,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%'
                                    }}>

                                        <TouchableOpacity
                                            onPress={()=>{ToastAndroid.show("Your Order Is Successfully Done",2000)}}
                                            style={{ backgroundColor: '#acadac', width: '90%', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
                                        >

                                            <Text style={{ color: '#ff4b23', fontWeight: 'bold', fontSize: 20 }}>Checkout</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </>}
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
        fontSize: 20,
        marginLeft: 30,
        fontWeight:'bold'
    },
});

export default CartPages;