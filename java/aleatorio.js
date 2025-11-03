const nomes = ["Emerson", "Eduardo", "Marlon", "Renato", "Silvio"];
export function aleatorio (lista){
    const posicao = Math.floorI(Math.random()*lista.lenght);
    return lista [posicao];
}
export const none = aleatorio(nomes)