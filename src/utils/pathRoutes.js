import Dashboard from '../components/dashboard/Dashboard';
import Progress from '../components/progress/Progress'
// import Error400 from '../components/pages/Error404'
import People from '../components/people/People'
import Layout from '../components/layout/Layout'
import Files from '../components/files/Files'
import Chats from '../components/chat/Chats'
import Mail from '../components/mail/Mail'
export const linkRoutes = [
    {
        to: '/dashboard',
        name: "Dashboard",
        icon: '',

    },
    {
        to: '/files',
        name: "Files",
        icon: '',

    },
    {
        to: '/layouts',
        name: "Layouts",
        icon: '',

    },
    {
        to: '/people',
        name: "People",
        icon: '',

    },
    {
        to: '/chats',
        name: "Chats",
        icon: '',

    }, {
        to: '/mail',
        name: "Mail",
        icon: '',

    },
    {
        to: '/progress',
        name: "Progress",
        icon: '',

    },

]

export const pathRoutes = [
    // {
    //     path: null,
    //     Component: Error400
    // },
    {
        path: "/",
        Component: null
    },
    {
        path: "/dashboard",
        Component: Dashboard
    }, {
        path: "/files",
        Component: Files
    }, {
        path: "/layouts",
        Component: Layout
    }, {
        path: "/people",
        Component: People
    }, {
        path: "/chats",
        Component: Chats
    }, {
        path: "/mail",
        Component: Mail
    }, {
        path: "/progress",
        Component: Progress
    }
]