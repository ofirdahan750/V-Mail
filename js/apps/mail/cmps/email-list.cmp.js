import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
<ul>
    <li v-for="email in emails" :key="email.id" :class="mailRead">
        <email-preview :email="email"/>
        <button @click="read(email.id)">read</button>
    <button @click="remove(email.id)">delete</button>
    <button @click="re(email.id)">re</button>
    </li>
</ul>
    `,
    components: {
        emailPreview
    },
    methods: {
        read(emailId) {
            this.$emit('read',emailId)
        },
        remove(emailId) {
            this.$emit('remove', emailId)
        }
    },
        computed: {
            mailRead() {
                return this.emails.read? 'email-read': 'email-unread'
            },
        }
    
}