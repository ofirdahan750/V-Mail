import { emailService } from '../email-services/email.service.js';
import emailFliter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'

export default {
    template: `
     <section class="email-app">
        <h1>welcome to P-mail</h1>
        <email-status :emails="emails"/>
        <email-fliter/>
        <email-list v-if="emails.length" :emails="emails" @remove="removeEmail" @read="markAsReadEmail" @openCurrMail="toggleEmailOpen" />
        
        

    </section>
    `
    ,
    data() {
        return {
            emails: []
        }
    },
    methods: {
        loadEmails() {
            emailService.query().then(emails =>
                this.emails = emails)
        },
        removeEmail(emailId) {
            emailService.remove(emailId)
                .then(this.loadEmails)
        },
        markAsReadEmail(emailId) {
            const idx = (email) => email.id === emailId
            const foundMail = this.emails.findIndex(idx)
            this.emails[foundMail].isRead = !this.emails[foundMail].isRead
            emailService.save(this.emails[foundMail]).then(this.loadEmails)
        },
        toggleEmailOpen(emailId) {
            const idx = (email) => email.id === emailId
            const foundMail = this.emails.findIndex(idx)
            this.emails[foundMail].isOpen = !this.emails[foundMail].isOpen
            emailService.save(this.emails[foundMail]).then(this.loadEmails)
            
        }

    },

    mounted() {
        this.loadEmails()
    },
    components: {
        emailFliter,
        emailService,
        emailList,
        emailStatus
    }
}