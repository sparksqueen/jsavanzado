const url = "https://jsonplaceholder.typicode.com"
const btn = document.querySelector("button")

// Llamadas anidadas

btn.addEventListener("click", () => {
    ajax({
        metodo: "get",
        recurso: `${url}/users`,
        load: res => {
            console.log(res)
            const usuario = res[4]
            console.log(usuario)
            const idUsuario = usuario.id
            console.log(idUsuario)
            //devolver otra llamada a ajax
            ajax({
                metodo: "get",
                recurso: `${url}/posts?userId=${idUsuario}`,
                load: posteos => {
                    console.log(posteos)
                    posteos.forEach(posteo => {
                        ajax({
                            metodo: "get",
                            recurso: `${url}/comments?postId=${posteo.id}`,
                            load: comentario => { console.log(comentario) }
                        })
                    })
                }
            })
        }

    })
})

// const primerCallback = () => {
//     res => {
//         console.log(res)
//         const usuario = res[4]
//         console.log(usuario)
//         const idUsuario = usuario.id
//         console.log(idUsuario)
//         //devolver otra llamada a ajax
//         ajax({
//             metodo: "get",
//             recurso: `${url}/posts?userId=${idUsuario}`,
//             load: posteos => {
//                 console.log(posteos)
//                 posteos.forEach(posteo => {
//                     ajax({
//                         metodo: "get",
//                         recurso: `${url}/comments?postId=${posteo.id}`,
//                         load: comentario => { console.log(comentario) }
//                     })
//                 })
//             }
//         })
//     }
// }

const ajax = (props) => {
    let xhr = new XMLHttpRequest
    xhr.open(props.metodo, props.recurso)
    xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
            //ejecuta un callback
            props.load(JSON.parse(xhr.response))
        }
    })
    xhr.send(props.data)
}

// PROMESAS --- API Promise
// VALOR --- XML no devuelve un valor. 
// puede pasar o puede no pasar. ---- similar a promesas en la vida cotidiana
// 3 estados
// FULLFILLED - PENDING - REJECTED
// devuelve resultado positivo (response) -- FULFILLED --- en general escribimos res
// o negativo (reject) -- REJECTED ---- en general escribimos rej

// const firstPromise = new Promise((res, rej) => {
//     let xhr = new XMLHttpRequest
//     xhr.open('get', "texto.txt")
//     xhr.addEventListener("load", () => {
//         if (xhr.status === 200) {
//             res(xhr.response)
//         }
//     })
//     xhr.send()
// })
//     .then(valor => valor.text())
//     .then(texto => console.log(texto))
//     .catch(e => console.log(e))


// FETCH Api
// PERMITE REALIZAR LLAMADAS ASYNC 
// SIMILAR XHR
// usa XHR (no esta cotejado)
// ASYNC - PROMISE - RESPONSE - REQUESTS 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))


const texto = fetch("texto.txt") // devuelve promesa
texto.then(val => val.text() /*console.log(val)*/) // devuelve response
    //tengo que manejar esa response, en este caso le digo que esa respuesta es un texto
    .then(txt => console.log(txt)) //le pido que me muestre el texto (que antes le dije que almacene el Response.Prototype.text())

const jsonPlaceholder = fetch("https://jsonplaceholder.typicode.com/posts")
jsonPlaceholder.then(response => response.json()) // devolvia una response
    .then(json => console.log(json)) //ahora el valor es json


//con fetch puedo devolver un valor de una manera mucho mas simple


// REFACTORIZAR handler para que en ver de XHR use Fetch (con sus respectivos.then)


function handleChange() {
    let usuerId = this.value
    let primeraPromesa = fetch("https://jsonplaceholder.typicode.com/users/" + usuerId)
    primeraPromesa.then(res => res.json())
        .then(res => fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id))
        .then(res => res.json())
        .then(res => fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id))
        .then(res => res.json())
        .then(res => console.log(res))
}
