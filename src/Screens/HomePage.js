import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import headerImage from '../../assets/header-image.png'
import profilePicture from '../../assets/profile-pic.png'
import ratingStar from '../../assets/rating-star.png'
import leaderBoard2 from '../../assets/leaderboard-2.png'
import leaderBoard3 from '../../assets/leaderboard-3.png'
import CountdownTimer from '../Components/CountdownTimer'
import QuizCard from '../Components/QuizCard'
import BarGraph from '../Components/BarGraph'
import {homeStyles} from '../Styles/HomeStyles'
import { QuestionContext } from '../Constants/ApiContext'
import axios from 'axios'

const HomePage = ({ navigation }) => {

    const [data, setData] = useState([])
    const fetchData = async () => {
        console.log("yessssss11111111")
        try {
            const url = 'http://quiz-app-dev-env.eba-fvnk6fkv.ap-south-1.elasticbeanstalk.com/api/v1//quiz/659dcce9592b8846dbe81b27/6575effc13906711ea001bed'
            const response = await axios.get(url)
            console.log("yesssssssss")
            setData(response.quiz)
            // console.log(data)
        } catch (error) {
            console.log("Error", error)
        }
    }

    useEffect(() => {
        fetchData()
        console.log("yessss")
    }, [])
    
    return (
        <ScrollView>
            <View style={homeStyles.container}>
                <View style={homeStyles.firstBlock}>
                    <Image
                        source={profilePicture}
                        style={homeStyles.profilePicture}
                    />
                    <View style={{ marginTop: 30, width: '100%' }}>
                        <View style={homeStyles.insideView1}>
                            <Text style={homeStyles.beginnerText}>
                                Beginner
                            </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <Text style={homeStyles.Text500}>
                                    500
                                </Text>
                                <Image
                                    source={ratingStar}
                                />
                            </View>
                        </View>
                        <View style={homeStyles.blankView1}>
                            <View style={homeStyles.blankView2}>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={homeStyles.secondBlock}>
                    <View style={{ marginRight: 10, width: '65%' }}>
                        <Text style={homeStyles.aboutText}>
                            About Yes Academy
                        </Text>
                        <Text style={homeStyles.descriptionText}>
                            Adv. Chirag Chotrani is a young yet experienced faculty in the field of Law. From being the topper of his batch, to creating many All India Rankers in the Field of Company Secretary, Chirag has proved his academic capabilities time and again….
                        </Text>
                    </View>
                </View>
                <View style={homeStyles.thirdBlock}>
                    <View style={homeStyles.insideView2}>
                        <Text style={homeStyles.mainExamText}>
                            Main Exam
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={homeStyles.Text500}>
                                500
                            </Text>
                            <Image
                                source={ratingStar}
                            />
                        </View>
                    </View>
                    <View style={homeStyles.blankView3} />
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                        <Text style={homeStyles.liveText}>
                            Going live on
                        </Text>
                        <Text style={homeStyles.dateText}>
                            13/072023
                        </Text>
                    </View>
                    <CountdownTimer
                        containerStyle={homeStyles.countdownContainer}
                        boxStyle={homeStyles.countdownBox}
                        numberStyle={homeStyles.countdownNumber}
                        textStyle={homeStyles.countdownText}
                    />
                    <TouchableOpacity style={homeStyles.reminderButton}>
                        <Text style={homeStyles.reminderText}>
                            Set reminder
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={homeStyles.fourthBlock}>
                    <View style={homeStyles.headingLeaderboardView}>
                        <Text style={homeStyles.headingLeaderboardText}>
                            Leaderboard
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
                            <Text style={homeStyles.fullLeaderboard}>
                                View full {`>`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={homeStyles.leaderboardCard}>
                        <View style={{ marginTop: 10 }}>
                            <Image
                                source={leaderBoard2}
                                style={homeStyles.imageRiya}
                            />
                            <Text style={homeStyles.riyaText}>
                                Riya
                            </Text>
                        </View>
                        <View style={{ top: -12 }}>
                            <Image
                                source={profilePicture}
                                style={homeStyles.imageKuldeep}
                            />
                            <Text style={homeStyles.kuldeepText}>
                                Kuldeep
                            </Text>
                        </View>
                        <View style={{ top: 15 }}>
                            <Image
                                source={leaderBoard3}
                                style={homeStyles.imageKaran}
                            />
                            <Text style={homeStyles.karanText}>
                                Karan
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={homeStyles.headingQuizView}>
                    <Text style={homeStyles.headingQuizText}>
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
                <View style={homeStyles.fifthBlock}>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={homeStyles.shareText}>
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
                    <TouchableOpacity style={homeStyles.shareButton}>
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