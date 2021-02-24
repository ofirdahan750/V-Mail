import {emailService} from '../email-services/email.service.js'
import emailFliter from '../cmps/email-filter.cmp.js';

export default {
    template: ` <section class="email-app">
        <h1>welcome to P-mail</h1>
        <email-fliter/>
    </section>
    `
,
data() {
    return {
        emails:[]
    }
},
methods: {
    loadEmails() {
       emailService.query().then(emails=>
        this.emails = emails)
    }
}
,
created() {
    this.loadEmails()
},
components: {
    emailFliter,
    emailService
}
}