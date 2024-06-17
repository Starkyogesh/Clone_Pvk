import React, { useState } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Modal,
    ScrollView
} from 'react-native';

import Data from './Datas.json';
import FrontProduct from "./FrontProduct";


const back = require('../images/back.png')
const sorts = require('../images/sort-descending.png')
const downarrow = require("../images/arrow-down-sign-to-navigate.png")

const LenovoScreen = ({ navigation }) => {
    const [product, setProduct] = useState(Data.Lenovo)

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* back button */}
                <View style={styles.backView}>
                    <TouchableOpacity style={styles.backView} onPress={() => navigation.goBack()}>
                        <Image
                            source={back}
                            style={styles.backImg}
                        />
                        <Text style={styles.backTxt}>Lenovo</Text>
                    </TouchableOpacity>
                </View>

                {/* sort view */}
                <View style={styles.filterView}>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 20 }} onPress={toggleMenu}>
                            <Image
                                source={sorts}
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                            <Text style={{ color: 'black', fontSize: 14, marginLeft: 10 }}>Sort By</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* product View */}
                <View style={{ backgroundColor: 'white',flex:1 }}>
                    <ScrollView style={{ flex:1,marginTop:10, backgroundColor: 'white' }}>
                        <FlatList
                            numColumns={2}
                            data={product}
                            renderItem={({ item, index }) => (
                                <FrontProduct item={item} />
                            )}
                        />
                    </ScrollView>
                </View>

                {/* modal sort View */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={menu}
                    onRequestClose={() => { setMenu(false) }}
                >
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, height: 50 }}>
                            <Text style={{ fontSize: 20, color: 'black', marginLeft: 10, marginTop: 10 }}>Sort By</Text>
                            <TouchableOpacity onPress={toggleMenu}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                        marginRight: 10,
                                        marginTop: 10
                                    }}
                                    source={downarrow}
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                            onPress={() => {
                                let tempSort = product.sort((a, b) => a.Brand > b.Brand ? 1 : -1,);
                                setProduct(tempSort)
                                setMenu(false)
                            }}
                        >
                            <Text style={{ fontSize: 20, color: 'black' }}>Sort By Name</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                            onPress={() => {
                                let highSort = product.sort((a, b) => b.SortPrice - a.SortPrice,)
                                setProduct(highSort)
                                setMenu(false)
                            }}
                        >
                            <Text style={{ fontSize: 20, color: 'black' }}>Price - High To Low</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                            onPress={() => {
                                let lowSort = product.sort((a, b) => a.SortPrice - b.SortPrice,)
                                setProduct(lowSort)
                                setMenu(false)
                            }}
                        >
                            <Text style={{ fontSize: 20, color: 'black' }}>Price - Low To High</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>
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

    filterView: {
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20,
        width: 120,
    },

    btnView: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: 30,
        justifyContent: 'center',
        width: 120,
        borderRadius: 40
    },

    modalView: {
        backgroundColor: 'white',
        marginTop: '100%',
        height: 200,
        width: '80%',
        marginLeft: '10%',
        borderRadius: 30,
        borderWidth: 1
    },
});

export default LenovoScreen;
