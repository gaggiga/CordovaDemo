// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    window.addEventListener('resize', resizeFont);
    
    function resizeFont() {
        var buttons = document.getElementsByTagName('button');
        var buttonHeight = parseInt(buttons[0].offsetHeight);
        var fontSize = Math.round(buttonHeight * 0.5) + "px";

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.fontSize = fontSize;
        }


        var casellaHeight = parseInt(casella.offsetHeight);

        casella.style.fontSize = Math.round(casellaHeight * 0.4) + "px";
        casella.style.lineHeight = casellaHeight + "px";
    }

    var calcolatrice = new Calcolatrice();
    var casella = document.getElementById('casella');
    var cifre = getElementsByClass('cifra');
    var operazioni = getElementsByClass('operazione');
    var i;

    for (i in cifre) {
        cifre[i].onclick = function (e) {
            calcolatrice.nuovaCifra(e.target.innerText);
            e.target.blur();
        }
    }

    for (i in operazioni) {
        operazioni[i].onclick = function (e) {
            calcolatrice.nuovaOperazione(e.target.innerText);
            e.target.blur();
        }
    }

    calcolatrice.addListenerTestoCambiato(testoCambiato);

    function testoCambiato(event) {
        casella.innerText = calcolatrice.testo;
    }

    function getElementsByClass(matchClass) {
        var elems = document.getElementsByTagName('button'), result = [], i;

        for (i in elems) {
            if ((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
                result.push(elems[i]);
            }
        }

        return result;
    }

    resizeFont();
} )();