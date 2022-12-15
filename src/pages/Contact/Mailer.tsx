import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as S from './MailerStyles';

function Mailer() {
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        'service_jukedjo',
        'template_lizhqth',
        form?.current,
        'RneFkwHFvOdgSjiT8'
      )
      .then(
        result => {
          console.log(result.text);
          alert('메일을 전송하였습니다. 감사합니다.🙂');
          e.target.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <S.Form ref={form} action="/mail" method="post" onSubmit={onSubmit}>
      <S.Div>
        <S.Label htmlFor="name">Name</S.Label>
        <S.Input type="text" name="user_name" id="name" placeholder="성함" />
      </S.Div>
      <S.Div>
        <S.Label htmlFor="email">Address</S.Label>
        <S.Input
          type="email"
          name="user_email"
          id="email"
          placeholder="메일주소"
        />
      </S.Div>

      <S.Div>
        <S.Label htmlFor="message">Message</S.Label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="본문을 입력해주세요"
        />
      </S.Div>
      <S.Input type="submit" className="submit-btn" value="Send Email" />
    </S.Form>
  );
}

export default Mailer;
