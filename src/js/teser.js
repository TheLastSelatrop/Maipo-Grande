const application = document.querySelector('#tarjetas1')

 /* http://168.138.133.24:4000/api/clientes  */

const url = 'http://168.138.133.24:4000/api/clientes'

fetch(url)
//.then(res => console.log(res))
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(usuario => {
        /*
        const p = document.createElement('p')
        p.innerHTML = usuario.ID + ' | ' +
        usuario.ID_ROL + ' | ' + 
        usuario.NOMBRE + ' | ' + 
        usuario.CORREO + ' | ' + 
        usuario.CONTRASENA + ' | ' + 
        usuario.PAIS + ' | ' + 
        usuario.CIUDAD + ' | ' + 
        usuario.DIRECCION + ' | ' + 
        usuario.TIPO_CLIENTE ;
        application.appendChild(p)
        */

        // Estructura
        const GlobalCard = document.createElement('div');
        GlobalCard.classList.add('card');
        // Body
        const BodyCard = document.createElement('div');
        BodyCard.classList.add('card-body');
        // Titulo
        const TitleCard = document.createElement('h5');
        TitleCard.classList.add('card-title');
        TitleCard.textContent = usuario.NOMBRE;
        // SubTitulo
        const SubTCard = document.createElement('h6');
        SubTCard.classList.add('card-subtitle', 'mb-2', 'text-muted');
        SubTCard.textContent = usuario.TIPO_CLIENTE;
        // Email
        const EmailCard = document.createElement('p');
        EmailCard.classList.add('card-text');
        EmailCard.textContent = "<b>correo:</b> " + usuario.CORREO;
        // IDs
        const IDsCard = document.createElement('p');
        IDsCard.classList.add('card-text');
        IDsCard.textContent = "<b>correo:</b> " + usuario.ID + ' | ' + usuario.ID_ROL ;
        // Ubicacion
        const GeoCard = document.createElement('p');
        GeoCard.classList.add('card-text');
        GeoCard.textContent = "<b>correo:</b> " + usuario.PAIS + ', ' + usuario.CIUDAD + ', ' + usuario.DIRECCION;

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);*/
        // Insertamos
        BodyCard.appendChild(TitleCard);
        BodyCard.appendChild(SubTCard);
        BodyCard.appendChild(EmailCard);
        BodyCard.appendChild(IDsCard);
        BodyCard.appendChild(GeoCard);
        GlobalCard.appendChild(BodyCard);
        application.appendChild(GlobalCard);

    });
    //console.log(data)
})
.catch(err => console.log(err))