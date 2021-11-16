import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {USERS} from '../../data/users';

const Users = USERS.filter(USERS => USERS.id > 0);

const Stories = () => {
  return (
    <View style={Styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <User/>
        {Users.map((story, index) => (
          <View key={index} style={{width: 80, marginLeft: 5}}>

            <LinearGradient
              colors={[
                '#FF1493',
                '#FF63b4',
                '#FFB6C1',
                '#FFA07A',
                '#FF7F50',
                '#FF4500',
              ]}
              start={{x: 1.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              style={Styles.grediant}>
              <View style={Styles.storyContainer}>
                <TouchableOpacity>
                  <Image source={{uri: story.image}} style={Styles.story} />
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <View style={Styles.containerUsers}>
              <Text style={Styles.usersStory}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLocaleLowerCase() + '...'
                  : story.user.toLocaleLowerCase()}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const User = () => (
  <View style={Styles.containerStoryUser}>
  <TouchableOpacity>
    <Image
      source={{
        uri: USERS[0].image,
      }}
      style={Styles.user}
    />
  </TouchableOpacity>
  <TouchableOpacity>
    <View style={Styles.postBadge}></View>
    <Image
      style={Styles.icon}
      source={{
        uri: 'https://img.icons8.com/fluency/48/000000/add.png',
      }}
    />
  </TouchableOpacity>
  <View style={Styles.containerUser}>
    <Text style={Styles.userStory}>Your Story</Text>
  </View>
</View>
);
const Styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  grediant: {
    height: 75,
    width: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  storyContainer: {
    flex: 1.0,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '93%',
    borderRadius: 50,
    margin: 2,
    backgroundColor: 'white',
  },
  story: {
    width: 63,
    height: 63,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  containerUsers: {
    marginTop: 5,
    alignItems: 'center',
  },
  usersStory: {
    color: 'white',
    fontSize: 11,
  },
  containerStoryUser: {
    width: 80,
    marginLeft: 15,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
  },
  user: {
    height: 68,
    width: 68,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  containerUser: {
    marginTop: 8,
    alignItems: 'center',
  },
  userStory: {
    color: 'white',
    fontSize: 11,
  },
  postBadge: {
    backgroundColor: '#000000',
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    left: 52,
    width: 19,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: 53,
    zIndex: 100,
    
  },
});
export default Stories;