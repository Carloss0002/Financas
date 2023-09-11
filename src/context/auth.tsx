import {createContext, useState} from 'react'
import { AuthProviderProps, State, initialContext } from './types'
import { userControler } from '../services/axios'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

export  const AuthUser = createContext(initialContext)

function AuthProvider({children}:AuthProviderProps){
    const [state, setState] = useState<State>({
        user: null,
        loading: false
    })
    const navigate = useNavigation()
    async function signUp(email:string, password: string, name:string){
        setState({...state, loading: true})
        try{
           await userControler.sendUser({email, name, password})
            setState({...state, loading: false})
            navigate.goBack()
        } catch(err) {
            console.log(err)
            setState({...state, loading: false})
        } 
    }
    async function signIn(emailUser:string, password: string){
        setState({...state, loading: true})
        try {
            const response = await userControler.getUser({email:emailUser, password})
            const {id, email, name,token} = response.data
            axios.defaults.headers['Authorization'] = `Bearer ${token}`
            const data = {
                id,
                name,
                email
            }
            setState({...state, user:data, loading: false})
        } catch (error) {
            
        }
    }
    return(
        <AuthUser.Provider
            value={{
                user: state.user,
                loading: state.loading,
                signed: !!state.user,
                signUp,
                signIn
            }}
        >
            {children}
        </AuthUser.Provider>
    )
} 

export default AuthProvider
