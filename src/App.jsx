import { useState } from 'react';
import Card from './components/card';
import Button from './components/button';
import Text from './components/text';
import Title from './components/title';

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // For error message
  const [successMessage, setSuccessMessage] = useState("");
  const submitEmailButtonHandler = async (e) => {
    e.preventDefault();  // Prevent form submission

    // Clear any previous error or success message
    setError("");
    setSuccessMessage("");

    // Check for empty email
    if (!email) {
      setError("Email is required.");
      return;
    }

    // Validate email format using regex (basic format check)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Check if email ends with "@ez.works"
    if (email.endsWith("@ez.works")) {
      setError("Email ending with @ez.works is not allowed.");
      return;
    }

    // Make an API request to submit the form
    try {
      const response = await fetch(" https://test.ezworks.ai/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setSuccessMessage("Form Submitted Successfully");
      } else if (response.status === 422) {
        setError("The email address ends with @ez.works, which is not allowed.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setError("There was an error with the API request.");
    }
  };

  return (
    <div className='appRoot'>
      <div className='left-container'>
        <div className="logo">
          <img src="./assets/logo.png" alt="EZ Works" />
        </div>
        <Title heading="Suite Of Business Support Services" />
        <Text text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" />
        <form>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
          </div>
          <Button buttonType="button" onClickHandler={submitEmailButtonHandler} buttonText="Contact Me" />
        </form>
      </div>
      <div className='teasers-container'>
        <Card imagePath="icon-1" heading="Presentation Design" text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. " />
        <Card imagePath="icon-2" heading="Audio - Visual Production" text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" />
        <Card imagePath="icon-3" heading="Translation Services" text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" />
        <Card imagePath="icon-4" heading="Graphic Design" text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" />
        <Card imagePath="icon-5" heading="Research & Analytics" text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" />
        <Card imagePath="icon-6" heading="Data Processing" text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" />
      </div>
    </div>
  )
}

export default App
