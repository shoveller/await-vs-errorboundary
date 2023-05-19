import {Await, useAsyncValue} from "react-router-dom";
import {api} from "./api.ts";
import {Suspense} from "react";

const Contents = () => {
    const value = useAsyncValue() as string

    return <p>{value}</p>
}

const AwaitTest2 = () => {
  return (
    <Suspense fallback={<>로딩중</>}>
      <Await resolve={api()} errorElement={<>에러발생</>}>
        <Contents />
      </Await>
    </Suspense>
  )
}

export default AwaitTest2
