
# First Configure the SMTP SERVER
```  

# MAIL CONFIGURATION

SMTP_HOST=""

SMTP_HOST_USER=""

SMTP_HOST_PASS=""

SMTP_HOST_PORT=587

SMTP_TYPE="TLS"
```
## Routes::

 ``` Default Base URL=> http://localhost:7145```

**SEND MAIL**

- GET ```{{baseURL}}/api/send```

**TRACK EMAIL**

- GET ```{{baseURL}}/api/track/:tracking_Id```

**ANALYTICS**

- GET ```{{baseURL}}/analytics```