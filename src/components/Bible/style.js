import styled from 'styled-components';

export const BibleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    position: relative;
    padding: 0 40px;
    background: #FFF;
    margin-top: 18px;
    @media (max-width: 930px) {
        width: 100%;
        margin: 22px 0;
    }
`

export const Subtitle = styled.span`
   font-size: 18px;
   text-align: center;
   color: #603000;
   @media (max-width: 320px) {
    font-size: 14px;
 }
`

export const BookContainer = styled.div`
    margin: 22px 0;
    display: flex;
    flex-direction: column;
`
export const Mimic = styled.div`
    margin: 8px 0;
    display: flex;
    width: 100%;
`

export const InputTitle = styled.label`
     height: 50px;
     background: #603000;
     color: #FFF;
     margin-bottom: 2px;
     width: 15%;
     display: flex;
     align-items: center;
     justify-content: center;
     border-top-left-radius: 3px;
     border-bottom-left-radius: 3px;
     font-size: 16px;
     @media (max-width: 1270px) {
        width: 20%;
        font-size: 14px;
     }
     @media (max-width: 930px) {
        width: 30%;
        font-size: 16px;
     }
     @media (max-width: 290px) {
        font-size: 10px;
     }
     @media (max-width: 430px) {
        width: 40%;
        font-size: 14px;
    }
`

export const InputBook = styled.input`
    font-size: 16px;
    height: 50px;
    padding-left: 4px; 
    outline: none;
    width: 85%;
    border: solid 3px #603000;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    @media (max-width: 1270px) {
        width: 80%;
     }
     @media (max-width: 930px) {
        width: 80%;
     }
     @media (max-width: 430px) {
        width: 60%
     }
    
    
`

export const InputChapter = styled.input`
      padding-left: 4px; 
      outline: none;
      width: 85%;
      border: solid 3px #603000;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      height: 50px;
      font-size: 16px;
      @media (max-width: 1270px) {
        width: 80%;
     }
     @media (max-width: 930px) {
        width: 80%;
     }
     @media (max-width: 430px) {
        width: 60%
     }
`

export const InputVerse = styled.input`
      font-size: 16px;
      height: 50px;
      padding-left: 4px; 
      outline: none;
      width: 85%;
      border: solid 3px #603000;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      @media (max-width: 1270px) {
        width: 80%;
     }
     @media (max-width: 930px) {
        width: 80%;
     }
     @media (max-width: 430px) {
        width: 60%
     }
`

export const ButtonContainer = styled.div`
    display: flex;
    align:items: center;
    justify-content: center;
    width: 100%;
`

export const Icon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-left: 4px;
    @media (max-width: 320px) {
        font-size: 16px;
     }
`

export const Description = styled.div`
    background: #603000;
    padding: 22px;
    width: 100%;
    border-radius: 8px;
    margin-top: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    font-size: 18px;
`

export const DescriptionContainer = styled.div`
    
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    color: #FFF;
 
`

export const BookTitle = styled.h3`
   text-transform: capitalize;
   margin-right: 5px;
   font-size: 22px;
   color: #ffc300;
`


export const ChapterNumber = styled.span`
    font-size: 22px;
    color: #ffc300;
`


export const VerseNumber = styled.span`
    font-size: 22px;
    color: #ffc300;
`


export const VerseText = styled.p`
    color: #FFF;
`

export const Colon = styled.span`
    font-size: 18px;
    margin: 0 2px;
    color: #f5cc17;
`



