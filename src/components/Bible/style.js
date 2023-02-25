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

export const Strong = styled.strong`
   color: #ff461d;
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
    outline: none;
`

export const InputChapter = styled.input`
      height: 30px;
      width: 60px;
      padding-left: 4px; 
      outline: none;
`

export const InputVerse = styled.input`
      height: 30px;
      width: 60px;
      padding-left: 4px; 
      outline: none;
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
      outline: none;
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
   outline: none;
`

export const Description = styled.div`
    background: linear-gradient(to left,#803ca8, #ff461d);
    padding: 18px;
    width: 100%;
    height: 150px;
    border-radius: 8px;
    margin-top: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
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



