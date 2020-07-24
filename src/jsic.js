

/** Disable context menu and drag **/
document.oncontextmenu = _ => false;
document.ondragstart = _ => false;

/** Block browser back button **/
history.pushState(null, null, document.location.href);
window.onpopstate = _ => history.go(+1);


// carrgar(arquivo)

// listar(linhas_opcional)

// rodar(contexto, linhas_opcional)

// salvar()


export default class JSIC {
  // let __constructor = _ => {
  //
  // }

  async load(file) {
    const res = await fetch(file),
      data = await res.text();
    console.log(data);
  }

  // let __destroyer = _ => {
  //
  // }
}
