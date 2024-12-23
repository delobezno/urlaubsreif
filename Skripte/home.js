function Home() {
    /* Eigenschaften */
    this.quoteControl = {
        quoteItems: null,
        currentItem: 0,
        numberOfItems: 0,
        interval: null,
        repeatPeriod: 5000
    };
    /* Methoden */
    this.initialiseQuoteControl = function () {
        /* Alle Elemente in Zitatleiste anzeigen */
        let quoteItems = $(".quoteItem");
        /* Werte definieren */
        this.quoteControl.quoteItems = quoteItems;
        this.quoteControl.numberOfItems = quoteItems.length;
        /* Zitatschleife für weitere Elemente */
        let self = this;
        this.quoteControl.interval = setInterval(function () {
            self.showNextQuoteItem(self);
        }, this.quoteControl.repeatPeriod);
    }
    this.showNextQuoteItem = function (self) {
        /* Aktuelles Element ausblenden */
        $(self.quoteControl.quoteItems).eq(self.quoteControl.currentItem).fadeOut("slow", function () {
            /* Aktuellen Zitatelementzähler erhöhen */
            if (self.quoteControl.currentItem >= (self.quoteControl.numberOfItems -1)) {
                /* Zähler auf Null zurücksetzen */
                self.quoteControl.currentItem = 0;
            } else {
                /* Zähler um 1 erhöhen */
                self.quoteControl.currentItem++;
            }
            /* Nächstes Element einblenden */
            $(self.quoteControl.quoteItems).eq(self.quoteControl.currentItem).fadeIn("slow");
        });
    }
}
$(document).ready(function () {
    /* Instanziiert die neue Klasse Home */
    app.home = new Home();
    /* Zitatleiste initialisieren */
    app.home.initialiseQuoteControl();
});