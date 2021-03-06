$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios bank and cash new  account functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user enter the\" \u003cuserName\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user can fill up from entring \"\u003caccountTitle\u003e\"and \"\u003cdecscription\u003e\"and \"\u003cintitialBalance\u003e\" and \"\u003caccountNumber\u003e\" and \"\u003ccontectPerson\u003e\" and \"\u003cphoneNumber\u003e\" and \"\u003cinternetBankingUrl\u003e\" and submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should be able to see validate",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
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
      "line": 21,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "abcd",
        "khaoihhc",
        "2000",
        "983869813",
        "Tom",
        "1112223333",
        "www.xyz"
      ],
      "line": 22,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "",
        "khax",
        "oihhc",
        "20054",
        "983869813",
        "Tom",
        "1112223333",
        "www.xyz"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;3"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "agjre",
        "kveveoihtbrbc",
        "20250",
        "983869813",
        "Tom",
        "1112223333",
        "www.xyz"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;4"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "abcgwt",
        "khaoibwrtbhc",
        "200520",
        "983869813",
        "Tom",
        "1112223333",
        "www.xyz"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;5"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "abctbgwr",
        "khaoirtbhc",
        "200250",
        "983869813",
        "Tom",
        "1112223333",
        "www.xyz"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 4317578800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter the\" demo@techfios.com\"and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user can fill up from entring \"abcd\"and \"khaoihhc\"and \"2000\" and \"983869813\" and \"Tom\" and \"1112223333\" and \"www.xyz\" and submit button",
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
  "line": 19,
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
  "duration": 3421304600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 39332900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "duration": 477862000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "duration": 6625000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 31
    },
    {
      "val": "khaoihhc",
      "offset": 41
    },
    {
      "val": "2000",
      "offset": 55
    },
    {
      "val": "983869813",
      "offset": 66
    },
    {
      "val": "Tom",
      "offset": 82
    },
    {
      "val": "1112223333",
      "offset": 92
    },
    {
      "val": "www.xyz",
      "offset": 109
    }
  ],
  "location": "LoginStepDefination.user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 215374500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU39J6M\u0027, ip: \u0027192.168.118.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\jatin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57660}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d5b374ed2226d34989b023ba5b26b6de\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contact_phone\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.collect(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat qa.com.pages.CreatNewAccountPage.creatNewAccount(CreatNewAccountPage.java:54)\r\n\tat stepDefinnation.LoginStepDefination.user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(LoginStepDefination.java:64)\r\n\tat ???.And user can fill up from entring \"abcd\"and \"khaoihhc\"and \"2000\" and \"983869813\" and \"Tom\" and \"1112223333\" and \"www.xyz\" and submit button(features/Login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 3007006800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter the\" demo@techfios.com\"and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user can fill up from entring \"\"and \"khax\"and \"oihhc\" and \"20054\" and \"983869813\" and \"Tom\" and \"1112223333\" and submit button",
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
  "line": 19,
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
  "duration": 2638876400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 12229252100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU39J6M\u0027, ip: \u0027192.168.118.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\jatin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57683}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5a1bd2857d61a29d73ea115633c4868c\n*** Element info: {Using\u003dxpath, value\u003d//ul[@class\u003d\u0027nav\u0027]/descendant::span[contains(text(),\u0027Bank \u0026 Cash\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.collect(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat qa.com.pages.ClikOnBankAndCash.ClickOnBankAndCashButton(ClikOnBankAndCash.java:35)\r\n\tat stepDefinnation.LoginStepDefination.user_click_on_bank_and_cash_button(LoginStepDefination.java:45)\r\n\tat ???.When user click on bank and cash button(features/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "khax",
      "offset": 37
    },
    {
      "val": "oihhc",
      "offset": 47
    },
    {
      "val": "20054",
      "offset": 59
    },
    {
      "val": "983869813",
      "offset": 71
    },
    {
      "val": "Tom",
      "offset": 87
    },
    {
      "val": "1112223333",
      "offset": 97
    }
  ],
  "location": "LoginStepDefination.user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 3071225700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter the\" demo@techfios.com\"and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user can fill up from entring \"agjre\"and \"kveveoihtbrbc\"and \"20250\" and \"983869813\" and \"Tom\" and \"1112223333\" and \"www.xyz\" and submit button",
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
  "line": 19,
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
  "duration": 3143081600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 17237100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU39J6M\u0027, ip: \u0027192.168.118.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\jatin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57711}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 69e74af12d1b13d2e245799c5df832ed\n*** Element info: {Using\u003dxpath, value\u003d//ul[@class\u003d\u0027nav\u0027]/descendant::span[contains(text(),\u0027Bank \u0026 Cash\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.collect(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat qa.com.pages.ClikOnBankAndCash.ClickOnBankAndCashButton(ClikOnBankAndCash.java:35)\r\n\tat stepDefinnation.LoginStepDefination.user_click_on_bank_and_cash_button(LoginStepDefination.java:45)\r\n\tat ???.When user click on bank and cash button(features/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "agjre",
      "offset": 31
    },
    {
      "val": "kveveoihtbrbc",
      "offset": 42
    },
    {
      "val": "20250",
      "offset": 61
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
      "val": "www.xyz",
      "offset": 116
    }
  ],
  "location": "LoginStepDefination.user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 3079538000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter the\" demo@techfios.com\"and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user can fill up from entring \"abcgwt\"and \"khaoibwrtbhc\"and \"200520\" and \"983869813\" and \"Tom\" and \"1112223333\" and \"www.xyz\" and submit button",
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
  "line": 19,
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
  "duration": 15710700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU39J6M\u0027, ip: \u0027192.168.118.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\jatin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57727}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 879c3646a6bcf132411510da8d924e61\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"username\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat qa.com.pages.LoginPage.Login(LoginPage.java:39)\r\n\tat stepDefinnation.LoginStepDefination.user_enter_the_and(LoginStepDefination.java:35)\r\n\tat ???.When user enter the\" demo@techfios.com\"and \"abc123\"(features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abcgwt",
      "offset": 31
    },
    {
      "val": "khaoibwrtbhc",
      "offset": 43
    },
    {
      "val": "200520",
      "offset": 61
    },
    {
      "val": "983869813",
      "offset": 74
    },
    {
      "val": "Tom",
      "offset": 90
    },
    {
      "val": "1112223333",
      "offset": 100
    },
    {
      "val": "www.xyz",
      "offset": 117
    }
  ],
  "location": "LoginStepDefination.user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 2324142500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU39J6M\u0027, ip: \u0027192.168.118.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\jatin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57742}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 79707bc3458fb3fc8059f08775d52231\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.qa.baseClass.BaseClass.Initialization(BaseClass.java:35)\r\n\tat stepDefinnation.LoginStepDefination.user_is_on_login_page(LoginStepDefination.java:28)\r\n\tat ???.Given user is on login page(features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 26,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter the\" demo@techfios.com\"and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click on new account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user shoud be on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user can fill up from entring \"abctbgwr\"and \"khaoirtbhc\"and \"200250\" and \"983869813\" and \"Tom\" and \"1112223333\" and \"www.xyz\" and submit button",
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
  "line": 19,
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abctbgwr",
      "offset": 31
    },
    {
      "val": "khaoirtbhc",
      "offset": 45
    },
    {
      "val": "200250",
      "offset": 61
    },
    {
      "val": "983869813",
      "offset": 74
    },
    {
      "val": "Tom",
      "offset": 90
    },
    {
      "val": "1112223333",
      "offset": 100
    },
    {
      "val": "www.xyz",
      "offset": 117
    }
  ],
  "location": "LoginStepDefination.user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "status": "skipped"
});
});