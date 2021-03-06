import styled from 'styled-components';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
  position: relative;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex-flow: column;
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #333;
  margin-top: 3px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
`;
