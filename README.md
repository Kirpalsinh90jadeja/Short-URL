# Short URL Service

## Endpoints

### POST /users/login

- **Description**: Authenticates a user and starts a session.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```
- **Response**:
  - **200 OK**: Successfully authenticated.
  - **401 Unauthorized**: Invalid credentials.

### POST /users/signup

- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```
- **Response**:
  - **201 Created**: Successfully registered.
  - **400 Bad Request**: Validation error.

### POST /users/url

- **Description**: Generates a new short URL.
- **Request Body**:
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response**:
  - **200 OK**: Returns the generated short URL.
  - **400 Bad Request**: URL is required.

### GET /users/analytics/:shortId

- **Description**: Retrieves analytics for a short URL.
- **Parameters**:
  - `shortId`: The ID of the short URL.
- **Response**:
  - **200 OK**: Returns the analytics data.
  - **404 Not Found**: Short URL not found.

### DELETE /users/url/:shortId

- **Description**: Deletes a short URL by ID.
- **Parameters**:
  - `shortId`: The ID of the short URL.
- **Response**:
  - **200 OK**: Successfully deleted.
  - **404 Not Found**: Short URL not found.
