import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native'
import {fetch_get,fetch_delete,fetch_post} from '../fetch';


const PostItem = ({postid}) => {
  
  const ownID = useSelector((store) => store.userID.userID);
  const url1 = useSelector((store) => store.url.url);
  const [postObj, setPostObj] = useState(null);
  const defaultPP = useSelector((store) => store.userID.userProfileImage);
  const userRole = useSelector((store) => store.userID.userRole);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const dummyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg==";
  const [join, setJoin] = useState(false);
  
  const fetchData = async () => {
    const responseJson = await fetch_get(url1 +'/api/cmis/posts/'+postid);
    setPostObj(responseJson);
  }

  const fetchData2 = async () => {  
    const responseJson = await fetch_get(url1 +'/api/cmis/posts/'+postid+"/isLikedByStudent/"+ownID);
    setLiked(responseJson);

    const responseJson2 = await fetch_get(url1 +'/api/cmis/posts/'+postid+"/isBookmarkedByStudent/"+ownID);
    setBookmarked(responseJson2);
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
      if(userRole=="ROLE_STUDENT"){
        fetchData2();
      }
    }, [])
  );

  function handleMonth(month){
    if(month=="1"){return "Ocak";}
    else if(month=="2"){return "Şubat";}
    else if(month=="3"){return "Mart";}
    else if(month=="4"){return "Nisan";}
    else if(month=="5"){return "Mayıs";}
    else if(month=="6"){return "Haziran";}
    else if(month=="7"){return "Temmuz";}
    else if(month=="8"){return "Ağustos";}
    else if(month=="9"){return "Eylül";}
    else if(month=="10"){return "Ekim";}
    else if(month=="11"){return "Kasım";}
    else if(month=="12"){return "Aralık";}
  }

  function handleTag(tag){
    if(tag=="TAG_ART"){return "Art";}
    else if(tag=="TAG_BIOLOGY"){return "Biology";}
    else if(tag=="TAG_DRONE"){return "Drone";}
    else if(tag=="TAG_CHEMISTRY"){return "Chemistry";}
    else if(tag=="TAG_COMPUTER"){return "Computer";}
    else if(tag=="TAG_ENGINEERING"){return "Engineering";}
    else if(tag=="TAG_ENTERTAINMENT"){return "Entertainment";}
    else if(tag=="TAG_FOOD"){return "Food";}
    else if(tag=="TAG_GAMING"){return "Gaming";}
    else if(tag=="TAG_LITERATURE"){return "Literature";}
    else if(tag=="TAG_MATH"){return "Math";}
    else if(tag=="TAG_MUSIC"){return "Music";}
    else if(tag=="TAG_PHILOSOPHY"){return "Philosophy";}
    else if(tag=="TAG_PHYSICS"){return "Physics";}
    else if(tag=="TAG_ROBOT"){return "Robot";}
    else if(tag=="TAG_SCIENCE"){return "Science";}
    else if(tag=="TAG_SOCIAL"){return "Social";}
    else if(tag=="TAG_SPORT"){return "Sport";}
    else if(tag=="TAG_TEAM"){return "Team";}
  }
  
  const handleBookmark = async (id) => {
    if(bookmarked==false){
      const bodyData = { id:id};
      const body = JSON.stringify(bodyData);
      await fetch_post(url1 +"/api/cmis/students/"+ownID+"/bookmarkedPosts",body);
    }
    else{
      await fetch_delete(url1 +"/api/cmis/students/"+ownID+"/bookmarkedPosts/"+postid);
    }
    setBookmarked(!bookmarked);
  };

  const handleJoin = async () => {
    setJoin(!join);

   
  }

  const handleLike = async () => {
    setLiked(!liked);
    const responseJson = await fetch_post(url1 +"/api/cmis/students/"+ownID+"/posts/"+postid+"/like",null);  
    setPostObj(responseJson);
  }; 
 
  return (
    <View style={{ paddingBottom:0}}>
        {postObj && 
        <View style={{paddingBottom: 3,borderBottomColor: "rgba(208,210,242,0.2)",borderBottomWidth: 0,backgroundColor: "white",marginBottom:0,}}>
              <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: 7,paddingLeft: 12,}}>
                
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={{uri: `${postObj.community.image ? postObj.community.image : defaultPP}` }} style={{ width: 40, height: 40, borderRadius: 100 }}/>
                  
                  <View style={{ paddingLeft: 5}}>
                    <Text style={{fontSize: 16,fontWeight: "bold",color:'black'}}>{postObj.community.name}</Text>
                    
                    <View style={{height:15, flexDirection:'row'}}>
                        <View style={{backgroundColor:'rgba(208,210,242,1)', height:15, borderRadius:10, alignItems:'center',justifyContent:'center'}}> 
                            {postObj.community.tags[0] && <Text style={{color:'black', fontSize:10}}> {handleTag(postObj.community.tags[0].tag)} </Text>}
                        </View>
                        <Text style={{color:'gray', fontSize:12}}> {postObj.date.day} {handleMonth(postObj.date.month+1)} {postObj.date.year}</Text>
                    </View>
                  </View>

                </View>

                
              </View>

            {postObj.image && 
            <View style={{position: "relative",justifyContent: "center",alignItems: "center",}}>
              <Image style={{width: "100%", height: 300}} source={{uri: `${postObj.image ? postObj.image : dummyImage}`,}}/>
            </View>
            }

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "700", fontSize: 20, paddingVertical: 0, color:'black' }}> {postObj.title}</Text>
            </View>

            <View style={{paddingHorizontal: 15,flex: 1,justifyContent: "center",}}>
              
              <Text style={{color:'black',fontWeight: "700",fontSize: 14,paddingVertical: 2,}}>{postObj.text}</Text>
              
              
              {postObj.event[0] && 
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{paddingBottom: 5,top:1,flexWrap: "wrap",backgroundColor: "rgba(84,70,115,1)",flexDirection:'row',alignItems:'center',
                          borderRadius:20,padding:5,paddingLeft:10,display: "flex",justifyContent:'center',}}>
                    {<AntDesign name="calendar" size={24} color="white" marginRight={10}/>}
                    <Text style={{color: "white", textAlign: "center"}}>
                      {postObj.event[0].date.day} {handleMonth(postObj.event[0].date.month+1)} {postObj.event[0].date.year} - {postObj.event[0].date.hour}:{postObj.event[0].date.minute}
                    </Text>
                    
                  </View>
                  <View style={{ alignItems:'center', flexDirection:'row', display: "flex"}}>
                    
                    {userRole=='ROLE_STUDENT' && 
                    <View> 
                      {join && 
                      <TouchableOpacity onPress={() => setJoin(!join)} style={{flexDirection:'row'}}>
                      <Text style={{fontWeight:'500'}}><AntDesign name={"plus"} size={24} color="black"/></Text>
                        <Text style={{ fontWeight:'500', letterSpacing:1, fontSize:16, color:'black'}}>Katıl</Text>
                      </TouchableOpacity>
                      }
                      {!join && 
                      <TouchableOpacity onPress={() => setJoin(!join)} style={{flexDirection:'row'}}>
                      <Text style={{fontWeight:'500'}}><AntDesign name={"check"} size={24} color="black"/></Text>
                        <Text style={{ fontWeight:'500', letterSpacing:1, fontSize:16,color:'black'}}>Katıldın</Text>
                      </TouchableOpacity>
                      }
                    </View>
                    }
                    </View>
                </View>
              }

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{marginTop:5,flex: 1,height: 1.8,backgroundColor: "rgba(127,127,127,0.5)",}}/>
              </View>
              
              

              <View style={{flexDirection: "row",justifyContent: "flex-start",alignItems: "baseline",}}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text style={{color:'black',marginRight: 15,fontWeight: "bold",letterSpacing: 1,paddingTop: 3}}>
                    {postObj.likeNum} beğeni
                  </Text>
                  
                  {postObj.event[0]&& 
                  <Text style={{color:'black',marginRight: 10,fontWeight: "bold",letterSpacing: 1,paddingTop: 3,}}>
                    {postObj.event[0].attendantsNum} katılım
                  </Text>
                  }
                </View>
                
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  
                  {userRole =="ROLE_STUDENT" && 
                  <TouchableOpacity onPress={() => handleLike(postObj.id)}  >
                    <AntDesign
                      name={liked ? "like1" : "like2"}
                      style={{paddingRight: 10,fontSize: 22,color: liked ? "black" : "rgba(84,70,115,1)",paddingTop: 5,}}/>
                  </TouchableOpacity>
                  }
                  
                  {userRole =="ROLE_STUDENT" && 
                  <TouchableOpacity onPress={() => handleBookmark(postObj.id)} >
                    <MaterialCommunityIcons
                      name={bookmarked ? "bookmark-remove" :"bookmark-plus-outline" }
                      style={{ fontSize: 25, paddingRight: 5, paddingTop: 3, color:'rgba(84,70,115,1)'}}
                    />
                  </TouchableOpacity>
                  }

                </View>
              </View>
            </View>

            
          </View>
        }
    </View>
  );
};


const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});

export default PostItem;
