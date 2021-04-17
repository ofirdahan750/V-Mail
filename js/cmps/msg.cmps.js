import {eventBus} from "../services/event-bus.service.js"
export default {
    template: `
    <section class="msg-send" v-if="msg">
       <button @click="msg=null">X</button>
       <p>{{msg.txt}}</p>
    </section>
    `
,

data() {
    return {
        msg:null
    }
},
methods: {
    setMsg(msg) {
        this.msg = msg
        setTimeout(() => {
            this.msg = null
        }, 1500);
    }
},
created() {
    eventBus.$on('show-msg', this.setMsg)
},
}