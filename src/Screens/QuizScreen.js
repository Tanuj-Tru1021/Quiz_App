import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ratingStar from '../../assets/rating-star.png'
import OptionsCard from '../Components/OptionsCard';

const QuizScreen = () => {

    const [timeLeft, setTimeLeft] = useState(59);
    const [disable, setDisable] = useState(false)

    onPressOption = () => {
        setDisable(true)
    }

    const startTimer = () => {
        timer = setTimeout(() => {
            if (timeLeft <= 0) {
                clearTimeout(timer);
                return false;
            }
            setTimeLeft(timeLeft - 1);
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        if (timeLeft === 0) {
            setTimeLeft(59)
        }
        return () => clearTimeout(timer);
    });

    const data = [
        {
            'id': 1,
            'option': 'Sustainable',
            'correct': true
        },
        {
            'id': 2,
            'option': 'Economical',
            'correct': false
        },
        {
            'id': 3,
            'option': 'Social',
            'correct': false
        },
        {
            'id': 4,
            'option': 'None of the above',
            'correct': false
        }
    ]

    return (
        <View style={{ flex: 1, backgroundColor: '#0000001A', justifyContent: 'space-between' }} >
            <View>

                <View style={{ backgroundColor: '#374259', paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: '#ffffff' }}>
                        Sciences Quiz 1
                    </Text>
                    <View style={{ marginVertical: 15, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={ratingStar}
                            style={{ width: 17, height: 17 }}
                        />
                        <Text style={{ fontSize: 17, fontWeight: 500, color: '#ffffff', marginLeft: 7 }}>
                            00
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', padding: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ alignSelf: 'center', paddingHorizontal: 33, paddingVertical: 8, backgroundColor: '#394257', borderRadius: 10 }}>
                        <Text style={{ fontSize: 13, color: '#ffffff', fontWeight: 500 }}>
                            00:{timeLeft}
                        </Text>
                    </View>
                    <Text style={{ marginTop: 25, fontSize: 13, fontWeight: 600, color: '#000000' }}>
                        Question - 1/64
                    </Text>
                    <Text style={{ fontSize: 12, marginTop: 10, color: "#222336", fontWeight: 400, lineHeight: 22 }}>
                        Take steps to enhance the activities of Electronics Sector Skill Council in North Eastern States and explore the possibility for opening an electronics skill center in
                    </Text>
                </View>
            </View>
            <View style={{ paddingVertical: 35, paddingHorizontal: 50, backgroundColor: '#ffffff', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <OptionsCard
                            option={item.option}
                            answer={item.correct}
                            onPress={onPressOption}
                            disabled={disable}
                        />
                    )}
                    ListFooterComponent={() => (
                        <TouchableOpacity
                            style={{ paddingVertical: 10, width: '70%', backgroundColor: disable ? '#222336' : 'grey', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 50, borderRadius: 5 }}
                            disabled={disable ? false : true}
                        >
                            <Text style={{ fontSize: 13, fontWeight: 500, color: '#ffffff' }}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default QuizScreen

// https://main.dmlle2bijll8z.amplifyapp.com/upload