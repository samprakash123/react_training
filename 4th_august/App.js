import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{backgroundColor:'#cccccc',flex:1,borderRadius:20}}>
    <View style={{backgroundColor:'#f2f2f2',height:35,margin:10,borderRadius:10}}></View>
    <View style={{backgroundColor:'#b3f0ff',height:20,margin:0}}></View>
    <View style={{backgroundColor:'#ffe699',height:90,margin:0,marginTop:5}}>
    <View style={{backgroundColor:'#7a7a52',height:40,margin:10,marginTop:25,marginRight:250,borderRadius:25}}></View>
      <View style={{backgroundColor:'#ff6666',height:40,margin:10,marginRight:150,marginLeft:100,marginTop:-50,marginBottom:300,borderRadius:10}}></View>
      <View style={{backgroundColor:'#d966ff',height:40,margin:10,marginRight:14,marginLeft:220,marginTop:-340,marginBottom:300,borderRadius:50}}></View>
</View>
<View style={{backgroundColor:'#66ff66',height:130,margin:0,marginTop:0,borderRadius:20}}></View>
<View style={{backgroundColor:'#cccccc',height:130,margin:0,marginTop:0,flexDirection:'row'}}>
<View style={{backgroundColor:'white',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,flexDirection:'row',borderRadius:10}}>
<View style={{backgroundColor:'blue',flex:1,marginRight:0,marginLeft:30,marginTop:30,marginBottom:30,borderRadius:300}}></View>
<View style={{backgroundColor:'blue',flex:1,marginRight:30,marginLeft:30,marginTop:30,marginBottom:30,borderRadius:300}}></View>
</View>
<View style={{backgroundColor:'yellow',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:10}}>
 <View style={{backgroundColor:'black',height:30,margin:10,borderRadius:50}}></View>
 <View style={{backgroundColor:'red',height:40,margin:10,borderRadius:10}}></View>
</View>
</View>
<View style={{backgroundColor:'#ff4d88',height:35,margin:10,flexDirection:'row',borderRadius:10}}>
<View style={{backgroundColor:'blue',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
<View style={{backgroundColor:'white',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
<View style={{backgroundColor:'yellow',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
</View>
  <View style={{backgroundColor:'#2d8659',height:30,margin:0,flexDirection:'row'}}>
  <View style={{backgroundColor:'blue',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
<View style={{backgroundColor:'white',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
<View style={{backgroundColor:'yellow',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
<View style={{backgroundColor:'white',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
<View style={{backgroundColor:'yellow',flex:1,marginRight:10,marginLeft:10,marginTop:10,marginBottom:10,borderRadius:100}}></View>
 
  </View>
    </View>
  )};
