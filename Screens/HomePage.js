import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList,
    Linking,
    Animated
} from 'react-native';
import Swiper from 'react-native-swiper';

import FrontProduct from './FrontProduct';
import Data from './Datas.json';

const PvkLogo = require("../images/Poorvika-english-logo.png");
const userLog = require("../images/active-user.png");
const search = require("../images/search.png");
const heart = require('../images/heart.png');
const phone = require('../images/telephone.png');
const whatsapp = require('../images/whatsapp.png')

// mobile img
const appleAdds1 = require('../images/appleHeading.webp');
const appleAdds2 = require('../images/appleImg1.webp');
const appleAdds3 = require('../images/appleImg2.webp');

const home = ({ navigation }) => {

    const number = '7448706610'

    const [Product, setProduct] = useState(Data.FrontMobile);
    const [products, setProducts] = useState(Data.FrontLaptop);

    const [add] = useState([
        {
            img: require("C:/Users/Yogesh/Desktop/project/Clone_Pvk/images/adds/Ipad-Air.jpg")
        },
        {
            img: require("C:/Users/Yogesh/Desktop/project/Clone_Pvk/images/adds/Samsung.jpg")
        },
        {
            img: require("C:/Users/Yogesh/Desktop/project/Clone_Pvk/images/adds/Vivo.jpg")
        },
    ])

    return (
        <SafeAreaView style={styles.safeArea}>
            <View >
                <StatusBar backgroundColor={"#ff4b23"} barStyle={'light-content'} />
                <View style={styles.header}>
                    <View style={styles.logoView}>
                        <Image
                            source={PvkLogo}
                            resizeMode='contain'
                            style={styles.logos}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate("LoginView")}>
                            <Image
                                source={userLog}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: 'white',
                                    marginTop: 20,
                                    marginRight: 10,
                                }}
                            />
                        </TouchableOpacity>
                    </View>


                    {/* search view */}
                    <View style={styles.searchBody}>

                        <View style={styles.searchImgView}>
                            <Image
                                style={styles.searchImg}
                                source={search}
                                resizeMode='contain'
                            />
                        </View>

                        <View style={styles.searchView}>
                            <TextInput
                                placeholder='Search Mobile, TV, Accessories'
                                style={styles.userSearch}
                                placeholderTextColor={'black'}
                            />
                        </View>
                    </View>
                </View>

                <ScrollView style={{flex:1}}>
                    <View style={{flex:1}}>
                        <FlatList
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={
                                <>
                                    {/* FrontProduct Area */}
                                    <FlatList
                                        numColumns={2}
                                        ListHeaderComponent={
                                            <>

                                                {/* add view */}
                                                <View style={{ bottom: 10 }}>
                                                    <Swiper showsButtons={true} style={{ height: 200 }} autoplay activeDotColor='#ff4b23'>
                                                        {add.map((imag) => (
                                                            <View style={{ alignItems: 'center' }}>
                                                                <Image
                                                                    style={{ width: 400, height: 200 }}
                                                                    source={imag.img}
                                                                    resizeMode='contain'
                                                                />
                                                            </View>
                                                        ))}
                                                    </Swiper>
                                                </View>

                                                {/* logo view */}
                                                <View style={{ backgroundColor: '#ffffff', height: 90, bottom: 20 }}>
                                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 20 }}>
                                                            <TouchableOpacity style={styles.logoBtn} onPress={() => navigation.navigate("AppleView")}>
                                                                <Image style={styles.logoRowImg} source={require('../images/Brandlogos/Apple-logo.png')} />
                                                                <Text style={styles.logoTxt}>Apple</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity style={styles.logoBtn} onPress={() => navigation.navigate("SamsungView")}>
                                                                <Image style={styles.logoRowImg} source={require('../images/Brandlogos/Samsung-logo.png')} />
                                                                <Text style={styles.logoTxt}>Samsung</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity style={styles.logoBtn} onPress={() => navigation.navigate("RealmeView")}>
                                                                <Image style={styles.logoRowImg} source={require('../images/Brandlogos/Realme-logo.png')} />
                                                                <Text style={styles.logoTxt}>Realme</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity style={styles.logoBtn} onPress={() => navigation.navigate("HpView")}>
                                                                <Image style={styles.logoRowImg} source={require('../images/Brandlogos/Hp-logo.png')} />
                                                                <Text style={styles.logoTxt}>Hp</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity style={styles.logoBtn} onPress={() => navigation.navigate("OppoView")}>
                                                                <Image style={styles.logoRowImg} source={require('../images/Brandlogos/Oppo-logo.png')} />
                                                                <Text style={styles.logoTxt}>Oppo</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity style={styles.logoBtn} onPress={() => navigation.navigate("LenovoView")}>
                                                                <Image style={styles.logoRowImg} source={require('../images/Brandlogos/Lenovo-logo.png')} />
                                                                <Text style={styles.logoTxt}>Lenovo</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </ScrollView>
                                                </View>

                                                {/* 5G mobiles view */}
                                                <View style={{ marginLeft: 10, marginRight:10 }}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>5G Mobile</Text>
                                                        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate("MobileView")}>
                                                            <Text style={{ fontSize: 14, color: 'black' }}>View All</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </>
                                        }
                                        data={Product}
                                        renderItem={({ item, index }) => (
                                            <FrontProduct item={item} />
                                        )}
                                        showsVerticalScrollIndicator={false}
                                    />


                                    {/* laptop View */}
                                    <View style={{ marginTop: 20, marginLeft: 10 ,marginRight:10 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Laptops</Text>
                                            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate("LaptopView")}>
                                                <Text style={{ fontSize: 14, color: 'black' }}>View All</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </>
                            }
                            data={products}
                            renderItem={({ item, index }) => (
                                <FrontProduct item={item} />
                            )}
                        />
                    </View>

                    <View style={styles.appleAdds}>
                        <View style={{ width: '80%', marginLeft: 10, marginTop: 10 }}>
                            <Image
                                source={appleAdds1}
                                style={{
                                    width: '100%',
                                    height: 40
                                }}
                            />
                        </View>

                        <View style={{ width: '90%', marginLeft: 10 }}>
                            <Image
                                source={appleAdds2}
                                style={{
                                    width: '105%',
                                    height: 200
                                }}
                            />

                            <Image
                                source={appleAdds3}
                                style={{
                                    width: '105%',
                                    height: 300
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', width: '100%', height: 50, justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL('https://wa.me/+917448706610')
                            }}
                                style={{ flexDirection: 'row', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={whatsapp}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: 'green'
                                    }}
                                />
                                <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginLeft: 5 }}>Chat with us</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`tel:${number}`)
                            }}
                                style={{ flexDirection: 'row', marginRight: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={phone}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: 'green'
                                    }}
                                />
                                <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginLeft: 5 }}>Speak to us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    header: {
        backgroundColor: '#ff4b23',
        alignItems: 'center'
    },

    logoView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    logos: {
        width: 200,
        height: 70,
        marginRight: '30%'
    },

    searchBody: {
        backgroundColor: 'white',
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom:10,
        height:40
    },

    searchView: {
        width: 300
    },

    userSearch: {
        fontSize: 12,
        color:'black'
    },

    searchImgView: {
        marginLeft: 5
    },

    searchImg: {
        width: 30,
        height: 30
    },

    logoBtn: {
        marginLeft: 20,
        justifyContent: 'center'
    },

    logoRowImg: {
        width: 50,
        height: 50
    },

    logoTxt: {
        textAlign: 'center',
        marginTop: 5,
        color: 'black',
        fontWeight: '500',
        fontSize:12
    },

    appleAdds: {
        backgroundColor: 'white',
        width: '100%',
        marginTop:20
    },
});

export default home;