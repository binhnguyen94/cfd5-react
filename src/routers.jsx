import MainLayout from "./layout/MainLayout";
import Error from "./pages/404";
import Contact from "./pages/contact";
import CourseDetail from "./pages/course-detail";
import Email from "./pages/email";
import Faq from "./pages/faq";
import Home from "./pages/home";
import Payment from "./pages/payment";
import Profile from "./pages/profile";
import Project from "./pages/project";
import Register from "./pages/register";
import Team from "./pages/team";

import HistoryPayment from './pages/profile/components/HistoryPayment';
import Info from './pages/profile/components/Info';
import MyCoin from './pages/profile/components/MyCoin';
import MyCourse from './pages/profile/components/MyCourse';
import MyProject from './pages/profile/components/MyProject';
import Courses from "./pages/courses";


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
                component: Profile,
                auth: true,
                routers: [
                    {
                        path: '/course',
                        component: MyCourse
                    },
                    {
                        path: '/project',
                        component: MyProject
                    },
                    {
                        path: '/history-payment',
                        component: HistoryPayment
                    },
                    {
                        path: '/coin',
                        component: MyCoin
                    },
                    {
                        path: '/',
                        component: Info
                    }
                ]
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
                path: '/courses',
                component: Courses
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