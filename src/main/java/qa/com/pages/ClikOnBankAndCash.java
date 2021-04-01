package qa.com.pages;




import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.baseClass.BaseClass;



public class ClikOnBankAndCash extends BaseClass{
   
	@FindBy(xpath = "//ul[@class='nav']/descendant::span[contains(text(),'Bank & Cash')]")
	WebElement bankAndCashButton;

	@FindBy(xpath="//a[contains(text(),'New Account')]")
	WebElement addAcountButton;


	public ClikOnBankAndCash() {
		
		PageFactory.initElements(driver, this);
		}
	

	public void ClickOnBankAndCashButton() {
	
		//bankAndCashButton.click();
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", bankAndCashButton);
	}
	
	
	public void clickOnAddCustomer() {
		//addAcountButton.click();
			JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", addAcountButton);
	}
	public String accountTitleVarify(){
		
     String title =  driver.getTitle();
     return title;
 
	}

	}




