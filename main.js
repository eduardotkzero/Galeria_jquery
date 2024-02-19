const form = document.getElementById('form-contato');
let linhas = '';

 


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome= document.getElementById ('input-nome')
    const inputTelefone= document.getElementById ('input-telefone')
    
    
    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    linhas += '';
   
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    
})