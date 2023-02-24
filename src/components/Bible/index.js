import { BibleContainer, Subtitle, BookContainer, Mimic, InputTitle, InputBook, InputChapter, InputVerse, Description, ButtonSearch, TitleContainer, BookTitle, ChapterNumber, VerseNumber, VerseText, ButtonContainer, ButtonClear } from "./style"
import { Title } from "../TItle";
import { useState } from 'react';
import api from "../../services/api";
export default function Bible() {

    const [book, setBook] = useState('');
    const [chapter, setChapter] = useState('');
    const [verses, setVerses] = useState('');
    const [displayVerses, setDisplayVerses] = useState([{}]);



    async function handleSearch() {
        api.get(`${book}+${chapter}:${verses}?translation=almeida`)
            .then(res => {
                setDisplayVerses([{
                    text: res.data.text,
                    book: book,
                    chapter: chapter,
                    verses: verses
                }])
            }).catch((err) => {
                setDisplayVerses([{
                    text: 'Desculpe, não foi possível localizar nenhum versículo :/'
                }]);
            })

    }

    function handleClear() {
        setBook('');
        setChapter('');
        setVerses('');
        setDisplayVerses([{}]);
    }

    return (
        <BibleContainer>
            <Title large>Bíblia Digital</Title>
            <Subtitle>* Digite o Livro, Capítulo e Versículo que queira ler</Subtitle>
            <BookContainer>
                <Mimic>
                    <InputTitle rel="book">Livro</InputTitle>
                    <InputBook required name="book" type="text" value={book} onChange={(e) => setBook(e.target.value)} />
                </Mimic>
                <Mimic>
                    <InputTitle  rel="chapter">Capítulo</InputTitle>
                    <InputChapter required name="chapter" type="number" value={chapter} onChange={(e) => setChapter(e.target.value)} />

                </Mimic>
                <Mimic>
                    <InputTitle rel="verse">Versículo</InputTitle>
                    <InputVerse required name="verse" type="number" value={verses} onChange={(e) => setVerses(e.target.value)} />
                </Mimic>

            </BookContainer>
            <ButtonContainer>
            <ButtonClear onClick={handleClear}>Limpar</ButtonClear>
            <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>
            </ButtonContainer>
           


            <Description>
                {displayVerses.map((item) => (
                <div key={item}>
                    <TitleContainer>
                        <BookTitle>{item.book}</BookTitle>
                        <ChapterNumber>{item.chapter}</ChapterNumber> <VerseNumber>{item.verses}</VerseNumber>
                    </TitleContainer>
                    <VerseText>{item.text}</VerseText>
                </div>
            ))}
            </Description>
        </BibleContainer>
    )
}