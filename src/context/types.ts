import React from "react"

export const initialContext:initial = {
    user: []
    // signUp: (email: string, password: string, name: string) => {},
    // signIn: (email:string, password: string) => {}
}

interface initial{
    user: User[],
}

export type AuthProviderProps = {
    children: React.ReactNode
}

export interface State {
    user: User[]
}

interface User {
    name: string
}