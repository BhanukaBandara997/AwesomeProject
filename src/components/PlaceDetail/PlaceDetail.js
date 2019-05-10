import React from 'react';
import { Modal, View, Text, Button, StyleSheet, Image } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal visible={props.selectedPlace !== null} 
        animationType="slide" 
        onRequestClose={props.onModalCloseHandler}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onDeleteHandler}/>
                    <Button title="Close" onPress={props.onModalCloseHandler}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    }
});

export default placeDetail;