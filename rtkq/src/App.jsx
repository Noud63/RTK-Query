import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import GetAllRealEstates from "./components/GetAllRealEstates"
import Home from "./components/Home";
import LimitedResults from "./components/LimitedResults"
import SpecificRealestates from "./components/SpecificRealestates";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import UploadEstate from "./components/UploadEstate";

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path='/getallrealestates' element={<GetAllRealEstates />} />
          <Route path='/getlimitedresults' element={<LimitedResults />} />
          <Route path='/getSpecificrealestate' element={<SpecificRealestates />} />
          <Route path='/uploadestate' element={<UploadEstate />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
