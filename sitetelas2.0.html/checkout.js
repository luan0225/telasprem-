// Simulação de produtos no carrinho
const carrinho = [
    { produto: "Produto 1", preco: 29.99 },
    { produto: "Produto 2", preco: 19.99 }
];

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const formaPagamento = document.getElementById('forma-pagamento').value;
    const telefone = document.getElementById('telefone').value;

    // Criar uma mensagem com as informações do formulário
    let mensagem = `Nome: ${nome}\nForma de pagamento: ${formaPagamento}\nTelefone: ${telefone}\n\nProdutos:\n`;

    // Adiciona os produtos do carrinho
    let total = 0; // Inicializa a variável total
    carrinho.forEach(item => {
        mensagem += `${item.produto} - R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
        total += item.preco; // Acumula o total
    });

    // Adiciona o total à mensagem
    mensagem += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n`;

    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Cria o link do WhatsApp
    const linkWhatsApp = `https://wa.me/5592994289392?text=${mensagemCodificada}`;

    // Redireciona para o WhatsApp
    window.open(linkWhatsApp, '_blank');
});