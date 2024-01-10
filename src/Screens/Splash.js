import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import backgroundImage from '../../assets/splash-screen.png'
import { splashStyles } from '../Styles/SplashStyles'

const Splash = ({ navigation }) => {
    const handle = () => {
        navigation.navigate('LoginMobile')
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={backgroundImage}
                resizeMode="cover"
                style={splashStyles.backgroundImage}
            />
            <TouchableOpacity
                style={splashStyles.getStartedButton}
                onPress={handle}
            >
                <Text style={splashStyles.getStartedText}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash