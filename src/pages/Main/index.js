import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {
  Container,
  Content,
  Card,
  CardFooter,
  CardHeader,
  CardContent,
  Annotation,
  Description,
  Title,
} from './style';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  let openedY = false;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const changeStateY = () => {
    translateY.setValue(offset);
    translateY.setOffset(0);
    offset = 0;

    Animated.timing(translateY, {
      toValue: !openedY ? 420 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      offset = !openedY ? 420 : 0;
      translateY.setOffset(offset);
      translateY.setValue(0);
      openedY = !openedY;
    });
  };

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header changeStateY={changeStateY} />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-200, 0, 380],
                    outputRange: [-50, 0, 420],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Description>R$ 455.245,29</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 44,00 recebida de Ricardo José hoje às 10:00
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
