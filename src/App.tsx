import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';


function App() {
  return (
      <div className="App bg-gray-700">
        <div className='text-white lg:flex'>
          <Router>
            <main className='mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow'>
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </Router>
        </div>
      </div>
  )
}

export default App
