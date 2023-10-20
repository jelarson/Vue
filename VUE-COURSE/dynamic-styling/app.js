const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        boxSelected(box) {
            console.log('here');
            this.boxASelected = false;
            this.boxBSelected = false;
            this.boxCSelected = false;
            if (box === 'A') {
                this.boxASelected = true;
            } else if (box === 'B') {
                this.boxBSelected = true;
            } else if (box === 'C') {
                this.boxCSelected = true;
            }
        }
    },
    computed: {
        boxAClasses() {
            return {active: this.boxAselected};
        },
        boxBClasses() {
            return {active: this.boxBselected};
        },
        boxCClasses() {
            return {active: this.boxCselected};
        }
    }
})

app.mount('#styling');