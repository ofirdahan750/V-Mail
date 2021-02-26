import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js'
import compose from './apps/mail/pages/email-compose.cmp.js'
const routes = [
{
    path:'/',
    component: homePage,
},{
    path:'/email',
    component:emailApp
},{
    path:'/email/compose/:emailId?',
    component:compose
}
]

export const myRouter = new VueRouter({ routes });
