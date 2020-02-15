//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet,Button,TextInput } from 'react-native';
//import all the basic component we have used

export default class AddShutterScreen extends React.Component {
    //Profile Screen to show from Open profile button
    constructor() {
        super()
        this.state = {
               value:"Edit me"
        }
        this.handleChangeText = this.handleChangeText.bind(this)
    }
    handleChangeText(newText) {
        this.setState({
            value: newText
        })
    }
  render() {
      
        return (
            <View style={styles.two}>
                <Text style={styles.one}>Add Shutter </Text>
                <TextInput
                    placeholder='Name of shutter' style={styles.three}
                    defaultValue={this.state.value}
                    onChangeText={this.handleChangeText}
                    />
                <TextInput
                    placeholder='Name of Group'
                />
                <Button style={styles.one}
                    title="Add Shutter"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    one: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 25,
    },
    two: {
        flex: 1,
        padding : 20,
        alignItems:'center',
    },
    three: {
        
        borderBottomColor:'black',
        padding: 10,
        alignItems: 'center',
    },
});