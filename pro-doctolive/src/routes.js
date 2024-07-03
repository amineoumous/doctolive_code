

import Dashboard from "views/Dashboard/Dashboard";
import Pole from "views/Pole/Pole";


import Agenda from "views/AgendaMedecin/Gestion";
//import ProfleMedecin from 'components/profilMedecin/profilMedecin'

import DashboardIcon from './assets/img/home1.svg'
import AgendaIcon from './assets/img/agenda1.svg'
import ProfileIcon from './assets/img/icon-profile.svg'


var routes = {
  
  medecinPro: [
    // {
    //   path: "/profil",
    //   name: "Profile",
    //   icon: ProfileIcon,
    //   component: ProfleMedecin,
    //   layout: "/"
    // },

    
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
      {
      path: "/pole",
      name: "Pole",
      icon: DashboardIcon,
      component: Pole,
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

