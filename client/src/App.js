import UpdatesList from "./components/updatesList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SingleUpdatePage from "./components/singleUpdatePage";
import AuthorPage from "./components/authorPage";
import AppHeader from "./components/appHeader";

function App() {
  return (
      <BrowserRouter>
          <AppHeader />
          <Routes>
              <Route path="/" element={<UpdatesList />} />
              <Route path="/author" element={<AuthorPage />} />
              <Route path="updates/:timestamp" element={<SingleUpdatePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
