import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import backgroundImage from '../../assets/splash-screen.png'
import headerImage from '../../assets/header-image.png'
import OTPInput from '../Components/OtpBox'

const LoginOTP = ({ navigation }) => {

    const [otpCode, setOtpCode] = useState("")
    const [pinReady, setPinReady] = useState(false)
    const disable = otpCode.length != 6
    const MAX_LENGTH = 6
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={backgroundImage}
                resizeMode="cover"
                style={{ flex: 1, justifyContent: 'center', position: 'relative' }}
            />
            <View style={{ position: 'absolute', right: -40, top: -15 }}>
                <Image source={headerImage} />
            </View>
            <View style={{ position: 'absolute', bottom: -85, left: -40 }}>
                <Image source={headerImage} />
            </View>
            <View style={{ position: 'absolute', top: 150, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 500, color: 'white' }}>
                    Verify your{"\n"}
                    Mobile Number ?
                </Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: 'white', marginTop: 10 }}>
                    Enter the code we’ve sent by text to +916393642919
                </Text>
                <View style={{ left: -5, marginTop: 45 }}>
                    <OTPInput
                        code={otpCode}
                        setCode={setOtpCode}
                        maximumLength={MAX_LENGTH}
                        setIsPinReady={setPinReady}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={{
                    paddingVertical: 15, width: '60%',
                    justifyContent: 'center', alignItems: 'center',
                    position: 'absolute', bottom: 85,
                    backgroundColor: disable ? '#C4C4C4' : '#6989CC',
                    alignSelf: 'center', borderRadius: 10
                }}
                onPress={() => {
                    navigation.navigate('LoginDetails')
                }}
                disabled={disable}
            >
                <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default LoginOTP