import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

class PlaceInput extends Component {

    // State variable for the text input
    state = {
        placeName: ""
    }

    // Method to handle text input value
    placeNameOnChangeListener = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHander = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    value={this.state.placeName}
                    placeholder="An Awesome Place"
                    onChangeText={this.placeNameOnChangeListener}
                    style={styles.placeInput} />

                <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHander} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default PlaceInput;