# phishing-blocker

## INSTALLATION
```bash
npm install phishing-blocker
```

## USEAGE EXAMPLE

* The first argument is a regular expressions for allowed domains
* The second argument is a message to be displayed if the first argument and the hostname do not match.
* If the third argument is true, the HTML content is replaced by the second argument.

```
const checkHostname = require('phishing-blocker');
var pattern = /^((www|dev)\.)?phishing-hunter\.com$/i;
checkHostname(pattern, "Phishing Scam Detected", true)
```

## Demo

* [Real site](https://www.phishing-hunter.com/demo/)
* [Fake site](https://fake.phishing-hunter.com/demo/)
