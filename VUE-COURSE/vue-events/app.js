const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: 'Jesse',
            confirmedName: '',
            lastname: '',
            fullname2: '',
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        minus(num) {
            this.counter = this.counter - num;
        },
        setName(event) {
            this.name = event.target.value;
        },
        submitForm(event) {
            // event.preventDefault();
            alert('Submitted!');
        },
        confirmInput() {
            this.confirmedName = this.name
        },
        resetInput() {
            this.name = '';
        },
    },
    computed: {
        // outputFullname() {
        //     if (this.name === '') {
        //         return '';
        //     } else {
        //         return this.name + ' ' + 'Larson';
        //     }
        // },
        fullname() {
            if (this.name === '') {
                return '';
            } else {
                return this.name + ' ' + this.lastName;
            }
        }
    },
    watch: {
        name(value) {
            // whenever 'name' changes, the watcher will be executed
            if (value === '') {
                this.fullname2 = '';
            } else {
                this.fullname2 = value + ' ' + this.lastName;
            }
        },
        lastName(value) {
            // whenever 'name' changes, the watcher will be executed
            if (value === '') {
                this.fullname2 = '';
            } else {
                this.fullname2 = this.name + ' ' + value;
            }
        },
        counter(value) {
            if (value > 15) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                }, 2000);
            }
        }
    }
});

app.mount('#events');