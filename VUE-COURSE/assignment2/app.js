const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedUserInput: '',
        };
    },
    methods: {
        showAlert() {
            alert('Hello from the alert!');
        },
        putUserInput(event) {
            this.userInput = event.target.value;
        },
        putConfirmedUserInput(event) {
            this.confirmedUserInput = event.target.value;
        }
    }
});

app.mount('#assignment');