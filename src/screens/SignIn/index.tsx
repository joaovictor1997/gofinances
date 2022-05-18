import React, { useContext } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SigninSocialButton } from '../../components/SigninSocialButton'

import { useAuth } from '../../hooks/auth';

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles'

export function SignIn() {
  const { user } = useAuth() ;

  console.log(user);

  return (
    <Container>
      <Header>
          <TitleWrapper>
            <LogoSvg 
              width={RFValue(120)}
              height={RFValue(68)}
            />

            <Title>
              Controle sua {'\n'}
              finanças de forma {'\n'}
              muito simples {'\n'}
            </Title>
          </TitleWrapper>

          <SignInTitle>
            Faça seu login com {'\n'}
            uma das contas abaixo
          </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SigninSocialButton title='Entrar com Google' svg={GoogleSvg} />
          <SigninSocialButton title='Entrar com Google' svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
      
    </Container>
  )
}