import { Route, Routes } from "react-router-dom";
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
        </div>
      )
}

export default App;