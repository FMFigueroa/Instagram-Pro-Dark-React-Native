import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const SignUpForm = ({navigation}) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2,'An username is required'),
    password: Yup.string()
      .required('Password is Required')
      .min(8, 'Your password has to have at last 8 characters'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '',username:'', password: ''}}
        onSubmit={values => {
          console.log(values), console.log('Form Submitted');
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleBlur, handleChange, handleSubmit, values, isValid}) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 2
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
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
              disabled={!isValid}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                <Text style={styles.textLink}>Log in</Text>
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
    marginTop: 80,
    marginHorizontal: 10,
  },
  inputField: {
    height: 45,
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  textLink: {
    alignSelf: 'flex-end',
    color: '#6BB0F5',
    marginBottom: 20,
    marginLeft: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default SignUpForm;