import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import { GithubUser } from "./GithubUser";
import GithubUserList from "./GithubUserList";
import SWRgithubuser from "./SWRgithubuser";
import Welcome from "./Welcome";

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Welcome name="newUser" />} />
            <Route path="counter" element={<Counter />} />
            <Route path="users" element={<GithubUserList />}>
              <Route index element={<p>Please enter a valid Github username</p>} />
              <Route path=":username" element={<GithubUser />} />
            </Route>
            <Route path="swrgithubuser" element={<SWRgithubuser username="d-94k" />} />
          </Routes>
          <ul style={{border: "2px solid black", display: "flex", flexDirection: "column"}}>
            <Link to="/">Home</Link>
            <Link to="counter">Counter</Link>
            <Link to="users">GitHub userlist</Link>
            <Link to="swrgithubuser">SWR GithubUser</Link>
          </ul>
        </div>
      )
}

export default App;