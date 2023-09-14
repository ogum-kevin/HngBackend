

```markdown
# HngBackend API Documentation 🎉

Welcome to the API documentation for the HngBackend service! This API provides various endpoints to manage user data. Below, you'll find details on how to interact with this API.

## Base URL

```
https://hngx-internship.onrender.com/api
```
## Running Test Scripts with Postman
You can use Postman to run test scripts for this project. Follow these steps:

Install Postman: If you haven't already, download and install Postman.

Import the Collection:

Click on this link to import the Postman collection.
```
https://elements.getpostman.com/redirect?entityId=18264213-b1e83851-0817-485b-a10d-f14179643b08&entityType=collection
```
Select Environment:

Before running test scripts, ensure you have the correct environment set up in Postman. You can create one by clicking on the gear icon in the upper right-hand corner and selecting "Manage Environments."
Run the Collection:

In the left sidebar, under "Collections," select the collection you imported.
Click on the collection to open it.
Click the "Run" button located at the top right of the collection window.
Choose the environment you want to use for this run.
Click the "Run <collection name>" button.
Monitor Test Execution:

Postman will send requests and execute test scripts one by one. Monitor the progress in the "Runner" tab at the bottom of the Postman window. You'll see requests being sent and test results displayed.
View Test Results:

After the collection run is complete, view the results in the "Runner" tab. It will show which requests passed and which failed. If any tests fail, click on the request to see the details of the failure.
Export Test Results (Optional):

If needed, you can export the test results by clicking the "Export Results" button in the "Runner" tab.
## Postman test scripts link



## Endpoints

### 1. Retrieve User Information

- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Get user information based on Slack name and track.
- **Parameters:**
  - `slack_name` (string, required): The Slack name of the user.
  - `track` (string, required): The track of the user.

**Example Request:**

```shell
GET https://hngx-internship.onrender.com/api?slack_name=johndoe&track=backend
```

**Example Response:**

```json
{
  "slack_name": "johndoe",
  "current_day": "Monday",
  "utc_time": "2023-09-12T12:34:56Z",
  "track": "backend",
  "github_file_url": "https://github.com/ogum-kevin/HngBackend/blob/main/server.js",
  "github_repo_url": "https://github.com/ogum-kevin/HngxBackend",
  "status_code": 200
}
```

### 2. Retrieve User by ID

- **Endpoint:** `/:id`
- **Method:** `GET`
- **Description:** Get user information by user ID.
- **Parameters:**
  - `id` (string, required): The unique ID of the user.

**Example Request:**

```shell
GET https://hngx-internship.onrender.com/api/12345
```

**Example Response (Success):**

```json
{
  "_id": "12345",
  "userName": "johndoe",
  "userEmail": "john@example.com"
}
```

**Example Response (User Not Found):**

```json
{
  "error": "User of that ID does not exist"
}
```

```markdown

###2.Create User

- **URL:** `/`
- **Method:** `POST`
- **Description:** Register a new user.

## Request Parameters

- `user_name` (string, required): The name of the user.
- `user_email` (string, required): The email of the user.

**Example Request:**

```json
POST /
{
  "user_name": "johndoe",
  "user_email": "john@example.com"
}
```

## Successful Response

- **Status Code:** 200 OK
- **Response Body:**

```json
{
  "message": "User registered successfully",
  "statusCode": 200
}
```

## Error Response

- **Status Code:** 400 Bad Request (User Already Exists)
- **Response Body:**

```json
{
  "error": "User already exists. Please log in."
}
```


```


### 4. Update User Information

- **Endpoint:** `/:id`
- **Method:** `PATCH`
- **Description:** Update user information by user ID.
- **Parameters:**
  - `user_name` (string, optional): The new name of the user.
  - `user_email` (string, optional): The new email of the user.

**Example Request (Update Name):**

```shell
PATCH https://hngx-internship.onrender.com/api/12345?user_name=newname
```

**Example Request (Update Email):**

```shell
PATCH https://hngx-internship.onrender.com/api/12345?user_email=newemail@example.com
```

**Example Request (Update Both Name and Email):**

```shell
PATCH https://hngx-internship.onrender.com/api?user_name=newname&user_email=newemail@example.com
```

**Example Response (Success):**

```json
{
  "_id": "12345",
  "userName": "newname",
  "userEmail": "newemail@example.com"
}
```

**Example Response (User Not Found):**

```json
{
  "error": "User of that ID does not exist"
}
```

**Example Response (Invalid User Credentials):**

```json
{
  "error": "Invalid user credentials"
}
```

### 5. Delete User by ID

- **Endpoint:** `/:id`
- **Method:** `DELETE`
- **Description:** Delete user information by user ID.
- **Parameters:**
  - `id` (string, required): The unique ID of the user.

**Example Request:**

```shell
DELETE https://hngx-internship.onrender.com/api/12345
```

**Example Response (Success):**

```json
{
  "message": "User deleted successfully"
}
```

**Example Response (User Not Found):**

```json
{
  "error": "User of that ID does not exist"
}
```

That's it! You can use these endpoints to manage user data in the HngBackend service. If you have any questions or need further assistance, please feel free to reach out. Happy coding! 🚀👨‍💻👩‍💻
```

You can paste this Markdown content directly into your GitHub README for clear and organized API documentation.
