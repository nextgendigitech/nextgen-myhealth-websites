import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import { Dialog } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FiSearch, FiX } from "react-icons/fi";
import { TbCurrencyTaka } from 'react-icons/tb';
import { connect } from "react-redux";

import { HBox, VBox } from "../components/Containers";
import { Button, IconButton } from "../components/Buttons";
import { P2, P3 } from "../components/Typography";
import colors from "../config/colors";
import responsive from "../config/responsive";
import searchIcon from "../assets/images/doctor_search.png";
import { doctorsearchdlgData, Links } from "../data";

const DlgContainer = styled.div`
    overflow-y: hidden;
`

const SearchIcon = styled(FiSearch)`
    color: ${colors.darkBlue};
`

const Input = styled.input`
    width: 90%;
    height: 2.5em;
    border: 0px;
    color: ${colors.darkGrey};
    outline: none;
    font-size: 1rem;
    padding: 16px;
`

const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid ${colors.grey};
`

const Image = styled.img`
    width: 10%;
    height: auto;
`

const DoctorImage = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        height: 80px;
        width: 80px;
    }
`

const SLink = styled(Link)`
    text-decoration: none;
`

const DoctorCardContainer = styled(HBox)`
    border-radius: 20px;
    &:hover {
        box-shadow: 0px 0px 6px 6px ${colors.grey};
    }
`

const DoctorCard = ({ id, name, image, bmdc, doctorType, qualification,
                      specialty, fee, experience, affiliation, isMobile, language }) => {
    return (
        <DoctorCardContainer className='mb-3'>
            <HBox style={{width: '100%'}}>
                <VBox className={isMobile ? 'ml-1 mb-2 mt-2' : 'ml-2 mb-2 mt-2'} justify='center'>
                    <DoctorImage src={`${import.meta.env.VITE_SERVER_URL}${image}`} />
                    <P3 className='bold mt-2' color='third' align='center'>
                        {doctorsearchdlgData.head1[language]} {isMobile && <br />}
                        {doctorType==='MBBS' ? doctorsearchdlgData.head2[language] : ''}{bmdc}</P3>
                </VBox>
                <VBox className='mt-2' style={{ width: isMobile ? '70%' : '50%' }}>
                    <P2 className='bold ml-2'>{name}</P2>
                    <P3 className='ml-2'>{qualification}</P3>
                    <P3 className='ml-2' color='second'>{specialty}</P3>
                    {affiliation && <P3 className='ml-2' color='first'>{`${affiliation.designation} at ${affiliation.institution}`}</P3>}
                    {experience && <P3 className='ml-2'>{doctorsearchdlgData.head4[language]} {experience}</P3>}
                    {isMobile &&
                        <VBox className='mt-1' align='center'>
                            <Button 
                                className='bold ml-2' 
                                size='xs' 
                                color='third' 
                                style={{ height: 30, borderRadius: 15 }}
                            >
                                <P2 color='white' style={{flexShrink: '0'}}>
                                    {doctorsearchdlgData.head3[language]}
                                </P2>
                            </Button>
                            <P2 className='bold mt-1' color='first'><TbCurrencyTaka />{fee}</P2>
                        </VBox>
                    }
                </VBox>
                {!isMobile &&
                    <VBox justify='center' align='center' style={{flexGrow: '1'}}>
                        <Button 
                            className='bold' 
                            size='sm' 
                            color='third' 
                            style={{ height: 40, borderRadius: 20 }}
                        >
                            <P2 color='white' style={{flexShrink: '0'}}>
                                {doctorsearchdlgData.head3[language]}
                            </P2>
                        </Button>
                        <P2 className='bold mt-2' color='first'><TbCurrencyTaka />{fee}</P2>
                    </VBox>
                }
            </HBox>
        </DoctorCardContainer>
    );
}

const DoctorSearchDlg = ({ open, setOpen, isMobile, language }) => {
    const pageSize = 10;
    const [doctors, setDoctors] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(pageSize);
    const [hasMore, setHasMore] = useState(true);
    const [count, setCount] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [inputTimeout, setInputTimeout] = useState(null);
    
    useEffect(() => {
        const init = () => {
            setSearchKey("");
            setOffset(0);
            setLimit(pageSize);
            setHasMore(true);
            setDoctors([]);
        }
        if (open) init();
    }, [open]);
    useEffect(() => () => clearTimeout(inputTimeout), [inputTimeout]);

    const getData = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/patient/doctor-list/`,
            params: {
                key: searchKey,
                offset: offset,
                limit: limit
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setDoctors(doctors.concat(response.data.doctors));
                setHasMore(response.data.has_more);
                setCount(response.data.count);
                setOffset(offset+pageSize);
                setLimit(limit+pageSize);
            } else {
                console.log('DOCTOR LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('DOCTOR LIST FETCH ERROR', error);
        })
    }

    const handleFetchData = () => {
        if (hasMore & !isLoading) {
            getData();
        }
    }

    const handleSearch = (value) => {
        setSearchKey(value);
        setCount(null);
        if (inputTimeout) clearTimeout(inputTimeout);
        setInputTimeout(
                setTimeout(() => {
                    setOffset(0);
                    setLimit(pageSize);
                    setHasMore(true);
                    setDoctors([]);
            }, 300)
        )
    }

    const handleScrollUpdate = (values) => {
        const { scrollTop, scrollHeight, clientHeight } = values;
        const pad = 100; // 100px of the bottom
        const t = ((scrollTop + pad) / (scrollHeight - clientHeight));
        if (t > 1) handleFetchData();
    }

    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        
        setOpen(false);
    }

    return (
        <Dialog
            maxWidth={isMobile ? "lg" : "md"}
            open={open}
            onClose={handleClose}
            fullWidth
            scroll="body"
        >
            <DlgContainer>
                <HBox align="center" justify='space-between' className="mt-1 mb-1">
                    <HBox align="center" style={{ width: '85%' }}>
                        <SearchIcon fontSize={24} className="ml-2" />
                        <Input
                            style={{ fontSize: isMobile ? '0.8rem' : '1rem', width: '80%' }}
                            placeholder={doctorsearchdlgData.pera1[language]}
                            type="text"
                            autoFocus
                            value={searchKey}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </HBox>
                    <IconButton
                        className="mr-2"
                        onClick={handleClose}
                    >
                        <FiX />
                    </IconButton>
                </HBox>
                <Line />
                {searchKey&&count!==null ?
                    <HBox className="px-2 py-1" style={{ backgroundColor: colors.lightGrey }}>
                        <P2>{doctorsearchdlgData.pera2[language]}</P2>
                        <P2 color='third' className="bold" style={{ marginLeft: 4, marginRight: 4 }}>{count}</P2>
                        <P2>{count === 1 ? doctorsearchdlgData.pera4[language] : doctorsearchdlgData.pera3[language]}</P2>
                    </HBox>
                    :
                    <></>
                }
                {searchKey&&count!==null ? <Line /> : <></>}
                <Scrollbars
                    style={{ height: '70vh' }}
                    onUpdate={handleScrollUpdate}
                    renderThumbVertical={({ style, ...props }) =>
                        <div {...props} style={{ ...style, backgroundColor: colors.darkGrey, width: '5px', borderRadius: '3px', opacity: '0.4'}}/>
                }>
                    {doctors.length ?
                        <VBox>
                            {doctors.map((doctor, index) => (
                                <SLink to={Links.doctorapp+doctor.id} target='_blank'>
                                    <DoctorCard
                                        index={index}
                                        id={doctor.id}
                                        name={doctor.name}
                                        image={doctor.image}
                                        doctorType={doctor.doctor_type}
                                        bmdc={doctor.bmdc}
                                        qualification={doctor.qualification}
                                        specialty={doctor.specialty}
                                        fee={doctor.fee}
                                        experience={doctor.experience}
                                        isOnline={doctor.is_online}
                                        affiliation={doctor.affiliation_summary[0] ? doctor.affiliation_summary[0] : null}
                                        isMobile={isMobile}
                                        language={language}
                                    />
                                </SLink>
                            ))}
                        </VBox>
                        :
                        <VBox justify="center" align="center" style={{ height: '80%' }}>
                            <Image src={searchIcon} />
                        </VBox>
                    }
                </Scrollbars>
            </DlgContainer>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(DoctorSearchDlg);