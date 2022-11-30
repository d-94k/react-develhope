import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Catalogue from "./Catalogue";

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/:name" element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Catalogue />}/>
          </Routes>
        </div>
      )
}

export default App;