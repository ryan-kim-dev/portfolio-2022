import styled from 'styled-components';

export const RefLayout = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

export const RefCheckBtn = styled.button`
  cursor: pointer;
  border: none;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  background-color: #374999;
  color: #fff;
  width: 150px;
  padding: 10px 30px;
  margin: 10px;

  :hover {
    background-color: skyblue;
    color: black;
  }
`;
