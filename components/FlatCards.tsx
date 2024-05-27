import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
     <View >
      <Text style={styles.headingText}>FlatCards</Text>
    </View>
    <View style={styles.container}>
        <View style={styles.one}>
          <Text>
              Red
          </Text>
        </View>
        <View style={styles.two}>
          <Text>
              Green
          </Text>
        </View>
        <View style={styles.three}>
          <Text>
              Blue
          </Text>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontWeight:"bold",
 fontSize : 24,
 padding: 8
  },
  container:{
flex:1,
flexDirection:"row",
justifyContent:"center",
alignItems:"center"

  },
  one:{
backgroundColor:'red',
height:100,
width:100,
margin: 5,
justifyContent:"center",
alignItems:"center"
  },
  two:{
backgroundColor:'green',
height:100,
width:100,
margin: 5,
justifyContent:"center",
alignItems:"center"
  },
  three:{
backgroundColor:'blue',
 paddingBottom:10,
 height:100,
width:100,
margin: 5,
justifyContent:"center",
alignItems:"center"
  }
})