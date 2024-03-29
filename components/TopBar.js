import * as React from 'react';
import { Text, View, StatusBar,TouchableOpacity,Dimensions} from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default function TopBar({navigation}) {
    
    function handleDrawer(){
        navigation.openDrawer();
    }

    return (
       
        <View style={{backgroundColor:"rgba(228,228,228,1)", height:65, flexDirection:'row',paddingBottom:1}}>
            <StatusBar barStyle="dark-content" backgroundColor="white"/>
            <View style={{flex:2,backgroundColor:'white', alignItems:'stretch', flexDirection:'column', justifyContent:'center'}}> 
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{alignSelf:'flex-start', left:width*0.015, top:0}}>
                    <Ionicons name="menu-outline" size={50} color={'black'}></Ionicons>
                </TouchableOpacity>
            </View>

            <View style={{flex:4, backgroundColor:'white', justifyContent:'center'}}>
                    <Text style={{fontSize:35, color:"rgba(84,70,115,1)", alignSelf:'center', 
                                letterSpacing:7.5}}>
                                cmis 
                    </Text>
            </View>
        
            <View style={{flex:2, backgroundColor:'white'}}>
                <Text></Text>
            </View>
        </View>   
  );
}
