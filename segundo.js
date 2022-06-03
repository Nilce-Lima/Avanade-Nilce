function getPessoa() {
    return {
        altura: 1.64,
    corCabelo: "Castanho claro",
    cursos: ["ADS", "MBA"],
    nome: "Nilce Lima",
    escreverNome: function () {
    console.log(this.nome);
    },
    filhos: [{ nome: "não tem", idade: 0 }],
    habilitado: false,
    idade: 40,
    mãe: { nome: "Cida", idade: 66 }
    };
    }
    
    function getFilhosMaisUmAnoIdade() {
    return getObj().filhos.filter((filho) => { return filho.idade > 1 });
    }
    
    function getNomeFilhosMaisUmAnoIdade() {
    return getNomeFilhosMaisUmAnoIdade().map((filho) => { return filho.nome });
    }

    function Pessoa() {
        return {
            nome: "Nilce Lima",
            idade: 40,
            corCabelo: "Castanho claro",
            cursos: [ "ADS", "MBA" ],
            altura: 1.64,
            habilitado: false,
            filhos: [{ nome: "não tem", idade: 0 }],
            escreverNome: function () {
                console.log(this.nome);
            },
            mãe: { nome: "Cida", idade: 66 }
            };
        }