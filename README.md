# SMS-Bulk-Sender
SMS message bulk sender using the Telnyx API</br></br>

Use the Telnyx API to bulk send SMS services. This project does initial checks of the numbers. It calculates how many SMS' the input text will be split into to help estimate send costs. There is the option to send the message with an alphanumeric title instead of the number. This will require a Telnyx messaging profile being created and the unique ID being used.</br>
The messages are sent as quickly as the browser can send post requests.</br>
To try this out before self hosting use https://sms.team777.pro where this code is hosted.</br></br>

* Ensure your Telnyx account has been verified so the account isn't disabled when sending large numbers of messages.</br>
* Telnyx has rate limiters on certain number formats. UK long numbers for example are 6 messages a minute by default. Once the SMS Bulk Sender has successfully sent the messages from Telnyx, there may be a delay in the message being delivered while these rate limits are in place. Please speak with Telynix to have this limit removed.<br/></br>

Install:</br>
Configure a webserver and copy the contents of this repository into the directory.</br></br>


