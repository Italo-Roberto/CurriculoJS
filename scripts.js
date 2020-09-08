//Função escrever conteúdo
function escrever() {
    let titulo1 = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let natural = document.getElementById('natural').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let interesse = document.getElementById('interesse').value
    let curso1 = document.getElementById('curso1').value
    let escola1 = document.getElementById('escola1').value
    let ano1 = document.getElementById('ano1').value
    let detalhe1 = document.getElementById('detalhe1').value
    let curso2 = document.getElementById('curso2').value
    let escola2 = document.getElementById('escola2').value
    let ano2 = document.getElementById('ano2').value
    let detalhe2 = document.getElementById('detalhe2').value
    let trab1 = document.getElementById('trab1').value
    let empresa1 = document.getElementById('empresa1').value
    let ano11 = document.getElementById('ano11').value
    let detalhe11 = document.getElementById('detalhe11').value
    let trab2 = document.getElementById('trab2').value
    let empresa2 = document.getElementById('empresa2').value
    let ano22 = document.getElementById('ano22').value
    let detalhe22 = document.getElementById('detalhe22').value

    let hab1 = document.getElementById('hab1').value
    let hab2 = document.getElementById('hab2').value

    document.getElementById('titulo-principal').innerHTML = titulo1
    document.getElementById('idade-atual').innerHTML = idade + ' anos'
    document.getElementById('naturalidade').innerHTML = 'Natural de: ' + natural
    document.getElementById('contato').innerHTML = telefone
    document.getElementById('mail').innerHTML = email
    document.getElementById('interest').innerHTML = interesse
    document.getElementById('edu1').innerHTML = curso1
    document.getElementById('inst1').innerHTML = 'Instituição: ' + escola1
    document.getElementById('year1').innerHTML = 'Ano de conclusão: ' + '<b>' + ano1 + '</b>'
    document.getElementById('details1').innerHTML = detalhe1
    document.getElementById('edu2').innerHTML = curso2
    document.getElementById('inst2').innerHTML = 'Instituição: ' + escola2
    document.getElementById('year2').innerHTML = 'Ano de conclusão: ' + '<b>' + ano2 + '</b>'
    document.getElementById('details2').innerHTML = detalhe2
    document.getElementById('work1').innerHTML = trab1
    document.getElementById('place1').innerHTML = 'Empresa: ' + empresa1
    document.getElementById('year11').innerHTML = 'Período: ' + ano11
    document.getElementById('details11').innerHTML = detalhe11
    document.getElementById('work2').innerHTML = trab2
    document.getElementById('place2').innerHTML = 'Empresa: ' + empresa2
    document.getElementById('year22').innerHTML = 'Período: ' + ano22
    document.getElementById('details22').innerHTML = detalhe22
    document.getElementById('skill1').innerHTML = hab1
    document.getElementById('skill2').innerHTML = hab2

    let resultado1 = document.getElementById('nivel1').value
    document.getElementById('level1').innerHTML = 'Conhecimento: ' + resultado1

    let resultado2 = document.getElementById('nivel2').value
    document.getElementById('level2').innerHTML = 'Conhecimento: ' + resultado2
}

//Gerando PDF
function salvarPdf() {
    let arquivo = new jsPDF()
    let curriculo = document.getElementById('curriculo')

    arquivo.fromHTML(curriculo)
    arquivo.save('Currículo.pdf')
}

//Imprimindo conteúdo
function imprime() {
    let elemento = document.getElementById('conteudo')
    let conteudo = elemento.innerHTML

    window.print(conteudo)
}

let tempo_doacao = window.setTimeout(doacao, 120000)
function doacao() {
    Swal.fire({
        title: 'Esta página foi útil para você?',
        html: '<!-- INICIO FORMULARIO BOTAO PAGSEGURO --><p>Clique no botão abaixo e doe e valor que quiser!</p><form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post"><input type="hidden" name="currency" value="BRL" /><input type="hidden" name="receiverEmail" value="italoroberto61@gmail.com" /><input type="hidden" name="iot" value="button" /><input type="image"src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar.gif"name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></form><!-- FINAL FORMULARIO BOTAO PAGSEGURO -->',
    })
}