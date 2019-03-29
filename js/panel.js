

var myCanvasArea;
var myBackground;
var logo1;
var logo2;
var modal;
var estilo;
var versus;

var selEquipo1=[];
var selEquipo2=[];
var secciones=["selEstilos","selLogos","selEquipos","selVersus","imagen","myCanvas"];
var rutaImg = 'images/'


var posVersus = [{image: rutaImg + "vs_1.png", h:250, w:250},
                {image: rutaImg + "vs_2.png", h:250, w:250},
                {image: rutaImg + "vs_3.png", h:250, w:250},
                ];

var posAristos = [   { 
                            team1 : {x:40, y:50, h:135, w:117, gapx:0, gapy:0 },
                            team2 : {x:760, y:660, h:135, w:117, gapx:0, gapy:0 },
                        },
                        {
                            team1 : {x:20, y:50, h:0, w:0, gapx:0, gapy:0 },
                            team2 : {x:500, y:500, h:0, w:0, gapx:0, gapy:0 },
                        },
                        {
                            team1 : {x:420, y:66, h:281, w:252, gapx:-74, gapy:0 },
                            team2 : {x:46, y:510, h:281, w:252, gapx:-74, gapy:0 },
                        },
                    ]

var posEstilos = [ {
                    back : {image: rutaImg + "back_1.png", x:0,y:0,h:1280,w:840}, 
                    imgPref:"", 
                    logo1 : {x:40, y:400, h:400, w:400} ,
                    logo2 :{x:840, y:40, h:400, w:400},
                    vs : {x:515, y:290, h:250, w:250},
                    team1 : {x:40, y:50, h:135, w:117, gapx:0, gapy:0 },
                    team2 : {x:760, y:660, h:135, w:117, gapx:0, gapy:0 },
                    orden : ['Aristos','Logos','Versus'],
                },
                
                 {
                    back : {image: rutaImg + "back_2.png", x:0,y:0,h:1000,w:563}, 
                    imgPref:"", 
                    logo1 : {x:19, y:14, h:350, w:350} ,
                    logo2 :{x:620, y:188, h:350, w:350},
                    vs : {x:370, y:150, h:250, w:250},
                    team1 : {x:20, y:50, h:0, w:0, gapx:0, gapy:0 },
                    team2 : {x:500, y:500, h:0, w:0, gapx:0, gapy:0 },
                    orden : ['Aristos','Logos','Versus'],

                },
                {
                    back : {image: rutaImg + "back_3.png", x:0,y:0,h:1280,w:840}, 
                    imgPref:"dia_", 
                    logo1 : {x:9, y:23, h:400, w:400} ,
                    logo2 :{x:870, y:420, h:400, w:400},
                    vs : {x:500, y:220, h:350, w:350},
                    team1 : {x:420, y:66, h:281, w:252, gapx:-74, gapy:0 },
                    team2 : {x:46, y:510, h:281, w:252, gapx:-74, gapy:0 },
                    orden : ['Aristos','Logos','Versus'],
                },
                {
                    back : {image: rutaImg + "back_4.png", x:0,y:0,h:1280,w:840}, 
                    imgPref:"/pinups/pinup_", 
                    logo1 : {x:40, y:240, h:400, w:400} ,
                    logo2 :{x:870, y:240, h:400, w:400},
                    vs : {x:515, y:290, h:250, w:250},
                    team1 : {x: -90, y:0, h:415, w:325, gapx:-180, gapy:0 },
                    team2 : {x: 640, y:0, h:415, w:325, gapx:-180, gapy:0 },
                    orden : ['Aristos','Logos','Versus'],
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
    
    if (seccion === "logos") {
        if (estilo === null)
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
        imgA.setAttribute('width','100%');
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
        imgA.setAttribute('width','100%');
        imgA.setAttribute('onclick', 'selectVersus('+i+');');
        imgA.setAttribute('class', 'nonSelected');
        div_img.appendChild(imgA);
        div.appendChild(div_img);
    }
    
}

function init(){
    loadEstilos();
    loadVersus();
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
    
    let div = document.getElementById('equipos');
    div.innerHTML='';
	div.innerHTML='<h2 class="textoPortada">Equipo '+team+'</h2>';
    for (var i=0;i<Aristos.length;i++)
    {
        let imgA = document.createElement('img');
        imgA.src=rutaImg + Aristos[i].Image;
        //imgA.width  = 117;
        //imgA.height = 135;
        imgA.setAttribute('onclick', 'addAristoTeam('+i+', '+team+');');
        imgA.setAttribute('class', 'nonSelected');
        
        if (lista.indexOf(i) > -1)  { imgA.setAttribute('class', 'selected') }
    
        div.appendChild(imgA);
    }
    ver('equipos');
    ver('myModal');
    
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
    canvas.style.border   = "1px solid";
    canvas.context = canvas.getContext("2d");
    
	return canvas;
}

function cleanCanvas() {
    let canvas1=document.getElementById('CanvasLayer');
    let ctx=canvas1.getContext("2d");
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
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
    myBackground = new component(posEstilos[estilo].back.h, posEstilos[estilo].back.w, posEstilos[estilo].back.image, posEstilos[estilo].back.x, posEstilos[estilo].back.y, "image");
    myBackground.update();
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
        }
    
    }
	//drawLogos();
	//drawAristos();
	//drawVersus();

	ver('myCanvas');
	ocultar('equipos');

	
}

//Carga Versus en el canvas
function drawVersus(){

    let versusComponent;
    versusComponent = new component(posEstilos[estilo].vs.w, posEstilos[estilo].vs.h, posVersus[versus].image, posEstilos[estilo].vs.x, posEstilos[estilo].vs.y, "image");
    versusComponent.update();
}


//Carga Aristos en el canvas
function drawAristos (){
    
    let aristo;
    
    for (var i=1;i<=selEquipo1.length;i++){
        j=i%selEquipo2.length; //Posicionar al primero encima
        pos=j* (posEstilos[estilo].team1.w + posEstilos[estilo].team1.gapx) + posEstilos[estilo].team1.x;
        let temp = new component(posEstilos[estilo].team1.w, posEstilos[estilo].team1.h, rutaImg + posEstilos[estilo].imgPref + Aristos[selEquipo1[j]].Image, pos, posEstilos[estilo].team1.y, "image");
        temp.update();
    }
    
    for (var i=1;i<=selEquipo2.length;i++){
        j=i%selEquipo2.length;
        pos=j*(posEstilos[estilo].team2.w + posEstilos[estilo].team2.gapx) + posEstilos[estilo].team2.x;
        let temp1 = new component(posEstilos[estilo].team2.w, posEstilos[estilo].team2.h, rutaImg + posEstilos[estilo].imgPref +  Aristos[selEquipo2[j]].Image, pos, posEstilos[estilo].team2.y, "image");
        temp1.update();
        
        
    }
    
}

//Carga Logos en el canvas
function drawLogos(){

    let logo;
    let preview;
    preview = document.getElementById('img_id1'); //Seleccionamos la img del equipo
    if (preview.src !== null)
    {
  	    logo = new Image();
	    logo.src = preview.src;
	    logo1 = new component(posEstilos[estilo].logo1.w, posEstilos[estilo].logo1.h, logo, posEstilos[estilo].logo1.x, posEstilos[estilo].logo1.y, "file");
	    logo1.update();
    }
    
	preview = document.getElementById('img_id2'); //Seleccionamos la img del equipo
	if (preview.src !== null)
    {
      	logo = new Image();
    	logo.src = preview.src;
    	logo2 = new component(posEstilos[estilo].logo2.w, posEstilos[estilo].logo2.h, logo, posEstilos[estilo].logo2.x, posEstilos[estilo].logo2.y,"file");
    	logo2.update();
    }
}

// Cargar imagen de file input
function loadComponente( team ){
   let preview = document.getElementById('img_'+team); //Seleccionamos la img del equipo
   let file    = document.getElementById(team).files[0]; //Seleccionamos el fichero del img
   let reader  = new FileReader();

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



