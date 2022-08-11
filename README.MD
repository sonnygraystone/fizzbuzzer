# FizzBuzzer Microservice Kata
## Description
Requests to http://localhost:2990/jira/plugins/servlet/fizzbuzzer/api/:number should return with a number, fizz, buzz or fizzbuzz based on the rules of https://en.wikipedia.org/wiki/Fizz_buzz

## Kata Requirements
+ A number divisible by 3 returns fizz
+ A number divisible by 5 returns buzz
+ A number divisible by 3 and 5 returns fizzbuzz
+ A number not divisible by 3 or 5 returns the number
+ Anything that is not a number returns 400 with an error of "invalid input"
### Advanced + Testing
+ Create at least two unit tests dealing with inputs
+ Create Cypress tests to cover
    + Valid input (numbers for fizz, buzz, fizzbuzz, normal number)
    + Invalid input (letters, symbols, parameters etc.)
+ Sonarlint detects no problems

## Where to start
### Code
To start writing code, begin in the src/main/java/org/techtime/servlets/KataDescriptionServlet.java file.

### Running the program
To start the program use either 
```
atlas-mvn jira:debug 
```
or
```
npm start
```

# Original Readme
You have successfully created an Atlassian Plugin!

Here are the SDK commands you'll use immediately:

* atlas-run   -- installs this plugin into the product and starts it on localhost
* atlas-debug -- same as atlas-run, but allows a debugger to attach at port 5005
* atlas-help  -- prints description for all commands in the SDK

Full documentation is always available at:

https://developer.atlassian.com/display/DOCS/Introduction+to+the+Atlassian+Plugin+SDK
