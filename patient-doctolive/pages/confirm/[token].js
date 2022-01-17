import React from 'react'

import Config from './../../EndPoint'

import Button from './../../components/CustomButtons/Button'
import { useAuth } from './../../context/AuthContext';

import { useRouter } from 'next/router';

import contentFR from './../../contentFR'
import contentEN from './../../contentEN'
import contentAR from './../../contentAR'

export default function Confirm({data}) {

    const {userData} = useAuth();
    const router = useRouter();
    const {locale} = router;
  
    const content = locale === "ar" ? contentAR : locale === "en" ? contentEN : contentFR;
  
    const GenererLink = () => {
        fetch(`${Config.BACKEND_URL}/patient/generer-link`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,
            }
        })
        .then(
            (r) => r.json()
            .then(res => {

            })
            ).catch(error =>{ 
              
            })
    }
    return (
        <div className="container mt-5 pt-5 text-center">
            {
                data.updatedUser?
                    data.updatedUser.active ?
                    <div>
                        <h3> {content.validation.confirm} </h3>
                    </div>
                    :   <div>
                            <h3> {content.validation.expired}  </h3>
                            <Button color="primary" onClick={GenererLink} > {content.validation.generateNew} </Button>
                        </div>
                :   <div>
                        <h3> {content.validation.expired} </h3>
                        <Button color="primary" onClick={GenererLink} >  {content.validation.generateNew} </Button>
                    </div>
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${Config.BACKEND_URL}/patient/confirm/${context.params.token}`)
    const data = await res.json()
    // console.log(data)
    return {
      props: {data},
    }
  }