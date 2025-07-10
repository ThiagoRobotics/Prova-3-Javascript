const form = document.getElementById("formulario");
const lista = document.getElementById("lista");
const input = document.getElementById("nome");

const personagens = [];
personagemIterator = 0;

form.addEventListener('submit', function(){

    event.preventDefault();

    personagens.push(input.value);

    const elemento = document.createElement("li");
    elemento.textContent = personagens.at(personagemIterator);
    lista.append(elemento);

    ++personagemIterator;
    
    
})