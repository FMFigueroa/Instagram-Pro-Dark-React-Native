import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {auth} from '../../firebase'
import {signOut } from "firebase/auth";



const handleSignout = async () => {
  try {
    await signOut(auth).then(() => {
    Alert.alert('⚠ Signout', '\n\n ✅Logout Sucessful', [
    { text: 'OK', onPress: () => console.log('✅Logout Sucessful') }, 
    ])
    }); 
  } catch (error) {
    console.log(error);
  }
};


const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress = {handleSignout}>
        <Image
          style={styles.logo}
          source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>12</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger--v3.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 26,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Header;
