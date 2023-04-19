const fs = require('fs')




//========(PALAVRAS-DO-ANAGRAMA)=========\\

let adivinha = [
{
original: 'KUNG-FU PANDA',
embaralhada: '🐱🐍🐵🐼👊',
dica: 'FILME'
},
{
original: 'ALTAS AVENTURAS',
embaralhada: '🏠🎈👴👦',
dica: 'FILME'
},
{
original: 'SE BEBER NAO CASE',
embaralhada: '👨👉🍺❌👰', 
dica: 'FILMES'
},
{
original: 'ALANDDIN',
embaralhada: '👳💰🧞', 
dica: 'FILMES'
},
{
original: 'TRÊS SOLTEIRÕES E UM BEBÊ',
embaralhada: '👨👨👨👉😱👶', 
dica: 'FILMES'
},
{
original: 'O DIABO VESTE PRADO',
embaralhada: '👿👗👜', 
dica: 'FILMES'
},
{
original: 'PROCURANDO NEMO',
embaralhada: '🔎🐟', 
dica: 'FILMES'
},
{
original: 'HOMEM-ARANHA',
embaralhada: '🕷️🔵🔴',
dica: 'FILMES'
},
{
original: 'ET - O EXTRATERRESTRE',
embaralhada: '🌙🚲👉👈👽', 
dica: 'FILMES'
},
{
original: 'MIB - HOMENS DE PRETO',
embaralhada: '👽😎😎😎', 
dica: 'FILMES'
},
{
original: 'PANICO',
embaralhada: '😱🔪⚰️', 
dica: 'FILMES'
},
{
original: 'ESQUECERAM DE MIN',
embaralhada: '👩👨✈️➡️😱👦🏠', 
dica: 'FILMES'
},
{
original: 'QUATRO AMIGAS E UM JEANS VIAJANTE',
embaralhada: '💁💁💁💁✈️👖', 
dica: 'FILMES'
},
{
original: 'COMER, REZAR, AMAR',
embaralhada: '🍴🙏💗', 
dica: 'FILMES'
},
{
original: 'VELOZES E FURIOSOS',
embaralhada: '🚗💨😠', 
dica: 'FILMES'
},
{
original: 'ONZE HOMENS E UM SEGREDO',
embaralhada: '👨👨👨👨👨👨👨👨👨👨👨🙊', 
dica: 'FILMES'
},
{
original: 'O NÁUFRAGO',
embaralhada: '👨💗🏐', 
dica: 'FILMES'
},
{
original: 'O SENHOR DOS ANÉIS',
embaralhada: '👴💍💍💍💍', 
dica: 'FILMES'
},
{
original: 'FORMIGUINHAZ',
embaralhada: ' 🐜🐜🐜💤', 
dica: 'FILMES'
},
{
original: 'AMERICAN PIE',
embaralhada: '🇺🇸🍰', 
dica: 'FILMES'
},
{
original: 'O REI LEÃO',
embaralhada: '👑🦁', 
dica: 'FILMES'
},
{
original: 'OS CAÇA-FANTASMAS',
embaralhada: '🔎👻', 
dica: 'FILMES'
},
{
original: 'O PLANETA DOS MACACOS',
embaralhada: '🌎🐵🐵🐵', 
dica: 'FILMES'
},
{
original: 'O FANTASMAS DA ÓPERA',
embaralhada: '👻🎤🎼🎶', 
dica: 'FILMES'
},
{
original: 'CIDADE DOS ANJOS',
embaralhada: '🏬🏭🏢🏥😇😇', 
dica: 'FILMES'
},
{
original: 'DE REPENTE 30',
embaralhada: '👧✨➡️👩', 
dica: 'FILMES'
},
{
original: 'TITANIC',
embaralhada: '🚢', 
dica: 'FILMES'
},
{
original: 'QUATRO CASAMENTOS E UM FUNERAL',
embaralhada: '💍💍💍💍⚰️', 
dica: 'FILMES'
},
{
original: 'O SEXTO SENTIDO',
embaralhada: '👂🖐️👀👅👃6', 
dica: 'FILMES'
},
{
original: 'O SILENCIO DOS INOCENTES',
embaralhada: '🙊👶👶', 
dica: 'FILMES'
},
{
original: 'BATMAN',
embaralhada: '🤵‍♂️🦇', 
dica: 'FILMES'
},
{
original: 'A BELA E A FERA',
embaralhada: '👩‍🦰🥀👹', 
dica: 'FILMES'
},
{
original: 'BEE MOVIES',
embaralhada: ' 🐝📽', 
dica: 'FILMES'
},
{
original: 'O ADVOGADO DO DIABO',
embaralhada: '👨‍💼👨‍⚖️👿', 
dica: 'FILMES'
},
{
original: 'CORRA QUE A POLICIA VEM Aí',
embaralhada: '🏃.... 🚓', 
dica: 'FILMES'
},
]
module.exports = {adivinha}


