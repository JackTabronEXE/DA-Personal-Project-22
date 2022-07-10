import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_t7vdxfl';
            const templateId = 'template_z6zi35h';
            const userId = 'CP2FqWempSXAY-B4S';
            const templateParams = {
                name,
                email,
                message
            };
    
        // addStudent(addContact)
        //     .then (newContact => dispatch({type: "UPDATE_STUDENT", payload: newContact}))
        //     .catch(err => {
        //       console.log(err)
        //     })
        

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .catch(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
      <footer className="ds-footer text-center">
        <div className="container"></div>
        <section>
        <span>Stay in touch</span>
        <h4>Ready to talk?</h4>
        <p>Feel free to contact me</p>
        <div id="contact-form">
            <div>
            <input className="rounded-input" type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
            <input className="rounded-input" type="text" placeholder="Your email address" value={email} 
            onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
            <textarea placeholder="Your message" value={message} className="rounded-input" onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <div>
            <br></br>
            <button className="ds-button" onClick={submit}>Send Message</button>
            </div>
            <br></br>
            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
            {/* <a href="mailto:test@test.com" className="ds-button"  onClick={submit}>>Lets Talk</a> */}
        </div>
        </section>
        </footer>
    );
};

export default Contact;

// Service ID: service_eaia5dj