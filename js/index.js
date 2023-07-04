const usuarios = [
	{
		id: 1,
		name: "Taynara Dutra",
		email: "taynara@ifpr.edu.br",
		senha: "12345",
	},
	{
		id: 2,
		name: "Fulano Silva",
		email: "fulano@gmail.com",
		senha: "12345",
	},
	{
		id: 3,
		name: "Fabiano Meira",
		email: "fabiano.meira@gmail.com",
		senha: "12345",
	},
];
//deve-se trabalhar com essa lista e converte-la para objetos.
const usuariosJSON = JSON.stringify(usuarios);

/* JSON.parse()*/
const listaUsuarios = JSON.parse(usuariosJSON);

const objObrigratorio = `
    <div class="campo-obrigatrio">
        <small> * Campo Obrigatório </small>
    </div>
`;

const checkInputs = (email, senha) => {
	let control = true;

	if (email.value.trim() == "") {
		control = false;
		email.parentElement.innerHTML += objObrigratorio;
	}

	if (senha.value.trim() == "") {
		control = false;
		senha.parentElement.innerHTML += objObrigratorio;
	}

	return control;
}

let form = document.querySelector("form");
let botaoLogar = document.querySelector("#form-botao");

form.addEventListener("submit", (event) => {
	let email = document.querySelector("#email");
	let senha = document.querySelector("#senha");

	if (checkInputs(email, senha)) {
		listaUsuarios.forEach((usuario) => {
			if (usuario.email.toLowerCase() === email.value.trim().toLowerCase() && usuario.senha.toLowerCase() === senha.value.trim().toLowerCase()) {
				// inserir e JSON e no sessionStorage
				const usuarioLogado = {
					id: usuario.id,
					name: usuario.name,
					email: usuario.email,
				}

				const objUsuarioLogado = JSON.stringify(usuarioLogado);
				sessionStorage.setItem("usuario", objUsuarioLogado);
				window.location.href = "welcome.html";				
			} else {
				// fazer o tratamento
				event.preventDefault();
			}
		});
	} else {
		event.preventDefault();
	}
});