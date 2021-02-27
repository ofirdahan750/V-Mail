export default {
    template: `
    <section>
    <button> <router-link :to="'/email/compose/'">compose</router-link></button>
    <div @click="setMail('inbox')">
    inbox
    </div>
    </section>
    `
,

methods: {
    fliterInbox(val) {
        this.$emit('setmail',val)
    }
}

}