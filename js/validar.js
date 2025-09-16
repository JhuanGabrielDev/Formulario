// Validacão de campos do formulario de login!
// Tratativas de excesso de espaços em campos de digitação:
// trim: Remove o excesso de espaço na direita e esquerda da palavra ou texto.
// trimStart: Remove o excesso de espaço na esquerda da palavra ou texto.
// trimEnd: Remove op excesso de espaço na direita da palavra ou texto.
function ValidarCamposFormLogin() {
    if (document.formLogin.email.value == "") {
        alert("Preecher o campo obrigatório E-MAIL!");
        document.formLogin.email.focus();
        return false;
    }

    if (document.formLogin.senha.value.trim() == "") {
        alert("Preecher o campo obrigatório SENHA!");
        document - formLogin.senha.focus();
        return false;
    }
}

// Validação de Campos do Formulario de Cadastro!
function ValidarCamposFormCadastro() {
    if (document.formCadastro.nome.value == "") {
        alert("Preecher o campo obrigatório NOME!");
        document.formCadastro.nome.focus();
        return false;
    }
    if (document.formCadastro.email.value == "") {
        alert("Preencher o campo obrigatório E-MAIL!");
        document.formCadastro.email.focus();
        return false;
    }
    if (document.formCadastro.telefone.value == "") {
        alert("Preencher o campo obrigatório TELEFONE! ")
        document.formCadastro.telefone.focus();
        return false;
    }
    if (document.formCadastro.data.value == "") {
        alert("Preencher o campo obrigatório DATA!")
        document.formCadastro.data.focus();
        return false;
    }
    if (document.formCadastro.curso.value == "") {
        alert("Preencher o campo obrigatório CURSO!")
        document.formCadastro.curso.focus();
        return false;
    }
    if (document.formCadastro.senha.value == "") {
        alert("Preencher o campo obrigatório SENHA!")
        document.formCadastro.senha.focus();
        return false;
    }
    if (document.formCadastro.repsenha.value.trim() == "") {
        alert("Preencher o campo obrigatório Repetir Senha!")
        document.formCadastro.repsenha.focus();
        return false;
    }
    if (document.formCadastro.senha.value.trim() != document.formCadastro.repsenha.value.trim()) {
        alert("O campo Senha e Repetir Senha tem que ser iguais!")
        document.formCadastro.repsenha.focus();
        return false;
    }
}

