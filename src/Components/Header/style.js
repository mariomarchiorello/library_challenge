import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  overflow-x: hidden;
  height: 5rem;
  width: 100%;
  background-color: #004fa0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;
  box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;

  @media (min-width: 480px) {
    height: 5rem;
  }
`;
