$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jatin/eclipse-workspace/TechFios_BBDframWork/src/test/java/features/Login.Feature");
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
        "abcd",
        "khaoihhc",
        "2000",
        "983869813",
        "Tom",
        "1112223333",
        "www.xyz"
      ],
      "line": 21,
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
      "line": 22,
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
      "line": 23,
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
      "line": 24,
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
      "line": 25,
      "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;6"
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
  "duration": 4335858200,
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
  "duration": 3795544900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 65153600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "duration": 618042900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "duration": 7635900,
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
  "duration": 1324116200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "duration": 811133200,
  "status": "passed"
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
  "duration": 3340958000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;3",
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
  "duration": 3968838500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 45229600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "duration": 570543300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "duration": 5106900,
  "status": "passed"
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
  "duration": 1577504400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "duration": 926220700,
  "status": "passed"
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
  "duration": 3355833500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;4",
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
  "duration": 3728229900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 54090600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "duration": 583689600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "duration": 4623700,
  "status": "passed"
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
  "duration": 1481948300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "duration": 842360200,
  "status": "passed"
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
  "duration": 3304617000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;5",
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
  "duration": 3709439100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 62220400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "duration": 645453100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "duration": 3995800,
  "status": "passed"
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
  "duration": 1452039700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "duration": 798943200,
  "status": "passed"
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
  "duration": 3325320100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user should be able to login with valid credentials and open new account",
  "description": "",
  "id": "techfios-bank-and-cash-new--account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-new-account;;6",
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
  "duration": 5150564800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 38847900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_new_account_button()"
});
formatter.result({
  "duration": 551035400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_shoud_be_on_account_page()"
});
formatter.result({
  "duration": 4593700,
  "status": "passed"
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
  "duration": 1247725000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_see_validate()"
});
formatter.result({
  "duration": 778033200,
  "status": "passed"
});
});