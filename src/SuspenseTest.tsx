import {Suspense} from "react";

const DataLoader = () => {
    throw new Promise(() => {
        return null
    });

    return null
}

const SuspenseTest = () => {
  return (
    <Suspense fallback={<>로딩중</>}>
        <DataLoader />
    </Suspense>
  )
}

export default SuspenseTest
