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
    @media (max-width: 660px) {
        width: 100%;
        margin: 22px 0;
    }
`

export const Subtitle = styled.span`
   font-size: 18px;
   text-align: center;
   @media (max-width: 320px) {
    font-size: 14px;
 }
`

export const Strong = styled.strong`
   color: #ff461d;
`

export const BookContainer = styled.div`
    margin: 22px 0;
    display: flex;
    flex-direction: column;
`
export const Mimic = styled.div`
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const InputTitle = styled.label`
    margin-right: 4px;
    margin-bottom: 2px;
`

export const InputBook = styled.input`
    width: 140px;
    height: 30px;
    padding-left: 4px; 
    outline: none;
    width: 100%;
`

export const InputChapter = styled.input`
      height: 30px;
      width: 60px;
      padding-left: 4px; 
      outline: none;
      width: 100%;
`

export const InputVerse = styled.input`
      height: 30px;
      width: 60px;
      padding-left: 4px; 
      outline: none;
      width: 100%;
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
    background: linear-gradient(to left,#803ca8, #ff461d);
    padding: 22px;
    width: 100%;
    border-radius: 8px;
    margin-top: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
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
   font-size: 18px;
   color: #ffc300;
`


export const ChapterNumber = styled.span`
    font-size: 18px;
    color: #ffc300;
`


export const VerseNumber = styled.span`
    font-size: 18px;
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



