import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import Home from "./Home.tsx";
import ErrorBoundaryTest from "./ErrorBoundaryTest.tsx";
import AwaitTest from "./AwaitTest.tsx";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="use-error-boundary" element={<ErrorBoundaryTest />}/>
        <Route path="use-await" element={<AwaitTest />}/>
      </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
