import { View } from "react-native"
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"
import { useContext } from "react"
import { AuthUser } from "../context/auth"

function Routes(){
    const {signed, loading} = useContext(AuthUser)

    return (
        signed ? (
            <AppRoutes/>
        ) : (
            <AuthRoutes/>
        )
    )
}

export default Routes