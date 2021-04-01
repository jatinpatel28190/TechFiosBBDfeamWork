package qa.com.pages;


import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.Utility.TestUtility;
import com.qa.baseClass.BaseClass;

public class CreatNewAccountPage extends BaseClass{
	
	@FindBy(xpath = "//*[@id=\"account\"]")
	WebElement accountTitle;
	@FindBy(xpath = "//*[@id=\"description\"]")
	WebElement accountDescription;
	@FindBy(xpath = "//*[@id=\"balance\"]")
	WebElement accountBalance;
	@FindBy(xpath = "//*[@id=\"account_number\"]")
	WebElement account_number;
	
	@FindBy(xpath = "//*[@id=\"contact_person\"]")
	WebElement contact_person;
	@FindBy(xpath = "//*[@id=\"contact_phone\"]")
	WebElement contact_phone;
	@FindBy(xpath = "//*[@id=\"ib_url\"]")
	WebElement accountURL;
	@FindBy(xpath = "//*[@type='submit' and  @class='btn btn-primary']")
	WebElement submitButton;
	@FindBy(xpath="//*[@id=\"page-wrapper\"]/descendant::div[@class=\"alert alert-success fade in\"]") 
	WebElement altertText;
	//TestUtility  TestUtility;
	public CreatNewAccountPage() {
		
	PageFactory.initElements(driver, this);
	
	}
	
	public void creatNewAccount(String title,String description,String balance,String ACnumber,String name,String MOnumber,String url) {
		TestUtility   TestUtility = new TestUtility();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].value='"+title+TestUtility.randomNumber(9999)+"';" , accountTitle);
		
		jse.executeScript("arguments[0].value='"+description+"';" , accountDescription);
		
		
		jse.executeScript("arguments[0].value='"+balance+TestUtility.randomNumber(9999)+"';" , accountBalance);
		
		jse.executeScript("arguments[0].value='"+ACnumber+TestUtility.randomNumber(9999)+"';" , account_number);
		
		jse.executeScript("arguments[0].value='"+name+TestUtility.randomNumber(9999)+"';" , contact_person);
		
		jse.executeScript("arguments[0].value='"+MOnumber+"';" , contact_phone);
		
		jse.executeScript("arguments[0].value='"+url+TestUtility.randomNumber(9999)+".com"+"';" , accountURL);
		jse.executeScript(("arguments[0].click();"), submitButton);
		
		
	}
	public boolean verifyCreatAccountMasseage() {
		
		return altertText.isDisplayed();
		
	}
	
}
