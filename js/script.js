const { createApp } = Vue;

createApp ({
    data() {
        return {
            mails:[],
            number: 0
        };
    },
    methods: {
        generateMail() {
            this.mails = [];
            for (let i = 0; i < this.number; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                    const mail = resp.data.response;
                    this.mails.push(mail);
                });
            }
        }
    },
    mounted() {
        this.generateMail();
    },
}).mount("#app");
