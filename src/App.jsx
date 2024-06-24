import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'

function App() {

  return (
 <>
 <div  className='mx-auto '>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/View" element={<View />} />
      </Routes>
    </BrowserRouter>
 </div>
 </>
  )
}

export default App
