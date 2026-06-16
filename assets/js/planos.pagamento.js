// SAITRON • Planos, Liberação e Pagamento
const PLANOS = {
  gratuito: {limite:5, funcoes:["docs.basico","graficos.simples"]},
  basico: {limite:30, funcoes:["todos.docs","grafica"]},
  completo: {limite:9999, funcoes:["licitacoes","leiloes","habitacao"]},
  empresarial: {limite:99999, funcoes:["tudo","varredura","publicacao"]}
};

function verificarAcesso(funcao){
  let usuario = JSON.parse(localStorage.getItem("saitron.usuario")||'{"plano":"gratuito"}');
  return PLANOS[usuario.plano].funcoes.includes(funcao);
}

function liberarAposPagamento(tipo){
  alert("Pagamento confirmado → plano "+tipo+" liberado");
  localStorage.setItem("saitron.usuario",JSON.stringify({plano:tipo,data:new Date().toISOString()}));
}
