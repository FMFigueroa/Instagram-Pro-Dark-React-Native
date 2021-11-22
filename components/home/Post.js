import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { auth, db, } from "../../firebase";
import { doc,updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl:
      "https://img.icons8.com/ios-glyphs/90/fa314a/filled-like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/telegram-app.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png",
  },
];

const Post = ({ post }) => {
  
  const handleLike = async () => {
    const currentLikeStatus = !post.likes_by_users.includes(auth.currentUser.email);
    console.log(currentLikeStatus);
    const docRef = doc(db,"users", post.owner_email, "posts", post.id);
     await updateDoc(docRef, {
      likes_by_users: currentLikeStatus
        ? arrayUnion(auth.currentUser.email)
        : arrayRemove(auth.currentUser.email)
        ,})
      .then(() => {
        console.log("Successfully updated likes");
      })
      .catch((error) => {
        console.log("Error updating likes", error);
      });
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} handleLike={handleLike} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={Styles.container}>
    <View style={Styles.containerPostUser}>
      <LinearGradient
        colors={[
          "#FF1493",
          "#FF63b4",
          "#FFB6C1",
          "#FFA07A",
          "#FF7F50",
          "#FF4500",
        ]}
        start={{ x: 1.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={Styles.grediant}
      >
        <View style={Styles.storyContainer}>
          <TouchableOpacity>
            <Image source={{ uri: post.avatar }} style={Styles.story} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Text style={Styles.usersPost}>{post.user.toLocaleLowerCase()}</Text>
    </View>
    <TouchableOpacity>
      <Image
        style={Styles.menuVertical}
        source={{
          uri: "https://img.icons8.com/small/20/ffffff/menu-2.png",
        }}
      />
    </TouchableOpacity>
  </View>
);
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 300 }}>
    <Image style={Styles.imagePost} source={{ uri: post.imageUrl }} />
  </View>
);

//============================ PostFooter ===============================//

const PostFooter = ({handleLike, post}) => (
  <View style={Styles.postTopFooterContainer}>
    <View style={Styles.leftFooterIconsContainer}>
      <TouchableOpacity onPress= {() => handleLike(post)}>
      <Image style={Styles.footerIcon} source={{uri: post.likes_by_users.includes(auth.currentUser.email)
      ? postFooterIcons[0].likedImageUrl : postFooterIcons[0].imageUrl}} />
      </TouchableOpacity>
      <Icon imgStyle={Styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={Styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <Icon imgStyle={Styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ marginTop: 18 }}>
    <Text style={{ color: "white", fontSize: 15 }}>
      {post.likes_by_users.length.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 8 }}>
    <Text style={{ color: "white", fontSize: 15, lineHeight: 24 }}>
      <Text>{post.user.toLocaleLowerCase()}</Text>
      <Text style={{ fontWeight: "100", color: "#696969" }}>
        {"  "}
        {post.caption.length > 150
          ? post.caption.slice(0, 150).toLocaleLowerCase() + " ..." + "  more"
          : post.caption.toLocaleLowerCase()}
      </Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 8 }}>
    {!!post.comments.length && (
      <Text style={{ color: "#2f2f2f", fontSize: 15 }}>
        {" "}
        View
        {post.comments.length > 1 ? " all" : ""}
        {post.comments.length > 1 ? " comments" : " comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 15, lineHeight: 24 }}>
          <Text>{comment.user.toLocaleLowerCase()}</Text>
          <Text style={{ fontWeight: "100", color: "#696969" }}>
            {"  "}
            {comment.comment}
          </Text>
        </Text>
      </View>
    ))}
  </>
);
const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 10,
  },
  grediant: {
    height: 42,
    width: 42,
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
  storyContainer: {
    flex: 1.0,
    alignSelf: "center",
    justifyContent: "center",
    width: "93%",
    borderRadius: 50,
    margin: 2,
    backgroundColor: "white",
  },
  story: {
    width: 34,
    height: 34,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  containerUsers: {
    marginTop: 5,
    alignItems: "center",
  },
  usersPost: {
    color: "white",
    fontSize: 15,
    marginLeft: 15,
    //fontWeight: 'bold',
  },
  containerPostUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuVertical: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  imagePost: {
    marginTop: 15,
    height: "100%",
    resizeMode: "cover",
  },
  postTopFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingTop: 10,
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
  },
});
export default Post;
