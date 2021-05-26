var texto_h3 = [ "Riegos" , "Parques y Jardines" , "Siembra de Césped", "Control de Malezas" , "Huertas" , "Poda y Extracción"];
var img_src = [ "estamosinstalandoPDL.jpg" , "parquesyjardines2.jpg" , "cesped.jpg", "malezas.jpg" , "HUERTApdl.jpg" , "podayextraccion.jpg"];
var img_alt = [ "Riegos" , "Parques y Jardines" , "Siembra de Césped", "Control de Malezas" , "Huertas" , "Poda y Extracción"];
var texto_p = [ "Armado de sistemas de riego, por aspersión y por goteo" , "Diseño, construcción y mantenimiento de parques y jardines " , "Siembra de césped en panes y de semillas", "Control de malezas, insectos y enfermedades" , "Armado, seguimiento y asesoramiento en huertas hogareñas" , "Poda y extracción de árboles"];


var texto_html_main = "" ;
var cant_servicios = 6;
var i=0;

for (i=0; i<cant_servicios; i++){
        if (i==0){
            texto_html_main += `
                <div class="row">
                    <div class="servicio-col">
                        <h3> ${texto_h3[i]}</h3>                    
                            <img src="./images/${img_src[i]}" alt="${img_alt[i]}">
                            <div class="layer">
                                <h3>${texto_h3[i]}</h3>                    
                                <p>${texto_p[i]}</p>
                            </div>            
                    </div>
            `;

    } else 
        if (i==3){
                texto_html_main += `
                </div>
                <div class="row">
                    <div class="servicio-col">
                        <h3> ${texto_h3[i]}</h3>                    
                            <img src="./images/${img_src[i]}" alt="${img_alt[i]}">
                            <div class="layer">
                                <h3>${texto_h3[i]}</h3>                    
                                <p>${texto_p[i]}</p>
                            </div>
                    </div>
                `;

    } else
        if (i==6){
                texto_html_main += `
                    <div class="servicio-col">
                        <h3> ${texto_h3[i]}</h3>                    
                        <img src="./images/${img_src[i]}" alt="${img_alt[i]}">
                        <div class="layer">
                            <h3>${texto_h3[i]}</h3>                    
                            <p>${texto_p[i]}</p>
                        </div>               
                    </div>
                </div>`;
         } else {
                texto_html_main += `
                    <div class="servicio-col">
                        <h3> ${texto_h3[i]}</h3>                    
                        <img src="./images/${img_src[i]}" alt="${img_alt[i]}">
                        <div class="layer">
                            <h3>${texto_h3[i]}</h3>                    
                            <p>${texto_p[i]}</p>
                        </div>               
                    </div>`;
    
            }
}





document.getElementById("serviciosMain").innerHTML = texto_html_main;