import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalculadora } from '../components/BotonCalculadora'
import { useCalculadora } from '../hooks/useCalculadora'



export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>
                    {numeroAnterior}</Text>)
            }

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
                <BotonCalculadora texto='+/-' color='#9B9B9B' accion={positivoNegativo} />
                <BotonCalculadora texto='del' color='#9B9B9B' accion={btnDelete} />
                <BotonCalculadora texto='/' color='#FF9427' accion={btnDividir} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='7' accion={armarNumero} />
                <BotonCalculadora texto='8' accion={armarNumero} />
                <BotonCalculadora texto='9' accion={armarNumero} />
                <BotonCalculadora texto='X' color='#FF9427' accion={btnMultiplicar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='4' accion={armarNumero} />
                <BotonCalculadora texto='5' accion={armarNumero} />
                <BotonCalculadora texto='6' accion={armarNumero} />
                <BotonCalculadora texto='-' color='#FF9427' accion={btnRestar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='1' accion={armarNumero} />
                <BotonCalculadora texto='2' accion={armarNumero} />
                <BotonCalculadora texto='3' accion={armarNumero} />
                <BotonCalculadora texto='+' color='#FF9427' accion={btnSumar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* boton */}
                <BotonCalculadora texto='0' ancho accion={armarNumero} />
                <BotonCalculadora texto='.' accion={armarNumero} />
                <BotonCalculadora texto='=' color='#FF9427' accion={calcular} />
            </View>
        </View>
    )
}
