# amelitop

## Backend Installation

### Prerequisites

You need Anaconda to be installed in your local machine.
- Run following command to install Anaconda of needed `brew install --cask anaconda`
- Create your own local environment using packages listed in `requirements.txt` - `conda create --name amelitop --file requirements.txt`
- Activate your environment in the project root directory - `conda activate amelitop`
- DRF is under `conda-forge`, so might need to update the config `conda config --add channels conda-forge`

### Development
- Go to the DRF root directory - `cd amelitop`
- Run local development server `python manage.py runserver`

### DB Migrations
- `python manage.py makemigrations <app>` - create the migrations
- `python manage.py migrate` - execute the migrations


## UI Installation

## Installation

- Make sure to have node version 16.10.0 installed preferably through NVM.
- cd into **ui folder** of the project or whatever folder created to house your ui code.
- Run the command `npm i`.
- After the dependencies have been installed. You are ready to build.

### Local Development
- `npm run start` will spin up your local dev environment. This will automatically point to super tomcat if needed at localhost.

### Building
- Run `npm run build` command to build the project.