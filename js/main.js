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
        <router-view class="main-app"/>
        <footer>        
            <section class="copyright">
            <i class="far fa-copyright"></i> COPYRIGHT 2020-All rights reserved <i class="far fa-copyright"></i>
        </section>
    </footer>
    </section>
    `,


    components: {
        appHeader,
        userMsg
    }
}


new Vue(options)