//VARIAVEIS
const { app, BrowserWindow, Menu, ipcMain, globalShortcut, Tray } = require('electron');
const fs = require('fs')
const ytdl = require('ytdl-core');
const ytpl = require('ytpl');
const delay = require('delay');

let musicInfo = []
let musicInfoLeng = 0
let url;
let index = -1
let temp = []

//CRIA A TELA
let mainWindow = null;
async function createWindow() {
	mainWindow = new BrowserWindow({
		width: 880,
		height: 540,
		minWidth: 880,
		minHeight: 560,
		maxWidth: 880,
		maxHeight: 560,
		webPreferences:{
			nodeIntegration:true
		}
	});

	//REMOVE MENU PADRÃO DO ELECTRON
	await mainWindow.removeMenu()
	//CARREGA O "FRONT-END"
	await mainWindow.loadFile('src/pages/player/index.html')

	//MENU DO ICONE NA BANDEJA
	const trayMenu = Menu.buildFromTemplate([
	    { label: 'Mostrar', type: 'normal',click: () => {MostrarOuEsconder()} },
	    { label: 'Fechar', type: 'normal', click: () => {close()} }
	  ])

	//ICONE NA BANDEJA E MINIMIZAR TELA PARA A BANDEJA
	let tray;
	mainWindow.on("minimize", (evt) => {
		tray = new Tray("./src/icon/icon.png");
		tray.setContextMenu(trayMenu)

		evt.preventDefault();
		MostrarOuEsconder()
	});
	function MostrarOuEsconder() {
		bole = mainWindow.isVisible()
		if(bole == true){
			mainWindow.hide();
		}else{
			mainWindow.show();
			tray.destroy()
		}
	}

	//FECHA A APLICAÇÃO
	function close() {
		mainWindow.close()
	}
}

//ADICIONA OS ATALHOS
function buttonsAdd() {
	globalShortcut.register('CommandOrControl+Space', () => {
		mainWindow.webContents.send('playPause')
	})
	globalShortcut.register('CommandOrControl+Up', () => {
		mainWindow.webContents.send('Vol','max')
	})
	globalShortcut.register('MediaPlayPause', () => {
		mainWindow.webContents.send('playPause')
	})
	globalShortcut.register('CommandOrControl+Down', () => {
		mainWindow.webContents.send('Vol','mute')
	})
	globalShortcut.register('CommandOrControl+Left', () => {
		mainWindow.webContents.send('proxMusic','ant')
	})
	globalShortcut.register('CommandOrControl+Right', () => {
		mainWindow.webContents.send('proxMusic','')
	})
	globalShortcut.register('MediaNextTrack', () => {
		mainWindow.webContents.send('proxMusic','')
	})
	globalShortcut.register('MediaPreviousTrack', () => {
		mainWindow.webContents.send('proxMusic','ant')
	})
	globalShortcut.register('VolumeUp', () => {
		mainWindow.webContents.send('Vol','up')
	})
	globalShortcut.register('VolumeDown', () => {
		mainWindow.webContents.send('Vol','down')
	})
}

//ADICIONA A TELA E OS ATALHOS
app.on('ready', () => {
	createWindow()
	buttonsAdd()
})

//RECEBEM INFORMAÇÕES DO "FRONT-END"
//RECEBE O LINK DA PLAYLIST E PEGA AS INFORMAÇÕES DA PLAYLIST
ipcMain.on('playlistAdd',async function(event,data){
	await youtubeLinks(`${data}`,false)
})

//RODA AS FUNÇÕES NECESSARIAS PARA PASSAR A MUSICA
ipcMain.on('proxMusic',async function(event,data){
	if(musicInfoLeng != 0){
		mainWindow.webContents.send('loader',true)
		if(typeof data == 'object'){
			await indexAu(parseInt(data[0]))
			data.splice(0,1)
			mainWindow.webContents.send('updateFila',data)
			await audioUrl(musicInfo[index].id)
		}else{
			await indexAu(data)
			await audioUrl(musicInfo[index].id)
		}
	}
})

//RECEBE UM LINK DE UMA MUSICA E ADICIONA A LISTA DE REPRODUÇÃO
ipcMain.on('addUrl',async function(event,data){
	addUrlLinks(data)
})

//RESETA A LISTA DE REPRODUÇÃO
ipcMain.on('reset',async function(event){
	musicInfo = []
})

//RODA A FUNÇÃO DE SALVAR A PLAYLIST LOCALMENTE
ipcMain.on('save',async function(event,data){
	save(data)
})

//RODA A FUNÇÃO DECARREGAR PLAYLISTS SALVAS
ipcMain.on('load',async function(event,data){
	load()
})

//RODA A FUNÇÃO QUE ATUALIZA A LISTA  DE REPRODUÇÃO COM A PLALIST ESCOLHIDA PELO USUARIO
ipcMain.on('loadPlaylist',async function(event,data){
	loadPlaylist(data)
})

//RODA FUNÇÃO DE REMOVER MUSICA DA LISTA DE REPRODUÇÃO
ipcMain.on('removeMusic',async function(event,data){
	removeMusic(data)
})

//RODA A FUNÇÃO DE DELETAR UMA PLAYLIST SALVA
ipcMain.on('deletePlaylist',async function(event,data){
	deletePlaylist(data)
})

//RODA A FUNÇÃO QUE ATUALIZA UMA PLAYLIST SALVA CONFORME O LINK DO YOUTUBE DELA
ipcMain.on('refreshPlaylist',async function(event,data) {
	refreshPlaylist(data)
})

//RODA A FUNÇÃO QUE SOBREESCREVE PLAYLIST SALVA
ipcMain.on('sobesc',async function(event,data) {
	sobesc(data)
})

//RODA A FUNÇÃO QUE PEGA O NOME DAS PLAYLISTS SALVAS E MANDA PRO "FRONT-END" PARA O USUARIO SELECIONAR QUAL VAI SOBRESECREVER
ipcMain.on('sobescItens',async function(event) {
	sobescItens()
})

//RODA A FUNÇÃO QUE RETORNA PRO "FRONT-END" AS MUSICAS QUE ESTÃO NA FILA
ipcMain.on('filaRender',async function(event,data) {
	filaRender(data)
})

//PEGA AS INFORMAÇÕES DA PLAYLIST E MANDA PRO "FRONT-END" E INICIA A PRIMEIRA MUSICA DA PLAYLIST
async function youtubeLinks(a,b) {
	if(a){
		await playlistUrl(a)
		index = -1
	}

	await indexAu(b)
	await audioUrl(musicInfo[index].id)
}

//PEGA AS MUSICAS DA PLAYLIST E SALVA NUMA VARIAVEL
async function playlistUrl(url,bole) {
	musicInfo = []

	a = await ytpl.getPlaylistID(url)
	b = await ytpl(a,{limit:Infinity})

	for(key in b.items){
		musicInfo.push({title: `${b.items[key].title}`,autor: `${b.items[key].author.name}`,duration: `${b.items[key].duration}`,thumB: `${b.items[key].bestThumbnail.url}`,id: `${b.items[key].id}`})
	}

	musicInfoLeng = await musicInfo.length
	if(!bole){
		await mainWindow.webContents.send('playlist',musicInfo)
	}

}

//FUNÇÃO QUE MANIPULA QUAL MUSICA IRA TOCAR
async function indexAu(a) {
	switch(a){
		case 'repeat':
			index = index
			temp = []
		break;
		case 'ant':
			index = (index)-1
			temp = []
		break;
		case 'antAle':
			index = temp[temp.length - 2]
		break;
		case true:
			if(musicInfoLeng == temp.length){
				temp = []
			}
			aleatory()
		break;
		case false:
			index = index+1
			temp = []
		break;
		default:
			index = a
			temp.push(a)
		break;
	}

	if(index > musicInfoLeng-1){
		index = 0
	}else if(index < 0){
		index = musicInfoLeng-1
	}

	function aleatory() {
		i = 0
		while(i<1){
			a = Math.trunc((Math.random() * (musicInfoLeng - 1) + 1))
			a = a-1

			if(musicInfoLeng-1 == temp.length){
				max = temp.reduce(function(a, b) {
				  return Math.max(a, b);
				});
				index = max+1
				temp.push(max+1)
				break
			}else if(temp.indexOf(a) === -1){
				temp.push(a)
				index = a
				break
			}
		}
	}
}

//FUNÇÃO QUE PEGA O LINK DA MUSICA
async function audioUrl(url){
	a = await ytdl.getInfo(url)
	b = a.formats
	c = []

	for(key in b){
		if(b[key].mimeType == 'audio/webm; codecs="opus"'){
			c.push(b[key])
		}
	}

	c = c[0].url

	url = [c,musicInfo[index]]
	await mainWindow.webContents.send('update',url)
}

//FUNÇÃO QUE ADICIONA UMA MUSICA A LISTA DE REPRODUÇÃO
async function addUrlLinks(url) {
	a = await ytdl.getInfo(url)
	b = (a.formats.length)-1

	let bB
	cC = a.videoDetails.thumbnails[3].url

	for(key in a.formats){
		if(a.formats[key].mimeType == 'audio/webm; codecs="opus"'){
			bB = (a.formats[key].approxDurationMs)
		}
	}

	d = {title: `${a.videoDetails.title}`,autor: `${a.videoDetails.author.name}`,duration: `${timeString(parseInt(bB))}`,thumB: cC,id: `${url.split('=')[1]}`}
	
	musicInfo.push(d)
	musicInfoLeng = musicInfo.length
	mainWindow.webContents.send('addOnPlaylist',d)
}

//FUNÇÃO QUE SALVA PLAYLIST LOCALMENTE
async function save(name,bB) {
	if(bB == 'reload'){
		a = {info:{name:name[1],length:musicInfoLeng,imgThumb:musicInfo[0].thumB,url:name[0]},content:musicInfo}
		a = JSON.stringify(a)
		fs.writeFile(`src/json/${('000000'+name[2]).slice(-6)}.json`, `${a}`,function(erro) {
		    if(erro) {
		        throw erro;
		    }
		})
	}else if(typeof name == 'object'){
		await fs.readdir('./src/json',function(err, files) {
			a = {info:{name:name[0],length:musicInfoLeng,imgThumb:musicInfo[0].thumB,url:name[1]},content:musicInfo}
			a = JSON.stringify(a)
			b = files.length
			fs.writeFile(`src/json/${('000000'+b).slice(-6)}.json`, `${a}`,function(erro) {
			    if(erro) {
			        throw erro;
			    }
			});
		})
	}else{
		await fs.readdir('./src/json',function(err, files) {
			a = {info:{name:name,length:musicInfoLeng,imgThumb:musicInfo[0].thumB},content:musicInfo}
			a = JSON.stringify(a)
			b = files.length
			fs.writeFile(`src/json/${('000000'+b).slice(-6)}.json`, `${a}`,function(erro) {
			    if(erro) {
			        throw erro;
			    }
			});
		})
	}
}

//FUNÇÃO QUE SOBRESCREVE UMA PLAYLIST SALVA LOCALMENTE
function sobesc(arr) {
	if(arr[1]){
		a = {info:{name:arr[2],length:musicInfoLeng,imgThumb:musicInfo[0].thumB,url:arr[1]},content:musicInfo}
	}else{
		a = {info:{name:arr[2],length:musicInfoLeng,imgThumb:musicInfo[0].thumB},content:musicInfo}
	}
	a = JSON.stringify(a)

	fs.writeFile(`src/json/${('000000'+arr[0]).slice(-6)}.json`, `${a}`,function(erro) {
	    if(erro) {
	        throw erro;
	    }
	})
}

//FUNÇÃO QUE MANDA OS NOMES DAS PLAYLISTS PARA O "FRONT-END" PARA SOBRESCREVER
async function sobescItens() {
	await fs.readdir('./src/json',async function(err, files) {
		for(i=0;i<files.length;i++){
			await delay(100)
			await fs.readFile(`./src/json/${files[i]}`, 'utf-8',(err, data) => {
			  if (err) throw err;
			  data = JSON.parse(data)
			  data = [data.info.name,(i-1)]
			  mainWindow.webContents.send('sobescItens',data)
			});
		}
	})
}

//CAREEGA AS PLAYLISTS SALVAS LOCALMENTE
async function load() {
	await fs.readdir('./src/json',async function(err, files) {
		for(i=0;i<files.length;i++){
			await delay(100)
			await fs.readFile(`./src/json/${files[i]}`, 'utf-8',(err, data) => {
			  if (err) throw err;
			  mainWindow.webContents.send('load',JSON.parse(data))
			});
		}
	})
}

//CARREGA A PLAYLIST SELECIONADA PELO USUARIO
async function loadPlaylist(a) {
	musicInfo = a
	musicInfoLeng = musicInfo.length
	index = 0

	mainWindow.webContents.send('playlist',musicInfo)
	audioUrl(musicInfo[index].id)

}

//REMOVE MUSICA DA LISTA DE REPRODUÇÃO
function removeMusic(a) {
	musicInfo.splice(a, 1)
	musicInfoLeng = musicInfo.length

	mainWindow.webContents.send('playlist',musicInfo)
}

//APAGA PLAYLIST SALVA LOCALMENTE
async function deletePlaylist(a) {
	await fs.unlink(`./src/json/${('000000'+a).slice(-6)}.json`, function (err){
	    if (err) throw err;
	})

	setTimeout(function(){ rename() },1000)
	
	function rename() {
		fs.readdir('./src/json',function(err, files) {
			for(key in files){
				fs.rename(`./src/json/${files[key]}`, `./src/json/${('000000'+key).slice(-6)}.json`, function(err){
				    if (err) throw err;
				})
			}
		})
	}
}

//RECARREGA PLAYLIST CONFORME O LINK DO YOUTUBE
async function refreshPlaylist(a) {
	tempo = [musicInfo,musicInfoLeng]
	mainWindow.webContents.send('loader',true)
	await playlistUrl(a[0],true)
	await save(a,'reload')
	mainWindow.webContents.send('loader',false)
	musicInfo = tempo[0]
	musicInfoLeng = tempo[1]
}

//FUNÇÃO QUE RETORNA PRO "FRONT-END" AS MUSICAS QUE ESTÃO NA FILA
function filaRender(arr) {
	tempo = []
	tempo1 = []
	for(key in arr){
		tempo.push(musicInfo[arr[key]])
		tempo1.push(arr[key])
	}
	mainWindow.webContents.send('filaRenderSend',[tempo,tempo1])
}

//FUNÇÃO QUE FORMATA UM TEMPO EM MS EM MINUTOS E SEGUNDOS DESSE JEITO '00:00'
function timeString(time) {
	c = time % 1000
	time = (time - c) / 1000
	a = Math.floor(time/60)
	b = Math.floor(time%60)

	return `${('0'+a).slice(-2)}:${('0'+b).slice(-2)}`
}