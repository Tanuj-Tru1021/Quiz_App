import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import backgroundImage from '../../assets/splash-screen.png'
import headerImage from '../../assets/header-image.png'
import { RenderError, reg } from '../Constants/Util'
import CourseComponent from '../Components/CourseComponent'

const LoginDetails = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState({})
    const [course1, setCourse1] = useState(false)
    const [course2, setCourse2] = useState(false)
    const [course3, setCourse3] = useState(false)
    const disable = !reg.test(email) || name.length === 0 || (course1 === false && course2 === false && course3 === false)
    return (
        <View style={{ flex: 1, backgroundColor: '#374259' }}>
            <Image source={headerImage} style={{ alignSelf: 'flex-end', right: -40, top: -15 }} />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 500, color: 'white' }}>
                    Just little Personal details
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 300, color: 'white', marginTop: 40 }}>
                    Your name
                </Text>
                <TextInput
                    placeholder='Enter your name here'
                    style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 16, width: '100%', marginTop: 11, height: 45 }}
                    onChangeText={(text) => {
                        setName(text)
                        setError(prev => ({ ...prev, name: (!text) }))
                    }}
                />
                {error.name && <RenderError message='Enter name' />}

                <Text style={{ fontSize: 12, fontWeight: 300, color: 'white', marginTop: 30 }}>
                    Your e-mail
                </Text>
                <TextInput
                    autoCapitalize='none'
                    placeholder='Enter your e-mail here'
                    style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 16, width: '100%', marginTop: 11, height: 45 }}
                    onChangeText={(text) => {
                        setEmail(text.trim())
                        setError(prev => ({ ...prev, email: (!text) }))
                    }}
                    keyboardType='email-address'
                />
                {error.email && <RenderError message='Enter your email' />}
                {(email && !reg.test(email)) && <RenderError message='Enter Valid Email' />}
                <Text style={{ fontSize: 12, fontWeight: 300, color: 'white', marginTop: 30 }}>
                    Select the course you are learning
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 11, height: 45 }}>
                    <CourseComponent
                        text={'CS EET'}
                        onPress={() => {
                            setCourse1(!course1)
                        }}
                        selected={course1}
                        disable={course2 || course3 ? true : false}
                    />
                    <CourseComponent
                        text={'CS Executive'}
                        onPress={() => {
                            setCourse2(!course2)
                        }}
                        selected={course2}
                        disable={course1 || course3 ? true : false}
                    />
                    <CourseComponent
                        text={'CS Professional'}
                        onPress={() => {
                            setCourse3(!course3)
                        }}
                        selected={course3}
                        disable={course1 || course2 ? true : false}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={{
                    paddingVertical: 15, width: '60%',
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: disable ? '#C4C4C4' : '#6989CC',
                    alignSelf: 'center', borderRadius: 10, marginTop: 120
                }}
                onPress={() => {
                    navigation.navigate('LoginConfirmation')
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

export default LoginDetails