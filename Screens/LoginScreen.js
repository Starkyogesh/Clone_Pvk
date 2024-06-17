import React,{useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Image,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import { getUser } from "./SqlData";


const back = require('../images/back.png');
const logo = require('../images/pvk-Logo.png');
const lockImg = require('../images/login.png');
const loginImg = require('../images/people.png');

const Login = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handlelog = () => {
        if(!userName){
            ToastAndroid.show('UserName Are Required.',2000);
            return;
        }else if(!userPassword){
            ToastAndroid.show('Password Are Required',2000);
            return;
        }

        getUser(
            userName,
            userPassword,
            (results) => {
                if (results.rows.length > 0) {
                    navigation.navigate('Home', { getUser });
                } else {
                    ToastAndroid.show('Error Fetching user:',2000);
                }
            },
            (error) => {
                ToastAndroid.show('Error Fetching user:',2000);
            }
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{width:'100%'}}>
                {/* back button */}
                <View style={styles.backView}>
                    <TouchableOpacity style={styles.backView} onPress={() => navigation.navigate("Home")}>
                        <Image
                            source={back}
                            style={styles.backImg}
                        />
                    </TouchableOpacity>
                </View>

                {/* logo View */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={logo}
                        style={{
                            width: 150,
                            height: 150,
                            marginTop: 150
                        }}
                    />
                </View>

                {/* heading View */}
                <View style={{ marginTop: 130, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>Welcome</Text>
                    <Text style={{ color: 'black', fontSize: 14, marginTop: 10 }}>Login to your existing account</Text>
                </View>

                {/* input View */}
                <View style={{width:'100%' }}>
                    <View style={{ marginTop: 30, flexDirection: 'row', borderWidth: 1, borderRadius: 30, height: 40, alignItems: 'center',marginRight:20,marginLeft:20 }}>
                        <Image
                            source={loginImg}
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 20
                            }}
                        />
                        <TextInput placeholder="Name" placeholderTextColor={'black'} onChangeText={(text) => setUserName(text)}
                            style={{
                                width: '80%',
                                marginLeft: 10,
                                fontSize: 14,
                                borderRadius: 30,
                                color:'black',
                            }}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnTxt}>
                        <Text style={styles.txts}>Use Text Keypad</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 20, flexDirection: 'row', borderWidth: 1, borderRadius: 30, height: 40, alignItems: 'center',marginRight:20,marginLeft:20 }}>
                        <Image
                            source={lockImg}
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 20
                            }}
                        />
                        <TextInput placeholder="Enter Password" placeholderTextColor={'black'} onChangeText={(text) => setUserPassword(text)}
                            style={{
                                width: '80%',
                                marginLeft: 10,
                                fontSize: 14,
                                borderRadius: 30,
                                color:'black',
                            }}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnTxt}>
                        <Text style={[styles.txts, { textDecorationLine: 'underline' }]}>Forgot Password?</Text>
                    </TouchableOpacity>


                    <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity 
                            onPress={handlelog}
                            style={{ height: 40, backgroundColor: '#ff4b23', justifyContent: 'center', width: 180, borderRadius: 40 }}
                        >
                            <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* sign View */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, width: '100%' }}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ color: 'black', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}>Don't have an account? </Text>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                            onPress={()=>navigation.navigate("SignUpView")}
                        >
                            <Text style={{ color: '#ff4b23', fontSize: 12, textDecorationLine: 'underline', fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{ color: 'black', fontSize: 12, justifyContent: 'center', fontWeight: 'bold'}}>I agree to Poorvika's </Text>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("PolicyView")} 
                            style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#ff4b23', fontSize: 12, textDecorationLine: 'underline', fontWeight: 'bold' }}>Privacy Policy & Terms</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },

    backView: {
        backgroundColor: 'white',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center'
    },

    backImg: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginLeft: 10
    },

    btnTxt: {
        marginTop: 10,
        left:'65%',
        width:'100%'
    },

    txts: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    },
});

export default Login;