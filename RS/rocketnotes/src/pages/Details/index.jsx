import  {Container, Links, Content}   from './styles'
import React from 'react'
import { Button } from '../../components/Button'
import {Header} from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag} from '../../components/Tag'
import {ButtonText} from '../../components/ButtonText'
 export function Details(){


  return(
    <Container> 
      <Header />

      <main>
        <Content>

      

      <ButtonText Title="Excluir nota"/>

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
    
      </Content>
      </main>
    </Container>
  )

}