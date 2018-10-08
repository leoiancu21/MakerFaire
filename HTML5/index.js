var vm = new Vue({
    el: '#app',

    data: {
        elettrodomestici: [],
        nome: null,
        stato: null,
        consumo: null,
        priorita: null,
    },

    computed: {

        feedback() {
            if (!this.elettrodomestici.length) {
                return "Attenzione, se invii i dati adesso cancellerai tutto nel server"
            } else {
                return null;
            }
        }
    },

    methods: {
        submitHandler() {

            let elettrodomestico = {
                nome: this.nome,
                stato: this.stato,
                consumo: this.consumo,
                priorita: this.priorita,
            }

            this.elettrodomestici.push(elettrodomestico);
            this.nome = this.stato = this.consumo = this.priorita = null;
        },

        eraseHouseholdAppliance(elettrDaRimuovere) {
            this.elettrodomestici = this.elettrodomestici.filter((e) => {
                return elettrDaRimuovere !== e;
            });
        },

        sendData() {
            // this.elettrodomestici è l'array contenente 
            // gli oggetti elettrodomestico

            // console.log(this.elettrodomestici) stampa
            // gli elettrodomestici, ma le proprietà sono particolari a casua di vue.js

            // per visualizzare il contenuto fare così:
        //     for (e of this.elettrodomestici) {
        //       console.log(e.nome, e.stato, e.consumo, e.priorita);
        // }

        // inserire codice per comunicare col server 

        },
    }
})