import { Container } from './styles'

export function Section({Title, children}){

    return(

        <Container>

            <h2>{Title}</h2>
            {children}

        </Container>
    )
}