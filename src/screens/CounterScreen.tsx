import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={
            {
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
            }
        }>
            <Text style={
                {
                    textAlign: 'center',
                    fontSize: 42,
                    top: -15
                }
            }>
                Contador: {contador}
            </Text>

            <Button
                title='contar'
                onPress={() => setContador(contador + 1)}
            />
        </View>
    )
}
