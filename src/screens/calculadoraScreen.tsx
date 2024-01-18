import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalculadora } from '../components/BotonCalculadora'

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>
                1,500.00
            </Text>
            <Text style={styles.resultado}>
                1,500.00
            </Text>

            {/* parte de los botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='C' color='#9B9B9B'/>
                <BotonCalculadora texto='+/-' color='#9B9B9B'/>
                <BotonCalculadora texto='del' color='#9B9B9B'/>
                <BotonCalculadora texto='/' color='#FF9427'/>
            </View>
        </View>
    )
}
