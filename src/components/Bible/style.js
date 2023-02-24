import styled from 'styled-components';

export const BibleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    position: relative;
    padding: 0 40px;
    background: #FFF;
`

export const Subtitle = styled.span`
   font-size: 18px;
  
`

export const BookContainer = styled.div`
  display: flex;    
    margin: 22px 0;
`
export const Mimic = styled.div`
   margin: 0 8px;

`

export const InputTitle = styled.label`
    margin-right: 4px;
`


export const InputBook = styled.input`
    width: 140px;
    height: 30px;
    padding-left: 4px; 
`


export const InputChapter = styled.input`
      height: 30px;
      width: 60px;
      padding-left: 4px; 
`


export const InputVerse = styled.input`
      height: 30px;
      width: 60px;
      padding-left: 4px; 
`

export const ButtonContainer = styled.div`
    display: flex;
    align:items: center;
    justify-content: center;
    width: 100%;
`

export const ButtonClear = styled.button`
      height: 30px;
      width: 40%;
      padding-left: 4px; 
      border-radius: 8px;
      border: none;
      cursor: pointer;
      background: linear-gradient(to left, #ff461d, #803ca8);
      color: #FFF;
      margin: 0 8px;
`

export const ButtonSearch = styled.button`
   width: 40%;
   height: 30px;
   border-radius: 8px;
   border: none;
   cursor: pointer;
   background: linear-gradient(to right,#803ca8, #ff461d);
   color: #FFF;
   margin: 0 8px;
`

export const Description = styled.div`
    background: linear-gradient(to left,#803ca8, #ff461d);
    padding: 18px;
    width: 100%;
    height: 150px;
    border-radius: 8px;
    margin-top: 22px;

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
   font-size: 18px
`


export const ChapterNumber = styled.span`
    font-size: 18px
`


export const VerseNumber = styled.span`
    font-size: 18px
`


export const VerseText = styled.p`
    color: #FFF;
`

