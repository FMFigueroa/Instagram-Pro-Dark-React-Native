import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import { db, auth } from "../../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  limit,
} from "firebase/firestore";



const BottomTabs = ({icons}) => {
  //
  const [activeTab, setActiveTab] = useState('Home');

  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUsername = () => {
    const user = auth.currentUser;
    const users = collection(db, "users");
    const q = query(users, where("owner_uid", "==", user.uid), limit(1));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        setCurrentLoggedInUser(doc.data().avatar);
      });
    });
  };
  useEffect(() => {
    getUsername();
  }, []);
  //
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image 
      source={{uri: activeTab === icon.name ? icon.active : icon.inactive }}
      style={[ 
        Styles.icon,
        icon.name === 'Profile' ? Styles.profilePic() : null,
        activeTab === 'Profile' && icon.name === activeTab ? Styles.profilePic(activeTab) : null]} />
    </TouchableOpacity>
  );
  
   const Icons = [
    {
      name: 'Home',
      active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
      name: 'Search',
      active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
      name: 'Reels',
      active: 'https://img.icons8.com/ios-filled/500/ffffff/instagram-reel.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
      name: 'Shop',
      active:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
      name: 'Profile',
      active:
      currentLoggedInUser,
      inactive:
      currentLoggedInUser,
    },
  ];


  return (
    <View styles={Styles.wrapper}>
      <Divider Width={1} orientation="vertical" />
      <View style={Styles.iconContainer}>
        {Icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  wrapper: {
    position:'absolute',
    width:'100%',
    bottom:'3%',
    zIndex: 999,
    backgroundColor:'#000',
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    marginBottom: 5,
    paddingVertical: 5,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profilePic: (activeTab) =>({
    borderRadius:50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff',
  })
});

export default BottomTabs;
