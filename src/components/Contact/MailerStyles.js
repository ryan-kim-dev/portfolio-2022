import styled from 'styled-components';

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.2);
  width: 70%;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 1rem;
  textarea {
    background: inherit;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1.5px solid #414141;
    width: 400px;
    height: 150px;
  }
  @media screen and (max-width: 479px) {
    textarea {
      width: 200px;
    }
  }
`;

export const Div = styled.div``;

export const Label = styled.label`
  display: block;
  font-family: 'Oswald', sans-serif;
`;

export const Input = styled.input`
  background: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1.5px solid #414141;
  width: 400px;
  &.submit-btn {
    width: max-content;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    color: inherit;
    text-decoration: none;
    border: 2px solid #414141;
    padding: 2px 10px;
    background-color: transparent;
    :hover {
      color: #bebebe;
      border: 2px solid #bebebe;
    }
  }
  @media screen and (max-width: 479px) {
    width: 200px;
  }
`;
