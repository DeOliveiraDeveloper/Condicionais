const temIngresso:boolean = true;
let Idade:number = 16;
const minimo:number = 16;
const estaComPais:boolean = false;

if (temIngresso && Idade >= minimo || temIngresso && estaComPais) {
    console.log("Pode Entrar!");
} else if (!temIngresso && Idade >= minimo) {
    console.log("Vai comprar o Ingresso vacilão!");
} else {
    console.log("Barro novin!");
}
