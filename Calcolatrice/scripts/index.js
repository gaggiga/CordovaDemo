// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    // L'elemento casella viene utilizzato più volte quindi vale la pena 
    // estrarlo in una variabile globale
    var casella = document.getElementById('casella');

    // Funzione che effettua il resize del font
    function resizeFont() {
        
        // Lettura dell'array button presenti nella pagina
        // e lettura dell'altezza effettiva assunta dal primo di essi
        var buttons = document.getElementsByTagName('button');
        var buttonHeight = parseInt(buttons[0].offsetHeight);

        // Calcolo del fontSize da impostare sui button pari al 50%
        // dell'altezza dei button stessi
        var fontSize = Math.round(buttonHeight * 0.5) + 'px';

        // Impostazione del font per ogni button presente nella pagina
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.fontSize = fontSize;
        }

        // Lettura dell'altezza effettiva assunta dalla casella
        var casellaHeight = parseInt(casella.offsetHeight);

        // Impostazione del font size al 40% dell'altezza contenitore
        // e del line-height al 100% dell'altezza del contenitore per centrare
        // il testo verticalmente
        casella.style.fontSize = Math.round(casellaHeight * 0.4) + 'px';
        casella.style.lineHeight = casellaHeight + 'px';
    }

    // Chiamata alla funzione di resize del font al variare delle dimensioni della finestra
    window.addEventListener('resize', resizeFont);
    // Prima chiamata alla funzione 
    resizeFont();

    // Istanza di calcolatrice
    var calcolatrice = new Calcolatrice();

    // Recupero dei button delle cifre e delle operazioni
    var cifre = getElementsByClass('cifra');
    var operazioni = getElementsByClass('operazione');

    // Gestione del click sulle cifre
    for (var i = 0; i < cifre.length; i++) {
        cifre[i].addEventListener('click', function (e) {
            calcolatrice.nuovaCifra(e.target.innerText);
            e.target.blur();
        });
    }

    // Gestione del click sulle operazioni
    for (var i = 0; i < operazioni.length; i++) {
        operazioni[i].addEventListener('click', function (e) {
            calcolatrice.nuovaOperazione(e.target.innerText);
            e.target.blur();
        });
    }

    // Gestione dell'evento testoCambiato
    calcolatrice.addListenerTestoCambiato(function (e) {
        casella.innerText = calcolatrice.testo;
    });

    function getElementsByClass(matchClass) {
        var elems = document.getElementsByTagName('button'), result = [], i;

        for (i in elems) {
            if ((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
                result.push(elems[i]);
            }
        }

        return result;
    }
} )();