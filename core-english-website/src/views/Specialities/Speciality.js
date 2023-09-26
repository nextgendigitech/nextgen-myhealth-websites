import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import SpecialtyContainer from '../../components/SpecialtyContainer';
import Modal from '../../components/Modal';

const Speciality = (props) => {
    const specialities = props.specialityDictionary[props.specialityIndex];

    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

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
                        <Link to={`/specialities/${specialities[0].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Link to={`/specialities/${specialities[2].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[2].image} specialityHeader={specialities[2].specialityHeader} specialityBangla={specialities[2].specialityBangla} />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Link to={`/specialities/${specialities[4].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[4].image} specialityHeader={specialities[4].specialityHeader} specialityBangla={specialities[4].specialityBangla} />
                        </Link>
                    </Box>
                </Box>
                {/* <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader}/>}/> */}
            </> :
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        
                    }}
                >
                    <Link to={`/specialities/${specialities[0].specialityHeader}`} style={{textDecoration: 'none'}}>
                        <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} />
                    </Link>
                    <Link to={`/specialities/${specialities[1].specialityHeader}`} style={{textDecoration: 'none'}}>
                        <SpecialtyContainer image={specialities[1].image} specialityHeader={specialities[1].specialityHeader} specialityBangla={specialities[1].specialityBangla} />
                    </Link>
                    {/* <SpecialtyContainer image={specialities[2].image} specialityHeader={specialities[2].specialityHeader} specialityBangla={specialities[2].specialityBangla} handleClick={() => handleClick(specialities[2].specialityHeader)} /> */}
                </Box>
                {/* <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader}/>}/> */}
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
                        <Link to={`/specialities/${specialities[0].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} />
                        </Link>
                        <Link to={`/specialities/${specialities[1].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[1].image} specialityHeader={specialities[1].specialityHeader} specialityBangla={specialities[1].specialityBangla} />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Link to={`/specialities/${specialities[2].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[2].image} specialityHeader={specialities[2].specialityHeader} specialityBangla={specialities[2].specialityBangla} />
                        </Link>
                        <Link to={`/specialities/${specialities[3].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[3].image} specialityHeader={specialities[3].specialityHeader} specialityBangla={specialities[3].specialityBangla} />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Link to={`/specialities/${specialities[4].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[4].image} specialityHeader={specialities[4].specialityHeader} specialityBangla={specialities[4].specialityBangla} />
                        </Link>
                        <Link to={`/specialities/${specialities[5].specialityHeader}`} style={{textDecoration: 'none'}}>
                            <SpecialtyContainer image={specialities[5].image} specialityHeader={specialities[5].specialityHeader} specialityBangla={specialities[5].specialityBangla} />
                        </Link>
                    </Box>
                </Box>
            </> :
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        
                    }}
                >
                    <Link to={`/specialities/${specialities[0].specialityHeader}`} style={{textDecoration: 'none'}}>
                        <SpecialtyContainer image={specialities[0].image} specialityHeader={specialities[0].specialityHeader} specialityBangla={specialities[0].specialityBangla} />
                    </Link>
                    <Link to={`/specialities/${specialities[1].specialityHeader}`} style={{textDecoration: 'none'}}>
                        <SpecialtyContainer image={specialities[1].image} specialityHeader={specialities[1].specialityHeader} specialityBangla={specialities[1].specialityBangla} />
                    </Link>
                </Box>
            </>
        }
    </>
  )
}

export default Speciality