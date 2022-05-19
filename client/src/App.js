import UpdatesList from "./components/updatesList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SingleUpdatePage from "./components/singleUpdatePage";

function App() {
  return (
      <BrowserRouter>
          <header></header>
          <Routes>
              <Route path="/" element={<UpdatesList />} />
              <Route path="updates/:timestamp" element={<SingleUpdatePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
