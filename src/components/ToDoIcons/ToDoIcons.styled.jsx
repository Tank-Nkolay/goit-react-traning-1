import styled from 'styled-components';

export const Card = styled.article`
  display: inline-flex;
  flex-direction: column;
  margin-top: 30px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const RecipeName = styled.h2`
  margin-top: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;

  border-radius: 6px;
  border: 1px solid black;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    color: red;
  }
`;

export const Label = styled.p`
  margin: 0;
`;

export const DiffWraper = styled.section`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid black;
`;

export const DiffTitle = styled.h3`
  margin-top: 0;
`;

export const BedgeList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Bedge = styled.p`
  margin: 0px;
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 8px;

  background-color: ${p => {
    return p.selected ? '#e37c44' : '#ffffff';
  }};
  color: ${p => {
    return p.selected ? '#ffffff' : '#000000';
  }};
`;
