//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
 
export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}> Smart Shutter </Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>
            <Text>Open Details Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
                    onPress={() => this.props.navigation.navigate('AddShutter')}>
                    <Text>Add Shutter</Text>
          </TouchableOpacity>
          <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Group')}>
                    <Text>Group </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});