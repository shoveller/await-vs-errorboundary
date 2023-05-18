지금까지 `<Suspense />` 는 아래와 같은 방법으로 쓰는게 정석이었다.

```tsx
const Contents = () => {
    const data = use(api())

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
```

react-router-dom 은 저 코드를 좀 더 단순하게 만드는 <Await /> 이라는 헬퍼를 제공한다.  
`Promise` 를 throw 하는 `use` hook의 기능과 `<ErrorBoundary />` 가 합쳐진 느낌.  
사용이 훨씬 간단하다.


```tsx
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
```
