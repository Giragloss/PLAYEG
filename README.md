# PLAYEG

## Informações
Playeg é um player de áudio para vídeos do youtube, criado utilizando electronjs, para windows 64 bits e 32 bits. Ele serve para você escutar suas musicas, ou qualquer outro conteúdo, do youtube sem precisar estar com o navegador aberto e somente como áudio.

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

4. Aleatorio

![](https://user-images.githubusercontent.com/54596991/107914968-3e60fb80-6f42-11eb-8e7a-920fdf347da7.png)
![](https://user-images.githubusercontent.com/54596991/107914849-09ed3f80-6f42-11eb-9b32-1ba70fc302ca.png)

Aperte esse botão para que as músicas passem aleatoriamente, da mesma forma que a anterior quando apertar o botão aparecera essa bolinha e se apertar dnv desativara a função e a bolinha ira sair

5. Volume

![](https://user-images.githubusercontent.com/54596991/107915299-027a6600-6f43-11eb-8da7-c779b20d632c.png)
![](https://user-images.githubusercontent.com/54596991/107915361-1aea8080-6f43-11eb-9d86-27831a62edfe.png)
![](https://user-images.githubusercontent.com/54596991/107915236-e676c480-6f42-11eb-9a3a-901eeae71532.png)
![](https://user-images.githubusercontent.com/54596991/107915455-466d6b00-6f43-11eb-8c0c-1f2bcd5295d7.png)

Mexa a barra pra cima para aumentar o volume e pra baixo para abaixar o volumr, Atalhos:

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
