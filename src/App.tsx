import { Button, StyleSheet, View } from 'react-native'
import React, {useState} from 'react'

export default function App() {

  const [color, setColor] = useState('');

  const ChangeBackground = () =>{
    
    const characters='0123456789ABCDEF'
    let newColor='#'
    for (let index = 0; index < 6; index++) {
      newColor += characters[Math.floor(Math.random() * 16)]
    }
    return setColor(newColor)
  }

  return (
    <>
      <View style={[styles.container, {backgroundColor:color}]}>
        <Button color='#676767' title='Change Background' onPress={ChangeBackground} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  btn:{
    height:30,
    width:150,
    backgroundColor:'#6a7fc1',
    borderRadius:2,
    margin:3,
    justifyContent:'center'
  },
  btnText:{
    color:'white',
  },

})