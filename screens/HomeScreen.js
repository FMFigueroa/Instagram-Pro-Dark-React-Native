import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POSTS} from '../data/posts';
import BottomTabs, {bottomTabIcons} from '../components/home/BottomTabs';
import {Divider} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      {/* <DynamicDivider /> */}
      <ScrollView >
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
    backgroundColor: 'black',
    flex: 1,
  },
});
export default HomeScreen;
