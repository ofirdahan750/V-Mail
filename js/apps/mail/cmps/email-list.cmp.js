import emailPreview from './email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'
export default {
    props: ['emails'],
    template: `
<ul>
    <li v-for="email in emails" :key="email.id" :class="{'email-read':!email.isRead,'email-unread':email.isRead}">
        <email-preview  v-if="!email.isOpen" @click.native="openCurrMail(email.isRead,email.id)":email="email"/>
    <email-details v-else="email.isOpen" :email="email" @click.native="openCurrMail(email.isRead,email.id)"/>
        <button @click="read(email.id)">read</button>
    <button @click="remove(email.id)">delete</button>
    <button> <router-link :to="'/email/compose/'+email.id">Re</router-link></button>
    </li>
</ul>
    `,
    // data() {
    //     return {
    //         isRead:false
    //     }
    // },
    methods: {
        read(emailId) {
            this.$emit('read',emailId)
        },
        remove(emailId) {
            this.$emit('remove', emailId)
        },
        openCurrMail(emailIsRead,emailId) {
       if(!emailIsRead) {
        this.$emit('read',emailId)
       }
       this.$emit('openCurrMail', emailId)

        }
    },
    components: {
        emailPreview,
        emailDetails
    },
    }