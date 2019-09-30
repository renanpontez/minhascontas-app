/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#454ADE',
    accent: '#1B9718',
  }
};

export default function AppWrapped() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => AppWrapped);
