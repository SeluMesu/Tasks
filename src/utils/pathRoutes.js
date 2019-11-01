import Dashboard from '../components/dashboard/Dashboard';
import Progress from '../components/progress/Progress'
import People from '../components/people/People'
import Layout from '../components/layout/Layout'
import Files from '../components/files/Files'
import Chats from '../components/chat/Chats'
import Mail from '../components/mail/Mail'
//icons
import home from '../asset/images/home.svg'
import files from '../asset/images/file.svg'
import people from '../asset/images/home.svg'
import mail from '../asset/images/mail.svg'
import chat from '../asset/images/chat.svg'
import progress from '../asset/images/progress.svg'
import layout from '../asset/images/layouts.svg'
export const linkRoutes = [
    {
        to: '/dashboard',
        name: "Dashboard",
        icon: home,

    },
    {
        to: '/files',
        name: "Files",
        icon: files,

    },
    {
        to: '/layouts',
        name: "Layouts",
        icon: layout,

    },
    {
        to: '/people',
        name: "People",
        icon: people,

    },
    {
        to: '/chats',
        name: "Chats",
        icon: chat,

    }, {
        to: '/mail',
        name: "Mail",
        icon: mail,

    },
    {
        to: '/progress',
        name: "Progress",
        icon: progress,

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