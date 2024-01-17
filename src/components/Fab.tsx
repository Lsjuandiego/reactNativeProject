import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props{
    title:string;
    onPress: () => void;
    position?: 'br' | 'bl';
}

export const Fab = ({title, position = 'br', onPress}: Props) => {
  return (
    <TouchableOpacity
    style={styles.fabLocationBR}
    onPress={onPress}>
    <View style={styles.fab}>
        <Text style={styles.fabText}>
            {title}
        </Text>
    </View>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    fabLocationBR: {
        position: 'absolute',
        bottom: 24,
        right: 24
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 24,
        left: 24
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'

    },
    fabText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})