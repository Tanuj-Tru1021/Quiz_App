/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import QuizScreen from './src/Screens/QuizScreen';
import Leaderboard from './src/Screens/Leaderboard';

AppRegistry.registerComponent(appName, () => App);
