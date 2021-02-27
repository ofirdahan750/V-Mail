export default {
    template: `
    <section>
    <form  @keyup.prevent="setFilter">
    <input placeholder = "search mail..." v-model="filterEmail.txtInput"/>
    </form>
    <label> Filter Email:
    <select v-model="filterEmail.filterInbox"  @change="setFilter">
    <option value="all" selected>ALL</option>
    <option value="unread">UNREAD</option>
    <option value="read">READ</option>
    </select>
    </label>
    
</section>
`,
data() {
    return {
        filterEmail: {
            txtInput:'',
            filterInbox: 'all'
        }
    }
},
methods: {
    setFilter() {
            this.$emit('filter',this.filterEmail)
    }
 }
}





{/* <select>
<option value="" disabled selected>Sort By</option>
<option value="recent">All</option>
<option value="lasted">All</option>
<select > */}