<html>
<body>
<script>

	
 var langru='ru',
	 langen='en',
	 urok=prompt("Please enter generator's number:",""),
	 DB,
	 messages_length,
	 verbAll,
	 trans=0,
	 dinamic,
	 phrase_audio,
	 translation_audio,
	 first='a',
	 verbAllCounter=0;
  var first="a";
  var second="c";
  var third="b";
  var sound=0;//dobro na udalenie
  var show=false;
	 

  var message_top="",message_bottom="";
  var message_middle="";
  var data_top='';
  var data_mid='';
  var data_bot='';
  var dinamic='';
  var transic='';
  var mesmid='';
  var mesmid2='';
  var glob_name='';
  var DB='';
  var random_number=0;
  var number_click=0;
  var messages_length=0;
  var aa=0;
  var bb=0;
  var currentVerb=0;
  var numberOfSelectedVerbs=0;
  var verbAllCounter=0;
  var bac=0;
  var can_orient=0;
  var can_orient_global=0;
  var verbAll=0;
  var tog_counter=0;
  var en="en";
  var ru="ru";
  var first="a";
  var second="c";
  var third="b";
  var c1="&nbsp;";
  var c2="&nbsp;";
  var c3="&nbsp;";
  var j=-1;
  var lengthVerbs;
  var AR=new Array;
  var arrIndexes=new Array;
  var arrIndexes2=new Array;
  var randNum=new Array;
  var urok_all_verb_sounds=new Array;
  var urok_all_verb_names=new Array;
  var floaded=new Array;
  var trans=1;
  var anons=1;
  var language_choice=1;			  
  var sound=1; 
  var sound_global=1;
  var phrase_audio=1;
  var translation_audio=1;
  var forw=1;
  var urok=1;
  var text_visibility=1;
  var buf_state=1;
  var e_space=1;
  var id_timer;
  var audio_name='fff.mp3';
  var phrase_name='nnn-mp3';
  var show=false;
  var contextClass=(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext);
  //var xhr;
  var xml=new Array;
  var all_uroks_sounds=new Array;// попытка запомнить все глаголы всех уроков
  var all_uroks_names=new Array;	 
	 
	 block(urok);//start
	 
function block(gen){
		var verbID=document.getElementById("verb");
		
		function updateProgress( p ) {
			progress2.style.width = Math.round( p ) + '%';
		};
		
		
		document.getElementById("verb_all").innerHTML = '';
		document.getElementById("verb_counter").innerHTML = '';
		document.getElementById("progress2").style.background = 'rgb(120,120,120)';
		
		switch (gen) {
			case 1: 
			{			  
				verbID.innerHTML ='<option value="0" selected="selected">love</option>'+
				'<option value="1">live</option>'+
				'<option value="2">work</option>'+
				'<option value="3">open</option>'+
				'<option value="4">close</option>'+
				'<option value="5">see</option>'+
				'<option value="6">come</option>'+
				'<option value="7">go</option>'+
				'<option value="8">know</option>'; 						
			}break;
			
			case 2: {
				verbID.innerHTML ='<option value="0"  selected="selected">questions</option>'+
				'<option value="1">ask</option>'+
				'<option value="2">travel</option>'+
				'<option value="3">hope</option>'+
				'<option value="4">help</option>'+
				'<option value="5">answer</option>'+
				'<option value="6">take</option>'+
				'<option value="7">speak</option>'+ 
				'<option value="8">give</option>';
			}break;
	   
			case 3:
			
			case 4: 
			
			case 5: 
			
			case 6: {
			   verbID.innerHTML ='<option value="0" selected="selected"></option>';
			   document.getElementById("verb_all").style.display='none';
				   
			}break;	
			
			case 7: {
			  verbID.innerHTML ='<option value="0" selected="selected">buy</option>'+
			  '<option value="1">sell</option>'+
			  '<option value="2">pay</option>'+
			  '<option value="3">make</option>'+
			  '<option value="4">choose</option>'+
			  '<option value="5">try</option>'+
			  '<option value="6">change</option>'+
			  '<option value="7">show</option>'+
			  '<option value="8">play</option>'+
			  '<option value="9">turn</option>'
			}break;
			
			case 8: {
			  verbID.innerHTML ='<option value="0" selected="selected">go</option>'+
			  '<option value="1">come</option>'+
			  '<option value="2">take</option>'+
			  '<option value="3">put</option>'+
			  '<option value="4">get</option>'+
			  '<option value="5">look</option>'+
			  '<option value="6">turn</option>'+
			  '<option value="7">walk</option>'+
			  '<option value="8">run</option>'+
			  '<option value="9">pull</option>'
			}break;
		}
		
		if (typeof xml[urok] == 'undefined') {
			DB = 'DB-'+gen+'.xml';
			xhr = loadFile( 0, DB, updateProgress, function(){start_urok()});		
		}
		else
		{
			start_urok();
		}
		
	}
	 
function start_urok() {
			if (typeof xml[urok] == 'undefined') {xml[urok] = xhr.responseXML;}
			messages_length = xml[urok].getElementsByTagName( 'm' )[currentVerb].getElementsByTagName( "d" ).length;
			click35();
			click4();
			document.getElementById("verb_all").innerHTML = messages_length;
			verbAll = messages_length;
			document.getElementById("verb_counter").innerHTML = verbAllCounter;
 
		
			if (sound) 
			{
				if (trans) {dinamic = '<span style="padding-left:1.5em;"><em>&nbsp;</em></span>';}
				document.getElementById("phrase_audio").innerHTML = '<a id="clickPhraseAudio'+phrase_audio+'" href="javascript: void(0)" onclick="click_phrase_audio();"></a><em>&nbsp;</em>';
				if (first=="a")
				{
					document.getElementById("midline").innerHTML = dinamic;  
					document.getElementById("translation_audio").innerHTML = '<a id="clickTranslationAudio'+translation_audio+'" href="javascript: void(0)" onclick="click_translation_audio();"></a><em>&nbsp;</em>';
				}
				else
				{
					document.getElementById("midline").innerHTML = '<a id="clickTranslationAudio'+translation_audio+'" href="javascript: void(0)" onclick="click_translation_audio();"></a><em>&nbsp;</em>';
					document.getElementById("translation_audio").innerHTML = dinamic;
				}
			}
			else
			{
				document.getElementById("conteiner").innerHTML = '&nbsp;';
				if (trans) 
				{
						document.getElementById("conteiner3").innerHTML = '&nbsp;';
						document.getElementById("conteiner2").innerHTML = '&nbsp;';
				}
				else
				{ 
					if (first=="b") 
					{
						document.getElementById("conteiner3").innerHTML = '&nbsp;';				
						document.getElementById("conteiner2").innerHTML = '';
					}
					else
					{
						document.getElementById("conteiner3").innerHTML = '';
						document.getElementById("conteiner2").innerHTML = '&nbsp;';
					}	
				 }
				
			 }
  
	}
	
function click1plus1() {
		
//		for (var iter=1;iter<=verbAll;iter++)
//		{
			bac=0;
			number_click++;	
			
			if (number_click == 1)   
			{	
			
				verbAllCounter++;
			
				if (verbAllCounter > verbAll )    	
				{
					verbAllCounter = 0;
				}
				
				 j++;
				
				if (j > numberOfSelectedVerbs-1)    	
				{
					j = 0;
				}
				
				if (bb==j) {forw=1};
				currentVerb = arrIndexes [j];
				aa=j;
				if (numberOfSelectedVerbs>1 & forw!=0){randNum [currentVerb]++};
				if (numberOfSelectedVerbs == 1){randNum [currentVerb]++};
				if (randNum [currentVerb] > AR[currentVerb].length-1)    	
				{
					randNum [currentVerb] = 0;
				} 	
			 random_number = AR[currentVerb][randNum [currentVerb]];
			}
			click1();
//		}

		
	}	
	
function click1() {

		if (number_click == 1) 
		{	
			document.getElementById("verb_counter").innerHTML = verbAllCounter;
			message_top = getElemText(xml[urok].getElementsByTagName( 'm' )[currentVerb].getElementsByTagName( first )[random_number]);
			message_middle = getElemText(xml[urok].getElementsByTagName( 'm' )[currentVerb].getElementsByTagName( second )[random_number]); 
			message_bottom = getElemText(xml[urok].getElementsByTagName( 'm' )[currentVerb].getElementsByTagName( third )[random_number]);
				
			if (first=="a")
			{
			  data_top = '<em>'+c1+'</em><span>'+message_top+'</span>';
			  data_mid = '<em>'+c2+'</em><span>'+message_middle+'</span>';
			  data_bot = '<em>'+c3+'</em><span></span>';
			  if (sound) {playWord3(message_top, currentVerb);}
			}
			
			document.getElementById("conteiner").innerHTML = data_top;

		}
		else
		{  
			if (first=="a")
			{
			  mesmid2 =  message_top+' ru';
			  data_bot = '<em>'+c3+'</em><span>'+ message_bottom +'</span>';
			  
			  if (sound) { playWord3(mesmid2, currentVerb, message_bottom); }
			}
			number_click = 0;
		} 
	    if (trans)
	    {
			if (first=="b")
			{
				if (number_click==1) 
				{
				  data_bot = '<em>'+c2+'</em><span></span>';
				}
				else
				{
				  data_bot = '<em>'+c2+'</em><span>'+ message_bottom +'</span>';
				} 
			}
			else	 
			{
				data_mid = '<em>'+c2+'</em><span>'+ message_middle +'</span>';
			}
		 }
		 else
		 {
			if (first=="a")		 
			{
				data_mid = '<span></span>';
			}
			else 
			{
				data_bot = '<span></span>';
			}
		 }
		 document.getElementById("conteiner3").innerHTML = data_mid;
		 document.getElementById("conteiner2").innerHTML = data_bot;
	}
	
function click35() {
		randNum [currentVerb] = 0;
		j = -1;
 		currentVerb = 0;
		numberOfSelectedVerbs = 0;		
		number_click = 0;
		verbAll = 0;

		lengthVerbs = document.formVerb.verb.options.length;
		arrIndexes = new Array;
		arrIndexes2 = new Array;
		for (var i=0; i < lengthVerbs; i++)
		{
			if (document.formVerb.verb.options[i].selected)
			  { 
				  arrIndexes.push(i);
				  numberOfSelectedVerbs++;
				  arrIndexes2[i]=1;
				  verbAll = verbAll + xml[urok].getElementsByTagName( 'm' )[i].getElementsByTagName( "d" ).length;
					  if (typeof urok_all_verb_names[i]=='undefined')
					  {
							preload_pap(i);
					  }
			  }
			else 
			  {
				  arrIndexes2[i]=0;
			  }
		}
	   document.getElementById("verb_all").innerHTML = verbAll;
	   document.getElementById("verb_counter").innerHTML = 0;
	   verbAllCounter = 0;
	}
	
function click4() {
		var CV;
		var ML;
		AR = new Array;
		randNum = new Array;
		
		for (var i=0; i <  lengthVerbs; i++)
		{

			if (arrIndexes2 [i] == 1)
			{
				 ML = xml[urok].getElementsByTagName( 'm' )[i].getElementsByTagName( "d" ).length; 
				 AR[i] = getRandomArray(0,ML-1);

			}
			else
			{
				AR[i] = [];
			}
			randNum [i] = -1;
		};
     }

function loadFile( papp, url, progressCallback, callback ) {
	   var arrbuf = false;
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
			xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
			
			xhr.onreadystatechange = function () {
				 try 
				 { 
					  if (xhr.readyState === 4)
					  {
						  var status = xhr.status;
						  if ((status >= 200)&&(status < 300) || status === 304)
						  {	
							   if (arrbuf) {floaded[papp] = true;
							   } else {show = true;}
							   callback(xhr.response);
							   delete xhr;
							   xhr = null; 
						   } 
						   else
						   {  
						   		if (arrbuf) {floaded[papp] = false;
								} else {show = false;}
						   }
					    }
				   }
				   catch( e ) {
					   //alert('ошибка: '+ e.description);
					   show = false;
				   }   
			  };
			  
			  xhr.onprogress = function(e) {
	  
				  if(e.lengthComputable) {
					  var done = e.position || e.loaded, total = e.totalSize || e.total;
					  progressCallback( done*100/total );
				  }
			  };
			  xhr.send();
		} 
		return xhr;
	}
	
function playWord3(soundf, pap, soundr) {

		var soundfile = trim (soundf);

		//token block
		var token;
		var cM = function(a) {
			return function() {
				return a
			}
		};
		var of = "=";
		var dM = function(a, b) {
			for (var c = 0; c < b.length - 2; c += 3) {
				var d = b.charAt(c + 2),
					d = d >= t ? d.charCodeAt(0) - 87 : Number(d),
					d = b.charAt(c + 1) == Tb ? a >>> d : a << d;
				a = b.charAt(c) == Tb ? a + d & 4294967295 : a ^ d
			}
			return a
		};
		
		var eM = null;
		var cb = 0;
		var k = "";
		var Vb = "+-a^+6";
		var Ub = "+-3^+b+-f";
		var t = "a";
		var Tb = "+";
		var dd = ".";
		var hoursBetween = Math.floor(Date.now() / 3600000);
		window.TKK = hoursBetween.toString();
		
		fM = function(a) {
			var b;
			if (null === eM) {
				var c = cM(String.fromCharCode(84)); // char 84 is T
				b = cM(String.fromCharCode(75)); // char 75 is K
				c = [c(), c()];
				c[1] = b();
				// So basically we're getting window.TKK
				eM = Number(window[c.join(b())]) || 0
			}
			b = eM;
		
			// This piece of code is used to convert d into the utf-8 encoding of a
			var d = cM(String.fromCharCode(116)),
				c = cM(String.fromCharCode(107)),
				d = [d(), d()];
			d[1] = c();
			for (var c = cb + d.join(k) +
					of, d = [], e = 0, f = 0; f < a.length; f++) {
				var g = a.charCodeAt(f);
		
				128 > g ? d[e++] = g : (2048 > g ? d[e++] = g >> 6 | 192 : (55296 == (g & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (g = 65536 + ((g & 1023) << 10) + (a.charCodeAt(++f) & 1023), d[e++] = g >> 18 | 240, d[e++] = g >> 12 & 63 | 128) : d[e++] = g >> 12 | 224, d[e++] = g >> 6 & 63 | 128), d[e++] = g & 63 | 128)
			}
		
		
			a = b || 0;
			for (e = 0; e < d.length; e++) a += d[e], a = dM(a, Vb);
			a = dM(a, Ub);
			0 > a && (a = (a & 2147483647) + 2147483648);
			a %= 1E6;
			return a.toString() + dd + (a ^ b)
		};
		//end token block
		
		var type_connection = '';
		
		if ((context)&&(urok_all_verb_names[pap])&&(urok_all_verb_sounds[pap]))
		{ 
		
		    var ss = urok_all_verb_names[pap].indexOf(soundfile);
			//document.getElementById("typeConnection").innerHTML = " «"+soundfile+"»   ";
			var ssource2 = urok_all_verb_sounds[pap][ss];
			var ssource = context.createBufferSource();
			ssource.connect(context.destination);
			if (ssource2) {
				
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
			}
			else
			{
				if (number_click == 1) {document.getElementById("log").innerHTML += "неозвученные фразы: «"+soundfile+"»   "+ss;
					}
			}
					
			type_connection = '#3C8C3E';
			 
		}
		else 
			
		{	 
			 if (floaded[pap])
			 {
				var soundfile_mp3 = soundfile + '.mp3';
			    var soundfile_ogg = soundfile + '.ogg';
				if (lengthVerbs==1)
				{		
					document.getElementById("dummy").innerHTML=
					'<audio id="my-audio">'+
					'<source src="audio/g-'+urok+'/'+soundfile_mp3+'" type="audio/mpeg" />'+
					'<source src="audio/g-'+urok+'/'+soundfile_ogg+'" type="audio/ogg" />'+
					'<embed hidden="true" autostart="true" loop="false" src="../audio/g-'+urok+'/'+soundfile_mp3+'" />'+
					'</audio>';
				}
				else
				{
					document.getElementById("dummy").innerHTML=
					'<audio id="my-audio">'+
					'<source src="audio/g-'+urok+'/'+pap+'/'+soundfile_mp3+'" type="audio/mpeg" />'+
					'<source src="audio/g-'+urok+'/'+pap+'/'+soundfile_ogg+'" type="audio/ogg" />'+
					'<embed hidden="true" autostart="true" loop="false" src="../audio/g-'+urok+'/'+pap+'/'+soundfile_mp3+'" />'+
					'</audio>';

				}
				var myAudio = document.getElementById('my-audio');
			 
				type_connection = '#CED228';
				myAudio.play();
			 }
			 else
			 {
				 
				if (soundr) {var lang = 'ru'; soundf = soundr} else {var lang = 'en'};
				token = fM(soundf);
				soundf=encodeURIComponent(soundf);
				
				var url1='http://english-polyglot.ru/mobile/ttsgateway.php?tl='+lang+'&q='+soundf+'&tk='+token;
				document.getElementById("dummy").innerHTML=
				'<audio id="my-audio">'+
				'<source src="'+url1+'" type="audio/mpeg" />'+
				'<embed hidden="true" autostart="true" loop="false" src="'+url1+'" />'+
				'</audio>';
				//alert(document.getElementById("dummy").innerHTML);
				var myAudio = document.getElementById('my-audio');
				myAudio.play();
				type_connection = '#CA332B';				
			 }		
			 
		};
		
		document.getElementById("progress2").style.background = type_connection;	
	
	}
	
function trim(s) {
		s=s.replace(/-/g,' ');
		s=s.replace(/[^\w\s]|_/g,"");
		s=s.replace(/(^\s*)|(\s*$)/gi,"");
		s=s.replace(/[ ]{2,}/gi," ");
		s=s.replace(/\n /,"\n");
		s=s.toLowerCase();
		s=s[0].toUpperCase()+s.slice(1);
		s=s.replace(/\s+/g,"-");
		return s;
	}
	
function getElemText(node) {
		return node.text || node.textContent || (function(node){
			
			var _result = "";
			if (node == null) {
				return _result;
			}
			var childrens = node.childNodes;
			var i = 0;
			while (i < childrens.length)
			{
				var child = childrens.item(i);
				switch (child.nodeType)
				{
					case 1: // ELEMENT_NODE
					case 5: // ENTITY_REFERENCE_NODE
						_result += getConcatenedTextContent(child);
						break;
					case 3: // TEXT_NODE
					case 2: // ATTRIBUTE_NODE
					case 4: // CDATA_SECTION_NODE
						_result += child.nodeValue;
						break;
					case 6: // ENTITY_NODE
					case 7: // PROCESSING_INSTRUCTION_NODE
					case 8: // COMMENT_NODE
					case 9: // DOCUMENT_NODE
					case 10: // DOCUMENT_TYPE_NODE
					case 11: // DOCUMENT_FRAGMENT_NODE
					case 12: // NOTATION_NODE
					// skip
					break;
 
				}
				i++;
			 }
			return _result;
		}(node));
	}
	
	 
</script>

<div> &nbsp;</div>
<div> &nbsp;</div>
<div> &nbsp;</div>
<div> &nbsp;</div>

<div id="topPage">
    
		<div class="info"><span class="infa" id="nameLesson"></span>&nbsp;<span class="infa">фраз: <span id="verb_all"></span></span>&nbsp;<span class="infa">фраза: <span id="verb_counter"></span></span></div>
    
		<div id="progress2"></div>
          
        <div id="message" class="message">
              <p><span id="phrase_audio"></span><span id="conteiner"></span></p>               
              <p><span id="midline"></span><span id="conteiner3"></span></p>
              <p><span id="translation_audio"></span><span id="conteiner2"></span></p>  
        </div>

	 


      
        <div id="selector">
                 <form name="formVerb" id="formVerb" >  
                      <select name="verb" id="verb" onChange="click35();click4()" multiple="multiple">
                        <option value="0" selected="selected">love</option>
                        <option value="1">live</option>
                        <option value="2">work</option>
                        <option value="3">open</option>
                        <option value="4">close</option>
                        <option value="5">see</option>
                        <option value="6">come</option>
                        <option value="7">go</option>
                        <option value="8">know</option>
                        </select>
                 </form>
        </div> 
        
        <div data-role="navbar" class="buttons">
               <ul>
                  <li><a id="backward" href="javascript: void(0)" data-icon="arrow-l" data-iconpos="notext" onClick="if(show){click1minus1();}"></a></li> <!--onClick vs vclick  - vclick jquery is -->
                  <li><a id="forward" href="javascript: void(0)" data-icon="arrow-r" data-iconpos="notext" onClick="if(show){click1plus1();}"></a></li>			
               </ul>
        </div>
        
  	</div>
</body>
</html>