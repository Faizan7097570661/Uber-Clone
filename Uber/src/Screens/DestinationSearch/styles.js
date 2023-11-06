import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container:{
padding:10,
height:"100%"

},
textInput:{
padding:10,
backgroundColor:'#eee',
color:'black',
marginVertical:5,
marginLeft:20,
},
separator:{
    backgroundColor:'#efefef',
    height:1
},
listView:{
    position:'absolute',
    top:105
},
autocompleteContainer:{
    position:"absolute",
    top:0,
    left:10,
    right:10
},
square:{
width:5,
height:5,
backgroundColor:'white',
position:"absolute",
top:80,
left:15
},
line:{
    width:1,
    height:55,
    backgroundColor:'#919191',
    position:"absolute",
    top:28,
    left:16.5,
},
circle:{
    width:5,
    height:5,
    backgroundColor:'white',
    position:"absolute",
    top:20,
    left:15,
    borderRadius:5
}

});

export default styles;