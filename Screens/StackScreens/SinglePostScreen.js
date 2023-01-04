import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions, BackHandler } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TopBar from "../../components/TopBar";
import { useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';

// get dimensions of the screen
const { width, height } = Dimensions.get("window");

const SinglePostScreen = ({navigation}) => {
  const postInfo = [
    {
      postTitle: "Ersel Eren",
      postPersonImage: require("../../storage/images/profile1.jpg"),
      postImage: require("../../storage/images/post1.jpg"),
      likes: 765,
      isLiked: false,
      isBookmarked: false,
      isEvent: true,
      isJoined: false,
    },
  ];

  const [showView, setShowView] = useState(true);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
    };
    BackHandler.removeEventListener(
      'hardwareBackPress',
      handleBackButtonClick,
    );

    return () => backHandler.remove();
  }, []);

  const handleBackButtonClick = () => {
      console.log("Back button is pressed");
      navigation.goBack();
  };

  return (
    
    <View style={{ paddingBottom:65}}>
      <View style={{backgroundColor:'white', height:height*0.08, justifyContent:'flex-end', borderBottomWidth:2, borderBottomColor:'rgba(84,70,115,1)'}}> 
        <TouchableOpacity onPress={() => navigation.goBack()} style={{left:10,top:5}}>
          <Ionicons name="arrow-back" size={45} color="black" />
        </TouchableOpacity>
      </View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        const [bookmark, setBookmark] = useState(data.isBookmarked);
        const [join, setJoin] = useState(data.isJoined);
        return (
          
          <View key={index} style={{borderBottomColor: "rgba(84,70,115,1)", borderBottomWidth: 2, backgroundColor: "white",marginBottom: 10}}>
            <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: 7,paddingLeft: 12,}}>
              
              <View style={{flexDirection: "row", alignItems: "center" }}>
                <Image source={data.postPersonImage} style={{ width: 40, height: 40, borderRadius: 100 }}/>
                <View style={{paddingLeft: 5 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      paddingBottom: 15,
                    }}
                  >
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              
              <Feather name="more-vertical" style={{ fontSize: 20 }} />
            
            </View>

            <View // Post Image
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 300 }}
              />
            </View>

            <View style={{paddingHorizontal: 10 }}>
              <Text
                style={{ fontWeight: "700", fontSize: 20, paddingVertical: 0 }}
              >
                {" "}
                POST TITLE
              </Text>
            </View>

            <View style={{paddingHorizontal: 15, justifyContent: "center"}}>
              <Text style={{fontWeight: "700",fontSize: 14,paddingVertical: 2}}>
                If enjoy the video ! Please like and Subscribe If enjoy the
                video ! Please like and Subscribe If enjoy the video ! Please
                like and Subscribe If enjoy the video ! Please like and
                Subscribe If enjoy the video ! Please like and Subscribe If
                enjoy the video ! Please like and Subscribe :)
              </Text>
              
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{paddingBottom: 5,flexWrap: "wrap",width: width * 0.6,
                      backgroundColor: "rgba(84,70,115,1)",flexDirection:'row',alignItems:'center',
                      borderRadius:20,padding:5,paddingLeft:10,display: data.isEvent ? "flex" : "none",justifyContent:'center'}}>
                  
                      {<AntDesign name="calendar" size={24} color="white" marginRight={10}/>}
                      <Text style={{color: "white", textAlign: "center"}}>
                          17 Kasım 2022 - 14.00-16.00{" "}
                      </Text>
                </View>

                  
                <View style={{ alignItems:'center', flexDirection:'row', display: data.isEvent ? "flex" : "none",}}>
                  <TouchableOpacity onPress={() => setJoin(!join)} style={{flexDirection:'row'}}>
                  <Text style={{fontWeight:'500'}}><AntDesign name={join? "check" : "plus"} size={24} color="black"/></Text>
                    
                    <Text style={{ fontWeight:'500', letterSpacing:1, fontSize:16}}>
                    {join ? "Katıldın" : "Katıl"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{marginTop:5,flex: 1,height: 1.8,backgroundColor: "rgba(127,127,127,0.5)"}}/>
              </View>

              <View style={{flexDirection: "row",justifyContent: "flex-start",alignItems: "baseline"}}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  
                  <Text style={{marginRight: 15,fontWeight: "bold",letterSpacing: 1,paddingTop: 5}}>
                    {like ? data.likes + 1 : data.likes} beğeni
                  </Text>
                  
                  <Text style={{marginRight: 10,fontWeight: "bold",letterSpacing: 1,paddingTop: 5,}}>
                    37 katılım
                  </Text>
                
                </View>

                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    <AntDesign  name={like ? "like1" : "like2"} 
                                style={{paddingRight: 10,fontSize: 22,
                                color: like ? "rgba(84,70,115,1)" : "black", paddingTop: 5}}/>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => setBookmark(!bookmark)}>
                    <MaterialCommunityIcons name={bookmark ? "bookmark-remove" :"bookmark-plus-outline"}
                                            style={{ fontSize: 25, paddingRight: 5, paddingTop: 3 }}/>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="share-outline" style={{ fontSize: 30 }}/>
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            
          </View>
        );
      })}
    </View>
  );
};

export default SinglePostScreen;