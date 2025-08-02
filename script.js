
       document.addEventListener('DOMContentLoaded', () => {

            // Seleciona os elementos da interface
            const btnAcessibilidade = document.getElementById('btnAcessibilidade');
            const menuAcessibilidade = document.getElementById('menuAcessibilidade');
            const btnAltoContraste = document.getElementById('btnAltoContraste');
            const btnAumentarFonte = document.getElementById('btnAumentarFonte');
            const btnDiminuirFonte = document.getElementById('btnDiminuirFonte');
            const body = document.body;

            // Define o tamanho da fonte inicial e os limites
            let tamanhoFonte = 16;
            const tamanhoMaximo = 24;
            const tamanhoMinimo = 12;

            // Adiciona um evento de 'click' para mostrar/esconder o menu de acessibilidade
            btnAcessibilidade.addEventListener('click', () => {
                menuAcessibilidade.classList.toggle('hidden');
            });

            // Adiciona um evento de 'click' para o modo de alto contraste
            btnAltoContraste.addEventListener('click', () => {
                body.classList.toggle('alto-contraste');
            });

            // Adiciona um evento de 'click' para aumentar a fonte
            btnAumentarFonte.addEventListener('click', () => {
                if (tamanhoFonte < tamanhoMaximo) {
                    tamanhoFonte += 2;
                    body.style.setProperty('--tamanho-da-fonte', `${tamanhoFonte}px`);
                }
            });

            // Adiciona um evento de 'click' para diminuir a fonte
            btnDiminuirFonte.addEventListener('click', () => {
                if (tamanhoFonte > tamanhoMinimo) {
                    tamanhoFonte -= 2;
                    body.style.setProperty('--tamanho-da-fonte', `${tamanhoFonte}px`);
                }
            });
        });
