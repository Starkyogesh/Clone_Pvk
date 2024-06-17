import React,{useEffect} from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    Image,
    StyleSheet
} from 'react-native';


const pvkLogo = {uri:"https://iconape.com/wp-content/png_logo_vector/poorvika-mobile-logo.png"}

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Home")
        },3000)
    },[])

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={"#ff4b23"}  barStyle={'light-content'} />
            <Image
                resizeMode='contain'
                source={pvkLogo}
                style={styles.logo}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },

    logo:{
        width:200,
        height:200,
        tintColor:'#ff4b23'
    },
});

export default Splash;