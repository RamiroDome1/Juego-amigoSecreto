let listaAmigos = document.getElementById("listaAmigos"); //llama a la lista de html

//agrega un amigo del input a la lista de amigos
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo != "") {
    if (amigo.includes(" ")) {
      alert("ingresa solo el nombre");
    } else {
      const li = document.createElement("li");
      li.textContent = amigo;
      listaAmigos.appendChild(li);
      limpiarCaja();
    }
  } else {
    alert("Debes ingresar un nombre de amigo");
  }
}

//asigna un valor random a uno de los amigos y lo muestra como el ganador
function sortearAmigo() {
  let posicionGanadora = Math.floor(Math.random() * listaAmigos.children.length);
  let amigoGanador = listaAmigos.children[posicionGanadora].textContent;
  asignarTextoId("tituloGanador", `${amigoGanador} es tu amigo secreto!!!!`);
  console.log(amigoGanador);
  listaAmigos.innerHTML = "";
}

//limpia el input
function limpiarCaja() {
  document.getElementById("amigo").value = "";
}

//asigna texto a un id
function asignarTextoId(elemento, texto) {
  let elemntoHtml = document.getElementById(elemento);
  elemntoHtml.innerHTML = texto;
  return;
}
