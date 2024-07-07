1. POST /schedule-email
Request:
URL: http://localhost:3000/api/schedule-email
Method: POST
Headers:
  Content-Type: application/json
Body:
json
{
    "recipient": "test@example.com",
    "subject": "Test Email",
    "body": "This is a test email.",
    "scheduleTime": "2024-07-07T15:00:00Z"
}

2. GET /scheduled-emails
Request:

URL: http://localhost:3000/api/scheduled-emails
Method: GET
Response:

Status Code: 200 OK
Body:
json
[
    {
        "_id": "60e2a6b5e4b0c6207c1e7c10",
        "recipient": "test@example.com",
        "subject": "Test Email",
        "body": "This is a test email.",
        "scheduleTime": "2024-07-07T15:00:00.000Z",
        "status": "scheduled",
        "__v": 0
    }
]

3. GET /scheduled-emails/{id}
Request:

URL: http://localhost:3000/api/scheduled-emails/60e2a6b5e4b0c6207c1e7c10
Method: GET
Response:

Status Code: 200 OK
Body:
json
{
    "_id": "60e2a6b5e4b0c6207c1e7c10",
    "recipient": "test@example.com",
    "subject": "Test Email",
    "body": "This is a test email.",
    "scheduleTime": "2024-07-07T15:00:00.000Z",
    "status": "scheduled",
    "__v": 0
}


4. DELETE /scheduled-emails/{id}
Request:

URL: http://localhost:3000/api/scheduled-emails/60e2a6b5e4b0c6207c1e7c10
Method: DELETE
Response:

Status Code: 200 OK
Body:
json
Copy code
{
    "message": "Email cancelled successfully"
}
