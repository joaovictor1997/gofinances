import React from 'react';
import { FlatList } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){

  const data : DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      }
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      date: '10/04/2020',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      }
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      date: '07/04/2020',
      category: {
        name: 'Casa',
        icon: 'home'
      }
    }
  ]

  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{uri: 'https://avatars.githubusercontent.com/u/49030804?v=4'}} 
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril' 
          type='up'
        />
        <HighlightCard
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saida dia 03 de abril' 
          type='down'
        />
        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril' 
          type='total'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} /> }
          showsVerticalScrollIndicator={false} 
        />
        
      </Transactions>
      
    </Container>
  )
}