export default {
    template: `
    <section>
    <button> <router-link :to="'/email/compose/'">compose</router-link></button>
    <div @click="fliterInbox('inbox')">inbox</div>
    <div @click="fliterInbox('read')">read</div>
    
    
    </section>
    `
,

methods: {
    fliterInbox(val) {
        this.$emit('setmail',val)
    }
}

}