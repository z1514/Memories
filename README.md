# Memories
A course project of multi user social media application. Users can post blogs, comment blogs and like blogs in Memories.

## Techniques
- NodeJS
- Express
- MongoDB (MongoDB Atlas)
- React
- Redux
- Heroku
- Material-UI

## Background and Features
The application is built with MERN tech stack. The front-end is based on React and utilized Redux to manage states and async requests. The backend system is based on Express and NodeJS. To make the system easier to deploy, this system used MongoDB Atlas as the database. The app supports features including:
- Registration
- Login/Logout
- JWT authentication
- Google OAuth API authentication
- Post blogs
- Comment blogs
- Delte blogs
- Like blogs
- Pagination

## Development Environment Setup 
To get it up and running with ngrok and twilio account
1. update .env fil with ngrok address for example: `<ngrokid>.ngrok.io`
2. update .env with Twilio account/api keys
3. In the twilio console find the phone number you plan on calling and update the "A call comes in" to take a webhook to the /placeCall view
    for example: `http://<ngrok-address>/placeCall`
4. navigate to the home directory of the `digerini-assistant-engine`
5. run these docker commands to start the server
    `docker-compose kill`
    `docker-compose down`
    `docker-compse  build`
    `docker-compose up`
6. Now that the server is up you should be able to call your twilio number

## API Endpoints Specification
Please go to `localhost:8000/redoc` for API documentation.


## Object Structure for MongoDB
### User 
defined in `digerini_app/models.py`
- id: uuid4 (string, required, noneditable) - The unique identifier for a user 
- username: +19490001111 (string, required) - The phone number of the user with the country code
- password: xxxxxx (string, optional) - Optional password hashed and salted
- twilio_number: +18880001111 (string, required) - The twilio phone number that the user is connected to
- call_list: [call_list](#call-list) (array[call], optional) - The list of call record for that username. 
- block_list: [block_list](#block-list) (array[phone_number], optional) - The list of blocked numbers for that username. 
- sample_links: (not used)


### Call List
defined in `digerini_assistant_api/utils.py`
- records: [call_record](#call-record) (array[call-record], optional)

### Call Record
defined in `digerini_assistant_api/utils.py`
- id: 1 (int, required) - The unique identifier for each call record, auto incrementing number
- stime: 1641780807 (int, required) - The call start time in epoch unix timestamp in UTC time 
- etime: 1641780814 (int, required) - The call end time in epoch unix timestamp in UTC time 
- status: 0 (bool, required) - 0=accepted, 1=blocked
- reason: 0 (int, required) - 0=accepted because on system's green list, 1=accepted because stated name, 2=accepted because the reason for the call, 10=blocked since on user's block list, 11=blocked since on system's grey list, 12=blocked since not able to answer the name (in the future this could be expanded to accommodate for more types of blocked calls)
- number: +1949000111 (string, required) - The incoming phone number
- state: CA (string, optional) - The incoming phone number's state
- country: US (string, optional) - The incoming phone number's state
- stir: TN-Validation-Passed-A (string, optional) - The StirVerstat from twilio

### Block List
defined in `digerini_assistant_api/utils.py`
- A dictoinary of key:value pairings that arranaged like so: {"num1":"reason1", "num2":"reason2"}
- number: The number that was blocked
- reason: The reason that the number was blocked

## Django Admin
To inspect the database in your local development environment, you can craete a Django super user by `python3 manage.py createsuperuser`. Then, go to `localhost:8000/admin`.

## TODO
Note that the items without a checkbox is not necessary feature and scheduled for the future. 

- [x] JWT token for authorization
- [x] API for uploading on-board recordings
- [x] API for updating block list
- [x] Get rid off the beeping noise in the audio recordings
- [ ] Secure all possible HTTP endpoints with JWT authorization
- [ ] Deploy the backend to AWS
- [ ] Research and integrate an API to transcribe call audio
- [ ] Re-factor [call-list](#call-list) into a separate model in MongoDB
- [ ] API for block call details page to get call record between user and the blocked number
- [ ] API for the settings page to display user's name
- [ ] Database lock for concurrent write or update when multiple incoming calls for the same umber
- [ ] Encrypt the user's data
- [ ] Get more information from Twilio Lookup API about an incoming number
- [ ] Generate secret key for JWT token before production.
