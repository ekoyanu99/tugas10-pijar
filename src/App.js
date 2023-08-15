import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProdukList from "./components/ProdukList";
import AddProduk from "./components/AddProduk";
import EditProduk from "./components/EditProduk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProdukList/>}/>
        <Route path="add" element={<AddProduk/>}/>
        <Route path="edit/:id" element={<EditProduk/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;