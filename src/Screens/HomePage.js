import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import headerImage from '../../assets/header-image.png'
import profilePicture from '../../assets/profile-pic.png'
import ratingStar from '../../assets/rating-star.png'
import leaderBoard2 from '../../assets/leaderboard-2.png'
import leaderBoard3 from '../../assets/leaderboard-3.png'
import CountdownTimer from '../Components/CountdownTimer'
import QuizCard from '../Components/QuizCard'
import BarGraph from '../Components/BarGraph'

const HomePage = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#0000001A' }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', paddingVertical: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 16, elevation: 10 }}>
                    <Image
                        source={profilePicture}
                        style={{ height: 60, width: 60, borderWidth: 2, borderColor: '#374259', borderRadius: 30, marginTop: 16, marginRight: 10 }}
                    />
                    <View style={{ marginTop: 30, width: '100%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 500, paddingTop: 10 }}>
                                Beginner
                            </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <Text style={{ fontSize: 12, color: '#394257', fontWeight: 700, marginRight: 10 }}>
                                    500
                                </Text>
                                <Image
                                    source={ratingStar}
                                />
                            </View>
                        </View>
                        <View style={{ width: '70%', height: 9, backgroundColor: '#E0E0E0', borderRadius: 5, marginTop: 6 }}>
                            <View style={{ width: '60%', backgroundColor: '#374259', height: 9, borderRadius: 5 }}>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 20, marginHorizontal: 8, backgroundColor: '#ffffff', borderRadius: 10, padding: 15, flexDirection: 'row' }}>
                    <View style={{ marginRight: 10, width: '65%' }}>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: '#374259' }}>
                            About Yes Academy
                        </Text>
                        <Text style={{ fontSize: 8, fontWeight: 400, marginTop: 14, color: '#374259', lineHeight: 16 }}>
                            Adv. Chirag Chotrani is a young yet experienced faculty in the field of Law. From being the topper of his batch, to creating many All India Rankers in the Field of Company Secretary, Chirag has proved his academic capabilities time and again….
                        </Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 8, backgroundColor: '#ffffff', borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, paddingTop: 15 }}>
                        <Text style={{ fontSize: 12, color: '#374259', fontWeight: 500 }}>
                            Main Exam
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, color: '#394257', fontWeight: 700, marginRight: 10 }}>
                                500
                            </Text>
                            <Image
                                source={ratingStar}
                            />
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'lightgrey', height: 2, width: '90%', borderRadius: 5, margin: 15 }} />
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                        <Text style={{ fontSize: 12, color: '#0000005A', fontWeight: 500 }}>
                            Going live on
                        </Text>
                        <Text style={{ fontSize: 12, color: '#42A82D', marginLeft: 3 }}>
                            13/072023
                        </Text>
                    </View>
                    <CountdownTimer
                        containerStyle={{ flexDirection: 'row', marginLeft: 15, marginTop: 10 }}
                        boxStyle={{ marginRight: 20, justifyContent: 'center', alignItems: 'center' }}
                        numberStyle={{ fontSize: 24, fontWeight: 500, color: '#394257' }}
                        textStyle={{ fontSize: 10, fontWeight: 400, color: '#394257' }}
                    />
                    <TouchableOpacity style={{ paddingVertical: 8, width: '100%', backgroundColor: '#93AADA', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: 'white', fontWeight: 500 }}>
                            Set reminder
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 8, marginTop: 25, padding: 15, backgroundColor: 'white', borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: '#374259' }}>
                            Leaderboard
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
                            <Text style={{ fontSize: 12, fontWeight: 400, color: '#374259' }}>
                                View full {`>`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 12, backgroundColor: '#F7F7F7', borderRadius: 10, paddingHorizontal: 30, paddingVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginTop: 10 }}>
                            <Image
                                source={leaderBoard2}
                                style={{ width: 55, height: 55, marginRight: 45 }}
                            />
                            <Text style={{ fontSize: 12, color: '#374259', fontWeight: 400, marginLeft: 15, marginTop: 10 }}>
                                Riya
                            </Text>
                        </View>
                        <View style={{ top: -12 }}>
                            <Image
                                source={profilePicture}
                                style={{ width: 70, height: 70, marginRight: 45, borderRadius: 35, borderWidth: 4, borderColor: '#F3AE3D' }}
                            />
                            <Text style={{ fontSize: 12, color: '#374259', fontWeight: 400, marginLeft: 17, marginTop: 10 }}>
                                Kuldeep
                            </Text>
                        </View>
                        <View style={{ top: 15 }}>
                            <Image
                                source={leaderBoard3}
                                style={{ width: 45, height: 45, marginRight: 45 }}
                            />
                            <Text style={{ fontSize: 12, color: '#374259', fontWeight: 400, marginLeft: 10, marginTop: 10 }}>
                                Karan
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 15, justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: 500, color: '#374259' }}>
                        Quizes
                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('AllQuizes')
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: '#374259' }}>
                            View All {`>`}
                        </Text>
                    </TouchableOpacity>
                </View>
                <QuizCard onPress={() => navigation.navigate('QuizScreen')} />
                <View style={{ marginVertical: 25, marginHorizontal: 8, padding: 15, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 12, color: '#374259', fontWeight: 400 }}>
                            Share the app and get
                        </Text>
                        <View style={{ flexDirection: 'row', top: 1 }}>
                            <Text style={{ fontSize: 12, color: '#394257', fontWeight: 700, marginHorizontal: 5 }}>
                                500
                            </Text>
                            <Image
                                source={ratingStar}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={{ paddingHorizontal: 27, backgroundColor: '#93AADA', justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 5 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>
                            Share
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <BarGraph /> */}
            </View>
        </ScrollView>
    )
}

export default HomePage