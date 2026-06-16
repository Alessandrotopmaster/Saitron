// 🔄 4 fontes IA com troca automática + evolução
const IAs = [ {chave:""}, {chave:""}, {chave:""}, {chave:""} ];
let indiceAtual = 0;
async function usarIA(texto){
  try { return await chamar(IAs[indiceAtual], texto); }
  catch(e){ indiceAtual=(indiceAtual+1)%4; return usarIA(texto); }
}
// 🧠 Evolução e aprendizado
function guardarAprendizado(comando,resultado){ /* salva para melhorar respostas futuras */ }
// 🌐 Varredura automática
async function buscarNovosDados(){ /* atualiza editais, normas, modelos */ }
