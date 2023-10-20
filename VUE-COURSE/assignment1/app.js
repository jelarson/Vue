const app = Vue.createApp({
    data() {
        return {
            age: 30,
            name: 'Jesse',
            imageSrc: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-08/4/15/asset/buzzfeed-prod-fastlane-01/sub-buzz-18117-1501873567-2.jpg',
        };
    },
    computed: {
        outputAgePlus5() {
            return this.age +5;
        },
        randomNum() {
            return Math.random();
        }
    }
});

app.mount('#assignment');