import { Routes,Route } from "react-router-dom";
import Pokedesk from "./component/Pages/Pokedesk";
import Pokemon from "./component/Pages/Pokemon";


function App() {

  return <>
<Routes>
        <Route path="/" element={<Pokedesk />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={<h1>Not found</h1>} />
</Routes>
  </>
  
}

export default App;
