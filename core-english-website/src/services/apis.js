import axios from './axios';

export function fetchDoctors(specialty) {
    return (
        axios({
            method: 'GET',
            url: 'https://nextgenmyhealth.com:8000/patient/doctor-list/',
            params: {
                specialty: specialty
            }
        })
        .then(response => response)
        .catch((error) => {
            console.error('# ---- Doctor fetch error ---- #');
            throw error
        })
    )    
}
