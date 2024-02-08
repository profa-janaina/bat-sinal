import React, {useState} from 'react';
import { StyleSheet,View, Image, Text, TouchableOpacity } from 'react-native';


export function Home(props) {
  return (
    <View style={styles.container}>
        <Image
            source={
              require('../assets/images/bat-signal-logo.png')
            }
            style={{height:200, resizeMode:'contain'}}
          />
          <TouchableOpacity onPress={() => {props.changeState(false)}}>
            <Text style={styles.activeSignalText}>Active Bat Signal</Text>
          </TouchableOpacity>   
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeSignalText: {    
        backgroundColor: '#000',
        fontSize: 25,
        color:'#fff',
        padding: 10,
        borderRadius: 5,
    },
})