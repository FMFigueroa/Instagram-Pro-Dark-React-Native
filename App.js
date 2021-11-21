import * as React from 'react';
import AuthNavigation from './AuthNavigation';
import { LogBox } from 'react-native';


export default function App() {
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['Setting a timer']);
  return <AuthNavigation />;
}
