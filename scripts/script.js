const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lista dinâmica abaixo! Clique em qualquer lugar da página para adicionar um novo item. Modifique um item ao clicar no mesmo! ';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('Que item deseja adicionar a lista?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Entre aqui com o novo conteúdo do item.');
    this.textContent = listContent;
  }
}