import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
        state = {
          text : "Click Button"
        }

 onclick(){

      this.setState({text : "Button Clicked"})

 }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button title="Click Here" onPress={this.onclick.bind(this)}/>
      </View>
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

