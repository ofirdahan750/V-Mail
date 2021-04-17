export default {
    props: ['countingRead'],
    template: `
    <section>
    <progress  :value="countingRead" max="100"></progress>
    <div> {{countingRead}}%</div>
    </section>
`
,
data() {
    return {
        test: this.countingRead
    }
},

}
