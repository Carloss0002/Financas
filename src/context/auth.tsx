import {createContext, useState} from 'react'
import { AuthProviderProps, State, initialContext } from './types'

export  const AuthUser = createContext(initialContext)

function AuthProvider({children}:AuthProviderProps){
    const [state, setState] = useState<State>({
        user: [{
            name: 'Carlos Eduardo'
        }]
    })
    return(
        <AuthUser.Provider
            value={{
                user: state.user
            }}
        >
            {children}
        </AuthUser.Provider>
    )
} 

export default AuthProvider
