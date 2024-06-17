import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';


const back = require('../images/back.png');
const plus = require('../images/plus.png');
const minus = require('../images/minus.png');

const Category = ({ navigation }) => {

    const [isView1, setIsView1] = useState(false);
    const [isView2, setIsView2] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                {/* back button */}
                <View style={styles.backView}>
                    <TouchableOpacity
                        style={styles.backView} onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={back}
                            style={styles.backImg}
                        />
                        <Text style={styles.backTxt}>Shop by Category</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.subView}>
                        <View style={{}}>
                            <TouchableOpacity
                                onPress={() => setIsView1(!isView1)}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                                <Text style={{ color: 'black', fontSize: 18, paddingLeft: 40, fontWeight: 'bold' }}>Mobiles</Text>
                                <Image
                                    source={isView1 === true ? minus : plus}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 30,
                                        tintColor: '#999191'
                                    }}
                                />
                            </TouchableOpacity>

                            {
                                isView1 === true && (
                                    <View style={{
                                        width: 300,
                                        backgroundColor: 'white',
                                        marginLeft: 40,
                                        marginTop:20
                                    }}>
                                        <TouchableOpacity 
                                            onPress={()=>navigation.navigate("AppleView")}
                                            style={{marginTop:2,marginLeft:30}}
                                        >
                                            <Text style={{color:'black',fontSize:16}}>Apple</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={()=>navigation.navigate("SamsungView")} 
                                            style={{marginTop:10,marginLeft:30}}
                                        >
                                            <Text style={{color:'black',fontSize:16}}>Samsung</Text>
                                        </TouchableOpacity>


                                        <TouchableOpacity
                                            onPress={()=>navigation.navigate("RealmeView")}
                                            style={{marginTop:10,marginLeft:30}}
                                        >
                                            <Text style={{color:'black',fontSize:16}}>Realme</Text>
                                        </TouchableOpacity>


                                        <TouchableOpacity
                                            onPress={()=>navigation.navigate("OppoView")}
                                            style={{marginTop:10,marginLeft:30}}
                                        >
                                            <Text style={{color:'black',fontSize:16}}>Oppo</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }



                            <TouchableOpacity 
                                onPress={()=>setIsView2(!isView2)}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}
                            >
                                <Text style={{ color: 'black', fontSize: 18, paddingLeft: 40, fontWeight: 'bold' }}>Computers</Text>
                                <Image
                                    source={isView2 === true ? minus : plus}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 30,
                                        tintColor: '#999191'
                                    }}
                                />
                            </TouchableOpacity>

                            {
                                isView2 === true && (
                                    <View style={{
                                        width: 300,
                                        marginLeft: 40,
                                        marginTop:2
                                    }}>
                                        <TouchableOpacity
                                            onPress={()=>navigation.navigate("HpView")}
                                            style={{marginTop:10,marginLeft:30}}
                                        >
                                            <Text style={{color:'black',fontSize:16}}>Hp</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={()=>navigation.navigate("LenovoView")}
                                            style={{marginTop:10,marginLeft:30}}
                                        >
                                            <Text style={{color:'black',fontSize:16}}>Lenovo</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
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
        fontSize: 20,
        fontWeight:'bold'
    },

    subView: {
        width: '100%',
        height: 700,
        backgroundColor:'white',
    }
});

export default Category;