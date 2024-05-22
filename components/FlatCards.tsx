import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <view>
    <view style={styles.headingText}>
      <Text>FlatCards</Text>
    </view>
    <view>
        <view style={styles.one}>
          <Text>
              Red
          </Text>
        </view>
        <view style={styles.two}>
          <Text>
              Red
          </Text>
        </view>
        <view style={styles.three}>
          <Text>
              Red
          </Text>
        </view>
    </view>
    </view>
  )
}

const styles = StyleSheet.create({
  headingText:{
fontSize : 24
  },
  one:{
backgroundColor:'red'
  },
  two:{
backgroundColor:'green'
  },
  three:{
backgroundColor:'blue'
  }
})