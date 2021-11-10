
# TrackTik Assignment

## NOTE

To run the tests you need to create a cypress.env.json file and specify the login credentials required by the tests

It would have 

{
    "user": "xyc",
    "email": "ttt",
    "pass": "rty"
}

Please refer to this screenshot below for reference on how to create cypress.env.json file:-
Please add your amazon account credentials in the env file.

<img width="1433" alt="Screen Shot 2021-11-09 at 9 51 00 PM" src="https://user-images.githubusercontent.com/47828587/141040771-f9f63f1a-d6d7-4fcc-aeff-c79f0ae99847.png">


## Available Scripts

In the project directory, you can run:

### `npm install`

installs the dev dependencies

### `npm run cy:canada`

script for running the tests with default config file

### `npm run cy:us`

script for running the tests with us_account.json config file



## Run the tests by building a custom docker image
## Please note in order to run via docker, you need to have docker installed in your system, please go here to install : https://docs.docker.com/get-docker/
### `docker build -t tracktik-image .`

It will build the image with the image name specified and then use the below command to run the docker image

### `docker run -t tracktik-image .`



## Run the tests locally

To run it locally, you need to create cypress.env.json or create cypress environment variable inside the configuration files

It would have 

{
    "user": "xyc",
    "email": "ttt",
    "pass": "rty"
}

And then do 
### `npm install`
### `npm run cy:canada`


# Test Scenarios Covered by Automation

These are set of UI tests:-

1. homePageValidation.spec :-
      
        |Test Scenario                            |      Expected Result    (amazon.ca)                |       Expected Result    (amazon.com)
         Login with user credentials and verify:  |    user's name ,return & orders button             |    user's name ,return & orders button 
           -user's name is displayed on the             and cart button and menu items                      and cart button and menu items
            landing page                                should be displayed                                 should be displayed
           -Return and Orders button is displayed
           -Cart is displayed 
           -Specific hamburger menu items are 
            being displayed 

 2. session.spec :-

        |Test Scenario                            |      Expected Result    (amazon.ca)                |       Expected Result    (amazon.com)
        |Verify login with valid credentials      |     user should be able to login                   |     user should be able to login  
            
        |Verify login with invalid credentials    |  user should not be able to login and error message|     user should not be able to login and error message   
                                                     should be displayed                                     should be displayed  
          
        |Verify logout                            |  user should be able to logout and see the sign in |     user should be able to logout and see the sign in 
                                                     page after loggin out                                   page after loggin out
