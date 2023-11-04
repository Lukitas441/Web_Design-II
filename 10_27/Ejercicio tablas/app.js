const tabla = document.querySelector("#main_container");

const formulario = document.querySelector("form");
const submitBtn = document.querySelector("button[type = submit]");
const formBG = document.querySelector("#form_bg");

const inputs = document.querySelectorAll("input");

formBG.addEventListener("click", () => {
  cerrarFormulario();
});

const loadTable = () => {
  const filas = document.querySelectorAll(".person_container");
  const delBtns = document.querySelectorAll(".delete_persona");

  filas.forEach((fila) => {
    fila.addEventListener("click", (e) => {
      filas.forEach((fila) =>
        !(fila === e.currentTarget)
          ? fila.classList.remove("selected_row")
          : fila.classList.toggle("selected_row")
      );
    });
  });

  delBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.currentTarget.parentElement.parentElement.remove();
    });
  });
};

const clearElements = () => {
  inputs.forEach((input) => (input.value = ""));
};
function abrirFormulario(e) {
  const name = formulario.children[1].children[1];
  const surname = formulario.children[2].children[1];
  if (e == "editar") {
    const persona = document.querySelector(".selected_row");
    if (!persona) {
      alert("elige una fila para editar");
      return null;
    }
    name.value = persona.children[0].textContent;
    surname.value = persona.children[1].textContent;
    formulario.setAttribute("mod", "editar");
  } else {
    formulario.setAttribute("mod", "agregar");
  }

  formulario.classList.remove("hidden");
  formBG.classList.remove("hidden");
}
function cerrarFormulario() {
  formulario.classList.add("hidden");
  formBG.classList.add("hidden");
  clearElements();
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const mod = formulario.getAttribute("mod");

  const name = formulario.children[1].children[1].value;
  const surname = formulario.children[2].children[1].value;

  if (!(name && surname)) {
    alert("completa todos los campos");
    return null;
  }

  if (mod == "editar") {
    const persona = document.querySelector(".selected_row");
    persona.children[0].textContent = name;
    persona.children[1].textContent = surname;
  } else {
    tabla.innerHTML += `
        <div class="person_container">
            <p>${name}</p>
            <p>${surname}</p>
            <div class="button_container">
                <button class="delete_persona">Borrar</button>
            </div>
        </div>
        `;
  }

  cerrarFormulario()
  setTimeout(() => loadTable(), 50);
});

window.onload = loadTable();
