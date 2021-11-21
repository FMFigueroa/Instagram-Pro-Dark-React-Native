import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";
import {db} from "../firebase";
import {
  collectionGroup,
  query,
  onSnapshot,
} from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  
  const getPosts = () => {
    const q = query(collectionGroup(db, "posts" ));
    const posts = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        console.log(doc.id, " => ", doc.data());
        console.log("**=========================================================================**")       
      });
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      {/* <DynamicDivider /> */}
      <ScrollView>
        <Stories />
        <Divider Width={1} orientation="horizontal" />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

/* const DynamicDivider = () => {
  const [activeScroll, setActiveScroll] = useState(false);

  return (
    <View>
      <Divider Width={1} orientation="horizontal" />
    </View>
  );
}; */

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
