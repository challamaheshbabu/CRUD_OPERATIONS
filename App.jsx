import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Read from './operations/Read';
import Update from './operations/Update';
import Create from './operations/Create';
import Home from './operations/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}/>
            <Route path='/update/:id' element={<Update/>}/>
            <Route path='/read/:id' element={<Read/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App