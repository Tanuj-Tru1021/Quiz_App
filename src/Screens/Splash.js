import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import backgroundImage from '../../assets/splash-screen.png'

const Splash = ({ navigation }) => {
    const handle = () => {
        navigation.navigate('LoginMobile')
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={backgroundImage}
                resizeMode="cover"
                style={{ flex: 1, justifyContent: 'center', position: 'relative' }}
            />
            <TouchableOpacity
                style={{
                    paddingVertical: 15, width: '50%',
                    justifyContent: 'center', alignItems: 'center',
                    position: 'absolute', bottom: 68,
                    backgroundColor: '#6989CC',
                    alignSelf: 'center', borderRadius: 10
                }}
                onPress={handle}
            >
                <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash