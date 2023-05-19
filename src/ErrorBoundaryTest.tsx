import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import {api, query} from "./api.ts";
import {use} from "./use.ts";

const Contents = () => {
    const data: string = use(query({
        queryKey: '/contents',
        queryFn: () => api()
    }))

    return <p>{data}</p>
}

const ErrorBoundaryTest = () => {
  return (
    <ErrorBoundary fallback={<>에러발생</>}>
      <Suspense fallback={<>로딩중</>}>
        <Contents />
      </Suspense>
    </ErrorBoundary>
  )
}

export default ErrorBoundaryTest
