export default {
    props:['email'],
    template:`
    <section>
    <div>{{email.title}}</div>
    <div>from:{{email.from}} {{email.day}}/{{email.mouth}}/{{email.year}} {{email.hour}}:{{email.min}}</div>
    <div>Text:</div>
    <div>T{{email.text}}</div> 
    </section>
    `
}