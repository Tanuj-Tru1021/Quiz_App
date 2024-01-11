import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    //   const navigation = useNavigation(); // React Navigation hook for navigation

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(59);

    const fetchData = async () => {
        try {
            const url = 'http://quiz-app-dev-env.eba-fvnk6fkv.ap-south-1.elasticbeanstalk.com/api/v1//quiz/659dcce9592b8846dbe81b27/6575effc13906711ea001bed'
            const response = await axios.get(url)
            console.log("yesssssssss")
            setQuestions(response.data)
            console.log(questions)
        } catch (error) {
            console.error('Error fetching API data', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // useEffect(() => {
    //     // Fetch data from the API when the component mounts
    //     axios.get('http://quiz-app-dev-env.eba-fvnk6fkv.ap-south-1.elasticbeanstalk.com/api/v1//quiz/659dcce9592b8846dbe81b27/6575effc13906711ea001bed')
    //         .then(response => {
    //             // Handle the response data
    //             console.log("yesssss")
    //             setQuestions(response.data)
    //             console.log(questions, "osinajsn")
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    // useEffect(() => {
    //     // Decrease the timer every second
    //     const countdown = setInterval(() => {
    //         setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    //     }, 1000);

    //     // Move to the next question when the timer reaches 0
    //     if (timer === 0) {
    //         handleNextQuestion();
    //     }

    //     // Clear the interval on component unmount or when timer reaches 0
    //     return () => clearInterval(countdown);
    // }, [timer]);

    const handleOptionSelection = (selectedOptionId) => {
        const currentQuestion = questions[currentQuestionIndex];
        const correctOptionId = currentQuestion.correctOptionId;

        if (selectedOptionId === correctOptionId) {
            setScore(prevScore => prevScore + 3); // Increase score by 3 for correct answer
        }

        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setTimer(59); // Reset the timer to 59 seconds for the next question
    };

    const handleRemoveOptions = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const correctOptionId = currentQuestion.correctOptionId;

        let removedCount = 0;
        const updatedOptions = currentQuestion.options.filter(option => {
            if (option.id !== correctOptionId && removedCount < 2) {
                removedCount++;
                return false;
            }
            return true;
        });

        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].options = updatedOptions;
        setQuestions(updatedQuestions);
    };

    const getCurrentQuestion = () => {
        return questions[currentQuestionIndex];
    };

    return (
        <QuestionContext.Provider
            value={{
                questions,
                currentQuestionIndex,
                score,
                timer,
                handleOptionSelection,
                handleRemoveOptions,
                getCurrentQuestion
            }}
        >
            {children}
        </QuestionContext.Provider>
    );
};