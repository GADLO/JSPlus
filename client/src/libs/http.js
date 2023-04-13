export function httpGet(url) {
    return new Promise((resolve, reject) => {
        axios(url).then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}


export function httpPost(url) {
    return new Promise((resolve, reject) => {
        axios.post(url.body).then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}