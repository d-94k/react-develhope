import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Welcome from "./Welcome";

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Welcome name="newUser" />} />
            <Route path="counter" element={<Counter />} />
            <Route path="*" element={<h3>Page not found</h3>} />
          </Routes>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="counter">Counter</Link></li>
          </ul>
        </div>
      )
}

export default App;