import {Container} from './styles'

export function ButtonText ({Title, ...rest}) {

    return(
        <Container 
        type="button"
        {...rest}>

            {Title}
        </Container>
    )
}