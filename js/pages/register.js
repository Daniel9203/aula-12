function register() {
  return `
  <table>
   <h1>Novo Contato</h1>
   <hr>
    <form class="" action="index.html" method="post">
    <section>

    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"></span>
    <input type="text" class="form-control" placeholder="Nome" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"></span>
    <input type="email" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <span class="input-group-text" id="basic-addon2">@exemplo.com</span>
    </div>
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"></span>
    <input type="text" class="form-control" placeholder="Telefone" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"></span>
    <input id="photo" type="url" class="form-control" placeholder="Link Foto" aria-describedby="basic-addon1">
    </div>
    <button class="btn btn-outline-success">ENVIAR</button>
    </form>
    </table>

  </section>
  `;
}

document.querySelector('[data-content="cadastrar"]').innerHTML = register();
document.
