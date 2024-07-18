/*
1.Creare il layout della pagina
2.stilizzare la pagina e il suo contenuto statico
3.Creare un array di oggetti che contenga i "to do"
4.sostituire con gli elementi dell'array il contenuto statico nel DOM
5.in base al valore dello stato di ogni item nell'array l'elemento si posizionerà sotto la sezione "todo" o sotto la sezione "done"
6.creare una funzione che permetta di rimuovere un "todo"
7.Creare un campo di input che permetta l'inserimento di un "todo"
*/

//creo un progetto in Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            //dichiaro che il valore dell'input text è nulo
            newTask: null,
            //creo un'array ad oggetti contentente le mie tasks
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
        cancel(index){ //creo la funzione per cancellare le task
            this.todoes.splice(index, 1); 
        },
        add(){  //creo la funzione per aggiungere le task
            let obj = {
                text: this.newTask,
                done: false
            };
            this.todoes.push(obj);

            //pulisco l'input text dopo l'aggiunta del task
            this.newTask = null
        }
    }
}).mount('#app');