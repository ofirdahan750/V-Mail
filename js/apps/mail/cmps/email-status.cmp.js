export default {
    props:['emails'],
    template: `
    <section>
    <div>{{calAllEmail}}</div>
    </section>
    `
,

data() {
    return {
        allEmailsLength: 0,
        allEmailnotread: 0
    }
},
// method: {
//     length() {
//       return this.emails
//     },
    computed: {
        calAllEmail() {
            this.allEmailsLength = this.emails.length
            let unRead = 0
            for (let i = 0 ; i < this.allEmailsLength ; i++) {
                if(this.emails.isRead) unRead++
            }
            return unRead//this.allEmailsLength
        }
    }
}