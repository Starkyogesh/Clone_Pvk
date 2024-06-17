import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { logOutProfile, getProfile } from "./SqlData";

const back = require('../images/back.png');
const heart = require('../images/heart.png');
const addtocart = require('../images/add-to-cart.png');

const Account = ({ navigation }) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getProfile(setUserData)
    }, []);


    const handleLogOut = () => {
        logOutProfile()
        navigation.navigate("Home")   
    }

    return (
        <SafeAreaView>

            {/* back button */}
            <View style={styles.backView}>
                <TouchableOpacity style={styles.backView} onPress={() => navigation.goBack()}>
                    <Image
                        source={back}
                        style={styles.backImg}
                    />
                    <Text style={styles.backTxt}>My Account</Text>
                </TouchableOpacity>
            </View>

            {/* sub View */}
            <View style={{ height: '90%', alignItems: 'center' }}>
                <View style={{ width: '100%', eight: 100, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Wishlist")}
                        style={{ width: '45%', borderWidth: 1, height: 50, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10, flexDirection: 'row' }}>
                        <Image
                            source={heart}
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 10,
                                tintColor: '#ff4b23'
                            }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'black' }}>Wishlist</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Cart")}
                        style={{ width: '45%', borderWidth: 1, height: 50, marginRight: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10, flexDirection: 'row' }}>
                        <Image
                            source={addtocart}
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 10,
                                tintColor: '#ff4b23'
                            }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'black' }}>Cart</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', marginTop:30, borderWidth:0.5 }}>
                    <View style={{width:'90%',marginLeft:20,height:250}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:10}}>Account Setting</Text>
                        
                        <View style={{marginLeft:10,flexDirection:'row',marginTop:30}}>
                            <Text style={{width:'30%',fontSize:14,fontWeight:'bold',color:'black'}}>Name</Text>
                            <Text style={{width:'70%',fontSize:14,fontWeight:'bold',color:'black'}}>:  {userData.userName}</Text>
                        </View>

                        <View style={{marginLeft:10,flexDirection:'row',marginTop:10}}>
                            <Text style={{width:'30%',fontSize:14,fontWeight:'bold',color:'black'}}>Mail id</Text>
                            <Text style={{width:'70%',fontSize:14,fontWeight:'bold',color:'black'}}>:  {userData.userMail}</Text>
                        </View>

                        <View style={{marginLeft:10,flexDirection:'row',marginTop:10}}>
                            <Text style={{width:'30%',fontSize:14,fontWeight:'bold',color:'black'}}>Phone No</Text>
                            <Text style={{width:'70%',fontSize:14,fontWeight:'bold',color:'black'}}>:  {userData.userPhone}</Text>
                        </View>

                        <View style={{marginLeft:10,flexDirection:'row',marginTop:10}}>
                            <Text style={{width:'30%',fontSize:14,fontWeight:'bold',color:'black'}}>Password</Text>
                            <Text style={{width:'70%',fontSize:14,fontWeight:'bold',color:'black'}}>:  {userData.userPassword}</Text>
                        </View>
                    </View>
                </View>

                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={handleLogOut} style={{alignItems:'center',justifyContent:'center',backgroundColor:'#ff4b23',width:200,height:50,borderRadius:20,marginTop:100}}>
                        <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Log Out</Text>
                    </TouchableOpacity>
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
        alignItems: 'center'
    },

    backImg: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },

    backTxt: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
});

export default Account;