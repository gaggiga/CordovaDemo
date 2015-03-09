// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var calcolatrice = new Calcolatrice();
    var cifre = getElementsByClass('cifra');
    var operazioni = getElementsByClass('operazione');
    var i;

    for (i in cifre) {
        cifre[i].onclick = function (e) {
            calcolatrice.nuovaCifra(e.target.innerText);
        }
    }

    for (i in operazioni) {
        operazioni[i].onclick = function (e) {
            calcolatrice.nuovaOperazione(e.target.innerText);
        }
    }

    calcolatrice.addListenerTestoCambiato("testoCambiato", testoCambiato);

    function testoCambiato(event) {
        var casella = document.getElementById('casella');
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
} )();