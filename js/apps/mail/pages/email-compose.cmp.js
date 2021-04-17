import { eventBus } from '../../../services/event-bus.service.js';
import { emailService } from '../email-services/email.service.js';

export default {
    template: `
     <section class="email-compose" v-if="emailToCompose">
         <h1>Email Compose!</h1>
         <input type="text" Placeholder="To:" v-model="emailToCompose.from" /> 
             <input type="text" Placeholder="Title" v-model="emailToCompose.title"/> 
       <textarea rows="18" cols="50" placeholder="email text" v-model="emailToCompose.text"></textarea>
       <button @click="send">send</button>
</label> 
    </section>
    `,
    data() {
        return {
            emailToCompose: null
        }
    },
    methods: {
        addToRe() {
            this.emailToCompose.title = `re:${this.emailToCompose.title}`
            this.emailToCompose.text = `send at:${this.emailToCompose.year}/${this.emailToCompose.mouth}/${this.emailToCompose.day} ${this.emailToCompose.hour}:${this.emailToCompose.min} 
from:${this.emailToCompose.from}
${this.emailToCompose.text}`
        },
        send() {
            this.emailToCompose.isRead = false
            this.emailToCompose.isInbox = false
            this.emailToCompose.year = new Date().getUTCFullYear()
            this.emailToCompose.mouth = (new Date().getUTCMonth() + 1 <= 9) ? `0${new Date().getUTCMonth() + 1}` : new Date().getUTCMonth() + 1
            this.emailToCompose.hour = (new Date().getHours() <= 9) ? `0${new Date().getHours()}` : new Date().getHours()
            this.emailToCompose.min = (new Date().getUTCMinutes() <= 9) ? `0${new Date().getUTCMinutes()}` : new Date().getUTCMinutes()
            emailService.post(this.emailToCompose)
                .then(email => {
                    const msg = {
                        txt: 'message send succussfuly!',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg)
                    this.$router.push('/email')

                })
        }
    },
    computed: {
        emailId() {
            return this.$route.params.emailId
        },

    },

    components: {
        emailService
    },
    mounted() {
        if (this.emailId) {
            emailService.getById(this.emailId)
                .then(email => this.emailToCompose = email)
                .then(this.addToRe)

        } else {
            this.emailToCompose = emailService.getEmptyMail()
        }
    },

}