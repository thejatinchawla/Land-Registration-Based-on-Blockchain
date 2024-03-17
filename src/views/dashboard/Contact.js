import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d8k3r8o",
        "template_1c08yjy",
        form.current,
        "AHxJquwAhMAmsAbyY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <main className="container">
        <div className="left"
          id="left"
        >
          
          <h1>Contact Us</h1>
          <p>
            Lets talk about this website. Send me a message in the Feedback form
            if you love <br /> this website or find any error/bug and I will be
            in touch within one business day.
          </p>
          <p>
            Thankyou for visiting...much love from <b>Jatin chawla</b>&nbsp;♥{" "}
          </p>
        </div>

        <div className="right">
          <form ref={form} onSubmit={sendEmail}>
            <center>
              <h3 className="contactHeading" id="contactHeading">
                Feedback
              </h3>
            </center>
            <div className="mb-3 ">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name :
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Comment :
              </label>
              <textarea
                className="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                placeholder="Type something"
                rows="2"
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary mt-3"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </main>
    </>
  )
}

export default Contact