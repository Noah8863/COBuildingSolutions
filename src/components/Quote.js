import React from 'react'


function Quote() {
    return (
        <div>
            <div className="inputfield">
                <form className="nameform field">
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                    <label className="form__label">Full Name</label>
                </form>

                <form className="emailform field">
                    <input type="input" className="form__field" placeholder="Email" name="email" id='email' required />
                    <label className="form__label">Email</label>
                </form>

                <form className="emailform field">
                    <input type="input" className="form__field" placeholder="Phone Number" name="email" id='email' required />
                    <label className="form__label">Phone Number</label>
                </form>

                <form className="checkboxform field">
                    <h4>Products of Interest*</h4>
                    <label>
                        <input type="checkbox" className="checkboxOptions" />
                        Lumber
                    </label>
                    <label>
                        <input type="checkbox" className="checkboxOptions" />
                        Plywood/Veneer
                    </label>
                    <label>
                        <input type="checkbox" className="checkboxOptions" />
                        OSB
                    </label> 
                    <label>
                        <input type="checkbox" className="checkboxOptions" />
                        LSL
                    </label>
                </form>
                <form className="subjectform field">
                    <input type="input" className="form__field" placeholder="Subject" name="subject" id='subject' required />
                    <label className="form__label">Subject</label>
                </form>

                <div className="subjectform">
                    <h4 style={{ color: 'white' }}>Your Message/Comments *</h4>
                    <textarea className="messageTextArea"></textarea>
                </div>

            </div>
            
        </div>
    )
}

export default Quote;