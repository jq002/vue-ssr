export function fetchItem(id){
    return Promise.resolve({
        title:`item:${id}`
    })
}