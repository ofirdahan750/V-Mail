import { emailService } from '../email-services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
import emailBtn from '../cmps/email-btn.cmps.js'

export default {
    template: `
     <section class="email-app">
        <h1>welcome to P-mail</h1>
        <email-status :countingRead="countingRead" @setmail="setMail"/>
        <email-filter @filter="setFilter"/>
        <email-list :emails="showEmail" @remove="removeEmail" @read="markAsReadEmail" @openCurrMail="toggleEmailOpen" />
        <email-btn/>

    </section>
    `
    ,
    data() {
        return {
            emails: [],
            filterBy: {
                txtInput: '',
                filterInbox: 'all'
            },
            inboxOrSend: null,
            counting: 0
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
            emailService.save(this.emails[foundMail])
                .then(this.loadEmails).then(this.countingRead)
        },
        toggleEmailOpen(emailId) {
            const idx = (email) => email.id === emailId
            const foundMail = this.emails.findIndex(idx)
            this.emails[foundMail].isOpen = !this.emails[foundMail].isOpen
            emailService.save(this.emails[foundMail]).then(this.loadEmails)

        },
        setFilter(filterEmail) {
            this.filterBy = filterEmail
        },
        setMail(val) {
            (val === 'inbox') ? this.inboxOrSend : !this.inboxOrSend
        }
        

    },
    computed: {
        showEmail() {
            if (!this.filterBy.txtInput && this.filterBy.filterInbox === 'all') return this.emails.filter(email => (this.inboxOrSend) ? email.isInbox : !email.isInbox)
            let filterEmail = this.emails.filter(email =>
                email.title.toLowerCase().includes(this.filterBy.txtInput.toLowerCase()) ||
                email.text.toLowerCase().includes(this.filterBy.txtInput.toLowerCase())
            )
            if (this.filterBy.filterInbox === 'all') return filterEmail.filter(email => (this.inboxOrSend) ? email.isInbox : !email.isInbox)
            if (this.filterBy.filterInbox === 'read') return filterEmail.filter(email => email.isRead && (this.inboxOrSend) ? email.isinbox : !email.isInbox)
            if (this.filterBy.filterInbox === 'unread') return filterEmail.filter(email => !email.isRead && (this.inboxOrSend) ? email.isinbox : !email.isInbox)
        },
        countingRead() {
            let allReadedEmail = this.emails.filter(email => !email.isRead)
           let res = allReadedEmail.length / this.emails.length * 100
            return res.toFixed(2)
        }
    },


    mounted() {
        this.loadEmails()
    },

    components: {
        emailFilter,
        emailService,
        emailList,
        emailStatus,
        emailBtn
    }
}