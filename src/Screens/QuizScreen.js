import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ratingStar from '../../assets/rating-star.png'
import OptionsCard from '../Components/OptionsCard';
import { quizScreenStyles } from '../Styles/QuizScreenStyles';

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
        <View style={quizScreenStyles.quizContainer} >
            <View>
                <View style={quizScreenStyles.headingContainer}>
                    <Text style={quizScreenStyles.heading}>
                        Sciences Quiz 1
                    </Text>
                    <View style={quizScreenStyles.currentScoreContainer}>
                        <Image
                            source={ratingStar}
                            style={{ width: 17, height: 17 }}
                        />
                        <Text style={quizScreenStyles.currentScore}>
                            00
                        </Text>
                    </View>
                </View>
                <View style={quizScreenStyles.questionsContainer}>
                    <View style={quizScreenStyles.timerContainer}>
                        <Text style={quizScreenStyles.timer}>
                            00:{timeLeft}
                        </Text>
                    </View>
                    <Text style={quizScreenStyles.questionNumber}>
                        Question - 1/64
                    </Text>
                    <Text style={quizScreenStyles.questionText}>
                        Take steps to enhance the activities of Electronics Sector Skill Council in North Eastern States and explore the possibility for opening an electronics skill center in
                    </Text>
                </View>
            </View>
            <View style={quizScreenStyles.optionsContainer}>
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
                            style={quizScreenStyles.nextButton}
                            disabled={disable ? false : true}
                        >
                            <Text style={quizScreenStyles.nextText}>
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