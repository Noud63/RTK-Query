import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import GetRealEstates from "./components/GetRealEstates"

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<GetRealEstates />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
