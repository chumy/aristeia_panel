

var myCanvasArea;
var myBackground;
var logo1;
var logo2;
var modal;
var estilo;
var versus;
var fondo;

var frag1=-1;
var frag2=-1;
var punt1=-1;
var punt2=-1;

var selEquipo1=[];
var selEquipo2=[];
var secciones=["selEstilos","selLogos","selBackground","selEquipos","selVersus","selPuntuacion","imagen","myCanvas"];
var rutaImg = 'images/';
var rutaLogo = rutaImg + 'logos/';


var posVersus = [{image: rutaImg + "vs_1.png", h:250, w:250},
                {image: rutaImg + "vs_2.png", h:250, w:250},
                {image: rutaImg + "vs_3.png", h:250, w:250},
                ];

var posFondos = [{image: rutaImg + "back_1.png", h:480, w:300},
                {image: rutaImg + "back_2.png", h:480, w:300},
                {image: rutaImg + "back_3.png", h:480, w:300},
                {image: rutaImg + "back_4.png", h:480, w:300},
                ];

var posEstilos = [ {
                    back : {image: rutaImg + "estilo_1.png", x:0,y:0,h:1280,w:800}, 
                    imgPref:"", 
                    logo1 : {x:228, y:600, h:380, w:380} ,
                    logo2 :{x:1052, y:200, h:380, w:380},
                    vs : {x:640, y:400, h:250, w:250},
                    team1 : {x:115, y:100, h:174, w:150, gapx:0, gapy:0 },
                    team2 : {x:715, y:700, h:174, w:150, gapx:0, gapy:0 },
                    punt1 : {x:120, y:280, h:105, w:148, gapx:-20, gapy:0 },
                    punt2 : {x:910, y:520, h:105, w:148, gapx:-20, gapy:0 },
                    orden : ['Aristos','Logos','Versus','Puntuacion'],
                },
                
                 {
                    back : {image: rutaImg + "estilo_2.png", x:0,y:0,h:1280,w:800}, 
                    imgPref:"", 
                    logo1 : {x:240, y:400, h:380, w:380} ,
                    logo2 :{x:1040, y:400, h:380, w:380},
                    vs : {x:640, y:400, h:250, w:250},
                    team1 : {x:20, y:50, h:0, w:0, gapx:0, gapy:0 },
                    team2 : {x:500, y:500, h:0, w:0, gapx:0, gapy:0 },
                    punt1 : {x:120, y:680, h:105, w:148, gapx:-20, gapy:0 },
                    punt2 : {x:910, y:680, h:105, w:148, gapx:-20, gapy:0 },
                    orden : ['Logos','Versus','Puntuacion'],

                },
                {
                    back : {image: rutaImg + "estilo_3.png", x:0,y:0,h:1280,w:800}, 
                    imgPref:"dia_", 
                    logo1 : {x:209, y:200, h:380, w:380} ,
                    logo2 :{x:1070, y:600, h:380, w:380},
                    vs : {x:640, y:400, h:350, w:350},
                    team1 : {x:558, y:200, h:316, w:287, gapx:-110, gapy:0 },
                    team2 : {x:180, y:600, h:316, w:287, gapx:-110, gapy:0 },
                    punt1 : {x:280, y:400, h:63, w:88, gapx:-20, gapy:0 },
                    punt2 : {x:880, y:400, h:63, w:88, gapx:-20, gapy:0 },
                    orden : ['Logos','Aristos','Versus','Puntuacion'],
                },
                {
                    back : {image: rutaImg + "estilo_4.png", x:0,y:0,h:1280,w:800}, 
                    imgPref:"pinups/pinup_", 
                    logo1 : {x:260, y:420, h:380, w:380} ,
                    logo2 :{x:1020, y:420, h:380, w:380},
                    vs : {x:640, y:420, h:250, w:250},
                    team1 : {x: 104, y:210, h:415, w:325, gapx:-220, gapy:0 },
                    team2 : {x: 880, y:210, h:415, w:325, gapx:-220, gapy:0 },
                    punt1 : {x:120, y:700, h:105, w:148, gapx:-20, gapy:0 },
                    punt2 : {x:910, y:700, h:105, w:148, gapx:-20, gapy:0 },
                    orden : ['Aristos','Logos','Versus','Puntuacion'],
                },
               
                ]

var Aristos = [ {Id:1, Name:"Mushashi", Image:"mushashi.png"},
{Id:2, Name:"Wild Bill", Image:"wild_bill.png"},
{Id:3, Name:"Gata", Image:"gata.png"},
{Id:4, Name:"Major Lunah", Image:"lunah.png"},
{Id:5, Name:"Hexx3r", Image:"hexx3r.png"},
{Id:6, Name:"Parvati", Image:"parvati.png"},
{Id:7, Name:"8-Ball", Image:"8ball.png"},
{Id:8, Name:"Maximus", Image:"maximus.png"},
{Id:9, Name:"Valkyrie", Image:"valkyrie.png"},
{Id:10, Name:"Hannibal", Image:"hannibal.png"},
{Id:11, Name:"Laxmee", Image:"laxmee.png"},
{Id:12, Name:"Señor Massacre", Image:"massacre.png"},
{Id:13, Name:"Padre Mendoza", Image:"mendoza.png"},
{Id:14, Name:"Murtair", Image:"murtair.png"},
{Id:15, Name:"Kozmo", Image:"kozmo.png"},
{Id:16, Name:"Taowu", Image:"taowu.png"},
{Id:17, Name:"Dart", Image:"dart.png"},
{Id:18, Name:"Bixie", Image:"bixie.png"},
{Id:19, Name:"Prysm", Image:"prysm.png"},
{Id:20, Name:"Eclypse", Image:"eclypse.png"},
{Id:21, Name:"Oberon", Image:"oberon.png"},
{Id:22, Name:"Shona Carano", Image:"shona.png"},
{Id:23, Name:"Reina Koorie", Image:"koorie.png"},
{Id:24, Name:"Final Boss", Image:"boss.png"} ,
{Id:25, Name:"Bachmann", Image:"bachmann.png"} ,
{Id:26, Name:"Hammerhead", Image:"hammerhead.png"} ,];

var Logos = [{id:1, Name:"Befana's Cats", Image:"logo_befana.png"},
{id:2, Name:"Greyhounds", Image:"logo_greyhounds.png"},
{id:3, Name:"Bruni", Image:"logo_bruni.png"},]

//Visible

function ver(id){
	document.getElementById(id).style="display:block";
}

function ocultar(id){
	document.getElementById(id).style="display:none";
}

function GoTo (seccion) {
    if (secciones.indexOf(seccion) < 0)
    {
        alert("Seccion no valida");
        return -1;
    }
    if (seccion === "selLogos") {
        //if (typeof(estilo) == 'undefined')
        if (estilo == null)
            alert("Debe escoger un estilo");
        else
        {
           // startPanel();
            preloadImages(estilo)
            ocultarTodas();
            ver(seccion);
        }
    }else
    {
        ocultarTodas();
        ver(seccion);
    }
}

function ocultarTodas() {
    for (var i=0;i<secciones.length;i++)
        ocultar(secciones[i]);
}



function loadEstilos(){
    let div=document.getElementById('estilos_disponibles');
    
    for (var i=0;i<posEstilos.length;i++)
    {
        let div_img = document.createElement('div');
        div_img.setAttribute('class','divsmedio');
        let imgA = document.createElement('img');
        imgA.src=posEstilos[i].back.image;
        imgA.id="estilo_"+i
        imgA.setAttribute('width','50%');
        imgA.setAttribute('onclick', 'selectEstilo('+i+');');
        imgA.setAttribute('class', 'nonSelected');
        div_img.appendChild(imgA);
        div.appendChild(div_img);
    }

    //Forzamos el boton deshabilitado
    document.getElementById("btnEstilo").disabled = true;
}

function loadPuntaciones(){
    let div=document.getElementById('puntuaciones_disponibles');
    
    for (var i=0;i<posEstilos.length;i++)
    {
        let div_img = document.createElement('div');
        div_img.setAttribute('class','divsmedio');
        let imgA = document.createElement('img');
        imgA.src=posEstilos[i].back.image;
        imgA.id="estilo_"+i
        imgA.setAttribute('width','50%');
        imgA.setAttribute('onclick', 'selectEstilo('+i+');');
        imgA.setAttribute('class', 'nonSelected');
        div_img.appendChild(imgA);
        div.appendChild(div_img);
    }
    
}

function loadVersus(){
    let div=document.getElementById('versus_disponibles');
    
    for (var i=0;i<posVersus.length;i++)
    {
        let div_img = document.createElement('div');
        div_img.setAttribute('class','divsmedio');
        let imgA = document.createElement('img');
        imgA.src=posVersus[i].image;
        imgA.id="versus_"+i
        imgA.setAttribute('width','30%');
        imgA.setAttribute('onclick', 'selectVersus('+i+');');
        imgA.setAttribute('class', 'nonSelected');
        div_img.appendChild(imgA);
        div.appendChild(div_img);
    }
    
}

function loadFondos(){
    let div=document.getElementById('fondos_disponibles');
    
    for (var i=0;i<posFondos.length;i++)
    {
        let div_img = document.createElement('div');
        div_img.setAttribute('class','divsmedio');
        let imgA = document.createElement('img');
        imgA.src=posFondos[i].image;
        imgA.id="fondo_"+i
        imgA.setAttribute('width','30%');
        imgA.setAttribute('onclick', 'selectFondo('+i+');');
        imgA.setAttribute('class', 'nonSelected');
        div_img.appendChild(imgA);
        div.appendChild(div_img);
    }
    
}

function init(){
    loadEstilos();
    loadVersus();
    loadFondos();
}

//Seleccion de estilo

function selectEstilo(id){
	estilo=id;
	
	for(var i=0;i<posEstilos.length;i++)
	{
	    let imgA=document.getElementById("estilo_"+i);
	    if (i==id)
	        imgA.className ='selected';
	    else
	        imgA.className = 'nonSelected';
	}
	startPanel();
    document.getElementById("btnEstilo").disabled = false;
	//preloadImages(id);
}

function selectVersus(id){
	versus = id;
	for(var i=0;i<posVersus.length;i++)
	{
	    let imgA=document.getElementById("versus_"+i);
	    if (i==id)
	        imgA.className ='selected';
	    else
	        imgA.className = 'nonSelected';
	}
	
}

function selectFondo(id){
    fondo = id;
    for(var i=0;i<posFondos.length;i++)
    {
        let imgA=document.getElementById("fondo_"+i);
        if (i==id)
            imgA.className ='selected';
        else
            imgA.className = 'nonSelected';
    }
    //eliminamos el fondo
    document.getElementById('img_id3').src=posFondos[fondo].image;
    ver('img_id3');
    document.getElementById('id3').value="";

}

function setPunt1(id){
    punt1 = id;
}

function setFrag1(id){
    frag1 = id;
}

function setPunt2(id){
    punt2 = id;
}

function setFrag2(id){
    frag2 = id;
}

function preloadImages(id){
    for (var i=0;i<Aristos.length;i++)
    {
        let imgA = document.createElement('img');
        imgA.src=rutaImg + posEstilos[id].imgPref + Aristos[i].Image;
        imgA.setAttribute('style', 'display:none');
        
    }
}

// Generar selector de aristos
function loadSelector(team){
    
    let lista;
    
    if (team == 1 )
        lista = selEquipo1;
    else
        lista = selEquipo2;
    
    //let div = document.getElementById('modalContent');
    //div.innerHTML='';
	//div.innerHTML='<h2 class="textoPortada">Equipo '+team+'</h2>';
    modal('<h2 class="textoPortada">Equipo '+team+'</h2>');
    for (var i=0;i<Aristos.length;i++)
    {
        let imgA = document.createElement('img');
        imgA.src=rutaImg + Aristos[i].Image;
        imgA.setAttribute('onclick', 'addAristoTeam('+i+', '+team+');');
        imgA.setAttribute('class', 'nonSelected');
        
        if (lista.indexOf(i) > -1)  { imgA.setAttribute('class', 'selected') }
    
        //div.appendChild(imgA);
        modal(imgA,'append');
    }
    /*
    ver('modalContent');
    ver('myModal');*/
    
}

function loadLogos(team){
    
    let lista;
    
    if (team == 1 )
        logo = logo1;
    else
        logo = logo2;
    
    //let div = document.getElementById('modalContent');
    //div.innerHTML='';
    //div.innerHTML='<h2 class="textoPortada">Equipo '+team+'</h2>';
    modal('<h2 class="textoPortada">Equipo '+team+'</h2>');
    for (var i=0;i<Logos.length;i++)
    {
        let imgA = document.createElement('img');
        imgA.src=rutaLogo + Logos[i].Image;
        imgA.setAttribute('onclick', 'addLogo('+i+', '+team+');');
        imgA.setAttribute('class', 'nonSelected listalogos');
        
        if (logo == i)  { imgA.setAttribute('class', 'selected listalogos') }
    
        //div.appendChild(imgA);
        modal(imgA,'append');
    }
    /*
    ver('modalContent');
    ver('myModal');*/
    
}

// A単adir Aristo al equipo
function addAristoTeam(id, team){
    let lista;
    
    if (team == 1 )
        lista = selEquipo1;
    else
        lista = selEquipo2;
    
  	if (lista.indexOf(id) < 0) 
    	lista.push(id);
    else{
        lista.splice(lista.indexOf(id),1);
    }
    
    while (lista.length > 4){
        lista.shift();    
    }
    
    if (team == 1 )
    selEquipo1=lista;
    else
    selEquipo2=lista;
	
    loadSelector(team);
}

function addLogo(id,team)
{
    if (team == 1 )
        logo1 = id;
    else
        logo2 = id;
    
    ocultar('myModal');

    let preview = document.getElementById('img_id'+team); //Seleccionamos la img del equipo
    preview.src = rutaLogo + Logos[id].Image;
    ver('img_id'+team);
     
}

//************************//
// Funcionalidad canvas			
//************************//
// Primera configuracion del canvas
function startPanel() {
	myCanvasArea = loadCanvas('myCanvas');
}


// Genera el canvas
function loadCanvas(id) {
    
    let canvas;
    let div = document.getElementById(id); 
    
    if (document.getElementById('CanvasLayer') === null)
    {
	    canvas = document.createElement('canvas');
	    canvas.id = "CanvasLayer";

	    div.appendChild(canvas);
    }
    else
       canvas = document.getElementById('CanvasLayer');
    
    canvas.width  = posEstilos[estilo].back.h;
    canvas.height = posEstilos[estilo].back.w;
    canvas.style.zIndex   = 8;
    //canvas.style.border   = "1px solid";
    canvas.context = canvas.getContext("2d");
    
	return canvas;
}

function cleanCanvas() {
    let canvas1=document.getElementById('CanvasLayer');
    let ctx=canvas1.getContext("2d");
    //ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx.clearRect(0, 0, myCanvasArea.width, myCanvasArea.height);

}

// Carga un componente en el canvas
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }else {
	    //this.image = new Image();
        this.image = color;
	}
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myCanvasArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        }else if (type == "file") 
		{
			ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
		}
		else{
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };
}

//Actualizar el canvas
function updatePanel() {  
    cleanCanvas() ;

    drawFondo();

    for (var i=0;i<posEstilos[estilo].orden.length;i++)
    {
        switch(posEstilos[estilo].orden[i]) {
            case 'Logos':
                drawLogos();
                break;
            case 'Aristos':
                drawAristos();
                break;
            case 'Versus':
                drawVersus();
                break; 
            case 'Front':
                drawFront();
                break; 
            case 'Puntuacion':
                drawPuntuacion();
                break; 
        }
    
    }

    ocultar('modalContent');
	ver('myCanvas');


	
}

function drawFondo(){
    let logo;
    let preview;
    let x,y;

    preview = document.getElementById('img_id3'); 
  
    //Seleccionamos la img del equipo
    if (preview.src.length > 1000)
    {
        background = new Image();
        background.src = preview.src;
        myBackground = new component(posEstilos[estilo].back.h, posEstilos[estilo].back.w, logo, posEstilos[estilo].back.x, posEstilos[estilo].back.x, "file");
        myBackground.update();
    }
    else
    {
        //Seleccion predefinida 
        if(fondo > -1){
            fondo = estilo;
            myBackground = new component(posEstilos[estilo].back.h, posEstilos[estilo].back.w, posFondos[fondo].image, posEstilos[estilo].back.x, posEstilos[estilo].back.y, "image");
            myBackground.update();
        }
    }

}

//Carga Versus en el canvas
function drawVersus(){
    if (versus > -1)
    {
        let versusComponent;
        let x,y;
        x=posEstilos[estilo].vs.x - posEstilos[estilo].vs.w / 2;
        y=posEstilos[estilo].vs.y - posEstilos[estilo].vs.h / 2; 
        versusComponent = new component(posEstilos[estilo].vs.w, posEstilos[estilo].vs.h, posVersus[versus].image, x, y, "image");
        versusComponent.update();
    }
}


//Carga Aristos en el canvas
function drawAristos (){
    
    let aristo,x,y;

    if (selEquipo1.length > 0) 
    {
        for (var i=0;i<selEquipo1.length;i++){
            j=i%selEquipo1.length; //Posicionar al primero encima
            j=i;
            x = posEstilos[estilo].team1.x - posEstilos[estilo].team1.w / 2 ;
            y = posEstilos[estilo].team1.y - posEstilos[estilo].team1.h / 2 ;
            pos=j* (posEstilos[estilo].team1.w + posEstilos[estilo].team1.gapx) + x;
            let temp = new component(posEstilos[estilo].team1.w, posEstilos[estilo].team1.h, rutaImg + posEstilos[estilo].imgPref + Aristos[selEquipo1[j]].Image, pos, y, "image");
            temp.update();
        }
    }

    if (selEquipo2.length > 0) 
    {
        for (var i=0;i<selEquipo2.length;i++){
            j=i%selEquipo2.length;
            j=i;
            x = posEstilos[estilo].team2.x - posEstilos[estilo].team2.w / 2 ;
            y = posEstilos[estilo].team2.y - posEstilos[estilo].team2.h / 2 ;
            pos=j*(posEstilos[estilo].team2.w + posEstilos[estilo].team2.gapx) + x;

            let temp = new component(posEstilos[estilo].team2.w, posEstilos[estilo].team2.h, rutaImg + posEstilos[estilo].imgPref +  Aristos[selEquipo2[j]].Image, pos, y, "image");
            temp.update();       
        }
    }
    
}

//puntuacion
function drawPuntuacion(){
    let puntComponent,x,y;
    if (punt1 > -1)
    {
        let imagen = rutaImg + punt1 + '.png';
        x = posEstilos[estilo].punt1.x - posEstilos[estilo].punt1.w / 2 ;
        y = posEstilos[estilo].punt1.y - posEstilos[estilo].punt1.h / 2 ;
        puntComponent = new component(posEstilos[estilo].punt1.w, posEstilos[estilo].punt1.h, imagen, x, y, "image");
        puntComponent.update();
        if (frag1 > -1)
        {
            // Guion
            x = posEstilos[estilo].punt1.x - posEstilos[estilo].punt1.w / 2 ;
            y = posEstilos[estilo].punt1.y - posEstilos[estilo].punt1.h / 2 ;
            pos=(posEstilos[estilo].punt1.w + posEstilos[estilo].punt1.gapx) + x;
            puntComponent = new component(posEstilos[estilo].punt1.w, posEstilos[estilo].punt1.h, rutaImg  + 'guion.png', pos, y, "image");
            puntComponent.update();

            // frags
            let frags = rutaImg + frag1 + '_rojo.png';
            x = posEstilos[estilo].punt1.x - posEstilos[estilo].punt1.w / 2 ;
            y = posEstilos[estilo].punt1.y - posEstilos[estilo].punt1.h / 2 ;
            pos=2*(posEstilos[estilo].punt1.w + posEstilos[estilo].punt1.gapx) + x;
            puntComponent = new component(posEstilos[estilo].punt1.w, posEstilos[estilo].punt1.h, frags, pos, y, "image");
            puntComponent.update();
        }
    }

    if (punt2 > -1)
    {
        let imagen = rutaImg + punt2 + '.png';
        x = posEstilos[estilo].punt2.x - posEstilos[estilo].punt2.w / 2 ;
        y = posEstilos[estilo].punt2.y - posEstilos[estilo].punt2.h / 2 ;
        puntComponent = new component(posEstilos[estilo].punt2.w, posEstilos[estilo].punt2.h, imagen, x, y, "image");
        puntComponent.update();
        if (frag2 > -1)
        {
            // Guion
            x = posEstilos[estilo].punt2.x - posEstilos[estilo].punt2.w / 2 ;
            y = posEstilos[estilo].punt2.y - posEstilos[estilo].punt2.h / 2 ;
            pos=(posEstilos[estilo].punt2.w + posEstilos[estilo].punt2.gapx) + x;
            puntComponent = new component(posEstilos[estilo].punt2.w, posEstilos[estilo].punt2.h, rutaImg  + 'guion.png', pos, y, "image");
            puntComponent.update();

            // frags
            let frags = rutaImg + frag2 + '_rojo.png';
            x = posEstilos[estilo].punt2.x - posEstilos[estilo].punt2.w / 2 ;
            y = posEstilos[estilo].punt2.y - posEstilos[estilo].punt2.h / 2 ;
            pos=2*(posEstilos[estilo].punt2.w + posEstilos[estilo].punt2.gapx) + x;
            puntComponent = new component(posEstilos[estilo].punt2.w, posEstilos[estilo].punt2.h, frags, pos, y, "image");
            puntComponent.update();
        }
    }

}

//Carga Versus en el canvas
function drawFront(){

    let frontComponent;
    frontComponent = new component(posEstilos[estilo].front.w, posEstilos[estilo].front.h, posEstilos[estilo].front.image, posEstilos[estilo].front.x, posEstilos[estilo].front.y, "image");
    frontComponent.update();
}


//Carga Logos en el canvas
function drawLogos(){

    let logo;
    let preview;
    let x,y;

    // LOGO 1
    preview = document.getElementById('img_id1'); //Seleccionamos la img del equipo
    if (preview.src.length > 1000)
    {
  	    logo = new Image();
	    logo.src = preview.src;
        x=posEstilos[estilo].logo1.x - posEstilos[estilo].logo1.w / 2;
        y=posEstilos[estilo].logo1.y - posEstilos[estilo].logo1.h / 2;
	    tmp_logo1 = new component(posEstilos[estilo].logo1.w, posEstilos[estilo].logo1.h, logo, x, y, "file");
	    tmp_logo1.update();
    }    
    else
    {
        //Seleccion predefinida 
        if(logo1 > -1){
            x=posEstilos[estilo].logo1.x - posEstilos[estilo].logo1.w / 2;
            y=posEstilos[estilo].logo1.y - posEstilos[estilo].logo1.h / 2;
            tmp_logo1 = new component(posEstilos[estilo].logo1.h, posEstilos[estilo].logo1.w, rutaLogo + Logos[logo1].Image, x, y, "image");
            tmp_logo1.update();
        }
    }
    
	preview = document.getElementById('img_id2'); //Seleccionamos la img del equipo
	if (preview.src.length > 1000)
    {
      	logo = new Image();
    	logo.src = preview.src;
        x=posEstilos[estilo].logo2.x - posEstilos[estilo].logo2.w / 2;
        y=posEstilos[estilo].logo2.y - posEstilos[estilo].logo2.h / 2;
    	tmp_logo2 = new component(posEstilos[estilo].logo2.w, posEstilos[estilo].logo2.h, logo, x, y,"file");
    	tmp_logo2.update();
    }else
    {
        //Seleccion predefinida 
        if(logo2 > -1){
            x=posEstilos[estilo].logo2.x - posEstilos[estilo].logo2.w / 2;
            y=posEstilos[estilo].logo2.y - posEstilos[estilo].logo2.h / 2;
            tmp_logo2 = new component(posEstilos[estilo].logo2.h, posEstilos[estilo].logo2.w, rutaLogo + Logos[logo2].Image, x, y, "image");
            tmp_logo2.update();
        }
    }

}

// Cargar imagen de file input
function loadComponente( team ){
   let preview = document.getElementById('img_'+team); //Seleccionamos la img del equipo
   let file    = document.getElementById(team).files[0]; //Seleccionamos el fichero del img
   let reader  = new FileReader();

   //check Extension
    if (fileValidation(file.name))
    {
    	reader.onloadend = function () {
    	   this.image = new Image();
    	   this.image.src = reader.result;
    	   preview.src = reader.result;
       }
       if (file) {
    	   reader.readAsDataURL(file); //reads the data as a URL
    	   ver('img_'+team);
       } else {
    	   preview.src = "";
       }
    }else{
        document.getElementById(team).value="";
    }
}

//************************//
// Fichero Generado			
//************************//
//Funcion para descargar el fichero genrado
function download() {
var download = document.getElementById("download");
var image = document.getElementById("CanvasLayer").toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
download.setAttribute("href", image);

}



function fileValidation(filename){
   
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filename)){
        modal('<h2 class="textoPortada">Please upload file having extensions .jpeg/.jpg/.png/.gif only.</h2>');
        return false;
    }else{
       return true;
    }
}

function modal(message, tipo){
    let div = document.getElementById('modalContent');
    if (tipo == 'append')
    {     
        div.appendChild(message);
    }
    else{
        div.innerHTML=message;
    }
    ver('modalContent');
    ver('myModal');
}