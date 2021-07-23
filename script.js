function verificar() {
    let ano = prompt(`Qual é o ano que você quer verificar?`)
    if (ano.length == 0) {
        alert(`Por favor, digite um ano.`)
    } else {
        let anoReal = Number(ano)
        if (isNaN(anoReal) || anoReal <= 0) {
            alert(`Por favor, digite um ano correto.`)
        } else {
            let conteudo = document.getElementById('secao')

            if (anoReal % 400 == 0) {
                conteudo.innerHTML = `<h2>Analisando o ano de ${anoReal}...</h2>`
                conteudo.innerHTML += `<p class="paragrafos">O ano de ${anoReal} <mark class="bi">É BISSEXTO</mark> ✅</p>`
            } else if (anoReal % 100 == 0) {
                conteudo.innerHTML = `<h1>Analisando o ano de ${anoReal}...</h1>`
                conteudo.innerHTML += `<p class="paragrafos">O ano de ${anoReal} <mark class="naobi">NÃO É BISSEXTO</mark> ❌</p>`
            } else if (anoReal % 4 == 0) {
                conteudo.innerHTML = `<h1>Analisando o ano de ${anoReal}...</h1>`
                conteudo.innerHTML += `<p class="paragrafos">O ano de ${anoReal} <mark class="bi">É BISSEXTO</mark> ✅</p>`
            } else {
                conteudo.innerHTML = `<h1>Analisando o ano de ${anoReal}...</h1>`
                conteudo.innerHTML += `<p class="paragrafos">O ano de ${anoReal} <mark class="naobi">NÃO É BISSEXTO</mark> ❌</p>`
            }
        }
    }
} 