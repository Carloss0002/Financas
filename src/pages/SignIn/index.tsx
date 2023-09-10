import { Platform } from 'react-native'
import {AreaInput, Container, ContainerForm, Image, Input, Link, LinkText, SubmitBtn, SubmitText} from './styles'
import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import AuthProvider, { AuthUser } from '../../context/auth'

export default function SignIn(){
    const navigate:any = useNavigation()
    const {signUp} = useContext(AuthUser)
    function handleSubmit(){
        signUp('teste', 'testando', 'carlos')
    }
    return (
        <Container>
            <ContainerForm
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
                enabled
            >
                <Image source={require('../../assets/Logo.png')}/>
                <AreaInput>
                    <Input
                        placeholder='Seu Email'
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Sua Senha'
                    />
                </AreaInput>
                <SubmitBtn activeOpacity={0.8} onPress={()=>handleSubmit()}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitBtn>
                <Link onPress={()=>navigate.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </ContainerForm>
        </Container>
    )
}