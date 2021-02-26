import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/msg.cmps.js'
import { myRouter } from './routes.js';
const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section>
        <app-header/>
        <user-msg/>
        <router-view/>
        <footer><p> &copy; Coffeerights 2021</p></footer>
    </section>
    `,


    components: {
        appHeader,
        userMsg
    }
}


new Vue(options)