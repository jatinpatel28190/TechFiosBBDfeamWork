$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jatin/eclipse-workspace/CRM_BBDframWork/src/test/java/feature/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "TechFios bank and cash new  account functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user enter the\" \u003cuserName\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user can fill up from entring \"\u003caccountTitle\u003e\"and \"\u003cdecscription\u003e\"and \"\u003cintitialBalance\u003e\" and \"\u003caccountNumber\u003e\" and \"\u003ccontectPerson\u003e\" and \"\u003cphoneNumber\u003e\" and \"\u003cinternetBankingUrl\u003e\" and submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should be able to see validate",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "accountTitle",
        "decscription",
        "intitialBalance",
        "accountNumber",
        "contectPerson",
        "phoneNumber",
        "internetBankingUrl"
      ],
      "line": 20,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "bankAndCach",
        "khaoihhc",
        "2000",
        "983869813",
        "Tom",
        "1112223333",
        "www.xyz.com"
      ],
      "line": 21,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 4164488100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user enter the\" demo@techfios.com\"and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user can fill up from entring \"bankAndCach\"and \"khaoihhc\"and \"2000\" and \"983869813\" and \"Tom\" and \"1112223333\" and \"www.xyz.com\" and submit button",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should be able to see validate",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " demo@techfios.com",
      "offset": 15
    },
    {
      "val": "abc123",
      "offset": 39
    }
  ],
  "location": "LoginStepDefination.user_enter_the_and(String,String)"
});
formatter.result({
  "duration": 3672920600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 38914600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "duration": 521001600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "duration": 5382600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankAndCach",
      "offset": 31
    },
    {
      "val": "khaoihhc",
      "offset": 48
    },
    {
      "val": "2000",
      "offset": 62
    },
    {
      "val": "983869813",
      "offset": 73
    },
    {
      "val": "Tom",
      "offset": 89
    },
    {
      "val": "1112223333",
      "offset": 99
    },
    {
      "val": "www.xyz.com",
      "offset": 116
    }
  ],
  "location": "LoginStepDefination.user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1101112700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "duration": 58474000,
  "status": "passed"
});
});