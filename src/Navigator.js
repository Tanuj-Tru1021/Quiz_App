import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Splash from './Screens/Splash'
import LoginMobile from './Screens/LoginMobile'
import LoginOTP from './Screens/LoginOTP'
import LoginDetails from './Screens/LoginDetails'
import LoginConfirmation from './Screens/LoginConfirmation'
import HomePage from './Screens/HomePage'
import AllQuizes from './Screens/AllQuizes'
import QuizScreen from './Screens/QuizScreen'
import Leaderboard from './Screens/Leaderboard'
import { QuestionProvider } from './Constants/ApiContext'

const Stack = createStackNavigator()

const Navigator = () => {
    return (
        <QuestionProvider>
            <NavigationContainer>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Splash' component={Splash} />
                    <Stack.Screen name='LoginMobile' component={LoginMobile} />
                    <Stack.Screen name='LoginOTP' component={LoginOTP} />
                    <Stack.Screen name='LoginDetails' component={LoginDetails} />
                    <Stack.Screen name='LoginConfirmation' component={LoginConfirmation} />
                    <Stack.Screen name='HomePage' component={HomePage} />
                    <Stack.Screen name='AllQuizes' component={AllQuizes} />
                    <Stack.Screen name='QuizScreen' component={QuizScreen} />
                    <Stack.Screen name='Leaderboard' component={Leaderboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </QuestionProvider>
    )
}

export default Navigator