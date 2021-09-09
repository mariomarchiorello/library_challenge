import styled from "styled-components";

export const Container= styled.div`
  height: 10vh;
  width: 100vw;
  background-color:#004FA0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004FA0; 
  box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004FA0;
  
  
  @media (min-width:480px){
    height: 20vh;
  }
`;