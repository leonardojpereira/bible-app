import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    @media (max-width: 660px) {
        display: block;
        overflow: auto;
      }
`