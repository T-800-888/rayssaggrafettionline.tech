function openAulas() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="main-section"><br>
            <h2 class="section-title">Minhas Aulas</h2>
            <div class="cards">
                <div class="card" onclick="openMateria('experienciaCriativa')">
                    <h3>Experiência Criativa: Navegando na Computação</h3>
                </div>
                <div class="card" onclick="openMateria('fundamentosSC')">
                    <h3>Fundamentos de Sistemas Ciberfísicos</h3>
                </div>
                <div class="card" onclick="openMateria('logicaMatematica')">
                    <h3>Resolução de Problemas com Lógica Matemática</h3>
                </div>
                <div class="card" onclick="openMateria('raciocinioAlgoritmico')">
                    <h3>Raciocínio Algorítmico</h3>
                </div>
                <div class="card" onclick="openMateria('filosofia')">
                    <h3>Filosofia</h3>
                </div>
            </div>
        </div>
    `;
}

function openMateria(materia) {
    const mainContent = document.getElementById('main-content');
    let content = '';

    switch (materia) {
        case 'experienciaCriativa':
            content = `
                <h2>Experiência Criativa: Navegando na Computação</h2>
                <br><p>Esta disciplina é ofertada aos estudantes iniciantes 
                em Ciência da Computação. O<br>estudante desenvolve aplicativos, 
                utilizando ambientes de programação visual e de programação<br>
                script. Exercita conhecimentos nos domínios de jogos digitais, 
                multimídia e programação Web.<br>Tem oportunidade de aplicar 
                conhecimentos dos seguintes temas transversais: inovação, pesquisa,<br>
                empreendedorismo e internacionalização. Ao final, é capaz de 
                desenvolver aplicativos simples de forma colaborativa e no<br>
                contexto do mundo real.</p><br>
                <button onclick="window.open('https://drive.google.com/drive/folders/1DvDrXcS6zr53dy_FhKFwmV4gnYbZ9nmX')">Projeto 1: Fly Up</button>
                <button onclick="window.open('https://drive.google.com/drive/folders/1zJ6ymuusnt27pbsmcu57Qmh0r1hDPelk?usp=drive_link')">Projeto 2: Math Mania</button>
                <button onclick="window.open('https://drive.google.com/drive/folders/1pZneSZVFqz3gq7WWvb7eURxDY8ok7meu?usp=drive_link')">Projeto 3: Math Mania Web</button>
            `;
            break;
        case 'fundamentosSC':
            content = `
                <h2>Fundamentos de Sistemas Ciberfísicos</h2>
                <br><p>Esta disciplina, dirigida a acadêmicos de 1º período dos cursos de Bacharelado 
                em Sistemas de Informação (BSI), Bacharelado em Ciência da<br>;Computação (BCC), Bacharelado 
                em Engenharia de Software (BES) e Bacharelado em Cibersegurança (BCS), tem por referência<br>
                o estudo de módulos microprocessados, mecanismos de comunicação e serviços em nuvem aplicados 
                à Sistemas Ciber-Físicos e Internet das Coisas (IoT -<br>Internet of Things). Nela, os estudantes
                aprendem a relacionar arquiteturas, redes, sistemas operacionais e nuvem computacional.
                Ao final da disciplina,<br>são capazes de solucionar problemas estruturados integrando
                adequadamente configurações de hardware<br>e software aplicados ao mundo físico.</p><br>
                <button onclick="window.open('file:///C:/Users/User/Downloads/Sistemas%20Operacionais.pdf')">Pesquisa: Debian e SO's</button>
                <button onclick="window.open('link_projeto')">Projeto: ESP32</button>
            `;
            break;
        case 'logicaMatematica':
            content = `
                <h2>Resolução de Problemas<br>com Lógica Matemática</h2>
                <br><p>Esta disciplina, destinada aos estudantes de 1º período 
                de Bacharelado em Ciência da<br>Computação e Bacharelado em Sistemas 
                de Informação, trata de lógica matemática computacional. Ao longo<br>
                da disciplina, o estudante modela problemas estruturados do mundo 
                real, criando representações<br>e utilizando linguagem lógica. Ao 
                final da disciplina, o estudante é capaz de resolver problemas do<br>
                mundo real, selecionando adequados métodos de dedução e de provas 
                matemáticas.</p><br>
                <button onclick="window.open('https://drive.google.com/drive/folders/1XG6piNoYFn0q1P5eZ6-DBsBvwPTuha9K?usp=drive_link')">Projeto: A Mansão Cattons</button>
            `;
            break;
        case 'filosofia':
            content = `
                <h2>Filosofia</h2>
                <br><p>Esta disciplina, dirigida a acadêmicos de todos os cursos<br>
                da universidade, trata do ato de filosofar a partir dos princípios<br>
                da graduação (dedicação, autonomia e senso crítico). Nela os<br>
                estudantes refletem sobre a condição humana nas dimensões pessoal,<br>
                profissional e acadêmica, transformando opiniões em argumentos fundamentados.<br>
                Ao final, são capazes de planejar seu percurso formativo.</p><br>
                <button onclick="window.open('https://www.canva.com/design/DAGQqiSrzGs/-aLR1UC8iUd89_YQtR8_hg/edit')">Seminário: A Condição Humana</button>
            `;
            break;
        case 'raciocinioAlgoritmico':
            content = `
                <h2>Raciocínio Algorítmico</h2>
                <br><p>A disciplina de Raciocínio Algorítmico trata do desenvolvimento 
                do pensamento computacional<br>por meio da construção de algoritmos. 
                Durante o semestre os estudantes aprendem a manipular variáveis,<br>
                expressões lógico aritmético-relacionais, estruturas de controle, 
                estruturas de dados homogêneas e<br>funções para a resolução de problemas 
                computacionais na forma de algoritmos. Ao final da disciplina, o<br>
                estudante é capaz de implementar programas computacionais para problemas 
                de baixa complexidade, utilizando<br>linguagem de programação, com 
                autorregulação e atitude cooperativa.</p><br>
                <button onclick="window.open('https://github.com/T-800-888/2024.2/blob/1f9e14aed78a01a2b6dd303cc9cab938786d1938/TDE%204%3A%20Joquemp%C3%B4%20com%20Matriz')">Projeto 1: Joquempô</button>
                <button onclick="window.open('https://github.com/T-800-888/2024.2/blob/91f927f9fc71850d0b06a79848593e8ca626a7fc/TDE%207%3A%20M%C3%A1quina%20de%20bebidas')">Projeto 2: Máquina de Vendas</button>
            `;
            break;
    }

    mainContent.innerHTML = `
        <div class="main-section">
            ${content}
        </div>
    `;
}
