import  { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'


import AuthScreen from './src/screens/Auth/Auth'
import InputDataScreen from './src/screens/InputData/InputData'
import ListKaryawanScreen from './src/screens/ListKaryawan/ListKaryawan'
import KaryawanDetailScreen from './src/screens/KaryawanDetail/KaryawanDetail'
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer'

const store = configureStore()

// Register Screens
Navigation.registerComponent(
  "jc8reactnative.AuthScreen",
  () => AuthScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.InputDataScreen",
  () => InputDataScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.ListKaryawanScreen",
  () => ListKaryawanScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc8reactnative.KaryawanDetailScreen',
  () => KaryawanDetailScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc8reactnative.SideDrawerScreen',
  () => SideDrawerScreen,
  store,
  Provider
)


// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: 'jc8reactnative.AuthScreen',
    title: 'Authentication'
  }
})