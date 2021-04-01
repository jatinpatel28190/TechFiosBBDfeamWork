package com.qa.baseClass;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class BaseClass {
			public static WebDriver driver;
			public void Initialization() {
				String browser = "Chrome";

			if (browser.equals("Chrome")) {
					System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
				driver = new ChromeDriver();}
			 else if (browser.equals("firefox")) {

				System.setProperty("webdriver.chrome.driver", "/crm.automation.test/driver/chromedriver.exe");
				driver = new FirefoxDriver();
			} else if (browser.equals("IE")) {

				System.setProperty("webdriver.chrome.driver", "/crm.automation.test/driver/chromedriver.exe");
				driver = new InternetExplorerDriver();
			}
			

			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			driver.manage().window().maximize();
				
			driver.get("https://techfios.com/billing/?ng=admin/");
			
		}
	}


