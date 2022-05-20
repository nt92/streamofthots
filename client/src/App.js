import UpdatesList from "./components/updatesList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SingleUpdatePage from "./components/singleUpdatePage";
import AuthorPage from "./components/authorPage";

function App() {
  return (
      <BrowserRouter>
          <header>
              <a href="/" className="logo">streamofthots</a>
              <nav>
                  {/*<a href="/about/">about</a>*/}
                  {/*<button>light/dark</button>*/}
              </nav>
          </header>
          <Routes>
              <Route path="/" element={<UpdatesList />} />
              <Route path="/author" element={<AuthorPage />} />
              <Route path="updates/:timestamp" element={<SingleUpdatePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
