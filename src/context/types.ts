import React from "react"

export const initialContext:initial = {
    user: [],
    signUp: (email: string, password: string, name: string) => {},
    // signIn: (email:string, password: string) => {}
    loading: false,
    signed: false
}

interface initial{
    user: User[] | null,
    signUp: (email: string, password: string, name: string) => void,
    loading: boolean,
    signed: boolean
}

export type AuthProviderProps = {
    children: React.ReactNode
}

export interface State {
    user: User[] | null,
    loading: boolean
}

interface User {
    name: string
}