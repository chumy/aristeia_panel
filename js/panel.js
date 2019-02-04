

var myCanvasArea;
var myBackground;
var logo1;
var logo2;
var modal;
var estilo;

var selEquipo1=[];
var selEquipo2=[];
var secciones=["estilos","logos","selEquipos","imagen","myCanvas"];
var rutaImg = '/aristeia/images/'


var escenarios = [ {
                    back : {image: rutaImg + "vs.png", x:0,y:0,h:1000,w:700}, 
                    imgPref:"dia_", 
                    logo1 : {x:0, y:275, h:386, w:386} ,
                    logo2 :{x:614, y:50, h:386, w:386},
                    team1 : {x:20, y:50, h:135, w:117, gapx:0, gapy:0 },
                    team2 : {x:500, y:500, h:135, w:117, gapx:0, gapy:0 },
                },
                
                 {
                    back : {image: rutaImg + "vs2.png", x:0,y:0,h:1000,w:563}, 
                    imgPref:"", 
                    logo1 : {x:19, y:14, h:350, w:350} ,
                    logo2 :{x:620, y:188, h:350, w:350},
                    team1 : {x:20, y:50, h:0, w:0, gapx:0, gapy:0 },
                    team2 : {x:500, y:500, h:0, w:0, gapx:0, gapy:0 },
                },
                {
                    back : {image: rutaImg + "vs3.png", x:0,y:0,h:1280,w:840}, 
                    imgPref:"dia_", 
                    logo1 : {x:9, y:23, h:400, w:400} ,
                    logo2 :{x:870, y:420, h:400, w:400},
                    team1 : {x:420, y:66, h:281, w:252, gapx:-74, gapy:0 },
                    team2 : {x:46, y:510, h:281, w:252, gapx:-74, gapy:0 },
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
{Id:24, Name:"Final Boss", Image:"boss.png"} ];


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
        if (estilo == null)
            alert("Debe escoger un estilo");
        else
        {
            startPanel();
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
    for (i=0;i<secciones.length;i++)
        ocultar(secciones[i]);
}

function loadEstilos(){
    var div=document.getElementById('estilos_disponibles');
    
    for (i=0;i<escenarios.length;i++)
    {
        var div_img = document.createElement('div');
        div_img.setAttribute('class','divsmedio');
        var imgA = document.createElement('img');
        imgA.src=escenarios[i].back.image;
        imgA.id="estilo_"+i
        imgA.setAttribute('width','100%');
        imgA.setAttribute('onclick', 'selectEstilo('+i+');');
        imgA.setAttribute('class', 'nonSelected');
        div_img.appendChild(imgA);
        div.appendChild(div_img);
    }
    
}

//Seleccion de estilo

function selectEstilo(id){
	estilo=id;
	
	for(i=0;i<escenarios.length;i++)
	{
	    var imgA=document.getElementById("estilo_"+i);
	    if (i==id)
	        imgA.className ='selected';
	    else
	        imgA.className = 'nonSelected';
	}
	//startPanel();
	//preloadImages(id);
	
}
function preloadImages(id){
    for (i=0;i<Aristos.length;i++)
    {
        var imgA = document.createElement('img');
        imgA.src=rutaImg + escenarios[id].imgPref + Aristos[i].Image;
        imgA.setAttribute('style', 'display:none');
        
    }
}

// Generar selector de aristos
function loadSelector(team){
    
    var lista;
    
    if (team == 1 )
        lista = selEquipo1;
    else
        lista = selEquipo2;
    
    div = document.getElementById('equipos');
    div.innerHTML='';
	div.innerHTML='<h2 class="textoPortada">Equipo '+team+'</h2>';
    for (i=0;i<Aristos.length;i++)
    {
        var imgA = document.createElement('img');
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

// Añadir Aristo al equipo
function addAristoTeam(id, team){
    var lista;
    
    if (team == 1 )
        lista = selEquipo1;
    else
        lista = selEquipo2;
    
  	if (lista.indexOf(id) < 0) 
    	lista.push(id);
    
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
    myBackground = new component(escenarios[estilo].back.h, escenarios[estilo].back.w, escenarios[estilo].back.image, escenarios[estilo].back.x, escenarios[estilo].back.y, "image");
    myBackground.update();
}


// Genera el canvas
function loadCanvas(id) {
	var canvas = document.createElement('canvas');
	div = document.getElementById(id); 
	canvas.id     = "CanvasLayer";
	canvas.width  = escenarios[estilo].back.h;
	canvas.height = escenarios[estilo].back.w;
	canvas.style.zIndex   = 8;
	//canvas.style.position = "absolute";
	canvas.style.border   = "1px solid";
	canvas.context = canvas.getContext("2d");
	div.appendChild(canvas);
	return canvas;
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
    myBackground.update();
	if (logo1 != null) logo1.update();
	if (logo2 != null ) logo2.update();
	ver('myCanvas');
	ocultar('equipos');
	loadAristos();
	//ver('myModal');

	//download();
	
	
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

//Carga Aristos en el canvas
function loadAristos (){
    
    var aristo;
    
    for (i=0;i<selEquipo1.length;i++){
        pos=i* (escenarios[estilo].team1.w + escenarios[estilo].team1.gapx) + escenarios[estilo].team1.x;
        temp = new component(escenarios[estilo].team1.w, escenarios[estilo].team1.h, rutaImg + escenarios[estilo].imgPref + Aristos[selEquipo1[i]].Image, pos, escenarios[estilo].team1.y, "image");
        temp.update();
    }
    
    for (i=0;i<selEquipo2.length;i++){
        pos=i* (escenarios[estilo].team2.w + escenarios[estilo].team2.gapx) + escenarios[estilo].team2.x;
        temp = new component(escenarios[estilo].team2.w, escenarios[estilo].team2.h, rutaImg + escenarios[estilo].imgPref +  Aristos[selEquipo2[i]].Image, pos, escenarios[estilo].team2.y, "image");
        temp.update();
        
        
    }
    
}

// Cargar imagen de file input
function loadComponente( team ){
   var preview = document.getElementById('img_'+team); //Seleccionamos la img del equipo
   var file    = document.getElementById(team).files[0]; //Seleccionamos el fichero del img
   var reader  = new FileReader();

	reader.onloadend = function () {
	   this.image = new Image();
	   this.image.src = reader.result;
	   preview.src = reader.result;
	   if (team == 'id1')
	   {
		   logo1 = new component(escenarios[estilo].logo1.w, escenarios[estilo].logo1.h, this.image, escenarios[estilo].logo1.x, escenarios[estilo].logo1.y, "file");
		   logo1.update();
	   }else if (team == 'id2')
	   {
		   logo2 = new component(escenarios[estilo].logo2.w, escenarios[estilo].logo2.h, this.image, escenarios[estilo].logo2.x, escenarios[estilo].logo2.y,"file");
		   logo2.update();
		 }
   }

   if (file) {
	   reader.readAsDataURL(file); //reads the data as a URL
	   ver('img_'+team);
	   //ver('selEquipos');
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

/*
// Dump the canvas contents to a file.
var canvas = document.getElementById("CursorLayer");
canvas.toBlob(function(blob) {saveAs(blob, "output.png"); }, "image/png");
    //};
*/
//download.setAttribute("download","archive.png");
}


//************************//
// Ventana Modal			
//************************//
// X para cerrar la venta modal
//ocument.getElementById('spanModal').onclick = function() {
//  modal.style.display = "none";
//}

// Cerrar al clicar fuera
/*window.onclick = function(event) {
	modal = document.getElementsByClassName("modal");	
	modal.style.display = "none";
	//ocultar('myModal');
}*/

