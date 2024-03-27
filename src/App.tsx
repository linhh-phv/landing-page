import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full h-[50px] bg-slate-500">HelloTailwind</div>
          }
        />
        <Route path="/about" element={<p>About</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
