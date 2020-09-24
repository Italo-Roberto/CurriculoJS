//Função escrever conteúdo
function escrever_pessoal() {
    let titulo1 = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let natural = document.getElementById('natural').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value

    document.getElementById('titulo-principal').innerHTML = titulo1
    document.getElementById('idade-atual').innerHTML = idade + ' anos'
    document.getElementById('naturalidade').innerHTML = 'Natural de: ' + natural
    document.getElementById('contato').innerHTML = telefone
    document.getElementById('mail').innerHTML = email
}

function escrever_interesse() {
    let interesse = document.getElementById('interesse').value

    document.getElementById('interest').innerHTML = interesse
}

function escrever_formacao() {
    let curso1 = document.getElementById('curso1').value
    let escola1 = document.getElementById('escola1').value
    let ano1 = document.getElementById('ano1').value
    let detalhe1 = document.getElementById('detalhe1').value
    let curso2 = document.getElementById('curso2').value
    let escola2 = document.getElementById('escola2').value
    let ano2 = document.getElementById('ano2').value
    let detalhe2 = document.getElementById('detalhe2').value

    document.getElementById('edu1').innerHTML = curso1
    document.getElementById('inst1').innerHTML = 'Instituição: ' + escola1
    document.getElementById('year1').innerHTML = 'Ano de conclusão: ' + '<b>' + ano1 + '</b>'
    document.getElementById('details1').innerHTML = detalhe1
    document.getElementById('edu2').innerHTML = curso2
    document.getElementById('inst2').innerHTML = 'Instituição: ' + escola2
    document.getElementById('year2').innerHTML = 'Ano de conclusão: ' + '<b>' + ano2 + '</b>'
    document.getElementById('details2').innerHTML = detalhe2
}

function escrever_profissao() {
    let trab1 = document.getElementById('trab1').value
    let empresa1 = document.getElementById('empresa1').value
    let ano11 = document.getElementById('ano11').value
    let detalhe11 = document.getElementById('detalhe11').value
    let trab2 = document.getElementById('trab2').value
    let empresa2 = document.getElementById('empresa2').value
    let ano22 = document.getElementById('ano22').value
    let detalhe22 = document.getElementById('detalhe22').value

    document.getElementById('work1').innerHTML = trab1
    document.getElementById('place1').innerHTML = 'Empresa: ' + empresa1
    document.getElementById('year11').innerHTML = 'Período: ' + ano11
    document.getElementById('details11').innerHTML = detalhe11
    document.getElementById('work2').innerHTML = trab2
    document.getElementById('place2').innerHTML = 'Empresa: ' + empresa2
    document.getElementById('year22').innerHTML = 'Período: ' + ano22
    document.getElementById('details22').innerHTML = detalhe22
}

function escrever_habilidades() {

    let hab1 = document.getElementById('hab1').value
    let hab2 = document.getElementById('hab2').value

    document.getElementById('skill1').innerHTML = hab1
    document.getElementById('skill2').innerHTML = hab2

    let resultado1 = document.getElementById('nivel1').value
    switch (resultado1) {
        case '25%':
            document.getElementById('level1').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>'
            break;
        case '50%':
            document.getElementById('level1').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div></div>'
            break;
        case '75%':
            document.getElementById('level1').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div></div>'
            break;
        case '100%':
            document.getElementById('level1').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div></div>'
        default:
            break;
    }

    let resultado2 = document.getElementById('nivel2').value
    switch (resultado2) {
        case '25%':
            document.getElementById('level2').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>'
            break;
        case '50%':
            document.getElementById('level2').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div></div>'
            break;
        case '75%':
            document.getElementById('level2').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div></div>'
            break;
        case '100%':
            document.getElementById('level2').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div></div>'
        default:
            break;
    }
}

function escrever_idioma() {
    let idioma = document.getElementById('idioma').value
    let idioma2 = document.getElementById('idioma2').value

    let nivel_idioma = document.getElementById('nivel-idioma').value
    switch (nivel_idioma) {
        case '1':
            document.getElementById('level-language1').innerHTML = 'Nativo / Fluente'
            break;
        case '2':
            document.getElementById('level-language1').innerHTML = 'Intermediário'
            break;
        case '3':
            document.getElementById('level-language1').innerHTML = 'Básico'
            break;
    
        default:
            break;
    }
    let nivel_idioma2 = document.getElementById('nivel-idioma2').value
    switch (nivel_idioma2) {
        case '1':
            document.getElementById('level-language2').innerHTML = 'Nativo / Fluente'
            break;
        case '2':
            document.getElementById('level-language2').innerHTML = 'Intermediário'
            break;
        case '3':
            document.getElementById('level-language2').innerHTML = 'Básico'
            break;
    
        default:
            break;
    }

    document.getElementById('language1').innerHTML = idioma
    document.getElementById('language2').innerHTML = idioma2
}

//Botões de adição de campos
$('#add-form').click(function() {
  $('#form1').append('<div class="form-group div-small"><label>Formação Anterior</label><br><input type="text" id="curso2" placeholder="Nome do curso"><br><input type="text" id="escola2" placeholder="Instituição"><br><input type="number" id="ano2" placeholder="Ano de conclusão"><br><textarea id="detalhe2" cols="25" rows="7" placeholder="Detalhes do curso"></textarea><br><br></div>');  
})
$('#add-trab').click(function() {
    $('#exp1').append('<div class="form-group div-small"><label>Trabalho Anterior</label><br><input type="text" id="trab2" placeholder="Função"><br><input type="text" id="empresa2" placeholder="Empresa"><br><input type="text" id="ano22" placeholder="Período"><br><textarea id="detalhe22" cols="25" rows="7" placeholder="Descrição das atividades"></textarea><br><br></div>');  
})
$('#add-idioma').click(function() {
    $('#idioma-container').append('<input type="text" id="idioma2" placeholder="Português"><label>Nível: <select id="nivel-idioma2"><option value="1">Nativo/ Fluente</option><option value="2">Intermediário</option><option value="3">Básico</option></select></label>');  
})
//Desbilitar submit do form
$(document).ready(function() {
    $("#cabecalho").submit(function() {
        return false;
    });
});

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

let tempo_doacao = window.setTimeout(doacao, 360000)
function doacao() {
    Swal.fire({
        title: 'Esta página foi útil para você?',
        html: '<!-- INICIO FORMULARIO BOTAO PAGSEGURO --><p>Clique no botão abaixo e doe e valor que quiser!</p><form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post"><input type="hidden" name="currency" value="BRL" /><input type="hidden" name="receiverEmail" value="italoroberto61@gmail.com" /><input type="hidden" name="iot" value="button" /><input type="image"src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar.gif"name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></form><!-- FINAL FORMULARIO BOTAO PAGSEGURO -->',
    })
}