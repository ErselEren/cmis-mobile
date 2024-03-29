import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfilePicture from 'react-native-profile-picture';
import { Dimensions } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

// get screen width
const getWidth = () => Dimensions.get('window').width;

export default function SearchItem({ handleButtonPress }) {
  
  return (
    <TouchableOpacity
    onPress={handleButtonPress}> 

    <View style={{backgroundColor:'white', height:50, width:(getWidth()*0.95), flexDirection:'row', 
      marginVertical:5, paddingLeft:10, paddingRight:10,
      alignItems:'center',borderRadius:6, alignSelf:'flex-start' }}>

      <View style={{ flexDirection:'row', width:'95%', alignItems:'center'}}>
      <ProfilePicture isPicture={true} requirePicture={require('../storage/images/pp_image.png')} shape='circle' width={35} height={35}/>
      <Text style={{color:'black',paddingLeft:10, fontSize:15}}>GTÜ Topluluk Takımı</Text>
      </View>
      <View style={{}}>
      <Ionicons name="close" size={24} color="black" style={{}}/>
      </View>
    </View>


    </TouchableOpacity>
  )
}