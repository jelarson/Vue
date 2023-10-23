const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTaskValue: '',
            showTask: true,
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        },
        toggleTasks() {
            this.showTask = !this.showTask;
        }
    },
    computed: {
        buttonCaption() {
            return this.showTask ? 'Hide List' : 'Show List';
        }
    }
});

app.mount('#assignment');