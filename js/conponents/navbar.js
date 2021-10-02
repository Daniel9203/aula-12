function navbar() {
  let items = [
    "listar",
    "cadastrar",
    "relatorios",
  ];
    return `
      <hr>
      ${items.map((btn) =>
        `<button data-component="menu" data-action="${btn}" class="btn btn-outline-dark" >
        ${btn}
        </button>`
      ).join('')}
      <hr>
  `;
}

document.getElementById('navbar').innerHTML = navbar();
