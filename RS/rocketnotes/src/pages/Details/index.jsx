import  {Container, Links}   from './styles'
import React from 'react'
import { Button } from '../../components/Button'
import {Header} from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag} from '../../components/Tag'
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
        <Tag Title="express"/>
        <Tag Title="node,js"/>
      </Section>
      
      <Button title="Voltar" loading/>
    </Container>
  )

}