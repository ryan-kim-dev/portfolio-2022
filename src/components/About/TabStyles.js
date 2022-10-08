import styled from 'styled-components';

export const TabLayout = styled.div`
  width: 800px;
  @media screen and (max-width: 479px) {
    width: 380px;
  }
`;

export const TabMenu = styled.ul`
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  .submenu {
    cursor: pointer;
    flex-grow: 1;
    text-align: center;
  }
  .focused {
    background-color: #374999;
    color: #e5e5e5;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
  & div.desc {
    text-align: center;
  }
`;

export const Desc = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  @media screen and (max-width: 479px) {
    padding: 0;
  }
`;

export const Left = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  row-gap: 0.5rem;
  /* border: 1px solid yellow; */
  img {
    background-color: transparent;
    width: 50px;
  }
  @media screen and (max-width: 479px) {
    width: 50px;
    row-gap: 0;
  }
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  p {
    text-align: center;
  }
  @media screen and (max-width: 479px) {
    font-size: 13px;
    padding: 20px;
  }
`;
