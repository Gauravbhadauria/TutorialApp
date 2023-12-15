/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AnimationDemo from './AnimationDemo';
import FlatlistSelection from './FlatlistSelection';
import DropdownFlatlist from './DropdownFlatlist';

AppRegistry.registerComponent(appName, () => FlatlistSelection);
