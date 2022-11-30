const express = require("express");
const servidor = express();

//Define o EJS como gestor/motor da templates da aplicação
servidor.set("view engine","ejs");

//Establece a pasta "ficheiros" como a raiz dos ficheiros estáticos (ex: imagens, folhas de estilo, etc...)
servidor.use(express.static("ficheiros"));

servidor.get("/",function (req,res) {
    //a resposta é dada através do "renderização" do template base.ejs
    res.render("base",{
        //variável que serve de indicar qual o template que deve ser carregado para área do conteúdo do template principal (base.ejs)
        conteudo:"conteudos/inicial",
        //variável que serve para indicar qual foi o botão da navegação que despoletou este pedido
        menu:"inicio"
    });
})
servidor.get("/pagina",function (req,res) {
    //a resposta é dada através do "renderização" do template base.ejs
    res.render("base",{
        conteudo:"conteudos/pagina",
       //variável que serve para indicar qual foi o botão da navegação que despoletou este pedido
        menu:"pagina"
    });
})
servidor.get("/outra-pagina",function (req,res) {
    //a resposta é dada através do "renderização" do template base.ejs
    res.render("base",{
        //variável que serve de indicar qual o template que deve ser carregado para área do conteúdo do template principal (base.ejs) 
        conteudo:"conteudos/outrapagina",
        //variável que serve para indicar qual foi o botão da navegação que despoletou este pedido
        menu:"outrapagina"
    });
})
servidor.get("/contactos",function (req,res) {
    //a resposta é dada através do "renderização" do template base.ejs
    res.render("base",{
        //variável que serve de indicar qual o template que deve ser carregado para área do conteúdo do template principal (base.ejs)
        conteudo:"conteudos/contactos",
       //variável que serve para indicar qual foi o botão da navegação que despoletou este pedido        
        menu:"pacontactosgina"
    });
})


servidor.listen(4444,function () {
    console.log("O servidor está ligado!");
})