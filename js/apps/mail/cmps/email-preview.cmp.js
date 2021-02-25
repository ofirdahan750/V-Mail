export default {
    props: ['email'],
    template: `
    <section>
        
    {{email.from}} ||{{email.title}} || {{isHourZero}}{{this.email.hour}}:{{isMinZero}}{{this.email.min}}
    </section>
    `,
    computed: {
        isMinZero() {
            if (this.email.min <= 9) return '0'
        },
        isHourZero() {
            if (this.email.hour <= 9) return '0'
        }
    },


    
}