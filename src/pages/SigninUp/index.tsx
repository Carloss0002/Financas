import { Platform, Text, View } from "react-native"
import {AreaInput, Container, ContainerForm, Input, SubmitBtn, SubmitText} from '../SignIn/styles'

export default function SignUp(){
    return (
        <Container>
            <ContainerForm
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Seu Nome"
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Seu Email"
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Sua Senha"
                    />
                </AreaInput>
                <SubmitBtn>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitBtn>
            </ContainerForm>
        </Container>
    )
}