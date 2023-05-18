import {Await} from "react-router-dom";
import {api} from "./api.ts";
import {Suspense} from "react";

const AwaitTest = () => {
  return (
    <Suspense fallback={<>로딩중</>}>
      <Await resolve={api()} errorElement={<>에러발생</>}>
        {(value) => <p>{value}</p>}
      </Await>
    </Suspense>
  )
}

export default AwaitTest
