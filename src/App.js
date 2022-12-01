import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Welcome from "./Welcome";

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Welcome name="newUser" />} />
            <Route path="counter" element={<Counter />} />
          </Routes>
        </div>
      )
}

export default App;