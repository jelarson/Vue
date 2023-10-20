const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            targetNum: 37,
        };
    },
    methods: {
        add(num) {
            this.counter += num;
        },
    },
    computed: {
        getMsg() {
            if (this.counter > this.targetNum) {
                return this.counter + " is too high";
            } else if (this.counter < this.targetNum) {
                return this.counter + " is too low";
            } else {
                return this.counter + " is juuuust right";
            }
        }
    },
    watch: {
        getMsg() {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000)
        }
    }
});

app.mount('#assignment');