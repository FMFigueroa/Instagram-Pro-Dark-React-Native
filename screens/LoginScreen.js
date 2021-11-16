import React from 'react';
import {View, Text,SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import LoginForm from '../components/loginScreen/LoginForm';

const INSTAGRAM_LOGO =
  'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';

const LoginScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View style={styles.logocontainer}>
        <Image source={{uri: INSTAGRAM_LOGO, width: 100, height: 100}} />
      </View>
      <LoginForm navigation={navigation} />
    </ScrollView>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logocontainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
export default LoginScreen;
