import styled from 'styled-components';

export const Title = styled.h1`
   text-align: center;
   margin: 22px 0;
   color: #603000;
   font-size: ${props => props.large ? '38px' : '22px'};
   @media (max-width: 320px) {
      font-size: 28px;
   }
`
