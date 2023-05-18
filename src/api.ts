import {atom} from "jotai";

const delay = async (timeout: number) => {
    await new Promise((resolve) => {
     setTimeout(resolve,  timeout)
    })
}

export const api = async () => {
    await delay(1000)

    return '귀중한 데이터!'
}

export const dataAtom = atom(() => {
    return api()
})
