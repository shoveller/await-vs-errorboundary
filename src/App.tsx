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
import AwaitTest2 from "./AwaitTest2.tsx";
import SuspenseTest from "./SuspenseTest.tsx";
import ErrorBoundaryTest2 from "./ErrorBoundaryTest2.tsx";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="suspense-test" element={<SuspenseTest />}/>
        <Route path="errorboundary-test" element={<ErrorBoundaryTest2 />} />
        <Route path="use-error-boundary" element={<ErrorBoundaryTest />}/>
        <Route path="use-await" element={<AwaitTest />}/>
        <Route path="use-await2" element={<AwaitTest2 />}/>
      </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
