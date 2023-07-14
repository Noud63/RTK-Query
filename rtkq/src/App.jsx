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
import UpdateCredentials from "./components/UpdateCredentials";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <Router>
        <Header/>
        <ToastContainer 
                theme='dark' 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path='/getallrealestates' element={<GetAllRealEstates />} />
          <Route path='/getlimitedresults' element={<LimitedResults />} />
          <Route path='/getSpecificrealestate' element={<SpecificRealestates />} />
          <Route path='/uploadestate' element={<UploadEstate />} />
          <Route path='/updatecredentials' element={<UpdateCredentials/>}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
