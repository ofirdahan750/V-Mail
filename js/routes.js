import homePage from './pages/home-page.cmp.js'
import email from './pages/email.cmp.js'
const routes = [
{
    path:'/',
    component: homePage,
},{
    path:'/email',
    component:email
}
]

export const myRouter = new VueRouter({ routes });
