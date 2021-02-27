import emailPreview from './email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'
export default {
    props: ['emails'],
    template: `
    
<ul v-if ="emails.length">
    <li v-for="email in emails"  :key="email.id" class ="clean-list":class="{'email-read':!email.isRead,'email-unread':email.isRead}">
        <email-preview  v-if="!email.isOpen" @click.native="openCurrMail(email.isRead,email.id)":email="email"/>
    <email-details v-else :email="email" @click.native="openCurrMail(email.isRead,email.id)"/>
        <button @click="read(email.id)" :class="{'fas fa-envelope-open':!email.isRead,'far fa-envelope-open':email.isRead}"></button>
    <button class="fas fa-trash-alt" @click="remove(email.id)"></button>
  <button><router-link class="fas fa-reply" :to="'/email/compose/'+email.id"></router-link></button> 
    </li>
</ul>
<h1 v-else>No email to show...</h1>
    `,
    methods: {
        read(emailId) {
            this.$emit('read', emailId)
        },
        remove(emailId) {
            this.$emit('remove', emailId)
        },
        openCurrMail(emailIsRead, emailId) {
            if (!emailIsRead) {
                this.$emit('read', emailId)
            }
            this.$emit('openCurrMail', emailId)

        }
    },
    components: {
        emailPreview,
        emailDetails
    },
}