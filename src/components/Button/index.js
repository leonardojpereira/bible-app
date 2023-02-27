import styled from 'styled-components';

export const ButtonClear = styled.button`
      height: 30px;
      width: 40%;
      padding-left: 4px; 
      border-radius: 5px;
      border: none;
      cursor: pointer;
      background: linear-gradient(to left, #ff461d, #803ca8);
      color: #FFF;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 320px) {
            font-size: 12px;
         }
`

export const ButtonSearch = styled.button`
   width: 60%;
   height: 30px;
   border-radius: 5px;
   border: none;
   cursor: pointer;
   background: linear-gradient(to right,#803ca8, #ff461d);
   color: #FFF;
   outline: none;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 16px;
   @media (max-width: 320px) {
      font-size: 12px;
   }
`
