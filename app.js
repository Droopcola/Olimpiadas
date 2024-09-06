function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de Atleta ou esporte.</p>"
        return
    }

        campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let Título = "";
    let Descrição = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        Título = dado.Título.toLowerCase()
        Descrição = dado.Descrição.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (Título.includes(campoPesquisa) || Descrição.includes(campoPesquisa) || tags.includes(campoPesquisa )) {
    // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.Título}</a> </h2>
                <p class="descricao-meta">${dado.Descrição}</p> <a href=${dado.Link} target="_blank">Mais informações</a> </div>
`;
        }
   
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  } 


