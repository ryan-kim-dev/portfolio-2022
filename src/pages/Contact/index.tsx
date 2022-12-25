import * as S from './Styles';
import ContactLinks from '../../components/ContactLinks';
import Mailer from './Mailer';

function Contact() {
  return (
    <S.ContactLayout>
      <S.ContactContainer id="contact">
        <S.FormContainer className="text-dark">
          <S.SocialTab>
            <S.SubTitle>Contact Me!</S.SubTitle>
            <S.Img
              src="https://avatars.githubusercontent.com/u/78180055?v=4"
              alt="profile"
            />
            <div>
              <h2>김현호</h2>
              <span>ryankim.h.dev@gmail.com</span>
            </div>
            <ContactLinks />
          </S.SocialTab>
          <Mailer />
        </S.FormContainer>
      </S.ContactContainer>
    </S.ContactLayout>
  );
}

export default Contact;
