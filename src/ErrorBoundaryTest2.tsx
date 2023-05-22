import {ErrorBoundary} from "react-error-boundary";

const Contents = () => {
    throw new Error();

    return null
}

const ErrorBoundaryTest2 = () => {
  return (
    <ErrorBoundary fallback={<>에러!</>}>
        <Contents />
    </ErrorBoundary>
  )
}

export default ErrorBoundaryTest2
