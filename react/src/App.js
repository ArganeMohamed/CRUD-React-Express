import { Routes , Route } from "react-router-dom"
import './App.css';
import Header from './Components/Header';
import Form from './Components/form';
import Users from './Components/users';
import Unique from './Components/single';
import Update from './Components/update';
import Search from './Components/search';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Users />}/> 
        <Route path="/form" element={<Form />}/> 
        <Route path="/user/:iduser" element={<Unique />}/> 
        <Route path="/update/:iduser" element={<Update />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
      
    </div>
  );
}

export default App;
