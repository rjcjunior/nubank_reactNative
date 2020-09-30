import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Top, Logo, Title} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

export default function Header({changeStateY}) {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Ricardo</Title>
      </Top>
      <TouchableOpacity onPress={changeStateY}>
        <Icon name="keyboard-arrow-down" size={20} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
