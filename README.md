# PLAYEG

## Informações
Playeg é um player de áudio para vídeos do youtube, criado utilizando electronjs, para windows 64 bits e 32 bits. Ele serve para você escutar suas musicas, ou qualquer outro conteúdo, do youtube sem precisar estar com o navegador aberto e somente como áudio.

## Screen Shot

![](https://user-images.githubusercontent.com/54596991/108255175-ab3ee600-713a-11eb-8152-d89450cdb7b1.png)

## Instalação
Para utilização basta ir até a aba releses desse repositório baixar a última versão para seu sistema operacional descompactar o arquivo .zip e executar o arquivo Playeg.exe, e pronto sem precisar de configuração nem nada do tipo

![](https://user-images.githubusercontent.com/54596991/107912135-b4626400-6f3c-11eb-8f02-3e6b929b93f9.png)

Já para modificar o código basta fazer os seguintes comandos no seu terminal, OBS: veja mais abaixo os requisitos para modificar a aplicação
```
git clone https://github.com/Giragloss/PLAYEG.git
cd PLAYEG
npm i
```
Após a instalação dos módulos execute esse para ver se esta tudo rodando perfeitamente:
```
npm start
```
Se abrir então é só colocar a mão na massa e codar se não tente refazer, se ainda não funcionar faça uma issue descrevendo o erro

## Utilização
Aqui vai um manual de como utilizar todas as funcionalidades do player

### Controle do áudio
1. Play/Pause

![](https://user-images.githubusercontent.com/54596991/107912712-c98bc280-6f3d-11eb-8bbf-9f8ae655f06c.png)
![](https://user-images.githubusercontent.com/54596991/107912912-30a97700-6f3e-11eb-88a9-67a74b191f9c.png)

Para dar play ou pause é só clicar nesse botão ou aperte o seguinte atalho:

CTRL + BACKSPACE
![](https://user-images.githubusercontent.com/54596991/107913299-e83e8900-6f3e-11eb-82f3-e3844261dcb8.png)

2. Passar Musica

Para passar para a próxima musica aperte esse botão:

![](https://user-images.githubusercontent.com/54596991/107913532-55eab500-6f3f-11eb-8a1b-8c733968df00.png)

Ou use esse atalho:

CTRL + RIGHT
![](https://user-images.githubusercontent.com/54596991/107914042-5cc5f780-6f40-11eb-9253-c6d2eaaed89a.png)

Para voltar para a música anterior aperte:

![](https://user-images.githubusercontent.com/54596991/107913477-44091200-6f3f-11eb-8a6c-844d8955f010.png)

Ou use esse atalho:

CTRL + LEFT
![](https://user-images.githubusercontent.com/54596991/107914168-a7477400-6f40-11eb-84f2-8c05131362ce.png)

3. Repetir musica

![](https://user-images.githubusercontent.com/54596991/107914357-01e0d000-6f41-11eb-8119-710d3e9f1685.png)
![](https://user-images.githubusercontent.com/54596991/107914452-39e81300-6f41-11eb-8e9f-22599f8e9320.png)

Para que quando a música acabe ela repita aperte esse botão, quando ativo ele ficara com essa bolinha branca aperte de novo e será desativada a função de repetir e a bolinha ira sair

4. Aleatório

![](https://user-images.githubusercontent.com/54596991/107914968-3e60fb80-6f42-11eb-8e7a-920fdf347da7.png)
![](https://user-images.githubusercontent.com/54596991/107914849-09ed3f80-6f42-11eb-9b32-1ba70fc302ca.png)

Aperte esse botão para que as músicas passem aleatoriamente, da mesma forma que a anterior quando apertar o botão aparecera essa bolinha e se apertar dnv desativara a função e a bolinha ira sair

5. Volume

![](https://user-images.githubusercontent.com/54596991/107915299-027a6600-6f43-11eb-8da7-c779b20d632c.png)
![](https://user-images.githubusercontent.com/54596991/107915361-1aea8080-6f43-11eb-9d86-27831a62edfe.png)
![](https://user-images.githubusercontent.com/54596991/107915236-e676c480-6f42-11eb-9a3a-901eeae71532.png)
![](https://user-images.githubusercontent.com/54596991/107915455-466d6b00-6f43-11eb-8c0c-1f2bcd5295d7.png)

Mexa a barra pra cima para aumentar o volume e pra baixo para abaixar o volume, Atalhos:

CTRL + DOWN
![](https://user-images.githubusercontent.com/54596991/107915774-ddd2be00-6f43-11eb-85e1-c1b45b8ed2df.png)

Deixa sem volume

CTRL + UP

![](https://user-images.githubusercontent.com/54596991/107915665-ad8b1f80-6f43-11eb-863b-0e2969a580fe.png)

Para volume máximo

Dependendo do volume o ícone ira ir mudando conforme as imagens

6. Barra de progresso

![](https://user-images.githubusercontent.com/54596991/108010866-a8ca7800-6fe4-11eb-994f-740ef3432386.png)

A barra de progresso ira atualizar conforme a musica estiver tocando você pode pausar a musica e adiantar ela para algum segundo especifico como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108011615-35296a80-6fe6-11eb-8f8f-4327af95e65c.gif)

### Informações do vídeo

Acima da barra de progresso terão as seguintes informações

![](https://user-images.githubusercontent.com/54596991/108013868-5e002e80-6feb-11eb-9264-b924f9818f4d.png)

1. Imagem 

A imagem será a thumb do vídeo lá do youtube

2. Titulo

O título será exatamente o título do vídeo lá do youtube

![](https://user-images.githubusercontent.com/54596991/108016556-9c98e780-6ff1-11eb-94fc-71af5304b3a3.png)

3. Autor

O nome do autor será o nome do canal que postou o vídeo no youtube

![](https://user-images.githubusercontent.com/54596991/108016917-6740c980-6ff2-11eb-884e-212b9d921ae5.png)

### Playlist

Nessa parte teremos todas as musicas, ou vídeos, que adicionarmos ao Playeg tanto por uma playlist tanto colocando musica por musica

![](https://user-images.githubusercontent.com/54596991/108017792-87718800-6ff4-11eb-9529-bc3f5c75bda8.png)

1. Lista de musicas

Aqui temos a lista com todas as musicas, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108018005-3ca44000-6ff5-11eb-8e72-55e34acbefcb.png)

Cada musica dentro da lista contem algumas informações que são:

![](https://user-images.githubusercontent.com/54596991/108018157-a45a8b00-6ff5-11eb-9e66-41b058ecbf6a.png)

- Index: Numero da musica dentro da playlist

![](https://user-images.githubusercontent.com/54596991/108018218-d966dd80-6ff5-11eb-85a5-4ac50939e7db.png)

- Thumb: Thumbnail do vídeo

![](https://user-images.githubusercontent.com/54596991/108018409-69a52280-6ff6-11eb-960d-aadfbdb495a6.png)

- Duração: Como o nome já diz é a duração do vídeo aproximadamente

![](https://user-images.githubusercontent.com/54596991/108018516-bdb00700-6ff6-11eb-8b40-361ebbfa7598.png)

- Titulo: O titulo do vídeo

![](https://user-images.githubusercontent.com/54596991/108018619-05cf2980-6ff7-11eb-9c16-87974260a9f1.png)

Juntos com essas informações tbm temos três funcionalidades:

- Play: Se clicarmos na Thumb da musica iniciara um carregamento e a musica ira começar, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108019127-44b1af00-6ff8-11eb-9c26-00c71074243c.gif)

- Remove: Remove a musica da playlist, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108019250-98bc9380-6ff8-11eb-9400-5a056c0031a9.gif)

- Adicionar a fila: Como o próprio nome já diz adiciona uma musica a fila de reprodução, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108019458-0cf73700-6ff9-11eb-98e0-f9729bb29e4b.gif)

2. Botões 

Dentro de playlist nos também temos alguns botões com funcionalidades especificas que são:

![](https://user-images.githubusercontent.com/54596991/108020806-eb4b7f00-6ffb-11eb-8197-628db22e08df.png)

- Adicionar playlist:

![](https://user-images.githubusercontent.com/54596991/108020982-572de780-6ffc-11eb-885c-41846d028631.png)

Esse botão serve para adicionar uma playlist do youtube, quando clicarmos nesse botão aparecera um pop-up:

![](https://user-images.githubusercontent.com/54596991/108021093-94927500-6ffc-11eb-9473-1a364bcb36b6.png)

Dentro desse pop-up você pode digitar a url da playlist ou clicar nesse botão com ícone de prancheta para colar da sua área de transferência direto para o campo, como no exemplo:

![](https://user-images.githubusercontent.com/54596991/108021412-46ca3c80-6ffd-11eb-956a-7cc61622b5d0.gif)

Após colocar a url basta clicar em "Submit" que a playlist será carregada, como no exemplo:

![](https://user-images.githubusercontent.com/54596991/108021607-a88aa680-6ffd-11eb-9a36-591c97cd2af1.gif)

OBS: Está rolando um bug, que ainda vou concertar, que quando vc coloca uma url de playlist vindo de outro domínio do youtube ele não carrega as musica. Ex:

Vc coloca essa url: https://youtu.be/playlist?list=PLBu53HxlKZKqUN0n6PGyvbkZVp13Fs6v3

Dai fica carregando infinitamente e não funciona, então pra que isso não ocorra copie somente a id da playlist. Ex:

Url: https://youtu.be/playlist?list=PLBu53HxlKZKqUN0n6PGyvbkZVp13Fs6v3

Id:PLBu53HxlKZKqUN0n6PGyvbkZVp13Fs6v3

A id da playlist sempre fica entre '?list=' e '&',As vezes depois do id não tem nada como no exemplo acima dai só copiar tudo partir de '?list='. Ex:

https://youtu.be/playlist?list=PLBu53HxlKZKqUN0n6PGyvbkZVp13Fs6v3

PLBu53HxlKZKqUN0n6PGyvbkZVp13Fs6v3

https://www.youtube.com/watch?list=PLBu53HxlKZKqUN0n6PGyvbkZVp13Fs6v3&v=playlist&feature=youtu.be

https://www.youtube.com/watch?list= Id:"PLBu53HxlKZKqUN0n6PGyvbkZVp13Fs6v3" &v=playlist&feature=youtu.be

Se você não entendeu e está tendo esse problema espere um pouco que na próxima atualização isso será corrigido

- Adicionar Musica

![](https://user-images.githubusercontent.com/54596991/108023869-42545280-7002-11eb-8209-b357a0537d13.png)

Esse é bem semelhante ao anterior, mas invés de colocar uma playlist esse serve para adicionar um único vídeo, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108023917-5435f580-7002-11eb-8731-23e3890f1602.gif)

- Reset

![](https://user-images.githubusercontent.com/54596991/108024087-ad9e2480-7002-11eb-91e2-df07400a49c4.png)

Ao clicar nesse toda a nossa playlist e deletada do app mas a musica que esta tocando no momento continua, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108024405-492f9500-7003-11eb-815a-54f06f42950f.gif)

-Fila

![](https://user-images.githubusercontent.com/54596991/108024495-6bc1ae00-7003-11eb-889f-e241dfcf3e70.png)

Ao clicar nesse botão aparecera um pop-up em cima da playlist mostrando quais vídeos foram adicionadas a fila de reprodução, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108024711-d541bc80-7003-11eb-89f1-9bdb48846bb3.gif)

Quando a musica que esta tocando passar pra próxima na fila se você abrir e fechar dnv a fila ele sairá de lá, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108025061-8a747480-7004-11eb-9c07-20ef05512e7b.gif)

Dentro nos temos duas funcionalidades:

Remover: remove musica da fila, exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108025214-db846880-7004-11eb-9743-ed0979ad550e.gif)

Play: Toca a musica que vc escolher, exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108025299-ff47ae80-7004-11eb-8ca4-d63569f4b82a.gif)

- Save/Sobrescrever

![](https://user-images.githubusercontent.com/54596991/108025521-5ea5be80-7005-11eb-9b28-1ef192c01bb8.png)

Ao apertar esse botão ira aparecer esse pop-up:

![](https://user-images.githubusercontent.com/54596991/108156144-e69bcf00-70be-11eb-98ea-8ea28b4f1b8e.png)

Dentro desse pop-up temos duas funcionalidades que são:

Salvar: Aqui nos salvamos a playlist localmente para facil acesso, então inves de escrever a url toda vez que quiser ouvir algo basta somente ir em load e carregar sua playlist com apenas alguns clicks, para salvar basta colocar o nome da playlist e apertar em salvar, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108156934-5f4f5b00-70c0-11eb-9222-c320635fafb2.gif)

Mas vale lembrar que a playlist tem que estar carregada no Playeg se não a função não funcionara, como exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108157155-d4229500-70c0-11eb-995c-65c2e606e1a7.gif)

Para funcionar carregue a playlist antes como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108157274-1ba92100-70c1-11eb-9665-abcd93414162.gif)

Há tbm uma opção adicional que serve para atualizar a playlist, aonde vc pode criar uma playlist ou utlizar uma já criada no youtube e quando uma musica for adicionada ou removida dessa playlist vc não precise remover e salvar dnv a playlist para carregar as novas atualizações, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108157661-0bde0c80-70c2-11eb-9e11-e974e9e9e4f4.gif)

No Exemplo acima eu removi algumas musicas e quando atualizei dentro de load a playlist pegou as musicas da url que passei atualizando a playlist salvas com essas musicas fazendo com que minha playlist que tinha 2 musicas ficasse com 5, outro exemplo:

![](https://user-images.githubusercontent.com/54596991/108157873-83ac3700-70c2-11eb-9199-7cdfe712a3f1.gif)

Ja nesse ele pegou as musicas da url e retirou as antigas colocando essas novas

Vale lembrar que se vc adicionar varias musicas pela opção de musica por musica tbm serão salvas, então vc pode adicionar suas musicas favoritas e salvar aqui mesmo sem precisar criar a playlist no youtube

Outra obs e que se vc modificar sua playlist removendo ou adicionando musicas e passar uma url e mandar atualizar vc perdera suas alterações e a playlist vai ficar igual a da url que vc passou

Sobrescrever: Aqui nos podemos sobrescrever uma playlist já criada como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108158441-adb22900-70c3-11eb-840a-2a4cfea67be8.gif)

Nos podemos passar 3 informações para sobrescrever:

A playlist que queremos sobrescrever

Um novo nome pra playlist, se deixarmos em branco ele ficara com o mesmo nome, Como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108158628-17cace00-70c4-11eb-9496-3d2c249d89d5.gif)

E uma nova url para a playlist, se deixarmos em branco ele deixara a playlist sem url, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108158985-d7b81b00-70c4-11eb-9465-8bbbb6aa3b31.gif)

- Load

![](https://user-images.githubusercontent.com/54596991/108159307-7e9cb700-70c5-11eb-9e11-68b6620f77c8.png)

Falei um pouco dela na função de save pois as duas estão interligadas essa função serve para carregar as playlist que vc tem salvo, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108159718-5497c480-70c6-11eb-9704-8d5a850a97a2.gif)

Dentro dela nos podemos fazer três coisas:

Carregar: Aqui nos carregamos uma determinada playlist como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108159836-9d4f7d80-70c6-11eb-94c7-a828ef1321bc.gif)

Apagar: Aqui nos apagamos uma playlist, como no exemplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108159952-ddaefb80-70c6-11eb-9a6f-88726f4a1507.gif)

Atualizar: Aqui nos atualizamos uma playlist conforme sua url, como já foi mostrado em salvar e como no exeplo abaixo:

![](https://user-images.githubusercontent.com/54596991/108160077-1d75e300-70c7-11eb-95f5-41a9470c3198.gif)

### Minimizar

Quando a tela é minimizada e o ícone dele ira para a bandeja e a tela será fechada mas o aplicativo não é fechado continuando tocando as musicas e vc podendo controlar a musica pelos atalhos no teclado, para a tela voltar click com o botão direito no ícone da bandeja e click em mostrar, já para fechar o aplicativo quando ele estiver assim click com o botão direito no ícone da bandeja e click em fechar

## Requisitos Para Modificar

Os requisitos para modificar o código são os seguintes:

- Pc Windows 64 bits ou 32 bits
- NodeJs (https://nodejs.org)

E só

## Módulos Utilizados

Aqui eu utilizei os seguintes módulos:

- Electron (https://www.electronjs.org/)
- delay (https://www.npmjs.com/package/delay)
- ytdl-core (https://www.npmjs.com/package/ytdl-core)
- ytpl (https://www.npmjs.com/package/ytpl)
- fs (https://nodejs.org/api/fs.html)
