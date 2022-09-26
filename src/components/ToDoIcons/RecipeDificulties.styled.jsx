import styled from 'styled-components';

export const Wraper = styled.section`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid black;
`;

export const Title = styled.h3`
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
