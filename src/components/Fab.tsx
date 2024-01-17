import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    position?: 'br' | 'bl';
}

export const Fab = ({ title, position = 'br', onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.75}
                style={[styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={[styles.fabLocation,
            (position === 'bl') ? styles.left : styles.right
            ]}>
                <TouchableNativeFeedback

                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >

                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
}
const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 24,
    },

    right: {
        right: 25,
    },
    left: {
        left: 25,
    },

    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,

    },
    fabText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})