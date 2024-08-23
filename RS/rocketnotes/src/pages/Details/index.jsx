import  {Container, Links}   from './styles'
import React from 'react'
import { Button } from '../../components/Button'
import {Header} from '../../components/Header'
import { Section } from '../../components/Section'
 export function Details(){


  return(
    <Container> 
      <Header />

      <Section Title="Itens Uteis">
        <Links>
          <li><a href="#">https://br.linkedin.com/</a></li>
          <li><a href="#">https://br.linkedin.com/</a></li>
        </Links>
      </Section>

      <Section Title="Marcadores">
        
      </Section>
      
      <Button title="Voltar" loading/>
    </Container>
  )

}