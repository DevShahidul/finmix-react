import {Login, Signup, PassReset, Success, Home} from "./pages";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="m-0 p-0 font-biennale">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/pass-reset" element={<PassReset />} />
        <Route path="/success" element={<Success />} />
    </Routes>
    </div>
  );
}

export default App;
