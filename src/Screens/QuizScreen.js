import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import ratingStar from '../../assets/rating-star.png';
// import OptionsCard from '../Components/OptionsCard';
import {quizScreenStyles} from '../Styles/QuizScreenStyles';
import {QuestionContext} from '../Constants/ApiContext';

const QuizScreen = ({navigation}) => {
  const [timeLeft, setTimeLeft] = useState(59);
  const [timeTaken, settimeTaken] = useState(0);
  const [disable, setDisable] = useState(false);
  const {
    getCurrentQuestion,
    getCurrentOptions,
    handleNextQuestion,
    currentQuestionIndex,
    questions,
    setCorrectOption,
  } = useContext(QuestionContext);

<<<<<<< Updated upstream
    const [timeLeft, setTimeLeft] = useState(59);
    const [disable, setDisable] = useState(false)
    const { getCurrentQuestion, getCurrentOptions, handleNextQuestion, currentQuestionIndex, questions, setCorrectAnswer } = useContext(QuestionContext)

    onPressOption = () => {
        // handleOptionSelection(index)
        // setCorrectAnswer()
        setDisable(true)
        console.log(questions[currentQuestionIndex])
=======
  const onPressOption = value => {
    setCorrectOption(value);
    // console.log(questions);
    setDisable(true);
  };
  const onQuizSubmit = () => {
    let quizData = {};
    for (let i = 0; i < questions.length; i++) {
      if (questions[i]) {
        quizData[questions[i].key] = {
          answer: questions[i].answer,
          question: questions[i].question,
          options: questions[i].options,
        };
      }
>>>>>>> Stashed changes
    }
    console.log(quizData);
  };

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
      settimeTaken(timeTaken + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    if (timeLeft === 0) {
      handleNextQuestion();
      setTimeLeft(59);
    }
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setDisable(false);
  }, [currentQuestionIndex]);

  const data = [
    {
      id: 1,
      option: 'Sustainable',
      correct: true,
    },
    {
      id: 2,
      option: 'Economical',
      correct: false,
    },
    {
      id: 3,
      option: 'Social',
      correct: false,
    },
    {
      id: 4,
      option: 'None of the above',
      correct: false,
    },
  ];

<<<<<<< Updated upstream
    return (
        <View style={{ ...quizScreenStyles.quizContainer }}>
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
                        {currentQuestionIndex+1} / 
                    </Text>
                    <Text style={quizScreenStyles.questionText}>
                        {getCurrentQuestion()}
                    </Text>
                </View>
            </View>
            <View style={quizScreenStyles.optionsContainer}>
                <FlatList
                    data={getCurrentOptions()}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <OptionsCard
                            option={item}
                            // answer={item.correct}
                            onPress={onPressOption}
                            disabled={disable}
                            questionIndex={currentQuestionIndex}
                        />
                    )} 
                    ListFooterComponent={() => (
                        <TouchableOpacity
                            style={{ ...quizScreenStyles.nextButton, backgroundColor: disable ? '#222336' : 'grey', }}
                            disabled={disable ? false : true}
                            onPress={() => {
                                if (currentQuestionIndex + 1 < questions.length) {
                                    handleNextQuestion()
                                } else {
                                    navigation.navigate('Result')
                                }
                                setTimeLeft(59)
                            }}
                        >
                            <Text style={quizScreenStyles.nextText}>
                                {
                                    currentQuestionIndex + 1 === questions.length ? 'Submit' : 'Next'
                                }
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
=======
  return (
    <View style={{...quizScreenStyles.quizContainer}}>
      <View>
        <View style={quizScreenStyles.headingContainer}>
          <Text style={quizScreenStyles.heading}>Sciences Quiz 1</Text>
          <View style={quizScreenStyles.currentScoreContainer}>
            <Image source={ratingStar} style={{width: 17, height: 17}} />
            <Text style={quizScreenStyles.currentScore}>00</Text>
          </View>
>>>>>>> Stashed changes
        </View>
        <View style={quizScreenStyles.questionsContainer}>
          <View style={quizScreenStyles.timerContainer}>
            <Text style={quizScreenStyles.timer}>00:{timeLeft}</Text>
          </View>
          <Text style={quizScreenStyles.questionNumber}>Question - 1/64</Text>
          <Text style={quizScreenStyles.questionText}>
            {getCurrentQuestion()}
          </Text>
        </View>
      </View>
      <View style={quizScreenStyles.optionsContainer}>
        <FlatList
          data={getCurrentOptions()}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <OptionsCard
              option={item}
              answer={item}
              onPress={onPressOption}
              disabled={disable}
              questionIndex={currentQuestionIndex}
            />
          )}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={{
                ...quizScreenStyles.nextButton,
                backgroundColor: disable ? '#222336' : 'grey',
              }}
              disabled={disable ? false : true}
              onPress={() => {
                if (currentQuestionIndex + 1 < questions.length) {
                  handleNextQuestion();
                } else {
                  onQuizSubmit();
                }
                setTimeLeft(59);
              }}>
              <Text style={quizScreenStyles.nextText}>
                {currentQuestionIndex + 1 === questions.length
                  ? 'Submit'
                  : 'Next'}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const OptionsCard = ({disabled, option, answer, onPress, questionIndex}) => {
  const value = answer;
  const [optionSelect, setOptionSelect] = useState(false);
  const onPressOption = () => {
    setOptionSelect(true);
    onPress(value);
  };
  useEffect(() => {
    setOptionSelect(false);
  }, [questionIndex]);

  const optionColor = optionSelect ? (value ? '#C3EDBF' : 'red') : '#F2F2F2';
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 12,
        paddingLeft: 12,
        backgroundColor: optionColor,
        marginBottom: 15,
        borderRadius: 10,
      }}
      onPress={onPressOption}
      disabled={disabled}>
      <Text style={{fontSize: 12, fontWeight: 500, color: '#42003F'}}>
        {option}
      </Text>
    </TouchableOpacity>
  );
};

export default QuizScreen;

// https://main.dmlle2bijll8z.amplifyapp.com/upload
