import React,{useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    SafeAreaView,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import { insertUser } from "./SqlData";


const back = require('../images/back.png');
const logo = require('../images/pvk-Logo.png');
const lockImg = require('../images/login.png');
const loginImg = require('../images/people.png');
const call = require('../images/call.png');
const mail = require('../images/mail.png');

const SignUp = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handlesign = () => {

        if (!userName) {
            ToastAndroid.show('UserName Are Required.',2000);
            return;
        }else if(!userMail){
            ToastAndroid.show('Mail-Id Are Required.',2000);
            return;
        }else if(!userPhone){
            ToastAndroid.show('Phone Number Are Required.',2000);
            return;
        }else if(!userPassword){
            ToastAndroid.show('Password Are Required.',2000);
            return;
        }

        insertUser(
            userName,
            userMail,
            userPhone,
            userPassword,
            () => {
                ToastAndroid.show('Your Account Created',2000);
            },
            (error) => {
                ToastAndroid.show('Error inserting user:',2000);
            }
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                {/* back button */}
                <View style={styles.backView}>
                    <TouchableOpacity style={styles.backView} onPress={() => navigation.goBack()}>
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
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Let's Get Started!</Text>
                    <Text style={{ color: 'black', fontSize: 14, marginTop: 10 }}>Create an account</Text>
                </View>

                {/* input View */}
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <View style={{ marginTop: 20, flexDirection: 'row', borderWidth: 1, borderRadius: 30, height: 40, alignItems: 'center' }}>
                        <Image
                            source={loginImg}
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 20,
                            }}
                        />
                        <TextInput placeholder="Name" placeholderTextColor={'black'} onChangeText={(text)=>setUserName(text)}
                            style={{
                                width: '80%',
                                marginLeft: 10,
                                fontSize: 14,
                                borderRadius: 30,
                                color:'black',
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', borderWidth: 1, borderRadius: 30, height: 40, alignItems: 'center' }}>
                        <Image
                            source={mail}
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 20
                            }}
                        />
                        <TextInput placeholder="Email" placeholderTextColor={'black'} onChangeText={(text)=>setUserMail(text)}
                            style={{
                                width: '80%',
                                marginLeft: 10,
                                fontSize: 14,
                                borderRadius: 30,
                                color:'black',
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', borderWidth: 1, borderRadius: 30, height: 40, alignItems: 'center' }}>
                        <Image
                            source={call}
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 20
                            }}
                        />
                        <TextInput placeholder="+91 Mobile Number" placeholderTextColor={'black'} onChangeText={(text)=>setUserPhone(text)}
                            style={{
                                width: '80%',
                                marginLeft: 10,
                                fontSize: 14,
                                borderRadius: 30,
                                color:'black',
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', borderWidth: 1, borderRadius: 30, height: 40, alignItems: 'center' }}>
                        <Image
                            source={lockImg}
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 20
                            }}
                        />
                        <TextInput placeholder="Password" placeholderTextColor={'black'} onChangeText={(text)=>setUserPassword(text)}
                            style={{
                                width: '80%',
                                marginLeft: 10,
                                fontSize: 14,
                                borderRadius: 30,
                                color:'black',
                            }}
                        />
                    </View>
                </View>

                {/* signup btn */}
                <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity 
                        onPress={handlesign}
                        style={{ height: 40, backgroundColor: '#ff4b23', justifyContent: 'center', width: 200, borderRadius: 40 }}
                    >
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: 'bold' }}>Create Account</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, width: '100%' }}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ color: 'black', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}>Already have an account? </Text>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                            onPress={()=>navigation.goBack()}
                        >
                            <Text style={{ color: '#ff4b23', fontSize: 12, textDecorationLine: 'underline', fontWeight: 'bold' }}>Login</Text>
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
});

export default SignUp;