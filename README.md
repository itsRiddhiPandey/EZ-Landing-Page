# **EZ Landing Page**

This project is a single-page web application built using **Vite with ReactJS**, designed to be fully responsive across different devices. The application consists of a **simple form integrated with an API**, following the given requirements.

## **Project Overview**
- Developed using **ReactJS with Vite** for a fast and optimized setup.
- Implemented **responsive CSS** to ensure compatibility with multiple screen sizes:
  - **480p** (Mobile View)
  - **720p**
  - **1080p**
  - **2732×2048** (iPad)
  - **1440×823** (MacBook)
- Frontend validation is included for **empty input and email format**.
- API error messages are displayed dynamically inside the form.

## **API Information**
- **API Endpoint**: [https://test.ezworks.ai/api](https://test.ezworks.ai/api)
- **Request Type**: `POST`
- **Required Parameter**: `email`

## **API Integration Use Cases**
1. **Empty Form Submission is not allowed** (Validated at Front-End).
2. **Email Validation at Front-End** (Format validation is required).
3. If the API returns an error for emails ending with `@ez.works`, display an error message in the form field.
   - Example:
     - `bhavya@ez.works` → Response Code **422** (Error Message Shown)
     - `bhavya@abc.com` → Form submitted successfully.
4. On **successful submission**, the API returns **200**, and a message **"Form Submitted"** is displayed inside the form field.

## **Installation & Setup**
```sh
# Clone the repository
git clone <repo-link>

# Navigate to project directory
cd project-folder

# Install dependencies
npm install

# Start the development server
npm run dev
```

## **Deployment**
To build the project for production, use:
```sh
npm run build
```
This will generate optimized static assets in the `dist` folder.

## **Video Demonstration**
### **1. API Response in React App**
![React API Demo](https://drive.google.com/file/d/11bO8QFE2kzLY_wZxqTH4WRX1yanKOodU/view?usp=sharing)

### **2. API Response in Postman**
![Postman API Demo](https://drive.google.com/file/d/1sbVWE4cRPasvCkWa5znv3EJL7j11814W/view?usp=sharing)

---
