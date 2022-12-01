import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import { GithubUser } from "./GithubUser";
import Welcome from "./Welcome";

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Welcome name="newUser" />} />
            <Route path="counter" element={<Counter />} />
            <Route path="users/:username" element={<GithubUser />}/>
          </Routes>
          <ul>
            <Link to="/">Home</Link>
            <Link to="counter">Counter</Link>
            <Link to="users/:username">Github details</Link>
          </ul>
        </div>
      )
}

export default App;