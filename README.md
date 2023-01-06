# phishing-blocker

## INSTALLATION
```bash
npm install phishing-blocker
```

## USEAGE EXAMPLE

* The first argument is a list of permitted FQDNs
* The second argument is a message to be displayed if the first argument and the hostname do not match.
* If the third argument is true, the HTML content is replaced by the second argument.

```
const checkHostname = require('phishing-blocker');
checkHostname(
  [
    "phishing-hunter.com",
    "www.phishing-hunter.com",
    "dev.phishing-hunter.com",
    "demo.phishing-hunter.com",
    "doc.phishing-hunter.com",
    "localhost"
  ],
  "Phishing Scam Detected", true)
```

## Demo

* [Real site](https://www.phishing-hunter.com/demo/)
* [Fake site](https://fake.phishing-hunter.com/demo/)
