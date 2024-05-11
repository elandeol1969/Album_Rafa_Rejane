document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.getElementById('galeria');
    const fotos = [
        {
            "link": "foto1.jpg",
            "descrição": "Simpatia"
        },
        {
            "link": "foto2.jpg",
            "descrição": "Afeto"
        },
        {
            "link": "foto3.jpg",
            "descrição": "Descontração"
        },
        {
            "link": "foto4.png",
            "descrição": "Diversão"
        },
        {
            "link": "foto5.jpg",
            "descrição": "Amor"
        },
        {
            "link": "foto6.jpg",
            "descrição": "Gratidão"
        }
    ];

    fotos.forEach(foto => {
        const divFoto = document.createElement('div');
        divFoto.classList.add('foto');
        divFoto.innerHTML = `
            <img src="${foto.link}" alt="${foto.descrição}">
            <div class="descricao">${foto.descrição}</div>
        `;
        galeria.appendChild(divFoto);
    });
});
