export default {
    props: ['email'],
    template: `
    <section>
        
    {{email.from}} ||{{email.title}} || {{this.email.hour}}:{{this.email.min}}
    </section>
    `
    
}