import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import {dataAtom} from "./api.ts";
import {useAtomValue} from "jotai";

const Contents = () => {
    // const data = use(api())
    const data = useAtomValue(dataAtom)

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
