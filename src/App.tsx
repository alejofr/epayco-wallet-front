import { BrowserRouter, Route, Routes } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>bienvenido</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
