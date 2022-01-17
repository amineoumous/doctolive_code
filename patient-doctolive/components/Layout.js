
import {useEffect, useState} from 'react'
import  Navbar  from './../components/PatientPublicNavbar';
import  AuthNavbar  from './../components/PatientProNavbar';
import  Footer  from './../components/Footer';

import {useAuth} from './../context/AuthContext'

import Snackbar from "../components/Snackbar/Snackbar.js";

import {useAppContext} from './../context/AppointementContext'

import {MdAddAlert} from 'react-icons/md'

export default function Layout({children, locale, pathname}) {
    const { temporary_appointment, setUserTemporary } = useAppContext();

    const [ShowNotif, setShowNotif] = useState(temporary_appointment?.medecinId && pathname !== "/doctor/[id]/appointment"  ? true : false )
    const [hide, setHidef] = useState(false)

    const [isAuth, setIsAuth] = useState(false);

    const { userData } = useAuth();

    useEffect(() => {

        if(userData){
            setIsAuth(userData.isAuth)
        }
       
        return () => {
            
        }
    }, [userData])
    useEffect(() => {
        console.log(pathname)

        setShowNotif(temporary_appointment?.medecinId && pathname !== "/doctor/[id]/appointment" ? true : false)
      
        return () => {
            
        }
    }, [temporary_appointment])
    return (
        <>
            {isAuth ? 
                <AuthNavbar />
                : <Navbar />
            }
            
            <main style={ locale === "ar" ? {direction: "rtl", textAlign: "right"}: {direction: "ltr"}} className={"main" + (isAuth? " authentified" : "")}>
                {children}
              
                        <div>

                            <Snackbar
                                place="br"
                                color="info"
                                icon={MdAddAlert}
                                message="Attention, votre RDV n'est pas encore confirmé."
                                open={ShowNotif && !hide}
                                link="Finir le processus de réservation."
                                linkPath="/doctor/1/appointment"
                                closeNotification={() =>{setHidef(true)}}
                                close
                            />

                        </div>
                 
            </main>
            <Footer />
           
        </>
    )
}
