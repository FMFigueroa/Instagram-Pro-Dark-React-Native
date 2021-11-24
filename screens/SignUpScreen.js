import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignUpForm from "../components/signupScreen/SignUpForm";

const INSTAGRAM_LOGO =
  "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";

const SignUpScreen = ({ navigation }) => (
  <LinearGradient
    colors={[
<<<<<<< HEAD
=======
      "#ff1a8c",
      "#ff3399",
      "#ff80bf",
      "#ffcce6",
      "#FFF",
      "#FFF",
      "#FFF",
>>>>>>> refs/remotes/origin/main
      "#DDA0DD",
      "#9933ff",
      "#400080",
      "#1a0033",
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
        <SignUpForm navigation={navigation} />
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
  logocontainer: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
<<<<<<< HEAD
    color: "#fff",
=======
>>>>>>> refs/remotes/origin/main
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
<<<<<<< HEAD
    color: "#fff",
  },
  titlefooter: {
    marginTop: 60,
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#a6a6a6",
=======
  },
  titlefooter: {
    margin: 10,
    fontSize: 10,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#e6e6e6",
>>>>>>> refs/remotes/origin/main
  },
});
export default SignUpScreen;
