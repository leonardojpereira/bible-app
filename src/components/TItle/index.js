import styled from 'styled-components';

export const Title = styled.h1`
   margin-bottom: 22px;
   background-image: linear-gradient(to top, #803ca8, #ff461d);
   color: black;
   background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
   font-size: ${props => props.large ? '38px' : '22px'}
`
