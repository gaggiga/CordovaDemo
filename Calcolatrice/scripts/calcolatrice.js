var Calcolatrice = (function () {
    function Calcolatrice() {
        this.valorePrecedente = 0;
        this.valoreCorrente = 0;
        this.operazione = "";
        this.testo = "0";
        this.listeners = [];
    }

    Calcolatrice.prototype = {
        constructor: Calcolatrice,
        nuovaCifra: nuovaCifra,
        azzera: azzera,
        nuovaOperazione: nuovaOperazione,
        addListenerTestoCambiato: addListenerTestoCambiato,
        fireTestoCambiato: fireTestoCambiato,
        removeListenerTestoCambiato: removeListenerTestoCambiato
    }

    return Calcolatrice;

    function nuovaCifra(cifra) {
        if (this.operazione === "=") {
            this.operazione = "";
            this.valorePrecedente = 0;
        }

        if (cifra === "0" && this.valoreCorrente == 0) return;

        if (cifra === ".") {
            if (this.testo.indexOf(".") > -1) return;

            if (!this.testo) {
                this.testo = "0";
            }
        }

        if (this.valoreCorrente == 0 && cifra != ".") {
            this.testo = cifra;
        } else {
            this.testo += cifra;
        }

        this.valoreCorrente = parseFloat(this.testo);
        this.fireTestoCambiato();
    }

    function azzera(testo) {
        this.testo = testo;
        this.operazione = "";
        this.valoreCorrente = 0;
        this.valorePrecedente = 0;
        this.fireTestoCambiato();
    }

    function nuovaOperazione(operazione) {
        var valore = this.valoreCorrente;
        this.valoreCorrente = 0;

        switch (this.operazione) {
            case "÷":
                if (valore === 0) {
                    this.azzera("Non posso dividere per zero");
                } else {
                    this.valorePrecedente = this.valorePrecedente / valore;
                }
                break;
            case "×":
                this.valorePrecedente = this.valorePrecedente * valore;
                break;
            case "+":
                this.valorePrecedente = this.valorePrecedente + valore;
                break;
            case "-":
                this.valorePrecedente = this.valorePrecedente - valore;
                break;
            case "=":
                break;
            default:
                this.valorePrecedente = valore;
        }

        this.operazione = operazione;
        this.testo = this.valorePrecedente.toString();
        this.fireTestoCambiato();
    }

    function addListenerTestoCambiato(listener) {
        this.listeners.push(listener);
    }

    function fireTestoCambiato() {
        var event = { type: 'testoCambiato', target: this };

        for (var i = 0, len = this.listeners.length; i < len; i++) {
            this.listeners[i].call(this, event);
        }
    }

    function removeListenerTestoCambiato(listener) {
        for (var i = 0, len = this.listeners.length; i < len; i++) {
            if (this.listeners[i] === listener) {
                this.listeners.splice(i, 1);
                break;
            }
        }
    }
})();