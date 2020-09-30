import styled from 'styled-components';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  max-height: 100px;
  margin-top: 24px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  padding: 16px;
  justify-content: space-between;
  margin-left: 10px;
`;

export const TabText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
