import MainLayout from "./layout/MainLayout";
import Error from "./pages/404";
import Contact from "./pages/contact";
import CourseDetail from "./pages/course-detail";
import Email from "./pages/email";
import Faq from "./pages/faq";
import Home from "./pages/home";
import Course from "./pages/home/components/Course";
import Payment from "./pages/payment";
import Profile from "./pages/profile";
import Project from "./pages/project";
import Register from "./pages/register";
import Team from "./pages/team";


const routers = [
    {
        path: '/',
        component: MainLayout,
        routers: [
            {
                path: '/team',
                component: Team
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/faq',
                component: Faq
            },
            {
                path: '/payment',
                component: Payment
            },
            {
                path: '/profile',
                component: Profile
            },
            {
                path: '/project',
                component: Project
            },
            {
                path: '/register',
                component: Register
            },
            {
                path: '/course/:slug',
                component: CourseDetail
            },
            {
                path: '/course',
                component: Course
            },
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                component: Error
            }
        ]
    },
    {
        path: '/email',
        component: Email,
        exact: true
    }
]

export default routers