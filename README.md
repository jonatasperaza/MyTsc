<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=e83d84&height=120&section=header"/>

# My TypeScript

## Conceitos Basicos

- ### Tipagem Estática: 
<p>Em JavaScript, você pode declarar variáveis sem definir o tipo. Em TypeScript, você pode (e deve) definir o tipo da variável.</p>

```typescript
let idade: number = 17;
let nome: string = "João";
let estudante: boolean = true;
```

- ### Funções com tipos:
<p>Em TypeScript, você também pode definir os tipos dos parâmetros e o tipo de retorno das funções.</p>

```typescript
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(2, 3)); // Saída: 5
```

- ### Interfaces:

<p>Interfaces permitem definir a estrutura de um objeto. Isso ajuda a garantir que um objeto tenha todas as propriedades esperadas.</p>

```typescript
interface Pessoa {
    nome: string;
    idade: number;
    estudante: boolean;
}

const joao: Pessoa = {
    nome: "João",
    idade: 17,
    estudante: true
};
```

- ### Classes:

<p>TypeScript permite criar classes, que são como moldes para criar objetos com propriedades e métodos.</p>

```typescript
class Carro {
    marca: string;
    ano: number;

    constructor(marca: string, ano: number) {
        this.marca = marca;
        this.ano = ano;
    }

    detalhes(): string {
        return `${this.marca} - ${this.ano}`;
    }
}

const meuCarro = new Carro("Toyota", 2020);
console.log(meuCarro.detalhes()); // Saída: Toyota - 2020

```


- ### Modificadores de Acesso:

<p>Você pode usar public, private e protected para controlar o acesso às propriedades e métodos das classes.</p>

```typescript
class Animal {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public falar(): void {
        console.log(`${this.nome} está fazendo um som.`);
    }
}

const cachorro = new Animal("Rex");
cachorro.falar(); // Saída: Rex está fazendo um som.

```

- ### Arrays e Tipos Genéricos:

<p>Você pode criar arrays tipados e funções genéricas.</p>

```typescript
let numeros: number[] = [1, 2, 3, 4];

function inverter<T>(itens: T[]): T[] {
    return itens.reverse();
}

let stringsInverted = inverter<string>(["a", "b", "c"]); // Saída: ["c", "b", "a"]

```

<div align="center">

![GitHub Repo stars](https://img.shields.io/github/stars/jonatasperaza/MyTsc?style=for-the-badge&color=%23e83d84)

</div>

<img style="margin-top:10px" width=100% src="https://capsule-render.vercel.app/api?type=waving&color=e83d84&height=120&section=footer"/>