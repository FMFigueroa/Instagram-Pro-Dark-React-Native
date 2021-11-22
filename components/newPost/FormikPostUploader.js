import React, { useState, useEffect } from "react";
import { View, Image, TextInput, Button, Text } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";
import { db, auth } from "../../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

const PLACEHOLDER_IMG =
  "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is Required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUsername = () => {
    const user = auth.currentUser;
    const users = collection(db, "users");
    const q = query(users, where("owner_uid", "==", user.uid), limit(1));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        setCurrentLoggedInUser({
          username: doc.data().username,
          avatar: doc.data().avatar,
        });
      });
    });
    return unsubscribe;
  };
  useEffect(() => {
    getUsername();
  }, []);

  const upLoadPostToFirebase = async (imageUrl, caption) => {
    const docRef = collection(db, "users", auth.currentUser.email, "posts",);
    const unsubscribe = await addDoc(docRef, {
      owner_uid: auth.currentUser.uid,
      user: currentLoggedInUser.username,
      owner_email: auth.currentUser.email,
      avatar: currentLoggedInUser.avatar,
      caption: caption,
      imageUrl: imageUrl,
      timestamp: serverTimestamp(),
      likes: 0,
      likes_by_users: [],
      comments: [],
    }).then(() => {
      console.log("Your post was submitted successfully ✅");
      navigation.goBack();
    });
    return unsubscribe;
  };

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        upLoadPostToFirebase(values.imageUrl, values.caption);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_IMG,
              }}
              style={{ width: 80, height: 80 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{
                  color: "white",
                  fontSize: 18,
                }}
                placeholderTextColor="gray"
                placeholder="Write a caption..."
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 14 }}
            placeholderTextColor="gray"
            placeholder="Enter Image Url"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
