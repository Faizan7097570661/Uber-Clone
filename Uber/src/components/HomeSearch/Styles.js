import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox:{
          backgroundColor:'#b0b0b0',
          margin:10,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          padding:10
        },
    inputText:{
     fontSize:20,
     fontWeight:'600',
     color:'#6e6e6e'
    },
    timeContainer:{
      flexDirection:'row',
      width:100,
      justifyContent:'space-between',
      backgroundColor:'#fff',
      padding:10,
      borderRadius:50,

    },
    row:{
        flexDirection:'row',
          padding:20,
          borderBottomWidth:1,
          borderColor:'#dbdbdb',
          alignItems:'center'
    },
    iconContainer:{
        backgroundColor:'#b3b3b3',
        padding:10,
        borderRadius:20,
        width:40,
        alignItems:'center'

    },
    destinationText:{
        marginLeft:10,
        fontWeight:'600',
        fontSize:16
    }
});

export default styles;