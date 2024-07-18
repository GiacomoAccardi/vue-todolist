/*
1.Creare il layout della pagina
2.stilizzare la pagina e il suo contenuto statico
3.Creare un array di oggetti che contenga i "to do"
4.sostituire con gli elementi dell'array il contenuto statico nel DOM
5.in base al valore dello stato di ogni item nell'array l'elemento si posizionerà sotto la sezione "todo" o sotto la sezione "done"
6.creare una funzione che permetta di rimuovere un "todo"
7.Creare un campo di input che permetta l'inserimento di un "todo"
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: null,
            todoes: [
                {
                    text: 'imparare html',
                    done: true
                },
                {
                    text: 'imparare css',
                    done: true
                },
                {
                    text: 'imparare Javascript',
                    done: false
                },
                {
                    text: 'imparare Php',
                    done: false
                },
                {
                    text: 'Creare un sito',
                    done: false
                },
            ]
        }
    },
    methods: {
        cancel(index){
            this.todoes.splice(index, 1);
        },
        add(){
            let obj = {
                text: this.newTask,
                done: false
            };
            this.todoes.push(obj);

            this.newTask = null
        }
    }
}).mount('#app');