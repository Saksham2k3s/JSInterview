fetch("https://workwithus.lucioai.com/access-check", {
    method: "POST",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2Frc2hhbSBTaHJpdmFzdGF2YSIsImVtYWlsIjoic2Frc2hhbXNocml2YXN0YXY1OEBnbWFpbC5jb20iLCJkYXRlIjoiMjAyNS0wNC0wMSAwNjo0MDo1NSJ9.Sy5WIhQSuWDh7dAq7Hz8dzlK7RoyZGeWYfWKBH7tfeY",
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
  