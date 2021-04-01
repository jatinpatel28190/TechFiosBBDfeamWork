package qa.com.pages;

import java.util.Properties;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.baseClass.BaseClass;

import junit.framework.Assert;


public class LoginPage extends BaseClass{

	

	@FindBy(xpath = "//img[@class='logo']")
	WebElement TechfiosLogo;
	@FindBy(xpath = "//*[@id=\"username\"]")
	WebElement UserNameBox;
	@FindBy(xpath = "//*[@id=\"password\"]")
	WebElement PasswordBox;
	@FindBy(name = "login")
	WebElement SubmitButton;
	Properties prop;
	public LoginPage() {
		PageFactory.initElements(driver, this);

	}

	public Boolean TechfiosLogoVerify() {

	return  TechfiosLogo.isDisplayed();

	}
	public void Login(String userName ,String Password) {
		
		UserNameBox.sendKeys(userName);
		PasswordBox.sendKeys(Password);
		
	}
	public void submit() {

		SubmitButton.click();
	
		
	}
	
	

}
