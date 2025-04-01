$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Lenovo/eclipse-workspace/1-2Taste-EU/src/test/resources/FeatureFiles/AddToCartandReqQuote.feature");
formatter.feature({
  "name": "To Check then 1-2 taste Application Add to Cart Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a product to the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigate to the product listing page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartRequestQuoteSteps.user_navigate_to_the_product_listing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User increase the quantity using the plus button",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartRequestQuoteSteps.user_increase_the_quantity_using_the_plus_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Add to Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartRequestQuoteSteps.user_click_on_the_Add_to_Cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see a confirmation message with the product name",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartRequestQuoteSteps.user_should_see_a_confirmation_message_with_the_product_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(@class, \u0027woocommerce-message\u0027)]\"}\n  (Session info: chrome\u003d134.0.6998.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-AOJIHBP7\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002723.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.89, chrome: {chromedriverVersion: 134.0.6998.88 (7e3d5c978c6d..., userDataDir: C:\\Users\\Lenovo\\AppData\\Loc...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61716}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8ad704809380f383d3be3f8d88f67ef8\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(@class, \u0027woocommerce-message\u0027)]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:501)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:485)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.pages.AddToCartRequestQuotePage.getConfirmationMessage(AddToCartRequestQuotePage.java:45)\r\n\tat org.stepdefinitions.AddToCartRequestQuoteSteps.user_should_see_a_confirmation_message_with_the_product_name(AddToCartRequestQuoteSteps.java:44)\r\n\tat ✽.User should see a confirmation message with the product name(file:/C:/Users/Lenovo/eclipse-workspace/1-2Taste-EU/src/test/resources/FeatureFiles/AddToCartandReqQuote.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the product should be added to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartRequestQuoteSteps.the_product_should_be_added_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
});