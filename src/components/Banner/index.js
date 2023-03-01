import { BannerContainer, ImgBanner, TextContainer, Text, Subtitle } from './style';
const bannerImage = require('../../assets/img/banner.jpg');
    
export default function Banner() {
    return(
        <BannerContainer>
            <ImgBanner src={bannerImage} alt='banner'/>
            <TextContainer>
                <Text>Deus proteje</Text>
                <Text>Os que tratam os outros</Text>
                <Text>Com justiça e guarda</Text>
                <Text>Os que lhe obedecem</Text>
                <Subtitle>Provérbios 2:8</Subtitle>    
            </TextContainer>
                
        </BannerContainer>
    )
}