import React from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';


const back = require('../images/back.png');

const Policies = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{}}>
                {/* back button */}
                <View style={styles.backView}>
                    <TouchableOpacity
                        style={styles.backView} onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={back}
                            style={styles.backImg}
                        />
                        <Text style={styles.backTxt}>Legal Policies</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ backgroundColor: 'white', height: 710, width: '100%' }}>
                    
                        <View style={{ backgroundColor: 'white', marginLeft: 20, marginRight: 20 }}>
                            <TouchableOpacity style={styles.btn1}>
                                <Text style={styles.btn1Txt}>Privacy Policy - General</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn2}>
                                <Text style={styles.btn2Txt}>
                                    We Provide these Privacy highlights for your convenience but we encourage you to review the full
                                    Poorvika mobiles Private Limited , Chennai, India. COllection, Use, Disclosure, and Security of Personal
                                    information.
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: 'white', marginLeft: 20, marginRight: 20 }}>
                            <TouchableOpacity style={styles.btn1}>
                                <Text style={styles.btn1Txt}>Access and Choice</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn2}>
                                <Text style={styles.btn2Txt}>
                                    You may access and modify your contact information by visiting poorvikamobile.com, visiting a Poorvika mobile
                                    retail store, or by contacting Customer Service. If you are a Poorvika customer and you manage your account online,
                                    you can change your marketing preferences by logging into your my Poorvika Profile.
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: 'white', marginLeft: 20, marginRight: 20 }}>
                            <TouchableOpacity style={styles.btn1}>
                                <Text style={styles.btn1Txt}>Other Privacy Information</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn2}>
                                <Text style={styles.btn2Txt}>
                                    We do not solicit children to purchase our services or products and our Web sites are not designed to attract children
                                    under the age of 13. We may use cookies, Web beacons, and similar technologies. Poorvika follows the ISO's Best Practices
                                    Guidelines for Location-Based Services.
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: 'white', marginLeft: 20, marginRight: 20 }}>
                            <TouchableOpacity style={styles.btn1}>
                                <Text style={styles.btn1Txt}>Policy Updates and Contact Information</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn2}>
                                <Text style={styles.btn2Txt}>
                                    We may update this policy from time to time and you should refer to it often for the latest information and the effective
                                    date of any changes. If we intend to use or disclose Personal information in a way that is materially different from thet 
                                    stated in this policy at the time it was collected, we will post notice of the change on our Web site's home page for at least 
                                    10 days before we implement the change and give you an opportunity to opt-out of the proposed use.
                                </Text>
                            </TouchableOpacity>
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
        width: 50,
        height: 50,
        tintColor: 'white',
    },

    backTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold'
    },

    btn1:{
        marginTop:20
    },

    btn1Txt:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },

    btn2:{
        marginLeft:10
    },

    btn2Txt:{
        color:'black',
        fontSize:17,
        marginLeft:10
    }
});

export default Policies;