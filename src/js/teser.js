const application = document.querySelector('#container1')

 /* http://168.138.133.24:4000/api/clientes  */

const url = 'http://168.138.133.24:4000/api/clientes'

fetch(url)
//.then(res => console.log(res))
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        console.log(usuario.NOMBRE)
        const p = document.createElement('p')
        p.setAttribute('id', usuario.CORREO)
        p.innerHTML = usuario.NOMBRE
        p.addEventListener('click', function(){
            const Gen0 = usuario.CORREO
        })
        //p.innerHTML = usuario.CORREO
        application.appendChild(p)
    });
    //console.log(data)
})
.catch(err => console.log(err))




// selector de...  ID???

const application2 = document.querySelector('#container2')
fetch(url +"/perfil/" + )