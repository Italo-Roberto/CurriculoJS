//Função escrever conteúdo
function escrever() {
    let titulo1 = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let natural = document.getElementById('natural').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let curso1 = document.getElementById('curso1').value
    let escola1 = document.getElementById('escola1').value
    let ano1 = document.getElementById('ano1').value
    let detalhe1 = document.getElementById('detalhe1').value
    let curso2 = document.getElementById('curso2').value
    let escola2 = document.getElementById('escola2').value
    let ano2 = document.getElementById('ano2').value
    let detalhe2 = document.getElementById('detalhe2').value

    let hab1 = document.getElementById('hab1').value
    let hab2 = document.getElementById('hab2').value

    document.getElementById('titulo-principal').innerHTML = titulo1
    document.getElementById('idade-atual').innerHTML = idade + ' anos'
    document.getElementById('naturalidade').innerHTML = 'Natural de: ' + natural
    document.getElementById('contato').innerHTML = telefone
    document.getElementById('mail').innerHTML = email
    document.getElementById('edu1').innerHTML = curso1
    document.getElementById('inst1').innerHTML = 'Instituição: ' + escola1
    document.getElementById('year1').innerHTML = 'Ano de conclusão: ' + '<b>' + ano1 + '</b>'
    document.getElementById('details1').innerHTML = detalhe1
    document.getElementById('edu2').innerHTML = curso2
    document.getElementById('inst2').innerHTML = 'Instituição: ' + escola2
    document.getElementById('year2').innerHTML = 'Ano de conclusão: ' + '<b>' + ano2 + '</b>'
    document.getElementById('details2').innerHTML = detalhe2


    document.getElementById('skill1').innerHTML = hab1
    document.getElementById('skill2').innerHTML = hab2

    let resultado1 = document.getElementById('nivel1').value
    switch (resultado1) {
        case 1:
            document.write('Nível de conhecimento 25%')
            break;
        case 2:
            document.write('Nível de conhecimento 50%')
            break;
        case 3:
            document.write('Nível de conhecimento 75%')
            break;
        case 4:
            document.write('Nível de conhecimento 100%')
            break;
    
        default:
            break;
    }
    document.getElementById('level1').innerHTML = resultado1

    let resultado2 = document.getElementById('nivel2').value
    switch (resultado2) {
        case 1:
            '25%'
            break;
        case 2:
            '50%'
            break;
        case 3:
            '75%'
            break;
        case 1:
            '100%'
            break;
    
        default:
            break;
    }
    document.getElementById('level2').innerHTML = resultado2
}

//Função para apagar conteúdo
function apagar() {
    document.getElementById('titulo-principal').innerHTML = ''
    document.getElementById('idade-atual').innerHTML = ''
    document.getElementById('naturalidade').innerHTML = ''
    document.getElementById('contato').innerHTML = ''
    document.getElementById('mail').innerHTML = ''
    document.getElementById('edu1').innerHTML = ''
    document.getElementById('inst1').innerHTML = ''
    document.getElementById('year1').innerHTML = ''
    document.getElementById('details1').innerHTML = ''
    document.getElementById('edu2').innerHTML = ''
    document.getElementById('inst2').innerHTML = ''
    document.getElementById('year2').innerHTML = ''
    document.getElementById('details2').innerHTML = ''
}