module.exports = 
function adicionar(){
        
  let Nome = document.getElementById("texto").value;
  let sobreNome = document.getElementById("textos").value;
  let list = document.getElementById("lista").innerHTML;

  list += "<li>" +Nome+ "</li>"
  console.log(Nome);

  list += "<li>" +sobreNome+ "</li>"
  console.log(sobreNome);

  document.getElementById("lista").innerHTML = list;
  document.getElementById("texto").value = null;
  document.getElementById("textos").value = null;
}