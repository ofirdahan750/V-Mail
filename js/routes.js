import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/mail/pages/email-app.cmp.js'
const routes = [
{
    path:'/',
    component: homePage,
},{
    path:'/email',
    component:emailApp
}
]

export const myRouter = new VueRouter({ routes });
