import { useRoute } from "@react-navigation/native";
import React, { useState, useContext } from "react";;
import {
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ToastAndroid
} from 'react-native';
import Swiper from "react-native-swiper";

import { ShoppingContext } from "./ShoppingContext";


const back = require('../images/back.png')
const check = require('../images/check.png')
const thunder = require('../images/thunder.png')
const addtocart = require('../images/add-to-cart.png')

const bin = require('../images/bin.png')

const Details = ({ navigation }) => {

    const route = useRoute();
    const item = route.params.item;

    const { addToCarts, cart, removeFromCart } = useContext(ShoppingContext);

    const isCartlisted = (productId) => cart.some(item => item.id === productId);


    const [pickimage] = useState([
        {
            img: item.ItemImg.Img1
        },
        {
            img: item.ItemImg.Img2
        },
        {
            img: item.ItemImg.Img3
        }
    ])
    return (
        <SafeAreaView style={styles.safeArea}>

            {/* back button */}
            <View style={styles.backView}>
                <TouchableOpacity style={styles.backView} onPress={() => navigation.goBack()}>
                    <Image
                        source={back}
                        style={styles.backImg}
                    />
                    <Text style={styles.backTxt}>{item.Brand}</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollArea}>

                {/* img View */}
                <View style={styles.imgBody}>
                    <Swiper style={styles.swipeImg} showsButtons={true} autoplay activeDotColor="#ff4b23">
                        {
                            pickimage.map((imges) => (
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={{ width: 400, height: 200 }}
                                        source={{ uri: imges.img }}
                                        resizeMode='contain'
                                    />
                                </View>
                            ))
                        }
                    </Swiper>
                </View>

                <View style={styles.subBody}>
                    <Text style={styles.heading}>{item.Name}</Text>

                    <View style={styles.amountView}>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginRight: 30 }}>{item.Price}</Text>
                        <Text style={{ fontSize: 12, marginRight: 30, textDecorationLine: 'line-through',fontWeight:'bold' }}>{item.Real_Price}</Text>
                        <View style={{ backgroundColor: 'green', width: 70, height: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize:12 }}>{item.Discount}</Text>
                        </View>
                    </View>

                    <View style={styles.stockView}>
                        <Text style={{ fontWeight: 'bold', color: 'green', fontSize: 16 }}>In Stock      <Text style={{ color: 'black' }}>(Product Code : 44xxx)</Text></Text>

                        <View style={styles.EffView}>
                            <Text style={styles.EffPrice}>Effective Price : </Text>
                            <Text style={{ color: 'green', fontWeight: 'bold' }}>{item.Price}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize:12 }}>EMI :</Text>
                        <Text style={{ color: 'black' , fontSize:12 }}>No Cost EMI starts from <Text style={{ color: 'green' }}>13774</Text>/month for HDFC</Text>
                    </View>

                    <View style={styles.FeatureView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black' }}>Key Specifications</Text>

                        <View style={{ flexDirection: 'row', width:'90%', marginTop: 10 }}>
                            <Image
                                source={check}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ color: 'black', fontWeight: 'bold',fontSize:12 }}>{item.KeySpecifications.Features1}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '90%', marginTop: 10 }}>
                            <Image
                                source={check}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ color: 'black', fontWeight: 'bold',fontSize:12 }}>{item.KeySpecifications.Features2}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '90%', marginTop: 10 }}>
                            <Image
                                source={check}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ color: 'black', fontWeight: 'bold',fontSize:12 }}>{item.KeySpecifications.Features3}</Text>
                        </View>

                    </View>

                    <View style={styles.specView}>
                        <View style={styles.specHeadingView}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Specifications</Text>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View style={{ backgroundColor: 'silver', height: 40, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 15 }}>GENERAL</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Network Type </Text></View>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>2G/3G/4G/5G Supported</Text></View>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Wifi </Text></View>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Yes</Text></View>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View style={{ backgroundColor: 'silver', height: 40, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 15 }}>AUDIO FEATURES</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Loudspeaker </Text></View>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Yes</Text></View>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View style={{ backgroundColor: 'silver', height: 40, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 15 }}>CONNECTIVITY FEATURES</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Bluetooth Version</Text></View>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Yes</Text></View>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>USB</Text></View>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Yes</Text></View>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>NTC Support</Text></View>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Yes</Text></View>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>OTG Support</Text></View>
                                <View style={{ width: '50%' }}><Text style={{ color: 'black', fontSize: 15 }}>Yes</Text></View>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View style={{ backgroundColor: 'silver', height: 40, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 15 }}>Product Image Gallery</Text>
                            </View>

                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, alignContent: 'center', marginTop: 10 }}>
                                    <Image
                                        source={{ uri: item.ItemImg.Img1 }}
                                        style={{ width: '100%', height: 300 }}
                                    />
                                </View>

                                <View style={{ flex: 1, alignContent: 'center', marginTop: 10 }}>
                                    <Image
                                        source={{ uri: item.ItemImg.Img2 }}
                                        style={{ width: '100%', height: 300 }}
                                    />
                                </View>

                                <View style={{ flex: 1, alignContent: 'center', marginTop: 10 }}>
                                    <Image
                                        source={{ uri: item.ItemImg.Img3 }}
                                        style={{ width: '100%', height: 300 }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

            </ScrollView>




            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity
                    onPress={() => isCartlisted(item.id) ? removeFromCart(item.id) : addToCarts(item)}
                    style={{ flexDirection: 'row', backgroundColor: '#bdb7b7', width: '50%', height: 50, justifyContent: 'center', alignItems: 'center',borderTopLeftRadius:10 }}>
                    <Image
                        source={isCartlisted(item.id) ? bin : addtocart}
                        style={{ width: 20, height: 20, tintColor: 'black',marginRight:10 }}
                    />
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize:12 }}>{isCartlisted(item.id) ?  "REMOVE TO CART" : "ADD TO CART"}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=>{ToastAndroid.show("Your Order Is Successfully Done",2000)}}
                    style={{ flexDirection: 'row', backgroundColor: '#ff4b23', width: '50%', height: 50, justifyContent: 'center', alignItems: 'center', borderTopRightRadius:10 }}>
                    <Image
                        source={thunder}
                        style={{ width: 20, height: 20, tintColor: 'white',marginRight:10 }}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold',fontSize:12 }}>BUY NOW</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },

    backView: {
        backgroundColor: '#ff4b23',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center'
    },

    backImg: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },

    backTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
    },

    imgBody: {
        flex:1,
        marginTop: 10
    },

    swipeImg: {
        height: 200,
        backgroundColor: 'white'
    },

    imgView: {
        height: 300,
        width: '100%'
    },

    imgStyle: {
        width: 400,
        height: 400,
        backgroundColor: 'white',
        position: 'relative'
    },

    subBody: {
        flex:1,
        marginLeft: 10,
    },

    heading: {
        fontSize: 18,
        color: 'black',
        fontWeight:'bold'
    },

    amountView: {
        marginTop: 20,
        backgroundColor: '#f2d5b1',
        height: 50,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    stockView: {
        marginTop: 10,
        flex:1
    },

    EffView: {
        borderWidth: 1,
        borderColor: '#ff4b23',
        marginTop: 20,
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight:10,
        height:50
    },

    EffPrice: {
        marginLeft: 10,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },

    FeatureView: {
        flex:1,
        marginLeft: 5,
        marginTop: 30,
        marginRight:10
    },

    specView: {
        marginTop: 20,
        width: '98%',
        backgroundColor: '#d6d2d2',
    },

    specHeadingView: {
        backgroundColor: '#ff4b23',
        alignItems: 'center'
    },
});

export default Details;