import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import QuizCard from '../Components/QuizCard';

const Tab = createMaterialTopTabNavigator();

const QuizScreen = () => (
    <View>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
    </View>
);

const QuizCompletedScreen = () => (
    <View>
        <QuizCard />
        <QuizCard />
    </View>
);

const Header = ({ onPress }) => (
    <View style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: 'white' }}>
        <TouchableOpacity onPress={onPress}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: '#374259' }}>
                {'< Quiz'}
            </Text>
        </TouchableOpacity>
    </View>
);

const AllQuizes = ({ navigation }) => {
    return (
        <>
            <Header onPress={() => navigation.goBack()} />
            <Tab.Navigator
                screenOptions={{
                    labelStyle: { fontSize: 14, fontWeight: 500 },
                    indicatorStyle: { borderBottomColor: '#374259', borderBottomWidth: 4 },
                    activeTintColor: '#374259',
                    inactiveTintColor: 'grey'
                }}
            >
                <Tab.Screen name="Quiz" component={QuizScreen} />
                <Tab.Screen name="Quiz Completed" component={QuizCompletedScreen} />
            </Tab.Navigator>
        </>
    );
};

export default AllQuizes;