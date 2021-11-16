import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';

export const bottomTabIcons = [
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
      'https://scontent.faep28-1.fna.fbcdn.net/v/t1.6435-9/206079625_10224974096396949_907752782391385081_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHqJq4Bo7kURUDGGi-q1XK7csIznJPmeGBywjOck-Z4YLvuxxBS0fX78he2NDYmsI4&_nc_ohc=qd_cIQL1AMoAX_GWSjM&tn=1VDrO1WcMo4yp-wG&_nc_ht=scontent.faep28-1.fna&oh=ee2bc935d2ffe5f1f03f7cca93842318&oe=61B9BE67',
    inactive:
      'https://scontent.faep28-1.fna.fbcdn.net/v/t1.6435-9/206079625_10224974096396949_907752782391385081_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHqJq4Bo7kURUDGGi-q1XK7csIznJPmeGBywjOck-Z4YLvuxxBS0fX78he2NDYmsI4&_nc_ohc=qd_cIQL1AMoAX_GWSjM&tn=1VDrO1WcMo4yp-wG&_nc_ht=scontent.faep28-1.fna&oh=ee2bc935d2ffe5f1f03f7cca93842318&oe=61B9BE67',
  },
];

const BottomTabs = ({icons}) => {
  //
  const [activeTab, setActiveTab] = useState('Home');
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
  return (
    <View styles={Styles.wrapper}>
      <Divider Width={1} orientation="vertical" />
      <View style={Styles.iconContainer}>
        {icons.map((icon, index) => (
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
