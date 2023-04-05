import styled from 'styled-components';

export const ButtonClear = styled.button`
      font-size: 16px;
      height: 50px;
      width: 40%;
      padding-left: 4px; 
      border-radius: 5px;
      border: none;
      cursor: pointer;
      background: #603000;
      color: #FFF;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.4s ease;   
      &:hover {
         opacity: 0.9;
      }
      @media (max-width: 320px) {
            font-size: 12px;
         }
`

export const ButtonSearch = styled.button`
   font-size: 16px;
   width: 60%;
   height: 50px;
   border-radius: 5px;
   border: none;
   cursor: pointer;
   background: #603000;
   color: #FFF;
   outline: none;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 16px;
   transition: 0.4s ease;
   &:hover {
      opacity: 0.9;
   }
   @media (max-width: 320px) {
      font-size: 12px;
   }
   
`
