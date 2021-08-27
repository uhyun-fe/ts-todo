import styled from "styled-components";

// Components
import ClockBox from "./components/ClockBox";

function App() {
   return (
      <Container>
         <ClockBox />
      </Container>
   );
}

export default App;

const Container = styled.div`
   margin: 0 auto;
   padding: 20px 0;
   width: 80%;
   max-width: 500px;
   height: 100vh;
   /* background: rgba(0, 0, 0, 0.1); */
`;
