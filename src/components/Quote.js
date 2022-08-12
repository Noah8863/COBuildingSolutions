import React from 'react'
import emailjs from '@emailjs/browser'

function Quote() {

    const sendEmail = (e) => {
        var today = new Date().toLocaleDateString();

        e.preventDefault();
        const formData = {
            time: today,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            lumber: document.getElementById('lumber').checked ? "Yes ✅" : "No ❌",
            plywood: document.getElementById('plywood').checked ? "Yes ✅" : "No ❌",
            osb: document.getElementById('osb').checked ? "Yes ✅" : "No ❌",
            lsl: document.getElementById('lsl').checked ? "Yes ✅" : "No ❌",
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value

        }
        console.log(formData)
        emailjs.send('service_32wky28', 'template_s77x9a4', formData, 'nIOQ4DjOD6VPrQRy0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <form onSubmit={sendEmail} className="inputfield">
                    <div className="nameform field">
                        <input type="text" className="form__field" placeholder="Name" name="name" id='name' required />
                        <label className="form__label">Full Name</label>
                    </div>

                    <div className="emailform field">
                        <input type="text" className="form__field" placeholder="Email" name="email" id='email' required />
                        <label className="form__label">Email</label>
                    </div>

                    <div className="emailform field">
                        <input type="number" className="form__field" placeholder="Phone Number" name="phoneNumber" id='phoneNumber' required />
                        <label className="form__label">Phone Number</label>
                    </div>

                    <div className="checkboxform field">
                        <h4>Products of Interest*</h4>
                        <label>
                            <input type="checkbox" className="checkboxOptions" id="lumber" />
                            Lumber
                        </label>
                        <label>
                            <input type="checkbox" className="checkboxOptions" id="plywood" />
                            Plywood/Veneer
                        </label>
                        <label>
                            <input type="checkbox" className="checkboxOptions" id="osb" />
                            OSB
                        </label>
                        <label>
                            <input type="checkbox" className="checkboxOptions" id="lsl" />
                            LSL
                        </label>
                    </div>

                    <div className="subjectform field">
                        <input type="text" className="form__field" placeholder="Subject" name="subject" id='subject' required />
                        <label className="form__label">Subject</label>
                    </div>

                    <div className="subjectform">
                        <h4 style={{ color: 'white' }}>Your Message/Comments *</h4>
                        <textarea className="messageTextArea" name="message" id="message" ></textarea>
                    </div>
                    
                    <div class="btn-1">
                        <a href=" " alt="button"><span type="submit">Submit</span></a>
                    </div>
            </form>
        </div>
    )
}

export default Quote;

