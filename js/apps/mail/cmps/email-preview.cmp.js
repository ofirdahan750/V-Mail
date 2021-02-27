export default {
    props: ['email'],
    template: `
    <section>
        
    {{email.from}} ||{{titleTrim}} || {{this.email.hour}}:{{this.email.min}}
    </section>
    `,
    computed: {
        titleTrim() {
        const titleTrim = this.email.title
        return  titleTrim.substring(0, 9) + '...'
        }
    }

}