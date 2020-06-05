// Execução
getStates()

// Monitora o select "states" e quando existe uma mudança(change), executa a função getCities.
document.querySelector("select[name=states]").addEventListener("change", getCities)

// Função para obter a lista de estados do brasil através da API do IBGE[JSON]
function getStates() {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    const statesSelect = document.querySelector("select[name=states]");

    fetch(url)
        .then(res => res.json())
        .then(states => {
            for (state of states) {
                statesSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
            }
        });
}

// Função para obter a lista de municípios de cada estado através da API do IBGE[JSON]
function getCities(event) {
    const uf = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    const citiesSelect = document.querySelector("select[name=cities]")
    const inputState = document.querySelector("input[name=state]");

    inputState.value = event.target.options[event.target.selectedIndex].label

    citiesSelect.innerHTML = ""

    fetch(url)
        .then(res => res.json())
        .then(citiesList => {
            for (city of citiesList) {
                citiesSelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
            }

            citiesSelect.disabled = false
        });
}