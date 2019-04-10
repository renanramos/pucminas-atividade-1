function setImagemThumnails(n){
    var path = this.getPathImg(n);
    var alt = this.getAltImg(n);
    var elem = document.getElementById("imagem-completa");    
    if (path && alt)
        elem.setAttribute("src", path);
        document.getElementById("figcaption-full-img").innerText = alt;       
}

function getPathImg(idImagem){
    return document.getElementById("img-"+idImagem).getAttribute("src");
}

function getAltImg(idImagem){
    return document.getElementById("img-"+idImagem).getAttribute("alt");
}