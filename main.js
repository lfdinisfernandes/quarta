function adicionar(){
    
    let text = document.getElementById("texto").value;
    let list = document.getElementById("lista").innerHTML;

    list += "<li>" +text+ "</li>"
    console.log(text)

    document.getElementById("lista").innerHTML = list;

    document.getElementById("texto").value = null;
};