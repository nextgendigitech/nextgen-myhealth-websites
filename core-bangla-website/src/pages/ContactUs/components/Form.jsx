import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from "axios";
import { useSnackbar } from "notistack";

import colors from "../../../config/colors";
import { Button } from "../../../components/Buttons";
import { HBox, VBox } from "../../../components/Containers";
import { H5, P2, P3 } from "../../../components/Typography";
import { contactusData, links } from "../../../data";


const Card = styled(VBox)`
    border: 1px solid ${colors.white};
    border-radius: 8px;
    box-shadow: 2px 5px 10px 2px ${colors.grey};
    z-index: 3;
`

const Input = styled.input`
    border: 1px solid ${colors.green};
    border-radius: 5px;
    height: 40px;
`

const Textarea = styled.textarea`
    border: 1px solid ${colors.green};
    border-radius: 5px;
    resize: none;
`

const Underline = styled.span`
    border-bottom: 2px solid ${colors.darkGreen}; 
    position: relative;
    left: 38%;
    width: 25%;
`

const SButton = styled(Button)`
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
`

const Form = ({ isMobile, language }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [name, setName] = useState("");
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [message, setMessage] = useState("");
    
    const handleFormSubmit = () => {
        if (validate()) {
            enqueueSnackbar('Submitting Query...', { persist: true });
            axios({
                method: 'POST',
                url: `${import.meta.env.VITE_SERVER_URL}/website/contact-us/`,
                data: {
                    name: name,
                    email_or_phone: emailOrPhone,
                    message: message,
                },
            })
            .then((response) => {
                // setIsLoading(false);
                closeSnackbar();
                if (response.status === 200) {
                    enqueueSnackbar('Query submitted successfully. NextGen MyHealth Team will contact you shortly', { variant: 'success' });

                    setName("");
                    setEmailOrPhone("");
                    setMessage("");
                } else {
                    console.log('SUBMIT QUERY FAILED', response.status);
                    enqueueSnackbar('Query submission failed! Please try again.', {variant: 'error'});
                }
            })
            .catch((error) => {
                // setIsLoading(false);
                closeSnackbar();
                console.log('SUBMIT QUERY ERROR', error);
                enqueueSnackbar('Query submission failed! Please try again.', {variant: 'error'});
            })
        }
    };

    const validate = () => {
        var ok = true;

        if (!name) {
            enqueueSnackbar('Please fill up the name field.', { variant: 'error' });
            return false;
        }

        if (!emailOrPhone) {
            enqueueSnackbar('Please fill up the contact details field.', { variant: 'error' });
            return false;
        }

        if (!message) {
            enqueueSnackbar('Please fill up the message field.', { variant: 'error' });
            return false;
        }

        return true;
    }
   
    return (
        <Card 
            className={isMobile ? "p-2" : "p-4"} 
            style={{ alignSelf: 'center', width: isMobile ? "100%" : "65%", 
                    marginBottom: isMobile ? "40px" : "100px", backgroundColor: colors.white }}>
            <H5 align="center" justify="center" color="third">{contactusData.Form.head1[language]}</H5>
            <Underline align="center" justify="center" className={isMobile ? "mb-2" : "mb-6"} style={{ top: isMobile ? "8px" : "17px" }}/>
            <HBox align="center">
                <VBox style={{ width: isMobile ? "100%" : "50%" }}>
                    <P2 className="bold mb-2" color="third">{contactusData.Form.head2[language]}</P2>
                    <Input 
                        className="p-1 mb-2" 
                        type="text" 
                        placeholder={contactusData.Form.name[language]} 
                        style={{ fontSize: isMobile ? "70%" : "" }} 
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required/>
                    <Input 
                        className="p-1 mb-2" 
                        type="email" 
                        placeholder={contactusData.Form.contact[language]} 
                        style={{ fontSize: isMobile ? "70%" : "" }} 
                        name="email"
                        value={emailOrPhone}
                        onChange={e => setEmailOrPhone(e.target.value)}
                        required/>
                    <Textarea
                        style={{ fontSize: isMobile ? "85%" : "" }}
                        placeholder={contactusData.Form.msg[language]}
                        rows={8}
                        className="p-1"
                        required
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <SButton 
                        onClick={handleFormSubmit}
                        className={isMobile ? "mt-2" : "mt-5"}
                        type="submit" 
                        color="third"  
                        size={isMobile ? 'sm' : 'md'}
						style={{ height: isMobile ? 30 : 45 }}
                        elevated
                    >
                        {contactusData.Form.btn1[language]}
                    </SButton>
                </VBox>
                <VBox className={isMobile ? "pt-3" : "mb-6 pl-6"} style={{ width: isMobile ? "100%" : "45%", alignItems: isMobile ? "center" : "" }}>
                    <P2 className="bold">{contactusData.Form.para1[language]}</P2>
                    <P3>{contactusData.Form.para2[language]}</P3>
                    <Link to={links.footer.link1} style={{ textDecoration: 'none' }} target='_blank'>
                        <P3 color="first">{contactusData.Form.para3[language]}</P3>
                    </Link>
                    <P3 align= {isMobile ? "center" : ""}>{contactusData.Form.para4[language]}</P3>
                    <HBox className={isMobile ? "mt-1" : "mt-3"}>
                        <HiOutlinePhone className="mr-1"/>
                        <P3>{links.phoneandemail.phone[language]}</P3>
                    </HBox>
                    <HBox className={isMobile ? "mt-1" : "mt-3"}>
                        <AiOutlineMail className="mr-1"/>
                        <P3>{links.phoneandemail.email[language]}</P3>
                    </HBox>
                </VBox>
            </HBox>
        </Card>      
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(Form);