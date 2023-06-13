let url = 'https://railway-node-express-production-3b13.up.railway.app/scrape';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
            }
            document.getElementById('valor').innerHTML = body
        }

    
        var form = document.getElementById('form');
      
        form.addEventListener('submit', function(e){
            e.preventDefault();

            const datos = new FormData(e.target);
            const datoscompletos = Object.fromEntries(datos.entries());

             console.log(JSON.stringify(datoscompletos))

            fetch("https://cors-anywhere.herokuapp.com/http://www.raydelto.org/agenda.php", {
                method: 'POST',
                body: JSON.stringify(datoscompletos),
             
    
            }).then( res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
            })

/*
            var datos = new FormData(form)

            console.log(JSON.stringify(datos))
         

            fetch("https://railway-node-express-production-3b13.up.railway.app/scrape",{
                  method: 'POST',
                  body: datos
            })
            .then( res => res.json())
            .then( data => {

                console.log(data)
            })
  */
 

   