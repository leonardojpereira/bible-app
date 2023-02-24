import styled from 'styled-components';

const BannerContainer = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
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
    max-width: 300px;
    width: 100%;
    height: 300px;
    border-radius: 8px;
`
const Text = styled.p`
    padding: 15px 8px;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #FFF;
    font-weight: bold;
`
const Subtitle = styled.div`
    position: absolute;
    top: 20%;
    color: #FFF;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 80%;
    text-transform: uppercase;
    font-weight: bold;
`

export { BannerContainer, ImgBanner, TextContainer, Text, Subtitle }