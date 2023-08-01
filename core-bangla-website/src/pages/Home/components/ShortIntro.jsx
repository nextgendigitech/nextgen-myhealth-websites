import styled from 'styled-components';

import { HBox } from '../../../components/Containers';
import image from '../../../assets/images/short_intro_image.png'
import color from '../../../config/colors'

const Container = styled(HBox)`
    margin-left: 120px;
    margin-right: 120px;
`

const ShortIntro = () => {
  return (
    <Container>
      <ImageContainer></ImageContainer>
    </Container>
  );
}

export default ShortIntro;