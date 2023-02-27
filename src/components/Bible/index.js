import {
    BibleContainer,
    Subtitle,
    BookContainer,
    Mimic,
    InputTitle,
    InputBook,
    InputChapter,
    InputVerse,
    Description,
    TitleContainer,
    BookTitle,
    ChapterNumber,
    VerseNumber,
    VerseText,
    ButtonContainer,
    Colon,
    Strong, 
    Icon, 
    DescriptionContainer
} from "./style"
import { Title } from "../TItle";
import { ButtonSearch, ButtonClear } from "../Button";
import { useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import api from "../../services/api";
export default function Bible() {

    const [book, setBook] = useState('');
    const [chapter, setChapter] = useState('');
    const [verses, setVerses] = useState('');
    const [display, setDisplay] = useState([{}]);



    async function handleSearch() {
        api.get(`${book}+${chapter}:${verses}?translation=almeida`)
            .then(res => {
               setDisplay([{
                    text: res.data.text,
                    book: book,
                    chapter: chapter,
                    verses: verses,
                    colon: ':'
                }])
            }).catch((err) => {
               setDisplay([{
                    text: 'Desculpe, não foi possível localizar nenhum versículo :/'
                }]);
            })

    }

    function handleClear() {
        setBook('');
        setChapter('');
        setVerses('');
       setDisplay([{}]);
    }

    return (
        <BibleContainer>
            <Title large>Bíblia Digital</Title>
            <Subtitle>* Digite o <Strong>livro</Strong>, <Strong>capítulo</Strong> e <Strong>versículo</Strong> que queira ler.</Subtitle>
            <BookContainer>
                <Mimic>
                    <InputTitle rel="book">Livro</InputTitle>
                    <InputBook required name="book" type="text" value={book} onChange={(e) => setBook(e.target.value)} />
                </Mimic>
                <Mimic>
                    <InputTitle rel="chapter">Capítulo</InputTitle>
                    <InputChapter required name="chapter" type="number" value={chapter} onChange={(e) => setChapter(e.target.value)} />

                </Mimic>
                <Mimic>
                    <InputTitle rel="verse">Versículo</InputTitle>
                    <InputVerse required name="verse" type="number" value={verses} onChange={(e) => setVerses(e.target.value)} />
                </Mimic>

            </BookContainer>
            <ButtonContainer>
                <ButtonSearch onClick={handleSearch}>Buscar  <Icon><BiSearchAlt/></Icon></ButtonSearch>
                <ButtonClear onClick={handleClear}>Limpar  <Icon><AiOutlineClear/></Icon></ButtonClear>
            </ButtonContainer>



            <Description>
                {display.map((item) => (
                    <DescriptionContainer key={item}>
                        <TitleContainer>
                            <BookTitle>{item.book}</BookTitle>
                            <ChapterNumber>{item.chapter}</ChapterNumber> <Colon>{item.colon}</Colon> <VerseNumber>{item.verses}</VerseNumber>
                        </TitleContainer>
                        <VerseText>{item.text}</VerseText>
                    </DescriptionContainer>
                ))}
            </Description>
        </BibleContainer>
    )
}