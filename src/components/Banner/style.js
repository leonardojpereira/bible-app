import styled from 'styled-components';

const BannerContainer = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    @media (max-width: 930px) {
        width: 100%;
        height: 50vh; 
    }
`

const ImgBanner = styled.img`
    width: 100%;
    height: 100%;
    image-position: center;
    object-fit: cover;
`

const TextContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255, 0.3);
    max-width: 400px;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    @media (max-width: 430px) {
        max-width: 260px;
        height: 250px;
    }
`
const Text = styled.p`
    padding: 28px 8px;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #FFF;
    font-weight: bold;
    @media (max-width: 430px) {
       font-size: 15px;
       padding: 18px 8px;
    }
`
const Subtitle = styled.p`
    position: relative;
    top: 20%;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 430px) {
       font-size: 16px;
    }
`

export { BannerContainer, ImgBanner, TextContainer, Text, Subtitle }