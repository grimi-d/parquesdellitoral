var texto_subheader_html = `
                        
                            <div class="nav-brand">
                                <a href="index.html"><img src="./images/iconos/PDL/iconoParquesLitoral-removebg-preview.png"></a>
                            </div>
                            <div class="nav-links" id="navLinks">
                                <i class="fas fa-times" onclick="hideMenu()"></i>
                                <ul>
                                    <li><a href="index.html">Inicio</a></li>
                                    <li><a href="nosotros.html">Nosotros</a></li>
                                    <li><a href="servicios.html">Servicios</a></li>
                                    <li><a href="contacto.html">Contacto</a></li>
                                </ul>
                            </div>
                            <i class="fas fa-bars" onclick="showMenu()"></i>
                            `;

document.getElementById("subencabezado").innerHTML = texto_subheader_html;