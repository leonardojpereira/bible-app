import { BibleContainer, Title, Subtitle, BookContainer, Mimic, TitleSelect, SelectBook, SelectChapter, SelectVerse, Description, ButtonSearch, TitleContainer, BookTitle, ChapterNumber, VerseNumber, VerseText } from "./style"
import { useState } from 'react';
import axios from 'axios';
export default function Bible() {

    const [book, setBook] = useState('');
    const [chapter, setChapter] = useState('');
    const [verses, setVerses] = useState('');
    const [displayVerses, setDisplayVerses] = useState([{}]);



    async function handleSearch() {
        axios.get(`https://bible-api.com/${book}+${chapter}:${verses}?translation=almeida`)
            .then(res => {
                setDisplayVerses([{
                    text: res.data.text,
                    book: book,
                    chapter: chapter,
                    verses: verses
                }])
            }).catch((err) => {
                console.log(err);
            })

    }

    return (
        <BibleContainer>
            <Title>Bíblia Digital</Title>
            <Subtitle>* Selecione o Livro, Capítulo e Versículo que queira ler</Subtitle>
            <BookContainer>
                <Mimic>
                    <TitleSelect>Livro</TitleSelect>
                    <SelectBook value={book} onChange={(e) => setBook(e.target.value)} />
                </Mimic>
                <Mimic>
                    <TitleSelect>Capítulo</TitleSelect>
                    <SelectChapter value={chapter} onChange={(e) => setChapter(e.target.value)} />

                </Mimic>
                <Mimic>
                    <TitleSelect>Versículo</TitleSelect>
                    <SelectVerse value={verses} onChange={(e) => setVerses(e.target.value)} />
                </Mimic>

            </BookContainer>
            <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>


            <Description>
                {displayVerses.map((item) => (
                <div key={item}>
                    <TitleContainer>
                        <BookTitle>{item.book}</BookTitle>
                        <ChapterNumber>{item.chapter}</ChapterNumber> : <VerseNumber>{item.verses}</VerseNumber>
                    </TitleContainer>
                    <VerseText>{item.text}</VerseText>
                </div>
            ))}
            </Description>
        </BibleContainer>
    )
}