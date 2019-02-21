import React from 'react';

import ImagesExample from './ImagesExample.js'
import { StyleSheet, Text, View, Button } from 'react-native';
export default class App extends React.Component {
        state = {
          text : "Click Button",
          flag: 1
        }

 onclick(){

      if(this.state.flag ===1 )
      this.setState({text : "Enable", flag : 0})
      else
      this.setState({text : "Disable", flag: 1})

 }

  render() {
    return (
      <ImagesExample />   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

