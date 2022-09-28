import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 24px;
  width: 300px;
  height: 50px;
  background-color: ${props => props.theme.colors.green};
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 300px;
  height: 80px;
  background-color: ${props => props.theme.colors.gray};
`;
