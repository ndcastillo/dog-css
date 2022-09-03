const nombre = document.querySelector('.nombre');
    var puntos = 0;
    function aparece(){
        return new Promise(function(resolve,reject){
            setInterval(
                function(){
                        if (puntos<3){
                            const nodeName = nombre.innerHTML;
                            nombre.innerHTML = `${nodeName}`+"."
                            puntos = puntos +1;
                            resolve()
                        }else{
                            nombre.innerHTML = 'Touch the dog'
                            puntos = 0;
                        }
                    }    
                ,700);
        })
    }
    
    aparece()