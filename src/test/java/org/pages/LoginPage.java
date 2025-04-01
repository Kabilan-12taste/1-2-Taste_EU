package org.pages;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class LoginPage extends BaseClass {

	// **Locators**
	private By usernameField = By.id("username");
	private By passwordField = By.id("password");
	private By loginButton = By.name("login");
	
	// **Locator for the welcome message inside <a> tag**
    private By welcomeMessage = By.xpath("//a[@class='btn-link' and contains(text(), 'Welcome back')]");


	// **Methods**
	public void enterUsername(String username) {
		enterText(driver.findElement(usernameField), username);
	}

	public void enterPassword(String password) {
		enterText(driver.findElement(passwordField), password);
	}

	public void clickLogin() {
		clickElement(driver.findElement(loginButton));
	}
	

    // **Method to get the welcome message text**
    public void getWelcomeMessageText() {
        WebElement welcomemessage = driver.findElement(welcomeMessage);
        String wel = welcomemessage.getText();
        System.out.println("Hey!" + wel);
        
    }

    // **Method to check if Dashboard is displayed**
    public boolean isDashboardDisplayed() {
        return driver.findElement(welcomeMessage).isDisplayed();
    }
}