# IP Checker

## About The Project

This is a simple ip checker program which emails and send a discord message whenever the device IP is changed. Since I currently do not have a static ip, I use to send myself reminder whenever my device ip is changed due to unknown reasons (eg, blackout, unnotified ISP maintainence).

## Getting Started
### Prerequisites

- Already have Discord Bot
- email account or mail server
- (optional)PM2 installed [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)

### Installation

1. Clone the repo

```
git clone https://github.com/bulaxy/ip-checker
```

2. Install NPM packages 

```
npm install
```

3. Adding config files

#### `general.json`

example
```
{
    "mail":true, 
    "discord":true,
    "interval":300000,
    "filename":"localip",
    "discordid":123123123,
    "mailrecipient":"example@example.com"
}
```

| Key | Value | Description|
| ------------- |:-------------:| -----:|
| mail | `True/False` | Whether the program will send you an email when ip is changed|
| discord | `True/False` | Whether the bot will send you an discord message when ip is changed|
| interval | milliseconds | How often will the bot check for ip changes|
| filename | any string (1 word) | The bot will create a file to store the current ip, and it is the name of the file |
| discordid | discord User Id | This is the user id the bot will send the message to if discord is true, can leave blank if not used|
| mailrecipient | mail address | This is the email address the bot will send the email to if discord is true, can leave blank if not used|


#### `discordBot.json`

example
```{
    "token":"123123123123123sdfqasdf132"
}
```

| Key | Value | Description|
| ------------- |:-------------:| -----:|
| token | Discord Bot Token | Token of the discord bot|

#### `mail.json`

example
```
{
    "host": "mail.bulaxy.site",
    "port": 25,
    "secure": false, 
    "auth": {
        "user": "username",
        "pass": "password"
    },
    "tls": {
        "rejectUnauthorized": false
    },
    "email":"example@gmail.com"
}
```

(TODO)

### Usage

Run it through pm2 is prefered since it can set as a start up script, but can also run as normal node instance

if inside the directory, 
```
pm2 start index.js
pm2 save
```

or 

if outside the folder,

```
pm2 start ip-checker
pm2 save
```

Running with just node inside the directory

```
node .
```

Running outside the directory

```
node ip-checker
```
