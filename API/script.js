fetch('https://raw.githubusercontent.com/TavinV/api-discos/main/dados.json').then(resposta => resposta.json()).then(corpo => {
    var album_ontem_eu_tinha_certeza = corpo[0]
    var album_coisas_da_geracao = corpo[1]
    var album_qvvjfa = corpo[2]

    document.getElementById('nome').innerHTML = album_ontem_eu_tinha_certeza.nome
    document.getElementById('imagem').innerHTML = album_ontem_eu_tinha_certeza.image
    document.getElementById('disco').innerHTML = album_ontem_eu_tinha_certeza.album
    document.getElementById('preco').innerHTML = album_ontem_eu_tinha_certeza.preco
    document.getElementById('estilo').innerHTML = album_ontem_eu_tinha_certeza.estilo
    
    document.getElementById('nome2').innerHTML = album_coisas_da_geracao.nome
    document.getElementById('imagem2').innerHTML = album_coisas_da_geracao.image
    document.getElementById('disco2').innerHTML = album_coisas_da_geracao.album
    document.getElementById('preco2').innerHTML = album_coisas_da_geracao.preco
    document.getElementById('estilo2').innerHTML = album_coisas_da_geracao.estilo
    
    document.getElementById('nome3').innerHTML = album_qvvjfa.nome
    document.getElementById('imagem3').innerHTML = album_qvvjfa.image
    document.getElementById('disco3').innerHTML = album_qvvjfa.album
    document.getElementById('preco3').innerHTML = album_qvvjfa.preco
    document.getElementById('estilo3').innerHTML = album_qvvjfa.estilo

})