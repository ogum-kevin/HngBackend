

```markdown
# HngBackend API Documentation 🎉

Welcome to the API documentation for the HngBackend service! This API provides various endpoints to manage user data. Below, you'll find details on how to interact with this API.

## Base URL

```
https://hngx-internship.onrender.com/api
```

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

### 3. Create a New User

- **Endpoint:** `/`
- **Method:** `POST`
- **Description:** Create a new user with a random ID.
- **Parameters:**
  - `user_name` (string, required): The name of the user.
  - `user_email` (string, required): The email of the user.

**Example Request:**

```shell
POST https://hngx-internship.onrender.com/api?user_name=johndoe&user_email=john@example.com
```

**Example Response (Success):**

```json
{
  "message": "Request successful",
  "statusCode": 200
}
```

**Example Response (User Already Exists):**

```json
{
  "error": "User already exists"
}
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
