

import Dashboard from "views/Dashboard/Dashboard";


import Agenda from "views/AgendaMedecin/Gestion";

import DashboardIcon from './assets/img/home.svg'
import AgendaIcon from './assets/img/agenda.svg'

var routes = {
  
  medecinPro: [
    
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: DashboardIcon,
      component: Dashboard,
      layout: "/"
    },

    {
      path: "/agenda",
      name: "agenda",
      icon: AgendaIcon,
      component: Agenda,
      layout: "/"
    },
    // {
    //   path: "/chat-video",
    //   name: "Consultation video",
    //   icon: AgendaIcon,
    //   component: Chat,
    //   layout: "/"
    // }
  ]
}
export default routes;

