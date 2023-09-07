import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SigninUp";


const Stack = createNativeStackNavigator()
function AuthRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#3b3dbf',
                    },
                    contentStyle:{
                        borderTopWidth: 1,
                        borderTopColor: '#00b94a'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes
