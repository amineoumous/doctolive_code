import React from 'react'

import ProfleMedecin from 'components/profilMedecin/profilMedecin'
import ProfleMedecinEdit from 'components/profilMedecin/profilMedecinEdit'
import { Route, Switch } from 'react-router-dom'
export default function MedecinProfile() {
    return (
        <div>
            <Switch>
                <Route path="/profil" component={ProfleMedecin} exact />
                <Route path="/profil/edit" component={ProfleMedecinEdit} exact />
           
            </Switch>
           
        </div>
    )
}
