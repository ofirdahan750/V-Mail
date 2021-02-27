export default {
    template: `
    <section>
    <input placeholder = "search mail..." v-model="filterEmail" @keydown="setFliter"/>
    <label for="emailFliter">Fliter by:
    <select>
    <option>ALL</option>
<option value="read">READ</option>
<option value="unread">UNREAD</option>
    </select>
    </label>
</section>
`,
data() {
    return {
        filterEmail:''
    }
},
methods: {
    setFliter() {
        console.log('filterEmail:',this.filterEmail)
    }
 }
}





{/* <select>
<option value="" disabled selected>Sort By</option>
<option value="recent">All</option>
<option value="lasted">All</option>
<select > */}