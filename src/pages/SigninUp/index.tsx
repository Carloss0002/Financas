import { ActivityIndicator, Platform, Text, View } from "react-native"
import {AreaInput, Container, ContainerForm, Input, SubmitBtn, SubmitText} from '../SignIn/styles'
import { useContext, useState } from "react"
import { AuthUser } from "../../context/auth"

type State = {
    name: string,
    email: string,
    password: string
}

export default function SignUp(){
    const {signUp, loading} = useContext(AuthUser)
    const [state, setState] = useState<State>({
        name: '',
        email: '',
        password: ''
    })
    const {email, name, password} = state
    function handleSubmit(){
        if(email === '' || name === '' || password === ''){
            return
        }
        signUp(email, password, name)
    }
    return (
        <Container>
            <ContainerForm
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Seu Nome"
                        value={name}
                        onChangeText={text => setState({...state, name: text})}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Seu Email"
                        value={email}
                        onChangeText={text => setState({...state, email: text})}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Sua Senha"
                        value={password}
                        onChangeText={text => setState({...state, password: text})}
                        secureTextEntry={true}
                    />
                </AreaInput>
                <SubmitBtn onPress={()=>handleSubmit()}>
                    {
                        loading ? (
                            <ActivityIndicator size={20} color="#FFF"/>
                        ):(
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitBtn>
            </ContainerForm>
        </Container>
    )
}