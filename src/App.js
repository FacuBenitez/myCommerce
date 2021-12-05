// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      
      <Navbar></Navbar>

      <ItemListContainer/>
      <ItemDetailContainer/>

    </div>
  );
}

export default App;
