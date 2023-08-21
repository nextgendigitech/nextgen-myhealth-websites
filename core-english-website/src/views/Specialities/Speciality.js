import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState }  from 'react';
import SpecialtyContainer from '../../components/SpecialtyContainer';
import DoctorList from '../DoctorList';
import { fetchDoctors }  from '../../services/apis';
import Modal from '../../components/Modal';


const SpecialityIcon = styled('img')(
    ({ theme }) => `
    height: 50px;
    width: 50px;
    margin-bottom: 5px;
    margin-right: 10px
    `
)

const Speciality = (props) => {
    const specialities = props.specialityDictionary[props.specialityIndex];

    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = useState(false)
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [doctors, setDoctors] = useState([])
    const [loader, setLoader] = useState(false)

    const handleClick = (specialty) => {
        setOpenDialog(true)
        setSelectedSpecialty(specialty)
        // showDoctorList(specialty)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }

    const showDoctorList = (specialty) => {
        setDoctors([])
        setLoader(true)
        fetchDoctors(specialty)
        .then((response) => {
            setDoctors(response.data.doctors)
            setLoader(false)
        })
    }

    useEffect(() => {
        openDialog && showDoctorList(selectedSpecialty)
      }, [openDialog])


  return (
    <>
        {
            isMobileScreen ?
            specialities.length > 3 ?
            <>  
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'

                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} handleClick={() => handleClick(specialities[0].specialityHeader)} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <SpecialtyContainer image={specialities[2].image} specialityHeader={specialities[2].specialityHeader} specialityBangla={specialities[2].specialityBangla} handleClick={() => handleClick(specialities[2].specialityHeader)} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <SpecialtyContainer image={specialities[4].image} specialityHeader={specialities[4].specialityHeader} specialityBangla={specialities[4].specialityBangla} handleClick={() => handleClick(specialities[4].specialityHeader)} />
                    </Box>
                </Box>
                <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader}/>}/>
            </> :
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        
                    }}
                >
                    <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} handleClick={() => handleClick(specialities[0].specialityHeader)} />
                    <SpecialtyContainer image={specialities[1].image} specialityHeader={specialities[1].specialityHeader} specialityBangla={specialities[1].specialityBangla} handleClick={() => handleClick(specialities[1].specialityHeader)} />
                    {/* <SpecialtyContainer image={specialities[2].image} specialityHeader={specialities[2].specialityHeader} specialityBangla={specialities[2].specialityBangla} handleClick={() => handleClick(specialities[2].specialityHeader)} /> */}
                </Box>
                <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader}/>}/>
            </>
            :
            specialities.length > 4 ?
            <>  
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'

                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} handleClick={() => handleClick(specialities[0].specialityHeader)} />
                        <SpecialtyContainer image={specialities[1].image} specialityHeader={specialities[1].specialityHeader} specialityBangla={specialities[1].specialityBangla} handleClick={() => handleClick(specialities[1].specialityHeader)} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <SpecialtyContainer image={specialities[2].image} specialityHeader={specialities[2].specialityHeader} specialityBangla={specialities[2].specialityBangla} handleClick={() => handleClick(specialities[2].specialityHeader)} />
                        <SpecialtyContainer image={specialities[3].image} specialityHeader={specialities[3].specialityHeader} specialityBangla={specialities[3].specialityBangla} handleClick={() => handleClick(specialities[3].specialityHeader)} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <SpecialtyContainer image={specialities[4].image} specialityHeader={specialities[4].specialityHeader} specialityBangla={specialities[4].specialityBangla} handleClick={() => handleClick(specialities[4].specialityHeader)} />
                        <SpecialtyContainer image={specialities[5].image} specialityHeader={specialities[5].specialityHeader} specialityBangla={specialities[5].specialityBangla} handleClick={() => handleClick(specialities[5].specialityHeader)} />
                    </Box>
                </Box>
                <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader}/>}/>
            </> :
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        
                    }}
                >
                    <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} handleClick={() => handleClick(specialities[0].specialityHeader)} />
                    <SpecialtyContainer image={specialities[1].image} specialityHeader={specialities[1].specialityHeader} specialityBangla={specialities[1].specialityBangla} handleClick={() => handleClick(specialities[1].specialityHeader)} />
                    {/* <SpecialtyContainer image={specialities[2].image} specialityHeader={specialities[2].specialityHeader} specialityBangla={specialities[2].specialityBangla} handleClick={() => handleClick(specialities[2].specialityHeader)} /> */}
                </Box>
                <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader}/>}/>
            </>
        }
    </>
  )
}

export default Speciality