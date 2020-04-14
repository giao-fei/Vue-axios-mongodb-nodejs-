// let p = new Promise(function(resolve, reject) {
//     $.ajax({
//         url: 'arr.txt',
//         dataType: 'json',
//         success(arr) {
//             resolve(arr)
//         },
//         error(err) {
//             reject(err)
//         }
//     })
// })

// p.then(arr => {
//     console.log('成功' + arr)
// }, err => {
//     console.log('失败' + err)
// })

function bsz() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

bsz().then(() => {
    console.log('giao')
})