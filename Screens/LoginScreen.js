import { StatusBar } from 'expo-status-bar';
import LoginScreenStyles from '../Style/LoginScreenStyles';
import { StyleSheet, Text, Button, View, Dimensions, Pressable, TextInput, TouchableNativeFeedback, Alert, ImageBackground, TouchableHighlight} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

_onForgotPasswordButton =() => {
  alert('You pressed forgot my password button')
} 


export default function LoginScreen({ navigation }){
    const [studentSelection, setstudentSelection] = useState("rgba(84,70,115,1)");
    const [communitySelection, setcommunitySelection] = useState('transparent');
    const [studentIcon, setStudentIcon] = useState(require("../assets/icons/student_selected.png"));
    const [communityIcon, setCommunityIcon] = useState(require("../assets/icons/community_notselected.png"));
    
    const [StudentTextColor, setStudentTextColor] = useState(LoginScreenStyles.setColorGray);
    const [CommunityTextColor, setCommunityTextColor] = useState(LoginScreenStyles.setColorGray);

    
    _onStudentButton= () => {
      setStudentIcon(require("../assets/icons/student_selected.png"));
      setCommunityIcon(require("../assets/icons/community_notselected.png"));
      setcommunitySelection("transparent");
      setstudentSelection("rgba(84,70,115,1)");
      setStudentTextColor(LoginScreenStyles.setColorPurple);
      setCommunityTextColor(LoginScreenStyles.setColorGray);
    }

    _onCommunityButton= () => {
      setCommunityIcon(require("../assets/icons/community_selected.png"));
      setStudentIcon(require("../assets/icons/student_notselected.png"));
      setstudentSelection("transparent");
      setcommunitySelection("rgba(84,70,115,1)");
      setCommunityTextColor(LoginScreenStyles.setColorPurple);
      setStudentTextColor(LoginScreenStyles.setColorGray);
    }


    _onLoginButton= () => {
      alert('LOGIN BUTTON')
    }  

    

      return (
      <View style={LoginScreenStyles.container}>
       
          <View style={LoginScreenStyles.upperRectangle}>
                <Text style={LoginScreenStyles.AppName}> cmis </Text>
          </View>

        
          <View style={LoginScreenStyles.StudentAndComm}>
                <TouchableHighlight style={LoginScreenStyles.StudentButton} activeOpacity={1} underlayColor={'white'} onPress={()=>_onStudentButton()}>
                  <View>
                        <Image 
                          style = {LoginScreenStyles.StudentImageStyle}
                          source ={studentIcon} 
                          height={30}
                          width={30} 
                          />
                          <Text style={[LoginScreenStyles.StudentText, StudentTextColor]} > Öğrenci </Text>      
                  </View>
                </TouchableHighlight>
                
                 
                <View style={LoginScreenStyles.verticleLine}></View>

                <TouchableHighlight style={LoginScreenStyles.CommunityButton} activeOpacity={1} underlayColor={'white'} onPress={()=>_onCommunityButton()}>
                <View >
                    
                      <Image 
                        style = {LoginScreenStyles.CommunityImageStyle}
                        source={communityIcon} 
                        height={60}
                        width={100} 
                      />
                    <Text style={[LoginScreenStyles.CommText, CommunityTextColor]} >Topluluk/Takım</Text>
                </View>  
                </TouchableHighlight>
                 
          </View>

          <View style={LoginScreenStyles.studentSelectionLine} backgroundColor={studentSelection} ></View>
          <View style={LoginScreenStyles.communitySelectionLine} backgroundColor={communitySelection} ></View>
        
          <View style={{flexDirection:'row'}}>
              <Image source={require("../assets/icons/at-sign.png")} 
              height={15}
              width={20} 
              style={LoginScreenStyles.atsignLogin}  
              />
              <TextInput placeholder='E-posta' placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'}  style={LoginScreenStyles.textinput} />
              
          </View>

          <View style={{flexDirection:'row'}}>
              <Image source={require("../assets/icons/lock.png")} 
              height={30}
              width={27} 
              style={LoginScreenStyles.atsignLogin}  
              />
              <TextInput secureTextEntry={true} placeholder='Şifre' placeholderTextColor='rgba(165,165,165,1)' cursorColor={'rgba(84,70,115,1)'} style={LoginScreenStyles.textinput} />
          </View>
  
          <TouchableNativeFeedback onPress={()=>_onForgotPasswordButton()} underlayColor="white">
          <View style={LoginScreenStyles.forgotPassword}>
            <Text style={LoginScreenStyles.forgotPasswordText}>Şifreni mi Unuttun?</Text>
          </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={()=>_onLoginButton()} underlayColor="white">
            <View style={LoginScreenStyles.LoginButton}>
              <Text style={LoginScreenStyles.LoginButtonText}>Giriş Yap</Text>
            </View>
          </TouchableNativeFeedback>

          <View style={{flexDirection: 'row', alignItems: 'center', top: 50, width:370, left:20, }}>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center', color: 'rgba(152,152,152,1)'}}>veya</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'rgba(152,152,152,1)'}} />
          </View>

          <TouchableNativeFeedback onPress={()=>navigation.push('Register')}>
            <View style={LoginScreenStyles.RegisterButton}>
            <Text style={LoginScreenStyles.LoginOuterText}>
              Yeni
              <Text style={LoginScreenStyles.LoginInnerText}> cmis </Text>
              Hesabı Oluştur
            </Text>
            </View>
          </TouchableNativeFeedback>

          
      </View>
      
    );
  }
