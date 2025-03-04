import { useRef } from 'react';
import '../styles/Reachout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const Reachout = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jqqfn9q', 'template_pjyxg1p', form.current, 'y-fZwQR7f20KakfWJ')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Thank you for reaching out!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section className="reachout">
      <div className="reachoutCard">
        <h2>Reachout Form</h2>
        <div>
          <a
            rel="noopener noreferrer"
            href="https://x.com/bigdevsircole?t=mvJOSu6ODSQGLq4C_rmCHA&s=08"
            target="_blank"
            className="reachoutIcon"
          >
            <FontAwesomeIcon icon={faXTwitter} style={{ color: '#feb100', fontSize: '40px' }} />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/caleb-yinusa-3ab3442b4/"
            target="_blank"
            className="reachoutIcon"
          >
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#feb100', fontSize: '40px' }} />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://wa.me/2348180402086"
            target="_blank"
            className="reachoutIcon"
          >
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#feb100', fontSize: '40px' }} />
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <p>Feel free to reach out for enquiry, collaboration, or just a friendly hello!</p>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Reachout;