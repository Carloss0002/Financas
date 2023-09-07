import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import Routes from "./src/routes";
import AuthProvider from "./src/context/auth";

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#F0F4FF' barStyle={"dark-content"}/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}