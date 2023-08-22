import { styled } from '@mui/system';
import React from 'react';
import COLORS from '../utility/styles';

const EmbedContainer = styled('div')(
    ({ theme }) =>`
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
        height: 100%;
        width: 100%;
        margin: ${theme.spacing(1)};
        border: 10px solid ${COLORS.greyColor};
        border-radius: 10px;
    `
)
const EmbedIframe = styled('iframe')(
    ({ theme }) =>`
        left: 0;
        top: 0;
        position: absolute;
        height: 100%;
        width: 100%;
    `
)

const YoutubeEmbed = (props) => {
  return (
    <EmbedContainer>
        <EmbedIframe 
            width="800"
            height="480"
            src={`https://www.youtube.com/embed/${props.embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </EmbedContainer>
  )
}

export default YoutubeEmbed