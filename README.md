# Alrouf-Frontend
This is a **ReactJS** web app and is part of a bundled system for sorting CVs and exporting a report.
The front-end part of the system is responsible for picking up applicant's data and CV file, Putting them in the correct format then passes them to the back-end which stores them in the databse.
This system was meant for demonstration purposes only.

## Other parts of the system
* [Alrouf Back-end](https://github.com/tenmayos/Alrouf-backend)
* [Alrouf Reporter](https://github.com/tenmayos/Alrouf-Reporter)

## Prerequisites
* [NodeJS](https://nodejs.org/en/) JavaScript runtime environment which comes along with NPM (Node package manager) which installs all the required dependencies.
* [Alrouf Back-end](https://github.com/tenmayos/Alrouf-backend) The back-end NodeJS API the data will be sent to for any necessary processing.

## How to use

1. We will need to install the required dependencies using NPM with the following command `npm install` ![npm install](/Ref_Images/npm.png)

 * We should see the following message when the installation of dependencies is complete 
 ![dependencies installed successfully](/Ref_Images/npm-installed.png)

  No need to worry about the packages vulnerabilities as this is nothing serious and the project is merely meant for demonstration.

2. Start the web app using `npm start` ![npm start](/Ref_Images/start.png) 
    This may take a bit.

    * We should see the following message appear in the terminal when the app launches 
    ![started and compiled successfully](/Ref_Images/started.png)

    * Followed by the default browser opening up `http://localhost:3000` displaying the following website page 
    ![Main page](/Ref_Images/website.png)

3. We should now be able to fill the form and submit it to the back-end for storing in the database. 
    * ![Main page filled](/Ref_Images/website-filled.png)

This website will make a POST API call with the assumption that the back-end is up and running on the same machine on port 4000.