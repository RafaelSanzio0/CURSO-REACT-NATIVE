/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegacao from './src/navegacao'; // meio que mudei a pagina inicial de App pra navegacao
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navegacao);
