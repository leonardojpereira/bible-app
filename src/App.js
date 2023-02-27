import GlobalStyle from "./GlobalStyle";
import Banner from "./components/Banner";
import { Container } from "./style";
import Bible from "./components/Bible";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
     <Banner/>
     <Bible/>
    </Container>

      
    </>
    
    
  );
}

export default App;
