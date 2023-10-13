import styled from 'styled-components';

export const List = styled.ul`
  margin: 80px auto;
  width: 200px;
  height: 100%;
  align-items: center;
  list-style: none;
`;

export const IsFriendOnline = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
