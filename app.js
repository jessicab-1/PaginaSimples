// Comportamento e interatividade


//ativando o modo estrito pra reduzir erros silenciosos, melhora o desempenho...
'use strict'

// referenciando o botão
const switcher = document.querySelector('.btn');

// adicionando um ouvindo e um manipulador para o evento click
//adicionando o ouvinte para o evento click
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // método toggle modifica a classe do body, ele aciona ou remove automaticamente
    // as classes light e dark theme


    //atualizar o rótulo do botão mostrando o tema correto
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Escuro";
    } 
    else{
        this.textContent = "Claro";
    }
    

    //console.log('current class name: ' + className);
});

