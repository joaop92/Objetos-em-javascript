class Carro {
    constructor(marca, modelo, ano, cor, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }

    ligar() {
        console.log("O carro está ligado");
    }

    desligar() {
        console.log("O carro está desligado");
    }

    acelerar() {
        console.log("O carro está acelerando");
    }

    freiar() {
        console.log("O carro está freando");
    }
}

const meuCarro = new Carro("Fiat", "Uno", 2023, "Vermelho", 40.000);

meuCarro.ligar();
meuCarro.acelerar();
meuCarro.frear();
meuCarro.desligar();

class FiguraGeometrica {
    constructor(forma, cor) {
        this.forma = forma;
        this.cor = cor;
    }

    calcularArea() {
        console.log("O método calcularArea() deve ser implementado pela classe concreta");
    }

    calcularPerimetro() {
        console.log("O método calcularPerimetro() deve ser implementado pela classe concreta");
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(largura, altura, cor) {
        super("Quadrado", cor);
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }

    calcularPerimetro() {
        return 4 * this.largura;
    }
}

const meuQuadrado = new Quadrado(10, 10, "Verde");

console.log(meuQuadrado.forma); // Quadrado
console.log(meuQuadrado.cor); // Verde
console.log(meuQuadrado.calcularArea()); // 100
console.log(meuQuadrado.calcularPerimetro()); // 40
