import React, { useState } from 'react';

const Contact = () => {
    const formInitialDetails = {
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [btnText, setBtnText] = useState('Send');

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        setBtnText("Sending...");
        try {
            let response = await fetch("https://portfolliobackend.onrender.com/api/portfollio/v1/formMailer", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formDetails),
            });
    
            if (response.ok) {
                // Reset the form and show a success message
                setFormDetails(formInitialDetails);
                alert("Message sent successfully!");
            } else {
                // Handle error response
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            // Handle fetch error
            alert("An error occurred. Please try again later.");
        } finally {
            setBtnText("Send"); // Reset the button text regardless of the outcome
        }
    }
    

    return (
        <div className="py-32 contact bg-contact-bg" id="connect">
            <div className="container">
                <div className="items-center row">
                    <div className="col-md-6">
                        <img src={"https://ik.imagekit.io/b80sh2n2k/contact-img.svg?updatedAt=1679470984116"} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="px-1 col-sm-6">
                                    <input className="focus:outline-none focus:bg-white focus:text-black" type="email" name="email" placeholder='Email' value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </div>
                                <div className="px-1 col-sm-6">
                                    <input className="focus:outline-none focus:bg-white focus:text-black" type="tel" name="phone" placeholder='Phone' value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </div>
                                <div className="px-1 col-sm-12">
                                    <textarea name="message" className="h-[150px] focus:outline-none focus:bg-white focus:text-black" placeholder='Message' value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button className='px-6 py-3 my-5 font-bold text-black bg-white' type="submit">{btnText}</button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
