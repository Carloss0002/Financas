import { View } from "react-native"
import AuthRoutes from "./auth.routes"

function Routes(){
    const loading:boolean = false
    const signed:boolean = false

    return (
        signed ? (
            <View>

            </View>
        ) : (
            <AuthRoutes/>
        )
    )
}

export default Routes