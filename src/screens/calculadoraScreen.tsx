import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalculadora } from '../components/BotonCalculadora'

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const [numero, setNumero] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {
        setNumero(numero + numeroTexto)
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>
                {numeroAnterior}
            </Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='C' color='#9B9B9B' accion={limpiar} />
                <BotonCalculadora texto='+/-' color='#9B9B9B' accion={limpiar} />
                <BotonCalculadora texto='del' color='#9B9B9B' accion={limpiar} />
                <BotonCalculadora texto='/' color='#FF9427' accion={limpiar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='7' accion={armarNumero} />
                <BotonCalculadora texto='8' accion={armarNumero} />
                <BotonCalculadora texto='9' accion={armarNumero} />
                <BotonCalculadora texto='X' color='#FF9427' accion={limpiar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='4' accion={armarNumero} />
                <BotonCalculadora texto='5' accion={armarNumero} />
                <BotonCalculadora texto='6' accion={armarNumero} />
                <BotonCalculadora texto='-' color='#FF9427' accion={limpiar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='1' accion={armarNumero} />
                <BotonCalculadora texto='2' accion={armarNumero} />
                <BotonCalculadora texto='3' accion={armarNumero} />
                <BotonCalculadora texto='+' color='#FF9427' accion={limpiar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='0' ancho accion={armarNumero} />
                <BotonCalculadora texto='.' accion={armarNumero} />
                <BotonCalculadora texto='-' color='#FF9427' accion={limpiar} />
            </View>
        </View>
    )
}
