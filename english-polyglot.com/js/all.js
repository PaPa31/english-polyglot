
var newwin,last_url,last_width,last_height,
win_test=win_img=win_url=0
window.name='parent'

function popup(url,width,height,windowtitle,textdescription,pronunciation){

function bindReady(handler){


	if(url.match(/http/i)) handler()
	var called = false

	function ready() {
		if (called) return
		called = true
		handler()
	}

	if ( document.attachEvent ) {  // IE

		try {
			var isFrame = newwin.frameElement != null
		} catch(e) {}

		if ( document.documentElement.doScroll && !isFrame ) {
			function tryScroll(){
				if (called) return
				try {
					document.documentElement.doScroll("left")
					ready()
				} catch(e) {

					setTimeout(tryScroll, 10)
				}
			}
			tryScroll()
		}

		newwin.attachEvent("onreadystatechange", function(){
			if ( newwin.readyState === "complete" ) {
				ready()
			}
		})
	} else {newwin.addEventListener( "DOMContentLoaded", ready, false )}

    if (window.addEventListener)
        newwin.addEventListener('load', ready, false)
    else if (window.attachEvent)
        newwin.attachEvent('onload', ready)
    else {
		var fn = newwin.onload
		newwin.onload = function() {
			fn && fn()
			ready()
		}
    }
}

function flow(){

	last_url=url;

    if((newwin==undefined)||!(newwin && !newwin.closed)){

		if (parent.screen.width<800){

			if(url.match(/htm|http/i)){
				newwin=window.open(url,'newwin')
			}else{
				newwin=window.open('answer.html?v=41','newwin')
			}

		}else{

			var w=width||screen.width/2,
			h=height||screen.height/2
			if (navigator.userAgent.toLowerCase().indexOf('opr')!=-1)h+=50
			var left=(screen.width-w)/2,
			top=(screen.height-h)/2

			var params='width='+w+',height='+h
			params+=',top='+top+',left='+left
			params+=',screenY='+top+',screenX='+left
			params+=',resizable'
			params+=',dialog'

			if(url.match(/htm|http/i)){
				newwin=window.open(url,'newwin',params)

			}else{
				newwin=window.open('answer.html?v=41','newwin',params)
			}

		}

		bindReady(function(){
			if(url==''){

				newwin.document.title=windowtitle;
				var i=newwin.document.getElementById('content_answer');
				i.style.display='block';
				i.style.border='0.1vw solid #d3d3d3';
				i.style.background='#e5f2ee';
				newwin.document.getElementById('textdescription').innerHTML=textdescription;
				newwin.document.getElementById('pronunciation').innerHTML=pronunciation;
				newwin.document.getElementById('but_done').style.display='block';
				newwin.document.getElementById('print_form').style.display='none';
				win_test=1

			}else{
					if(getextension(url).match(/jpg|gif|png/i)){

						newwin.document.title=windowtitle;
						var y=newwin.document.getElementById('content_print');
						y.style.display='block';
						y.innerHTML='<img src="'+url+'" style="max-width:100%">';
						newwin.document.getElementById('but_done').style.display='block';
						var x=newwin.document.getElementById('print_form');
						if (parent.screen.width<800){x.style.display='none'}else{x.style.display='inline-block'}
						win_img=1

					}
					if(url.match(/http|htm/i)){	
						win_url=1
					}
			}

		})

	}else{
	if(newwin) newwin.focus()
		if(url==''){

			newwin.document.title=windowtitle;
			var i=newwin.document.getElementById('content_answer');
			i.style.display='block';
			i.style.border='0.1vw solid #d3d3d3';
			i.style.background='#e5f2ee';
			newwin.document.getElementById('textdescription').innerHTML=textdescription;
			newwin.document.getElementById('pronunciation').innerHTML=pronunciation;
			newwin.document.getElementById('but_done').style.display='block';
			newwin.document.getElementById('print_form').style.display='none';

		}else{
				if(getextension(url).match(/jpg|gif|png/i)){

					var y=newwin.document.getElementById('content_print');
					y.style.display='block';
					newwin.document.title=windowtitle;
					y.innerHTML='<img src="'+url+'" style="max-width:100%">';
					//newwin.document.getElementById('pronunciation').innerHTML='';
					newwin.document.getElementById('but_done').style.display='block';
					var x=newwin.document.getElementById('print_form');
					if (parent.screen.width<800){x.style.display='none'}else{x.style.display='inline-block'}

				}
				if(url.match(/http|htm/i)){

				}

		}

	}

}

	if(win_test||win_img||win_url){

		if(last_url!=url){ 

			if ((!last_width)||(last_width!=width)||(last_height!=height)||(url.match(/http/i))||(url.match(/generator-fraz/i))){ 
				newwin.close()

				last_width=width;
				last_height=height;
				win_test=win_img=win_url=0;

				(function timer(){
					if(newwin.closed) {
						flow()
					}
					else setTimeout(timer,0)
				})()
			}else flow()
		} else flow()
	}else flow()
	return false
}

window.onunload=function(){
	if(newwin && !newwin.closed){
			newwin.close();
	}
}

function getextension(filename){
	return /[^&]*/.exec(/[^?]*/.exec(/[^.]+$/.exec(filename)))[0]
}


var tooltip = {

	/* НАЧАЛО НАСТРОЕК */
	options: {
		attr_name: "tooltip", // наименование создаваемого tooltip'ого атрибута
		blank_text: "", // текст для ссылок с target="_blank"
		newline_entity: "  ", // укажите пустую строку (""), если не хотите использовать в tooltip'ах многострочность; ежели хотите, то укажите тот символ или символы, которые будут заменяться на перевод строки
		max_width: 0, // максимальная ширина tooltip'а в пикселах; обнулите это значение, если ширина должна быть нелимитирована
		delay: 100, // задержка при показе tooltip'а в миллисекундах
		skip_tags: ["link", "style","img"] // теги, у которых не обрабатываем атрибуты alt и title
	},
	/* КОНЕЦ НАСТРОЕК */

	t: document.createElement("DIV"),
	c: null,
	g: false,
	canvas: null,

	m: function(e){
		if (tooltip.g){
			var x = window.event ? event.clientX + (tooltip.canvas.scrollLeft || document.body.scrollLeft) : e.pageX;
			var y = window.event ? event.clientY + (tooltip.canvas.scrollTop || document.body.scrollTop) : e.pageY;
			tooltip.a(x, y);
		}
	},

	d: function(){
		tooltip.canvas = document.getElementsByTagName(document.compatMode && document.compatMode == "CSS1Compat" ? "HTML" : "BODY")[0];
		tooltip.t.setAttribute("id", "tooltip");
		document.body.appendChild(tooltip.t);
		if (tooltip.options.max_width) tooltip.t.style.maxWidth = tooltip.options.max_width + "px"; // all but ie
		var a = document.all && !window.opera ? document.all : document.getElementsByTagName("*"); // in opera 9 document.all produces type mismatch error
		var l = a.length;
		for (var i = 0; i < l; i++){

			if (!a[i] || tooltip.options.skip_tags.in_array(a[i].tagName.toLowerCase())) continue;

			var tooltip_title = a[i].getAttribute("title"); // returns form object if IE & name="title"; then IE crashes; so...
			if (tooltip_title && typeof tooltip_title != "string") tooltip_title = "";

			var tooltip_alt = a[i].getAttribute("alt");
			var tooltip_blank = a[i].getAttribute("target") && a[i].getAttribute("target") == "_blank" && tooltip.options.blank_text;
			if (tooltip_title || tooltip_blank){
				a[i].setAttribute(tooltip.options.attr_name, tooltip_blank ? (tooltip_title ? tooltip_title + " " + tooltip.options.blank_text : tooltip.options.blank_text) : tooltip_title);
				if (a[i].getAttribute(tooltip.options.attr_name)){
					a[i].removeAttribute("title");
					if (tooltip_alt && a[i].complete) a[i].removeAttribute("alt");
					tooltip.l(a[i], "mouseover", tooltip.s);
					tooltip.l(a[i], "mouseout", tooltip.h);
				}
			}else if (tooltip_alt && a[i].complete){
				a[i].setAttribute(tooltip.options.attr_name, tooltip_alt);
				if (a[i].getAttribute(tooltip.options.attr_name)){
					a[i].removeAttribute("alt");
					tooltip.l(a[i], "mouseover", tooltip.s);
					tooltip.l(a[i], "mouseout", tooltip.h);
				}
			}
			if (!a[i].getAttribute(tooltip.options.attr_name) && tooltip_blank){
				//
			}
		}
		document.onmousemove = tooltip.m;
		window.onscroll = tooltip.h;
		tooltip.a(-99, -99);
	},

	_: function(s){
		s = s.replace(/\&/g,"&amp;");
		s = s.replace(/\</g,"&lt;");
		s = s.replace(/\>/g,"&gt;");
		return s;
	},

	s: function(e){
		if (typeof tooltip == "undefined") return;
		var d = window.event ? window.event.srcElement : e.target;
		if (!d.getAttribute(tooltip.options.attr_name)) return;
		var s = d.getAttribute(tooltip.options.attr_name);
		if (tooltip.options.newline_entity){
			var s = tooltip._(s);
			s = s.replace(eval("/" + tooltip._(tooltip.options.newline_entity) + "/g"), "<br>");
			tooltip.t.innerHTML = s;
		}else{
			if (tooltip.t.firstChild) tooltip.t.removeChild(tooltip.t.firstChild);
			tooltip.t.appendChild(document.createTextNode(s));
		}
		tooltip.c = setTimeout(function(){
			tooltip.t.style.visibility = 'visible';
		}, tooltip.options.delay);
		tooltip.g = true;
	},

	h: function(e){
		if (typeof tooltip == "undefined") return;
		tooltip.t.style.visibility = "hidden";
		if (!tooltip.options.newline_entity && tooltip.t.firstChild) tooltip.t.removeChild(tooltip.t.firstChild);
		clearTimeout(tooltip.c);
		tooltip.g = false;
		tooltip.a(-99, -99);
	},

	l: function(o, e, a){
		if (o.addEventListener) o.addEventListener(e, a, false); // was true--Opera 7b workaround!
		else if (o.attachEvent) o.attachEvent("on" + e, a);
			else return null;
	},

	a: function(x, y){
		var w_width = tooltip.canvas.clientWidth ? tooltip.canvas.clientWidth + (tooltip.canvas.scrollLeft || document.body.scrollLeft) : window.innerWidth + window.pageXOffset;
		var w_height = window.innerHeight ? window.innerHeight + window.pageYOffset : tooltip.canvas.clientHeight + (tooltip.canvas.scrollTop || document.body.scrollTop); // should be vice verca since Opera 7 is crazy!

		if (document.all && document.all.item && !window.opera) tooltip.t.style.width = tooltip.options.max_width && tooltip.t.offsetWidth > tooltip.options.max_width ? tooltip.options.max_width + "px" : "auto";

		var t_width = tooltip.t.offsetWidth;
		var t_height = tooltip.t.offsetHeight;

		tooltip.t.style.left = x + 8 + "px";
		tooltip.t.style.top = y + 8 + "px";

		if (x + t_width > w_width) tooltip.t.style.left = w_width - t_width + "px";
		if (y + t_height > w_height) tooltip.t.style.top = w_height - t_height + "px";
	}
}

Array.prototype.in_array = function(value){
	var l = this.length;
	for (var i = 0; i < l; i++)
		if (this[i] === value) return true;
	return false;
};

//------------------------init tooltip and DragAndDrop---------------------------------

	var root = window.addEventListener || window.attachEvent ? window : document.addEventListener ? document : null;
	if (root){
		if (root.addEventListener){root.addEventListener("load",tooltip.d,false);root.addEventListener("load",processOnload,false)}
		else if (root.attachEvent){root.attachEvent("onload",tooltip.d);root.attachEvent("onload",processOnload)}
	}

function trim(s) {
		s = s.replace(/-/g, ' ');
		s = s.replace(/[^\w\s]|_/g, "");
		s = s.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		s = s.toLowerCase();
		s = s.replace(/\s+/g,"-");
		return s;
	};

function playSound0(anchor) {
	var soundfile = trim (anchor.innerHTML);
	soundfile = soundfile.toLowerCase();
	var soundfile_mp3 = soundfile + '.mp3';
	var soundfile_ogg = soundfile + '.ogg';
		document.getElementById("dummy").innerHTML =
			'<audio id="my-audio">' +
			'<source src="audio/' + soundfile_mp3 + '" type="audio/mpeg" />' +
			'<source src="audio/' + soundfile_ogg + '" type="audio/ogg" />' +
			'<embed hidden="true" autostart="true" loop="false" src="audio/' +
			soundfile_mp3 + '" />' + '</audio>';

		var myAudio = document.getElementById('my-audio');
		myAudio.play();
}

function playSound2(soundfile_mp3, soundfile_ogg) {
	document.getElementById("dummy").innerHTML=
	'<audio id="my-audio">'+
	'<source src="audio/'+soundfile_mp3+'" type="audio/mpeg" />'+
	'<source src="audio/'+soundfile_ogg+'" type="audio/ogg" />'+
	'<embed hidden="true" autostart="true" loop="false" src="audio/'+soundfile_mp3+'" />'+
	'</audio>';

	var myAudio = document.getElementById('my-audio');
	myAudio.play();
}

function playSound3(soundf, pap) {
	var soundfile = trim (soundf);
	var soundfile_mp3 = soundfile + '.mp3';
	var soundfile_ogg = soundfile + '.ogg';
	document.getElementById("dummy").innerHTML=
	'<audio id="my-audio">'+
	'<source src="audio/'+pap+'/'+soundfile_mp3+'" type="audio/mpeg" />'+
	'<source src="audio/'+pap+'/'+soundfile_ogg+'" type="audio/ogg" />'+
	'<embed hidden="true" autostart="true" loop="false" src="audio/'+pap+'/'+soundfile_mp3+'" />'+
	'</audio>';

	var myAudio = document.getElementById('my-audio');
	myAudio.play();
}

var audio_name = 'fff.mp3';
var phrase_name = 'nnn-mp3';
var contextClass = (window.AudioContext ||window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext)

var path=window.location.pathname

var urok_num=path.match(/(index|\/$)/gm)?1:path.replace(/^\D+|\D+$/g, "")

if (contextClass&&urok_num) {
var context = new contextClass() ;
check_mp3();
}

function check_mp3() {

	var base64ToBuffer = function (buffer) {
		var binary = window.atob(buffer);
		var buffer = new ArrayBuffer(binary.length);
		var bytes = new Uint8Array(buffer);
		for (var i = 0; i < buffer.byteLength; i++) {
			bytes[i] = binary.charCodeAt(i) & 0xFF;
		}
		return buffer;
	}

	var base64String = "SUQzAwAAAAABOlRTU0UAAAAwAAAATEFNRSA2NGJpdHMgdmVyc2lvbiAzLjk5LjUgKGh0dHA6Ly9sYW1lLnNmLm5ldCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zgMQAAAAAAAAAAABJbmZvAAAADwAAAAMAAANCAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv///////////////////////////////////////////wAAADlMQU1FMy45OXIBbgAAAAAAAAAAFEAkBGAiAABAAAADQrlwxl4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/84DEACIptdwEeEzlC8XMuajf4YE4choE7J2XM0zrUavj7u/fv379+/uDxv/9oIEyYDAYDAYDAYDAAQQIEEIiLPJkyZMmTJkCERnu7IECBAgQiIu7vf//+93d2gAAAAAD////8BAeHh4ekABH/////+AgPDw8PWgABnv//wAAAAEB4eHh6QAAAAQHh4eHrQAAA9+Y/9JT3/OAQCAQCAQCCiQKuBoGgZBWWBoFQVBUFQkDQNA0DQKgqCvR+DIKgqCoKs4sDQNA0DR1bv57//lS//OCxDoUICX4DjGMAD2ZUFRE+WCp3KkeK9fs6/FeVZqCrsFaTEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/84LEOwAAAAAAAAAAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==";

	var audioFromString = base64ToBuffer(base64String);

	context.decodeAudioData(audioFromString, function (buffer) {

		preload_pap(urok_num);

	}, function (e) {
		audio_name = 'fff.ogg';
		phrase_name = 'nnn-ogg';

		preload_pap(urok_num);
	});

}

var urok_all_verb_sounds = new Array;
var urok_all_verb_names = new Array;
//  var all_uroks_sounds = new Array;
//  var all_uroks_names = new Array;

function loadFile( url, callback ) {//progressCallback,

		var xhr = null;
		if (window.XMLHttpRequest) {
			try {
				xhr = new XMLHttpRequest();
			} catch (e){}
		}
		else if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject('Msxml2.XMLHTTP');
			} catch (e){
				try {
					xhr = new ActiveXObject('Microsoft.XMLHTTP');
				} catch (e){}
			}
		}

		if (xhr) {

			xhr.open("GET", url, true); 
			if ((url.split('.').pop()=='mp3')||(url.split('.').pop()=='ogg')) {xhr.responseType = 'arraybuffer'};
			xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");

			xhr.onreadystatechange = function () {

				try
				{
					if (xhr.readyState === 4)
					{
						var status = xhr.status;
						if ((status >= 200)&&(status < 300) || status === 304)
						{

							callback(xhr.response);

							delete xhr;
							xhr = null;
						}
						else
						{
							//document.getElementById("progress").innerHTML = '';
							//alert(url+" не удалось получить данные:\n"+ xhr.status);
						}
					}

				}
				catch( e ) {
					//alert(' ошибка: '+ e.description );
				}

			};

//			  xhr.onprogress = function(e) {
//
//				  if(e.lengthComputable) {
//					  var done = e.position || e.loaded, total = e.totalSize || e.total;
//
//					  progressCallback( done*100/total );
//				  }
//			  };

			xhr.send();

		}
		return xhr;
	};

function preload_pap(pap) {

		var urok_verb_sounds = [];
		var urok_verb_names = [];

		var toLoad = loaded = -1;
		var phrase = 'audio/u-'+pap+'/'+phrase_name;
		var audio = 'audio/u-'+pap+'/'+audio_name;

		var requestPhrase = loadFile( phrase, function(){//updateProgress2,

				urok_verb_names = requestPhrase.responseText.split(',');

				urok_all_verb_names[pap] = urok_verb_names;

		} );

		var requestAudio = loadFile( audio, function(){//updateProgress2,

				processConcatenatedFile( requestAudio.response );} );

		function extractBuffer( src, start, length )
		{
			var dstU8 = new Uint8Array( length ); 
			var srcU8 = new Uint8Array( src, start, length );
			dstU8.set( srcU8 );
			return dstU8;
		}

		function processConcatenatedFile( dataSound )
		{

			var ss = new DataView( dataSound );
			var offset = 0;
			while( offset < ss.byteLength )
			{
				var length = ss.getUint32( offset, true );
				offset += 4;
				var mp3 = extractBuffer( dataSound, offset, length );

				offset += length;
				toLoad++;

				urok_verb_sounds[ toLoad ] = mp3;
			}

				urok_all_verb_sounds[pap] = urok_verb_sounds;

		};

//		function updateProgress2( p ) {
//			progress2.style.width = Math.round( p ) + '%';
//		};
	};

function playSound(anchor) {

		var pap = urok_num;

		if (typeof anchor === 'string' || anchor instanceof String)
			{var soundfile = trim (anchor)}
		else
			{var soundfile = trim (anchor.innerHTML)}

		soundfile = soundfile.toLowerCase();

		//var type_connection = '';

		if ((context)&&(urok_all_verb_names[pap])&&(urok_all_verb_sounds[pap]))
		{

			var ss = urok_all_verb_names[pap].indexOf(soundfile);
			var ssource2 = urok_all_verb_sounds[pap][ss];
			var ssource = context.createBufferSource();
			ssource.connect(context.destination);

			if (ssource2 instanceof Uint8Array) {

				context.decodeAudioData( ssource2.buffer,

					function( buffer ){

						ssource.buffer = buffer;

						urok_all_verb_sounds[pap][ss] = ssource.buffer;

						if( ssource.noteOn ) {ssource.noteOn( 0 )} else {ssource.start( 0 )}
					},
					function(err) {
						document.getElementById("progress").innerHTML = "error(decodeAudioData): "+err;
					}

				);

			}
			else
			{
				ssource.buffer = ssource2;
				ssource.playfunc=ssource.start||ssource.noteOn;
				ssource.playfunc(0);
			}

			 //type_connection = '#3C8C3E';
		}
		else
		{

			if (!0)
			{
				var soundfile_mp3 = soundfile + '.mp3';
				var soundfile_ogg = soundfile + '.ogg';
				document.getElementById("dummy").innerHTML=
				'<audio id="my-audio">'+
				'<source src="audio/u-'+pap+'/'+soundfile_mp3+'" type="audio/mpeg" />'+
				'<source src="audio/u-'+pap+'/'+soundfile_ogg+'" type="audio/ogg" />'+
				'<embed hidden="true" autostart="true" loop="false" src="audio/u-'+pap+'/'+soundfile_mp3+'" />'+
				'</audio>';
				var myAudio = document.getElementById('my-audio');
				myAudio.play();
				//type_connection = '#CED228';
			}
			else
			{

				if (soundr) {var lang = 'ru'; soundf = soundr} else {var lang = 'en'};
				soundf = encodeURIComponent(soundf);

				document.getElementById("dummy").innerHTML=
				'<audio id="my-audio">'+
				'<source src="https://www.english-polyglot.com/mobile/ttsgateway.php?ie=utf-8&tl='+lang+'&q='+soundf+'" type="audio/mpeg" />'+
				'<embed hidden="true" autostart="true" loop="false" src="https://www.english-polyglot.com/mobile/ttsgateway.php?ie=utf-8&tl='+
				lang+'&q='+soundf+'" />'+
				'</audio>';
				var myAudio = document.getElementById('my-audio');
				myAudio.play();
				//type_connection = '#CA332B';
			}

		};

		//document.getElementById("progress2").style.background = type_connection;

	};


// -----------------------------начало драг-энд-дроп

function processOnload(e){
	var dragObjects = document.getElementById('dragObjects').getElementsByTagName('div')
    for(var i=0; i<dragObjects.length; i++) {
        new DragObject(dragObjects[i])
	}
}

function DragObject(element) {
	element.dragObject = this

	dragMaster.makeDraggable(element)

	this.onDragMove = function(x, y) {
		element.style.top =  y - mouseOffset.y +'px'
		element.style.left = x - mouseOffset.x +'px'
		//element.style.zIndex = '2'
	}

}

function fixEvent(e) {
	// получить объект событие для IE

	e = e || window.event

	// добавить pageX/pageY для IE
	if ( e.pageX == null && e.clientX != null ) {
		var html = document.documentElement
		var body = document.body
		e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0)
		e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0)

	}

	// добавить which для IE
	if (!e.which && e.button) {
		e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) )
	}

	return e
}

function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        return getOffsetRect(elem)
    } else {
        return getOffsetSum(elem)
    }
}

function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect()

    var body = document.body
    var docElem = document.documentElement

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft

    return { top: Math.round(top), left: Math.round(left) }
}

function getOffsetSum(elem) {
    var top=0, left=0
    while(elem) {
        top = top + parseInt(elem.offsetTop)
        left = left + parseInt(elem.offsetLeft)
        elem = elem.offsetParent
    }

    return {top: top, left: left}
}


function closeObject (element) {
	var y=document.getElementById(element)
	y.style.display = 'none'
	y.style.top=''
}

function showObject (element) {
	document.getElementById('d1').style.zIndex='1'
	document.getElementById('d2').style.zIndex='1'

	var i=document.getElementById(element)
	i.style.display = 'table'
	i.style.position = 'fixed'
	i.style.top = '0px'
	i.style.zIndex ='2'
}

function plusImage (elem) {
	var i = document.getElementById('img' + elem),
		w = Math.max(i.offsetWidth, i.clientWidth),
		b1 = document.getElementById(elem + 'b1'),
		b2 = document.getElementById(elem + 'b2');

	b2.disabled = false

	if (w < 650) { w = w + 50; i.style.width = w + 'px'; b1.disabled = false;}
	else{b1.disabled=true}
}

function minusImage (elem) {
	var i=document.getElementById('img'+elem);
	var w = Math.max(i.offsetWidth, i.clientWidth),
		b1 = document.getElementById(elem + 'b1'),
		b2 = document.getElementById(elem + 'b2');

	b1.disabled = false
	
	if (w > 320) { w = w - 50; i.style.width = w + 'px'; b2.disabled = false; }
	else{b2.disabled=true}
}

var dragMaster = (function() {

	var dragObject
	var mouseOffset

	// получить сдвиг target относительно курсора мыши
	function getMouseOffset(target, e) {
		var docPos	= getPosition(target)
		return {x:e.pageX - docPos.x, y:e.pageY - docPos.y}
	}

	function mouseUp(){

		dragObject = null

		 //очистить обработчики, т.к перенос закончен
		document.onmousemove = tooltip.m; //было null, но возникал конфликт с тултипом 
		document.onmouseup = null
		document.ondragstart = null
		document.body.onselectstart = null
	}

	function mouseMove(e){
		e = fixEvent(e)

		with(dragObject.style) {
			//position = 'absolute'
			top = e.pageY - mouseOffset.y + 'px'
			left = e.pageX - mouseOffset.x + 'px'
		}
		return false
	}

	function mouseDown(e) {
		e = fixEvent(e)
		if (e.which!=1) return
		dragObject  = this
		document.getElementById('d1').style.zIndex='1'
		document.getElementById('d2').style.zIndex='1'
		dragObject.style.zIndex = '2'
		// получить сдвиг элемента относительно курсора мыши
		mouseOffset = getMouseOffset(this, e)

		// эти обработчики отслеживают процесс и окончание переноса
		document.onmousemove = mouseMove
		document.onmouseup = mouseUp

		// отменить перенос и выделение текста при клике на тексте
		document.ondragstart = function() { return false }
		document.body.onselectstart = function() { return false }

		return false
	}

	return {
		makeDraggable: function(element){
			element.onmousedown = mouseDown
		}
	}

}())

function getPosition(e){
	var left = 0
	var top  = 0

	while (e.offsetParent){
		left += e.offsetLeft
		top  += e.offsetTop
		e	 = e.offsetParent
	}

	left += e.offsetLeft
	top  += e.offsetTop

	return {x:left, y:top}
}




// - блок расшаривания

Share = {
    go: function(a, type, url, title, img, text) {
        type = type || 'facebook';
		url  = url  || location.href;
        title= title|| document.title;
        img  = img  || '';
        text = text || '';

        var urlSet = this[type](url, title, img, text);
        var isOpened = this.popup(urlSet);
        if (null === isOpened) {
            a.href = urlSet;
            return true;
        }
        return false;
    },
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'https://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        return url;
    },
    odnoklassniki: function(purl, text) {
        url  = 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.share';
        url += 'Url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(text);
        return url;
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'https://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        return url;
    },
    twitter: function(purl, ptitle) {
        url  = 'https://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        return url;
    },
    mailru: function(purl, ptitle, pimg, text) {

        url  = 'https://connect.mail.ru/share?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&imageurl='    + encodeURIComponent(pimg);
        return url;
    },

    popup: function(url) {
        return popup(url,656,432)
    }
};

// трекеры для гугл-аналитикс-------------------->

var _ga = _ga || {};
var _gaq = _gaq || [];

_ga.trackSocial = function(opt_pageUrl, opt_trackerName, opt_targetUrl) {
	_ga.trackFacebook(opt_pageUrl, opt_trackerName);
	_ga.trackTwitter(opt_pageUrl, opt_trackerName);
	_ga.trackVkontakte(opt_pageUrl, opt_trackerName, opt_targetUrl);
};

_ga.trackFacebook = function(opt_pageUrl, opt_trackerName) {
	var trackerName = _ga.buildTrackerName_(opt_trackerName);
	try {
	if (FB && FB.Event && FB.Event.subscribe) {
		FB.Event.subscribe('edge.create', function(targetUrl) {
		_gaq.push([trackerName + '_trackSocial', 'facebook', 'like',
			targetUrl, opt_pageUrl]);
		});
		FB.Event.subscribe('edge.remove', function(targetUrl) {
		_gaq.push([trackerName + '_trackSocial', 'facebook', 'unlike',
			targetUrl, opt_pageUrl]);
		});
		FB.Event.subscribe('message.send', function(targetUrl) {
		_gaq.push([trackerName + '_trackSocial', 'facebook', 'send',
			targetUrl, opt_pageUrl]);
		});
	}
	} catch (e) {}
	};

	_ga.buildTrackerName_ = function(opt_trackerName) {
	return opt_trackerName ? opt_trackerName + '.' : '';
};

_ga.trackTwitter = function(opt_pageUrl, opt_trackerName) {
	var trackerName = _ga.buildTrackerName_(opt_trackerName);
	try {
		if (twttr && twttr.events && twttr.events.bind) {
		twttr.events.bind('tweet', function(event) {
			if (event) {
			var targetUrl; // Default value is undefined.
			if (event.target && event.target.nodeName == 'IFRAME') {
				targetUrl = _ga.extractParamFromUri_(event.target.src, 'url');
			}
			_gaq.push([trackerName + '_trackSocial', 'twitter', 'tweet',
				targetUrl, opt_pageUrl]);
			}
		});
		}
	} catch (e) {}
};

_ga.trackVkontakte = function(opt_pageUrl, opt_trackerName, opt_targetUrl) {
    var trackerName = _ga.buildTrackerName_(opt_trackerName);
    try {
        if (VK && VK.Observer && VK.Observer.subscribe) {
            VK.Observer.subscribe('widgets.like.liked', function() {
                _gaq.push([trackerName + '_trackSocial', 'vkontakte', 'like',
                    opt_targetUrl, opt_pageUrl]);
            });
            VK.Observer.subscribe('widgets.like.unliked', function() {
                _gaq.push([trackerName + '_trackSocial', 'vkontakte', 'unlike',
                    opt_targetUrl, opt_pageUrl]);
            });
        }
    } catch (e) {}
};

_ga.extractParamFromUri_ = function(uri, paramName) {
	if (!uri) {
	return;
	}
	var uri = uri.split('#')[0];  // Remove anchor.
	var parts = uri.split('?');  // Check for query params.
	if (parts.length == 1) {
	return;
	}
	var query = decodeURI(parts[1]);

	// Find url param.
	paramName += '=';
	var params = query.split('&');
	for (var i = 0, param; param = params[i]; ++i) {
	if (param.indexOf(paramName) === 0) {
		return unescape(param.split('=')[1]);
	}
	}
	return;
};
//---------------------------------------

// <-- цветовая пробежка по кнопкам
function flain(){

for (var i = 1; i <= 4; i++) {
    (function(index) {
        setTimeout(function() {
			document.getElementById("m"+index).style.background = '#b17c7c';
			document.getElementById("m"+index).style.color = '#3e3939';
		}, i * 100);
    })(i);
}

setTimeout(function(){
for (var i = 1; i <= 4; i++) {
    (function(index) {
        setTimeout(function() {
			document.getElementById("m"+index).style.background = '';
			document.getElementById("m"+index).style.color = '';
		}, i * 100);
    })(i);
}},50)

for (var i = 1; i < 17; i++) {
    (function(index) {
        setTimeout(function() {
			document.getElementById("a"+index).style.background = '#b17c7c';
			document.getElementById("a"+index).style.color = '#3e3939';
		}, (i * 50)+350);
    })(i);
}

setTimeout(function(){
for (var i = 1; i < 17; i++) {
    (function(index) {
        setTimeout(function() {
			document.getElementById("a"+index).style.background = '';
			document.getElementById("a"+index).style.color = '';
			}, (i * 50)+350);
    })(i);
}},50)


}


// ---------------ambulance trigger initiation

var css_code ='.hh1{border-radius:50%;width:130px}.strip{height:48px}';
css_code +='.hh1::before{height:50px;transform:translate(5%,-50%);width:90%;}';
css_code +='.hh1 strong{color:transparent;text-shadow:1px 1px 2px transparent}';
css_code +='.hh1::after{width:50px;transform:translate(-50%,5%); height:90%;}';
css_code +='.two-2 .line_1_2{font-size:1.2em;word-spacing:-0.3em}';
css_code +='.two-2 .line_3_4{font-size:0.75em;word-spacing:initial}';
css_code +='.two-2 .line_1_2,.two-2 .line_3_4{visibility:visible;margin-top:0}';
css_code += '.one-1 .line_1_2,.one-1 .line_3_4{color:transparent;text-shadow:1px 1px 2px transparent}';
css_code += '@media(min-width:320px){.hh1{width:150px}.hh1::before{height:60px}.hh1::after{width:60px}.two-2 .line_1_2{font-size:1.6em}.two-2 .line_3_4{font-size:0.85em}.strip{height:55px}}';
css_code += '@media(min-width:425px){.hh1{width:175px}.hh1::before{height:70px}.hh1::after{width:70px}.two-2 .line_1_2{font-size:2em}.two-2 .line_3_4{font-size:1em}.strip{height:62px}}';
css_code += '@media(min-width:768px){.hh1{min-width:initial}}'

var hover_chk=true;
var amb=document.getElementById('ambulance-trigger');
function ambulance_on(){setTimeout(function(){amb.innerHTML=css_code;hover_chk=!hover_chk;ambulance_off()},1200)}
function ambulance_off(){setTimeout(function(){amb.innerHTML='';hover_chk=!hover_chk;},10000)}

//ambulance_on(); // start ambulance trigger // put ambulance_on() after hover_chk; in ambulance_off //function
//-------массив картинок с таблицами

var tabl=[,['tablica-glagolov-petrova-image.gif','tablica-glagolov-petrova-image-black.gif','red-tablica-glagolov-petrova-image.gif','table-base.gif'],,['tablica-glagola-to-be-petrova-image.gif','black-tablica-glagola-to-be-petrova-image.gif','green-tablica-glagola-to-be-petrova-image.gif','table-be.gif'],['tablica-glagola-to-be-ing-image.gif','tablica-glagola-to-be-ing-image-black.gif','tablica-glagola-to-be-ing-image-green.gif','table-be.gif'],,,['short-tablica-glagolov-petrova-image.gif','black-short-tablica-glagolov-petrova-image.gif','red-short-tablica-glagolov-petrova-image.gif','table-base-small-3.gif']];

var tab_index=0;

function change_table(table){
		if(tab_index!=table){
			tab_index=table;
			if (urok_num<5||urok_num==7){
				var c=urok_num;
				var b='';
				if (urok_num==2){c=1}
				switch (table){
					case 0: b=tabl[c][0];break;
					case 1: b=tabl[c][1];break;
					case 2: b=tabl[c][2];break;
					case 3: b=tabl[c][3];break;
				}
				document.getElementById('t').src='img/'+b;//'<img src="img/'+b+'"  />';
				document.getElementById('c').innerHTML=tabl_com[table];
			}
		}
	}


//---------------начало скроллинга

	var to_top=document.getElementById('stt'),
		to_bottom=document.getElementById('m4'),
		don_btn=document.getElementById('dbt'),
		stop_scroll=0,
		curentScrollTop,
		position=document.documentElement.scrollTop || document.body.scrollTop;

		document.getElementById("m4").href="javascript:void(0)"

		to_top.innerHTML='';
		to_top.className="scroll-to-top fixed-hidden";
		don_btn.className="donateButton fixed-hidden2";

		window.addEventListener("scroll",function(){
			curentScrollTop=document.documentElement.scrollTop || document.body.scrollTop
		},false);

		to_top.addEventListener("click",function(e){
			e.stopPropagation();
			(function scrollAnimate(){
				if (curentScrollTop>0 && !stop_scroll) {
					//scrollTo(0);
					setTimeout(function(){
						window.scrollBy(0,(-Math.abs(curentScrollTop)/20));
						scrollAnimate();
					},10);
				}
			})()
		},false);

		to_top.addEventListener("dblclick",function(e){
			document.body.scrollTop=0;
			document.documentElement.scrollTop=0;
		},false);

		to_bottom.addEventListener("click",function(e){
			e.stopPropagation();
			var i = document.getElementById('top_doc').offsetHeight + document.getElementById('non-header').offsetHeight
			console.log(i)
			scrollTo(i)
		},false);

		// stop animation on wheel scroll down
		window.addEventListener("wheel", function(e) {
			if (e.deltaY > 0) {
				stop_scroll=1;
				setTimeout(function(){stop_scroll=0},200)
			}
		},false);

function scrollTo(e){var h=document.documentElement;if(h.scrollTop===0){var t=h.scrollTop;++h.scrollTop;h=t+1===h.scrollTop--?h:document.body;}scrollToX(h,h.scrollTop,e,0)}function scrollToX(e,a,b,t){if(t<0||t>1)return;k=t-1;e.scrollTop=a-(a-b)*(k*k*k+1);t+=0.001*20;setTimeout(function(){scrollToX(e,a,b,t)},20)}

var JD = {};

JD.debounce = function( wait, func, immediate) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if ( !immediate ) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait || 200);
		if ( callNow ) { 
			func.apply(context, args);
		}
	};
};

JD.lastName=function(){

	if(curentScrollTop>1200){
		to_top.className="scroll-to-top rotate";
	}else{
		to_top.className="scroll-to-top fixed-hidden";
	}

	var scrollHeight=document.documentElement.scrollHeight || document.body.scrollHeight;

	if ((curentScrollTop+window.innerHeight+300)>=scrollHeight){
		don_btn.className="donateButton left50";
	}else{
		don_btn.className="donateButton fixed-hidden2";
	}

	if(curentScrollTop>position){
		stop_scroll=1;
		setTimeout(function(){stop_scroll=0},200)
	}
	position=curentScrollTop;

}


	window.addEventListener("scroll",JD.debounce(250,JD.lastName));
