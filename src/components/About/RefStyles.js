import styled from 'styled-components';

export const RefLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RefCheckBtn = styled.button`
  cursor: pointer;
  border: none;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  background-color: #374999;
  color: #fff;
  width: 200px;
  padding: 15px 30px;
  margin: 0 10px 30px 10px;
  font-size: 1.2rem;

  :hover {
    background-color: skyblue;
    color: black;
  }
`;
