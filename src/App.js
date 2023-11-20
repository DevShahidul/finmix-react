import {Login, Signup, PassReset, Success} from "./pages";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="">
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/pass-reset" element={<PassReset />} />
        <Route path="/success" element={<Success />} />
    </Routes>
    </div>
  );
}

export default App;
