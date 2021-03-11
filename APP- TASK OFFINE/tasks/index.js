/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TaskList from '../tasks/src/screens/TaskList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TaskList);
