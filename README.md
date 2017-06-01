## Article API


#### How to start

Run `npm install` in terminal to install dependencies.

then run `npm start` to start your server.

#### Adding articles

use the following settings 

1. HTTP POST
2. format your articles similar to the following
    ```JSON
    {
      "id": "3",
      "title": "Can knowing which microbes reside in your gut reveal much about your health?",
      "date": "2017-05-15",
      "body": "many of us modern humans have also messed up another ecosystem - the microbes living inside our gut",
      "tags": [
        "health",
        "science"
      ]
    }
    ```
  make sure body is set to 'Application/json'

##### Other endpoints are self explanatory and work as it should

for any questions hit me an email: a.attayee12@gmail.com
