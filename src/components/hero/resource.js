import database from "../../database";

export function useResource() {
    return {
        items: wrapPromise(fetchItems())
    }
}


function wrapPromise(promise) {
    let status = 'pending'
    let result
    const suspender = promise.then(
        r => {
            result = r
            status = 'success'
        },
        e => {
            result = e
            status = 'error'
        }
    )

    return {
        read() {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            } else if (status === 'success') {
                return result
            }
        }
    }
}



function fetchItems() {

    return fetch('https://60e5c694086f730017a6fdf1.mockapi.io/items')
        .then(res => res.json())
}