

import Ville from 'views/Villes/Villes'
import Reporting from 'views/Reporting/Reporting'

import Speciality from 'views/Speciality/Speciality'


import Dashboard from "views/Dashboard/Dashboard";

import Patients from "views/Patients/Patients";
import Medecin from "views/Medecin/Medecin";
// import Users from "views/Users/Users";
// import Orders from "views/Orders/Orders";

import PatientIcon from './assets/img/patient.svg'
import CityIcon from './assets/img/CityIcon.svg'
import MedecinIcon from './assets/img/doctor.svg'
// import UserIcon from './assets/img/UserIcon.svg'
import SpecialityIcon from './assets/img/medical-report.svg'
import DashboardIcon from './assets/img/home.svg'
var routes = {
  admin: [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/patients",
    name: "Patients",
    component: Patients,
    icon: PatientIcon,
    layout: "/admin",
  },
  {
    path: "/medecins",
    name: "Medecins",
    icon: MedecinIcon,
    component: Medecin,
    layout: "/admin"
  },
  // {
  //   path: "/orders",
  //   name: "Commandes",
  //   icon: CategoryIcon,
  //   component: Orders,
  //   layout: "/admin"
  // },
  {
    path: "/speciality",
    name: "Specialité des médecins",
    icon: SpecialityIcon,
    component: Speciality,
    layout: "/admin"
  },
  {
    path: "/villes",
    name: "Villes",
    icon: CityIcon,
    component: Ville,
    layout: "/admin"
  },
  {
    path: "/reportings",
    name: "Reprtings",
    icon: CityIcon,
    component: Reporting,
    layout: "/admin"
  },
  // {
  //   path: "/types",
  //   name: "Types dutilisateur",
  //   icon: UserIcon,
  //   component: Types,
  //   layout: "/admin"
  // },
  
  // {
  //   path: "/users",
  //   name: "Utilisateurs",
  //   icon: UserIcon,
  //   component: Users,
  //   layout: "/admin"
  // },
  
]
}
export default routes;

