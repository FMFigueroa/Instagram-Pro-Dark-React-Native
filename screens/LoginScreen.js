import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../components/loginScreen/LoginForm";

const INSTAGRAM_LOGO =
  "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";

const LoginScreen = ({ navigation }) => (
  <LinearGradient
    colors={[
<<<<<<< HEAD
<<<<<<< HEAD
      "#000",
      "#8c8c8c",
      "#bfbfbf",
      "#bfbfbf",
      "#bfbfbf",
      "#8c8c8c",
      "#404040",
      

=======
=======
>>>>>>> acac71b971a9231adbd5b9370810426e278cd1c2
      "#ff1a8c",
      "#ff3399",
      "#ff80bf",
      "#ffcce6",
      "#FFF",
      "#FFF",
      "#FFF",
      "#DDA0DD",
      "#9933ff",
      "#400080",
      "#1a0033",
<<<<<<< HEAD
>>>>>>> refs/remotes/origin/main
=======
>>>>>>> acac71b971a9231adbd5b9370810426e278cd1c2
    ]}
    start={{ x: 1.0, y: 0.0 }}
    end={{ x: 1.0, y: 1.0 }}
    style={styles.container}
  >
    <SafeAreaView style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.logocontainer}>
          <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />
        </View>
        <Text style={styles.title}>Instagram Pro Dark</Text>
        <Text style={styles.subtitle}>Welcome...Enjoy it</Text>
        <LoginForm navigation={navigation} />
        <Text style={styles.titlefooter}>
          Copyright &#169; Felix Figueroa. All Rights Reserved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  logocontainer: {
    alignItems: "center",
  },
  titlefooter: {
<<<<<<< HEAD
<<<<<<< HEAD
    marginTop: 100,
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#0d0d0d",
=======
=======
>>>>>>> acac71b971a9231adbd5b9370810426e278cd1c2
    margin: 10,
    fontSize: 10,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#e6e6e6",
<<<<<<< HEAD
>>>>>>> refs/remotes/origin/main
=======
>>>>>>> acac71b971a9231adbd5b9370810426e278cd1c2
  },
});
export default LoginScreen;
