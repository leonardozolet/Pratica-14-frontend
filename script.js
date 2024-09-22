class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    const erroDiv = document.getElementById("erro");
    erroDiv.textContent = mensagem;
    erroDiv.style.color = "red";
}

function limparErro() {
    const erroDiv = document.getElementById("erro");
    erroDiv.textContent = "";
}

function criarFuncionario() {
    try {
        limparErro();
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const cargo = document.getElementById("cargo").value;
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;

        if (!nome || !idade || !cargo) {
            throw new Error("Por favor, preencha todos os campos obrigatórios.");
        }

        let funcionario;
        if (cargo === "Gerente") {
            if (!departamento) throw new Error("Por favor, preencha o campo de departamento.");
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) throw new Error("Por favor, preencha o campo de linguagem.");
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            funcionario = new Funcionario(nome, idade, cargo);
        }

        exibirInformacoes(funcionario);
    } catch (erro) {
        exibirErro(erro.message);
    }
}

function exibirInformacoes(funcionario) {
    const resultadoDiv = document.getElementById("resultado");
    let informacoes = funcionario.seApresentar();
    informacoes += "<br>" + funcionario.trabalhar();

    if (funcionario instanceof Gerente) {
        informacoes += "<br>" + funcionario.gerenciar();
    } else if (funcionario instanceof Desenvolvedor) {
        informacoes += "<br>" + funcionario.programar();
    }

    resultadoDiv.innerHTML = informacoes;
}