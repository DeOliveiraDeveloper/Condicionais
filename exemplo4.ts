const temIngresso:boolean = false;
let Idade:number = 16;
const minimo:number = 16;

if (temIngresso && Idade >= minimo) {
    console.log("Pode Entrar!");
} else if (!temIngresso && Idade >= minimo) {
    console.log("Vai comprar o Ingresso vacilão!");
} else {
    console.log("Barro novin!");
}
