
# TrackTik Assignment

## Available Scripts

In the project directory, you can run:

### `npm install`

installs the dev dependencies

### `npm run cy:canada`

script for running the tests with default config file

### `npm run cy:us`

script for running the tests with us_account.json config file



## Run the tests by building a custom docker image

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
