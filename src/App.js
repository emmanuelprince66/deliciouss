import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import { BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>deliciousss</Logo>
      </Nav>
      <Search/>
      <Categories/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:li.5rem;
font-weight:400;
font-family:'Lobster Two', cursive;
`;
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;

svg {
  font-size:2rem;
}
`;

export default App;