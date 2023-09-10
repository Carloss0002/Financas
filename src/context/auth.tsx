import {createContext, useState} from 'react'
import { AuthProviderProps, State, initialContext } from './types'
import { ApiController } from '../services/axios'
import { useNavigation } from '@react-navigation/native'

export  const AuthUser = createContext(initialContext)

function AuthProvider({children}:AuthProviderProps){
    const [state, setState] = useState<State>({
        user: null,
        loading: false
    })
    const navigate = useNavigation()
    function signUp(email:string, password: string, name:string){
        setState({...state, loading: true})
        try{
            ApiController.sendUser({email, name, password})
            setState({...state, loading: false})
            navigate.goBack()
        } catch(err) {
            console.log(err)
            setState({...state, loading: false})
        } 
    }
    return(
        <AuthUser.Provider
            value={{
                user: state.user,
                signUp: signUp,
                loading: state.loading,
                signed: !!state.user
            }}
        >
            {children}
        </AuthUser.Provider>
    )
} 

export default AuthProvider
