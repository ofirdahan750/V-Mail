import appHeader from './cmps/app-header.cmp.js'
import { myRouter } from './routes.js';
const options = {
    el: '#app',
    router: myRouter,
    template: `
    <div>
        <app-header></app-header>
    </div>
    `,
    components: {
        appHeader
    }
}


new Vue(options)