Feature: TechFios bank and cash new  account functionality 


Background:
Given  user is on login page

 

Scenario Outline: user should be able to login with valid credentials and open new account 
When user enter the" <userName>"and "<password>" 


When user click on bank and cash button
And  user click on new account button
Then user shoud be on account page 
And user can fill up from entring "<accountTitle>"and "<decscription>"and "<intitialBalance>" and "<accountNumber>" and "<contectPerson>" and "<phoneNumber>" and "<internetBankingUrl>" and submit button

Then user should be able to see validate 
Examples:
|userName|password|accountTitle|decscription|intitialBalance|accountNumber|contectPerson|phoneNumber|internetBankingUrl|
|demo@techfios.com|abc123|abcd|khaoihhc|2000|983869813|Tom|1112223333|www.xyz|


