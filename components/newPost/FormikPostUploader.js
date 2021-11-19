import React, {useState,useEffect} from 'react';
import {View, Image, TextInput, Button,Text} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Divider} from 'react-native-elements';
import validUrl from 'valid-url';
import {db, auth} from '../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const PLACEHOLDER_IMG =
  'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';

const uploadPostSchema = Yup.object().shape({
  imageURL: Yup.string().url().required('A URL is Required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.'),
});

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);


  useEffect(() => {
    
    const getCurrentUser =  () => {
      
      console.log();
    };
    getCurrentUser();
  
  }, []);
  

  return (
    <Formik
      initialValues={{caption: '', imageURL: ''}}
      onSubmit={values => {
        console.log(values)
        console.log('Your post was submitted successfully')
        navigation.goBack()
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
      >
          
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{uri: validUrl.isUri(thumbnailUrl)  ? thumbnailUrl: PLACEHOLDER_IMG}}
              style={{width: 80, height: 80}}
            />
            <View style={{flex:1, marginLeft:12}}>
              <TextInput
                style={{
                  color: 'white',
                  fontSize: 18,
                }}
                placeholderTextColor="gray"
                placeholder="Write a caption..."
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 14}}
            placeholderTextColor="gray"
            placeholder="Enter Image Url"
            onChangeText={handleChange('imageURL')}
            onBlur={handleBlur('imageURL')}
            value={values.imageURL}
          />
          {errors.imageURL && (
              <Text style={{fontSize:10, color:'red'}}>
                  {errors.imageURL}
              </Text>
          )}
          <Button onPress={handleSubmit} title='Share' disabled={ !isValid } />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
