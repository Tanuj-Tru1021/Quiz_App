import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Teacher from '../../assets/teachers/teacher1.jpeg'
import profilePicture from '../../assets/profile-pic.png'
import ratingStar from '../../assets/rating-star.png'
import leaderBoard2 from '../../assets/leaderboard-2.png'
import leaderBoard3 from '../../assets/leaderboard-3.png'

const Tab = createMaterialTopTabNavigator()

const Header = ({ onPress }) => (
    <View style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: '#ffffff' }}>
        <TouchableOpacity onPress={onPress}>
            <Text style={{ fontSize: 20, fontWeight: 500, color: '#374259' }}>
                {'< quiz'}
            </Text>
        </TouchableOpacity>
    </View>
)

const Card = ({ rank, score }) => (
    <View>
        <View style={{ backgroundColor: '#ffffff', padding: 13, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, fontWeight: 500, color: '#000000' }}>
                    {rank}
                </Text>
                <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: 'center' }}>
                    <Image source={Teacher} style={{ height: 24, width: 24, borderRadius: 12, marginRight: 15 }} />
                    <Text style={{ fontSize: 12, fontWeight: 500, color: '#000000' }}>
                        Demo
                    </Text>
                </View>
            </View>
            <Text style={{ fontSize: 12, fontWeight: 500, color: '#000000' }}>
                {score}
            </Text>
        </View>
    </View>
)

const cardData = {
    'rank': 3,
    'score': 285
}

const AllTime = () => (
    <ScrollView>
        <View style={{ flex: 1, marginHorizontal: 8, marginTop: 20 }}>
            <View style={{ backgroundColor: '#374259', padding: 13, borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 10, fontWeight: 500, color: '#ffffff' }}>
                        3
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: 'center' }}>
                        <Image source={Teacher} style={{ height: 24, width: 24, borderRadius: 12, marginRight: 15 }} />
                        <Text style={{ fontSize: 10, fontWeight: 500, color: '#ffffff' }}>
                            You
                        </Text>
                    </View>
                </View>
                <Text style={{ fontSize: 10, fontWeight: 500, color: '#ffffff' }}>
                    285
                </Text>
            </View>
            <View style={{ backgroundColor: '#ffffff', padding: 14, borderRadius: 10 }}>
                <View style={{ backgroundColor: '#F7F7F7', borderRadius: 10, paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginTop: 10 }}>
                        <Image
                            source={leaderBoard2}
                            style={{ width: 55, height: 55, marginRight: 45 }}
                        />
                        <Text style={{ fontSize: 12, color: '#374259', fontWeight: 400, marginLeft: 15, marginTop: 10 }}>
                            Riya
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center', marginLeft: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#394257' }}>
                                500
                            </Text>
                            <Image
                                source={ratingStar}
                                style={{ height: 15, width: 15 }}
                            />
                        </View>
                    </View>
                    <View style={{ top: -12 }}>
                        <Image
                            source={profilePicture}
                            style={{ width: 70, height: 70, marginRight: 45, borderRadius: 35, borderWidth: 4, borderColor: '#F3AE3D' }}
                        />
                        <Text style={{ fontSize: 12, color: '#374259', fontWeight: 400, marginLeft: 17, marginTop: 10 }}>
                            Kuldeep
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center', marginLeft: 17 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#394257' }}>
                                500
                            </Text>
                            <Image
                                source={ratingStar}
                                style={{ height: 15, width: 15 }}
                            />
                        </View>
                    </View>
                    <View style={{ top: 15 }}>
                        <Image
                            source={leaderBoard3}
                            style={{ width: 45, height: 45, marginRight: 45 }}
                        />
                        <Text style={{ fontSize: 12, color: '#374259', fontWeight: 400, marginLeft: 10, marginTop: 10 }}>
                            Karan
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center', marginLeft: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, color: '#394257' }}>
                                500
                            </Text>
                            <Image
                                source={ratingStar}
                                style={{ height: 15, width: 15 }}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 23 }}>
                {
                    console.log(cardData.rank)
                }
                {Array.from({ length: 10 }).map((_, index) => {

                    cardData.rank = cardData.rank + 1
                    cardData.score = cardData.score - 5
                    return (
                        <Card
                            key={`card-${index}`}
                            rank={cardData.rank}
                            score={cardData.score}
                        />
                    )
                }
                )}
            </View>
        </View>
    </ScrollView>
)

const Weekly = () => (
    <>
    </>
)

const Monthly = () => (
    <>
    </>
)

const Leaderboard = ({ navigation }) => {
    return (
        <>
            <Header onPress={() => navigation.goBack()} />
            <Tab.Navigator
                screenOptions={{
                    labelStyle: { fontSize: 14, fontWeight: 500 },
                    indicatorStyle: { borderBottomColor: '#374259', borderBottomWidth: 4 },
                    activeTintColor: '#374259',
                    inactiveTintColor: 'grey',
                    tabBarStyle: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: 12 }
                }}
            >
                <Tab.Screen name="All Time" component={AllTime} />
                <Tab.Screen name="Weekly" component={Weekly} />
                <Tab.Screen name="Monthly" component={Monthly} />
            </Tab.Navigator>
        </>
    )
}

export default Leaderboard