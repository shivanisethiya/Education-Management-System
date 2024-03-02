
<div align="center">
  <h1> StudyNotion</h1>
</div>
<hr>

<div align="center">
  <img src="https://github.com/shivanisethiya/Education-Management-System/assets/105165875/c52273e8-7647-43c0-a5e0-e74be0924aeb"/>
</div>

<hr>

## Tech Stack:

![MongoDB](https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%230072C6.svg?style=for-the-badge&logo=express&logoColor=white)
 ![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=blue)
![Node.js](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 

- **Cloudinary**: Media asset management and optimization
- **Nodemailer**: Email sending in Node.js applications
- **Razorpay**: Payment gateway integration for online transactions

<hr>


## Project Description-
 StudyNotion is a fully functional ed-tech platform that enables instructors to create couerses and students to consume and rate educational content.
 
 StudyNotion aims to provide:
 
- A seamless and interactive learning experience for students, making education more accessible and engaging.
- A platform for instructors to showcase their expertise and connect with learners across the globe.

You can find the live site <a href="https://education-management-system-frontend.vercel.app/" target="_blank">here</a>

<hr>

## Table of Contents

- Installation
- Working
- Contributors


<hr>

## Installation

### Prerequisites

- [React.js](https://react.dev/)
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
  
### Clone

- Clone this repo to your local machine using the following command:

```shell
git clone https://github.com/shivanisethiya/Education-Management-System
```

### Setup

- Download the dependencies in root directory by the following command:

```shell
npm install
```
- Now move inside server directory and install backend dependencies

```shell
cd server
```

```shell
npm install
```

-Now move back to root directory

```shell
cd ..
```



- Create a `.env` file in the root directory and add the following environment variables:

```shell
REACT_APP_BASE_URL='http://localhost:4000/api/v1'
REACT_APP_RAZORPAY_KEY ="your_razorpay_key"
```

- Create another `.env` file in the server folder and add the following environment variables:

```shell
MAIL_HOST = smtp.gmail.com
MAIL_USER = "your_email_address"
MAIL_PASS = "your_app_password"
#get app password by setting two-factor authentication

JWT_SECRET = "any_secret"

#razorpay
RAZORPAY_KEY ="your_razorpay_key"
RAZORPAY_SECRET = "your_razorpay_secret"


# cloudinary
FOLDER_NAME = "your_cloudinary_folder_name"
CLOUD_NAME = "your_cloud_name"
API_KEY = "your_api_key"
API_SECRET = "your_api_secret"


MONGODB_URL = "your_mongodb_cluster_url"
PORT = 4000

BASE_URL = 'http://localhost:3000/'
```

- Run the following command in root directory to start the project :

```shell
npm run dev
```

<hr>

- You can now access the site at `http://localhost:3000/`.

<hr>

## Working

<hr>

<div align="center">
  

<img src="https://github.com/shivanisethiya/Education-Management-System/blob/main/src/assets/Images/Working.png" height="500px" >
</div>

<hr>

## Contributors

<hr>

- [Shivani Sethiya](https://github.com/shivanisethiya) - Developer
- [Priyanshi Setia](https://github.com/priyanshi47) - Developer

<hr>







 

 


