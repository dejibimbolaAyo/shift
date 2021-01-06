### Steps to test solution

Running the solution
Ensure to have Docker installed

Run the following command from the project root to build the Docker images (for the first time) and spin up the containers

```bash
docker-compose up -d
```

While the containers are being spun up, a test is run on the API server to test the perspective calculations based on the test cases provided in the `/Data/TestCase.csv` file included in the challenge file.

With the containers up and running, the following ports will be available

- 8080
- 8081
- 8090
- 3306

The Frontend app runs on port `8080`.
Open a web browser and visit `http://localhost:8080` to access the test page

The Backend app (API) runs on the port `8090`
Baseurl: `http://localhost:8090/api/v1`

Get all questions: `{baseUrl}/questions`
Post response: `{baseUrl}/answer`

The Database Adminer runs on port `8081`
To login to the Database admin use the following details:

- host: `shift_database`
- user: `shift`
- password: `password`
- database: `perspective`

### To-do
#### Backend (API server)
A user is currently allowed to take a single perspective test. Allow users to re-take their perspective test

#### Frontend

- Add user input validation and sanitize input against SQL injection.
- Load database connection credentials from an environment file

#### Infrastructure

- Test runner should be handled with a CI tool (e.g CircleCI)
- Use a reverse-proxy server for the API
