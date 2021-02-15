//VARIAVEIS
const { ipcRenderer, clipboard } = require('electron')

const seekbar = document.querySelector('#seekbar')
const pCurrentTime = document.querySelector('#inicio')
const pFinalTime = document.querySelector('#fim')
const audio = document.getElementsByTagName('audio')[0]
const thumbHtml = document.querySelector('#info img')
const titleHtml = document.querySelector('#info h3')
const autorHtml = document.querySelector('#info h4')
const playlistHtml = document.querySelector('#playlist ul')

const aleatory = document.querySelector('.aleatory .true')
const repeat = document.querySelector('.repeat .true')

let fila = []

//FUNÇÕES PARA QUANDO A TELA INICIAR
window.onload = function() {
	audio.volume=0.5
};

//FUNÇÃO DE CONTROLE DE VOLUME
function setTimeAudio(){
	audio.currentTime=`${seekbar.value}`

	pCurrentTime.textContent = `${timeString(audio.currentTime)}`
}

function setVolumAudio(volum) {
	if(volum == '100'){
		a='1'
	}else{
		b = '0'+volum
		b = b.slice(-2)
		a = '0.'+b
	}

	a = parseFloat(a)
	audio.volume=a

	setVolumImg(volum)
}

function seekbarVolumeUpdate(volum) {
	a=document.querySelector('#volum input')
	if(volum == 1){
		volum = 100
	}else{
		volum = `${volum}`
		volum = volum.split('.')[1]
		if(volum.length == 1){
			volum = (volum+'0').slice(-2)
		}else{
			volum = (volum).slice(-1)
		}
	}

	a.value=volum
	setVolumImg(volum)
}

function setVolumImg(volum) {
	a=document.querySelector('#volum img')

	if(volum == 0){
		a.setAttribute('src','src/svg/volume-Mute.svg')
	}else if(volum <= 10){
		a.setAttribute('src','src/svg/volume-Off.svg')
		a.setAttribute('style','right:41px !important;')
	}else if(volum <= 50){
		a.setAttribute('src','src/svg/volume-Down.svg')
	}else{
		a.setAttribute('src','src/svg/volume-Up.svg')
	}
}

//FUNÇÕES QUE CONTROLAM A BARRA DE REPRODUÇÃO
function seekBarUptade(){
	seekbar.value=`${audio.currentTime}`
	pCurrentTime.textContent = `${timeString(audio.currentTime)}`
}

function init() {
	seekbar.max=`${audio.duration}`
	pFinalTime.textContent=`${timeString(audio.duration)}`
}

//FUNÇÃO QUE LISTA AS MUSICAS NA DIV PLAYLIST
function updatePlaylist(array,bolen){
	if(bolen == true){
		playlistHtml.innerHTML=''

		for(key in array){
			a = document.createElement('li')
			b = document.createElement('img')

			index = document.createElement('p')
			nameT = document.createElement('p')
			time = document.createElement('p')
			playThumb = document.createElement('div')
			play = document.createElement('div')
			playImg = document.createElement('img')
			funcs = document.createElement('div')
			remove = document.createElement('img')
			addFila = document.createElement('img')

			playThumb.setAttribute('class','play-thumb')
			playThumb.setAttribute('onClick',`proxMusicIndex(${key})`)
			playThumb.setAttribute('onmouseover',`a=document.querySelectorAll('.play-thumb .play')[${key}];b=document.querySelectorAll('.thumb')[${key}];a.setAttribute('style','display:block;');b.setAttribute('style','opacity:0.6;')`)
			playThumb.setAttribute('onmouseout', `a=document.querySelectorAll('.play-thumb .play')[${key}];b=document.querySelectorAll('.thumb')[${key}];a.setAttribute('style','display:none;');b.setAttribute('style','opacity:1;')`)

			play.setAttribute('class','play')
			play.setAttribute('style','display:none;')

			playImg.setAttribute('src','src/svg/play-thumb.svg')
			playImg.setAttribute('class','svg-play')
			play.appendChild(playImg)

			b.setAttribute('src',`${array[key].thumB}`)
			b.setAttribute('class','thumb')
			playThumb.appendChild(b)

			time.setAttribute('class','time')
			time.textContent=`${array[key].duration}`
			playThumb.appendChild(time)

			playThumb.appendChild(play)

			index.setAttribute('class','index')
			index.textContent=`${parseInt(key)+1}`
			a.appendChild(index)

			a.appendChild(playThumb)

			nameT.setAttribute('class','name')
			nameT.textContent=`${array[key].title}`
			a.appendChild(nameT)

			funcs.setAttribute('style','width:28px;position: relative;top: 3px;')
			remove.setAttribute('src','src/svg/removeMusic.svg')
			remove.setAttribute('class','removeMusic')
			remove.setAttribute('onClick', `removeMusic(${key})`)
			addFila.setAttribute('src','src/svg/AddFila.svg')
			addFila.setAttribute('class','addFila')
			addFila.setAttribute('onClick',	`addFilaFunc(${key})`)
			funcs.appendChild(remove)
			funcs.appendChild(addFila)

			a.appendChild(funcs)

			playlistHtml.appendChild(a)

			loader(false)
		}
	}else{
		a = document.createElement('li')
		b = document.createElement('img')
		c = document.querySelectorAll('#playlist ul li .index')

		if(c.length == 0){
			c = 0
		}else{
			c = c.length
		}

		index = document.createElement('p')
		nameT = document.createElement('p')
		time = document.createElement('p')
		playThumb = document.createElement('div')
		play = document.createElement('div')
		playImg = document.createElement('img')
		funcs = document.createElement('div')
		remove = document.createElement('img')
		addFila = document.createElement('img')

		playThumb.setAttribute('class','play-thumb')
		playThumb.setAttribute('onClick',`proxMusicIndex(${c})`)
		playThumb.setAttribute('onmouseover',`a=document.querySelectorAll('.play-thumb .play')[${c}];b=document.querySelectorAll('.thumb')[${c}];a.setAttribute('style','display:block;');b.setAttribute('style','opacity:0.6;')`)
		playThumb.setAttribute('onmouseout', `a=document.querySelectorAll('.play-thumb .play')[${c}];b=document.querySelectorAll('.thumb')[${c}];a.setAttribute('style','display:none;');b.setAttribute('style','opacity:1;')`)

		play.setAttribute('class','play')
		play.setAttribute('style','display:none;')

		playImg.setAttribute('src','src/svg/play-thumb.svg')
		playImg.setAttribute('class','svg-play')
		play.appendChild(playImg)

		b.setAttribute('src',`${array.thumB}`)
		b.setAttribute('class','thumb')
		playThumb.appendChild(b)

		time.setAttribute('class','time')
		time.textContent=`${array.duration}`
		playThumb.appendChild(time)

		playThumb.appendChild(play)

		index.setAttribute('class','index')
		index.textContent=`${parseInt(c)+1}`
		a.appendChild(index)

		a.appendChild(playThumb)

		nameT.setAttribute('class','name')
		nameT.textContent=`${array.title}`
		a.appendChild(nameT)

		funcs.setAttribute('style','width:28px;position: relative;top: 3px;')
		remove.setAttribute('src','src/svg/removeMusic.svg')
		remove.setAttribute('class','removeMusic')
		remove.setAttribute('onClick', `removeMusic(${c})`)
		addFila.setAttribute('src','src/svg/AddFila.svg')
		addFila.setAttribute('class','addFila')
		addFila.setAttribute('onClick',	`addFilaFunc(${c})`)
		funcs.appendChild(remove)
		funcs.appendChild(addFila)

		a.appendChild(funcs)

		playlistHtml.appendChild(a)

		loader(false);
	}
}

//FUNÇÃO QUE ADICIONA NOVA PLAYLIST PELA URL
function addPlaylist(){
	a = document.querySelector('#inputPlayli input')
	ipcRenderer.send('playlistAdd',a.value)
}

//FUNÇÃO DE PLAY E PAUSE DA MUSICA
function playPauseMusic(pa) {
	if(audio.src){
		a=document.querySelector('.btns .play .pause');
		b=a.style.display;
		c=document.querySelector('.btns .play .svg-play');
		d=document.getElementsByTagName('audio')[0];
		if(pa == 'play'){
			a.setAttribute('style','display: block;');
			c.setAttribute('style','display: none');
			d.play()
		}else if(pa == 'pause'){
			a.setAttribute('style','display:none;');
			c.setAttribute('style','display:block');
			d.pause()
		}else if(b == 'block'){
			a.setAttribute('style','display:none;');
			c.setAttribute('style','display:block');
			d.pause()
		}else{
			a.setAttribute('style','display: block;');
			c.setAttribute('style','display: none');
			d.play()
		}
	}
}

//FUNÇÃO QUE PASSA PRA PROXIMA MUSICA
function proxMusic(a){
	playPauseMusic('pause')
	if(fila.length != 0){
		ipcRenderer.send('proxMusic',fila)
	}else if(repeat.style.display != 'none'){
		ipcRenderer.send('proxMusic','repeat')
	}else if(a == 'ant' & aleatory.style.display != 'none'){
		ipcRenderer.send('proxMusic','antAle')
	}else if(a == 'ant'){
		ipcRenderer.send('proxMusic','ant')
	}else if(aleatory.style.display != 'none'){
		ipcRenderer.send('proxMusic',true)
	}else{
		ipcRenderer.send('proxMusic',false)
	}
}

//FUNÇÃO QUE PASSA PRA UMA MUSICA ESPECIFICADA PELO USUARIO
function proxMusicIndex(a) {
	playPauseMusic('pause')
	loader(true)
	ipcRenderer.send('proxMusic',a)
}

//ADICIONA UMA MUSICA NA PLAYLIST DE REPRODUÇÃO
function addUrl(a) {
	ipcRenderer.send('addUrl',a)
}

//RESETA A LISTA DE REPRODUÇÃO MAS NÃO PARA DE TOCAR A MUSICA
function reset() {
	playlistHtml.innerHTML=''
	ipcRenderer.send('reset')
}

//FUNÇÃO QUE MANDA PRO "BACK-END" ALGUMAS INFORMAÇÕES PRA SALVAR A PLAYLIST
function save(a,b) {
	if(b){
		ipcRenderer.send('save',[a,b])
	}else{
		ipcRenderer.send('save',a)
	}
}

//FUNÇÃO QUE MANDA PRO "BACK-END" ALGUMAS INFORMAÇÕES PRA SOBRESCREVER ALGUMA PLAYLIST
function sobesc(a,b,c) {
	if(b !== ""){
		ipcRenderer.send('sobesc',[a,b,c])
	}else{
		ipcRenderer.send('sobesc',[a,'',c])
	}
}

//REQUISITA O NOME DAS PLAYLISTS SALVAS
function sobescItens() {
	ipcRenderer.send('sobescItens')
}

//REQUISITA O LOAD DAS PLAYLISTS SALVAS
function load() {
	ipcRenderer.send('load')
}

//FUNÇÃO QUE ATIVA E DESATIVA O LOADER
function loader(ar) {
	a=document.querySelector('#info img');
	b=document.querySelector('.loader');
	if(ar == true){
		a.setAttribute('style','opacity:0.4;');
		b.setAttribute('style','display:block;')
	}else if(ar == false){
		a.setAttribute('style','opacity:1;');
		b.setAttribute('style','display:none;')
	}
}

//FUNÇÃO QUE FORMATA UM TEMPO EM SEGUNDOS EM MINUTOS E SEGUNDOS DESSE JEITO '00:00'
function timeString(time) {
	a = Math.floor(time/60)
	b = Math.floor(time%60)

	return `${('0'+a).slice(-2)}:${('0'+b).slice(-2)}`
}

//RECEBEM INFORMAÇÕES DO "BACK-END"
//ATUALIZA A MUSICA TOCADA NO MOMENTO TROCANDO O LINK E AS INFORMAÇÕES
ipcRenderer.on('update',async function(event,data){
	await audio.setAttribute('src', data[0])
	await thumbHtml.setAttribute('src',data[1].thumB)
	titleHtml.textContent= await data[1].title
	autorHtml.textContent= await data[1].autor
	loader(false)
	seekbar.value='0'
	playPauseMusic('play')
})

//RECEBE A PLAYLIST E MANDA PRA FUNÇÃO QUE RENDERIZA
ipcRenderer.on('playlist',async function(event,data){
	updatePlaylist(data,true)
})

//RECEBE A PLAYLIST QUANDO UMA MUSICA E ADICIONADA
ipcRenderer.on('addOnPlaylist',async function(event,data){
	updatePlaylist(data,false)
})

//RECEBE AS INFORMAÇÕES DO LOAD DAS PLAYLISTS SALVAS
ipcRenderer.on('load',async function(event,data){
	loadPlaylist(data)
})

//ATUALIZA A FILA
ipcRenderer.on('updateFila',async function(event,data){
	fila = data
})

//FUNÇÃO QUE FAZ O "BACK-END" ATIVAR E DESATIVAR O LOADER
ipcRenderer.on('loader',async function(event,data){
	loader(data)
})

//RECEBE OS NOMES DAS PLAYLIST SALVAS PARA O USUARIO SELECIONAR QUAL VAI SOBRESECREVER
ipcRenderer.on('sobescItens',async function(event,data){
	sobescItensRender(data)
})

//FUNÇÕES DOS ATALHOS
//PASSA A MUSICA
ipcRenderer.on('proxMusic',async function(event,data){
	proxMusic(data)
})

//PAUSA E DA PLAY NA MUSICA
ipcRenderer.on('playPause',async function(event,data){
	playPauseMusic()
})

//MUDA O VOLUME DA MUSICA
ipcRenderer.on('Vol',async function(event,data){
	a = document.querySelector('#volum input')
	b = 0
	switch(data){
		case 'max':
			b=100
		break;
		case 'mute':
			b=0
		break;
		case 'up':
			b=parseInt(a.value)+2
			if(b > 100){
				b = 100
			}
		break;
		case 'down':
			b=(a.value)-2
			if(b < 0){
				b = 0
			}
		break;
	}
	a.value=b
	
	setVolumAudio(b)
})

//RECEBE DO "BACK-END" AS INFORMAÇÕES DAS MUSICAS QUE ESTÃO NA FILA
ipcRenderer.on('filaRenderSend',async function(event,data){
	filaRenderFunc(data)
})

//FUNÇÃO QUE RECEBE AS PLAYLISTS SALVAS E MOSTRA PARA O USUARIO PRA ELE ESCOLHER
aA = []
let loadCounts = -1
let loadCountsReload = -1
function loadPlaylist(arr) {
	aA.push(arr.content)
	loadCounts++

	a = document.querySelector('.load .content div ul')
	b = document.createElement('li')

	thumb = document.createElement('img')
	namE = document.createElement('p')
	nums = document.createElement('p')
	button = document.createElement('button')
	remove = document.createElement('img')
	reload = document.createElement('img')

	thumb.setAttribute('src', arr.info.imgThumb)
	thumb.setAttribute('class', 'thumb')
	b.appendChild(thumb)

	namE.setAttribute('class','name')
	namE.textContent=`Nome: ${arr.info.name}`
	b.appendChild(namE)

	nums.setAttribute('class','nums')
	nums.textContent=`Numeros de musicas: ${arr.info.length}`
	b.appendChild(nums)

	button.textContent='Ok'
	button.setAttribute('onClick',`loadPlaylistSend(${loadCounts});a=document.querySelector(".load");a.setAttribute("style","display:none;");b=document.querySelector('.load .content .lists ul');b.innerHTML='';loadCounts=-1;aA=[];loadCountsReload=-1`)

	remove.setAttribute('src','src/svg/delete.svg')
	remove.setAttribute('class','remove')
	remove.setAttribute('onClick',`deletePlaylist(${loadCounts});a=document.querySelector('.load');a.setAttribute('style','display:none;');b=document.querySelector('.load .content .lists ul');b.innerHTML='';loadCounts=-1;aA=[];loadCountsReload=-1`)
	
	if(arr.info.url){
		loadCountsReload++
		reload.setAttribute('src','src/svg/Sync.svg')
		reload.setAttribute('class','reload')
		reload.setAttribute('onClick',`refreshPlaylist(['${arr.info.url}','${arr.info.name}','${loadCounts}']);a=document.querySelector('.load');a.setAttribute('style','display:none;');b=document.querySelector('.load .content .lists ul');b.innerHTML='';loadCounts=-1;aA=[];loadCountsReload=-1`)
		reload.setAttribute('onmouseover',`a=document.querySelectorAll(".load .content .lists ul li .reload")[${loadCountsReload}];a.setAttribute("style","border:1px solid #f3992b")`)
		reload.setAttribute('onmouseout',`a=document.querySelectorAll(".load .content .lists ul li .reload")[${loadCountsReload}];a.setAttribute("style","border:1px solid #fff")`)
		
		button.setAttribute('onmouseover',`a=document.querySelectorAll(".load .content .lists ul li button")[${loadCounts}];a.setAttribute("style","border:1px solid #f3992b")`)
		button.setAttribute('onmouseout',`a=document.querySelectorAll(".load .content .lists ul li button")[${loadCounts}];a.setAttribute("style","border:1px solid #fff")`)
		b.appendChild(button)

		remove.setAttribute('onmouseover',`a=document.querySelectorAll(".load .content .lists ul li .remove")[${loadCounts}];a.setAttribute("style","border:1px solid #f3992b")`)
		remove.setAttribute('onmouseout',`a=document.querySelectorAll(".load .content .lists ul li .remove")[${loadCounts}];a.setAttribute("style","border:1px solid #fff")`)
		b.appendChild(remove)
		
		b.appendChild(reload)
	}else{
		button.setAttribute('style','left: 350px !important;')
		button.setAttribute('onmouseover',`a=document.querySelectorAll(".load .content .lists ul li button")[${loadCounts}];a.setAttribute("style","border:1px solid #f3992b;left: 350px !important;")`)
		button.setAttribute('onmouseout',`a=document.querySelectorAll(".load .content .lists ul li button")[${loadCounts}];a.setAttribute("style","border:1px solid #fff;left: 350px !important;")`)
		
		remove.setAttribute('style','margin-left: 274px !important;')
		remove.setAttribute('onmouseover',`a=document.querySelectorAll(".load .content .lists ul li .remove")[${loadCounts}];a.setAttribute("style","border:1px solid #f3992b;margin-left: 274px !important;")`)
		remove.setAttribute('onmouseout',`a=document.querySelectorAll(".load .content .lists ul li .remove")[${loadCounts}];a.setAttribute("style","border:1px solid #fff;margin-left: 274px !important;")`)

		b.appendChild(button)
		b.appendChild(remove)
	}

	a.appendChild(b)
}

//MANDA PRO "BACK-END" A PLAYLIST ESCOLHIDA
function loadPlaylistSend(a) {
	ipcRenderer.send('loadPlaylist',aA[a])
	loader(true);
}

//ADICIONA OS NOMES DAS PLAYLISTS SALVAS NUM SELECTOR
function sobescItensRender(arr) {
	a=document.querySelector('#save .content .old .name')
	b = document.createElement('option')

	b.setAttribute('value',`${arr[1]}`)
	b.textContent=arr[0]

	a.appendChild(b)
}

//REMOVE MUSICA DA LISTA DE REPRODUÇÃO
function removeMusic(a) {
	loader(true)
	ipcRenderer.send('removeMusic',a)
}

//ADICIONA MUSCAS NA FILA DE REPRODUÇÃO
function addFilaFunc(a) {
	loader(true)
	fila.push(a)
	setTimeout(function(){ loader(false) },1000)
}

//EXCLUI UMA PLAYLIST SALVA
function deletePlaylist(a) {
	loader(true)
	ipcRenderer.send('deletePlaylist',a)
	setTimeout(function(){ loader(false) },2000)
}

//ATUALIZA UMA PLAYLIST PELO SEU LINK NO YOTUBE
function refreshPlaylist(a) {
	ipcRenderer.send('refreshPlaylist',a)
}

//RENDERIZA DENTRO DE UMA LISTA AS MUSICAS QUE ESTÃO NA LISTA
function filaRender() {
	ipcRenderer.send('filaRender',fila)
}
function filaRenderFunc(arr) {
	filaHtml = document.querySelector('#fila ul')

	array = arr[0]
	arrayIndex = arr[1]

	for(key in array){
		a = document.createElement('li')
		b = document.createElement('img')

		index = document.createElement('p')
		nameT = document.createElement('p')
		time = document.createElement('p')
		playThumb = document.createElement('div')
		play = document.createElement('div')
		playImg = document.createElement('img')
		funcs = document.createElement('div')
		remove = document.createElement('img')
		addFila = document.createElement('img')

		playThumb.setAttribute('class','play-thumb-fila')
		playThumb.setAttribute('onClick',`proxMusicIndex(${arrayIndex[key]});removeMusicFila(${key},true);a=document.querySelector('#fila');a.setAttribute('style','display:none;');b=document.querySelector('#fila ul');b.innerHTML=''`)
		playThumb.setAttribute('onmouseover',`a=document.querySelectorAll('.play-thumb-fila .play-fila')[${key}];b=document.querySelectorAll('.thumb-fila')[${key}];a.setAttribute('style','display:block;');b.setAttribute('style','opacity:0.6;')`)
		playThumb.setAttribute('onmouseout', `a=document.querySelectorAll('.play-thumb-fila .play-fila')[${key}];b=document.querySelectorAll('.thumb-fila')[${key}];a.setAttribute('style','display:none;');b.setAttribute('style','opacity:1;')`)

		play.setAttribute('class','play-fila')
		play.setAttribute('style','display:none;')

		playImg.setAttribute('src','src/svg/play-thumb.svg')
		playImg.setAttribute('class','svg-play-fila')
		play.appendChild(playImg)

		b.setAttribute('src',`${array[key].thumB}`)
		b.setAttribute('class','thumb-fila')
		playThumb.appendChild(b)

		time.setAttribute('class','time-fila')
		time.textContent=`${array[key].duration}`
		playThumb.appendChild(time)

		playThumb.appendChild(play)

		index.setAttribute('class','index-fila')
		index.textContent=`${parseInt(key)+1}`
		a.appendChild(index)

		a.appendChild(playThumb)

		nameT.setAttribute('class','name-fila')
		nameT.textContent=`${array[key].title}`
		a.appendChild(nameT)

		funcs.setAttribute('style','width:28px;position: relative;top: 3px;')
		remove.setAttribute('src','src/svg/removeMusic.svg')
		remove.setAttribute('class','removeMusic')
		remove.setAttribute('onClick', `removeMusicFila(${key});a=document.querySelector('#fila');a.setAttribute('style','display:none;');b=document.querySelector('#fila ul');b.innerHTML='';`)
		funcs.appendChild(remove)

		a.appendChild(funcs)

		filaHtml.appendChild(a)
	}
}

//FUNÇÃO QUE REMOVE MUSICA DA FILA
function removeMusicFila(a,b){
	if(b){
		fila.splice(a, 1)
	}else{
		loader(true)
		fila.splice(a, 1)
		setTimeout(function(){ loader(false) },2000)
	}
}