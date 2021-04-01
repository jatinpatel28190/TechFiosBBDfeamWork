package stepDefinnation;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.qa.baseClass.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import qa.com.pages.ClikOnBankAndCash;
import qa.com.pages.CreatNewAccountPage;
import qa.com.pages.LoginPage;

public class LoginStepDefination {
	BaseClass baseClass;
	LoginPage loginPage;
	ClikOnBankAndCash ClikOnBankAndCash;
	CreatNewAccountPage CreatNewAccountPage;


	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		baseClass = new BaseClass();
		baseClass.Initialization();

	}

	@When("^user enter the\"([^\"]*)\"and \"([^\"]*)\"$")
	public void user_enter_the_and(String userName, String Password) throws InterruptedException {
		loginPage = new LoginPage();
		loginPage.Login(userName, Password);
		loginPage.submit();
		Thread.sleep(2000);

	}

	@When("^user click on bank and cash button$")
	public void user_click_on_bank_and_cash_button() throws InterruptedException {

		ClikOnBankAndCash = new ClikOnBankAndCash();
		ClikOnBankAndCash.ClickOnBankAndCashButton();

	}

	@When("^user click on new account button$")
	public void user_click_on_new_account_button() {
		ClikOnBankAndCash.clickOnAddCustomer();
	}

	@Then("^user shoud be on account page$")
	public void user_shoud_be_on_account_page() {
		Assert.assertEquals("dose not verify", "Accounts- iBilling", ClikOnBankAndCash.accountTitleVarify());
	}

	@Then("^user can fill up from entring \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and submit button$")
	public void user_can_fill_up_from_entring_and_and_and_and_and_and_and_submit_button(String accountTitle,
			String decscription, String intitialBalance, String accountNumber, String contectPerson, String phoneNumber,
			String internetBankingUrl) {
		CreatNewAccountPage = new CreatNewAccountPage();
		CreatNewAccountPage.creatNewAccount(accountTitle, decscription, intitialBalance, accountNumber, contectPerson,
				phoneNumber, internetBankingUrl);
	}

	@Then("^user should be able to see validate$")
	public void user_should_be_able_to_see_validate() {

		Assert.assertTrue(CreatNewAccountPage.verifyCreatAccountMasseage());

	}
}
