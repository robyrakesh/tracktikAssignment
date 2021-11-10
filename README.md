
# TrackTik Assignment

## NOTE

To run the tests you need to create a cypress.env.json file and specify the login credentials required by the tests

It would have 

{
    "user": "xyc",
    "email": "ttt",
    "pass": "rty"
}

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
