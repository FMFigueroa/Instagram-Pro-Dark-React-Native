import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required("Password is Required")
      .min(8, "Your password has to have at last 8 characters"),
  });

  /* Firebase 9 */
  const onLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login Success with Firebase🔥");
      /* navigation.navigate("HomeScreen"); */
    } catch (error) {
      Alert.alert(
        "⚠ ATTENTION ⚠",
        error.message + "\n\n What would you like to do next ? 🤷‍♂️",
        [
          {
            text: "Try Again",
            onPress: () => console.log("Try Again Pressed"),
            style: "cancel",
          },
          { text: "Sign Up", onPress: () => navigation.push("SignUpScreen") },
        ]
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#a6a6a6"
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={false}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#a6a6a6"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <TouchableOpacity>
              <Text style={styles.textLink}>Forgot Password?</Text>
            </TouchableOpacity>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text style = {{color:'white'}}>Dont have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
                <Text style={styles.textLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    marginHorizontal: 10,
  },
  inputField: {
    height: 45,
    borderRadius: 4,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  textLink: {
    alignSelf: "flex-end",
    color: "#66b3ff",
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
