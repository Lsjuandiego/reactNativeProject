import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={
            styles.container
        }>
            <Text style={styles.title
            }>
                Contador: {contador}
            </Text>

            <TouchableOpacity onPress={() => setContador(contador + 1)}>
                <View style={styles.botonIncrementar}>
                    <Text>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 42,
        top: -15
    },
    botonIncrementar: {
        backgroundColor: 'red',
        borderRadius: 100
    }
})