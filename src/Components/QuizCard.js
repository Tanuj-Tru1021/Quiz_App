import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ratingStar from '../../assets/rating-star.png'
import Science from '../../assets/science-image.png'

const QuizCard = () => {
    return (
        <View style={{ marginHorizontal: 8, marginTop: 10, padding: 15, backgroundColor: 'white', borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={{ fontSize: 12, fontWeight: 500, color: '#374259' }}>
                    Science test 1
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: '#394257', fontWeight: 700, marginRight: 10 }}>
                        500
                    </Text>
                    <Image
                        source={ratingStar}
                        style={{ width: 25, height: 25 }}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: 'lightgrey', height: 2, width: '100%', borderRadius: 5, marginTop: 10 }} />
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={Science}
                        style={{ borderRadius: 10, marginRight: 12 }}
                    />
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 10, fontWeight: 400 }}>
                            Question - 60
                        </Text>
                        <Text style={{ fontSize: 10, fontWeight: 400 }}>
                            Date publish - 13/07/2023
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ paddingHorizontal: 20, backgroundColor: '#93AADA', justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 5, marginTop: 15 }}>
                    <Text style={{ fontSize: 12, color: 'white' }}>
                        Play Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QuizCard