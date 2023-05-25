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
