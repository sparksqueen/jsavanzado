//API HISTORY
//window, history, ...
// new History() deberia crearnos una nueva instancia de history, sin embargo nos devuelve un error "constructor ilegal"
//history en este caso nos devuelve UNA SOLA INSTANCIA DE HISTORIA 
//SINGLETON, POR EJEMPLO NOS SERVIRIA PARA LA HISTORIA DEL NAVEGADOR
//Porque en este caso yo no quiero duplicar la historia bajo ningun punto de vista
//UN USUARIO TIENE UNA Y SOLO UNA HISTORIA
//EJEMPLO FACEBOOK - en facebook yo tengo un usuario PERSONAL, y cada uno tiene un usuario diferente al mio (id, u otro identificador)
//nadie que no tenga mi clave puede acceder a mi info personal
//USAMOS SINGLETON CUANDO ----- ACCESO A MENSAJES, HISTORIAL, USUARIOS; ETC
//no vamos a querer replicar un usuario en singleton porque contiene informacion sensible

(function App() {
    this.id = Math.random()
    window.app = App

})()
//yo estoy creando un nuevo ID en cada instancia
//no es singleton

//ademas de esto tengo que definir una "instancia" para guardar los datos
let instancia
(function App() {
    if (instancia != undefined) {
        return instancia
    } else {
        this.id = Math.random()
        instancia = this
    }

    window.app = App
})()
//terminar este singleton para que devuelva un id 