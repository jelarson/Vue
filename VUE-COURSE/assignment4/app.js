const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            showParagraph: true,
            bgColor: '',
        }
    },
    methods: {
        toggleShowParagraph() {
            this.showParagraph = !this.showParagraph;
        }
    },
    computed: {
        paraClasses() {
            return { user1: this.userInput == 'user1', user2: this.userInput == 'user2', visible: this.showParagraph, hidden: !this.showParagraph }
        }
    }
})

app.mount('#assignment');