import styled from "styled-components";
import { Button } from "./styles/Button";

const Contact = () => {

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>

    <h2 className="common-heading">Contact page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86987.4934852377!2d8.093574127056442!3d47.05280428393323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ff014ba00b83d%3A0x742f99fa40c4eb10!2sMount%20Pilatus!5e0!3m2!1sen!2sin!4v1677919664943!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mleknowb" method="POST" className="contact-inputs">
          <input type="text" placeholder="Enter Your Username" name="username" autoComplete="off" required />
          <input type="email" placeholder="Enter Your E-mail" name="Email" autoComplete="off" required />
          <textarea name="message" cols="25" rows="10" placeholder="Type Message Here...!" required />
          {/* <Button>Send</Button> */}
          <input type="submit" value="Send" />
        </form>
      </div>

    </div>

  </Wrapper>;
};

export default Contact;
