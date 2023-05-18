import {Await} from "react-router-dom";
import {api} from "./api.ts";
import {Suspense} from "react";

const AwaitTest = () => {
  return (
    <Suspense fallback={<>로딩중</>}>
      <Await resolve={api()} errorElement={<>에러발생</>} children={(value) => {
         return <p>{value}</p>
      }} />
    </Suspense>
  )
}

export default AwaitTest
