export default {
    template: `
    <section>
    <button> <router-link :to="'/email/compose/'">compose</router-link></button>
    <button @click="fliterInbox('inbox')">inbox</button>
    <button @click="fliterInbox('read')">send</button>
    
    
    </section>
    `
,

methods: {
    fliterInbox(val) {
        this.$emit('setmail',val)
    }
}

}