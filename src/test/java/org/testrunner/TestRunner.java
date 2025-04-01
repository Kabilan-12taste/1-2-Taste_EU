package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinitions.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Lenovo\\eclipse-workspace\\1-2Taste-EU\\src\\test\\resources\\FeatureFiles\\AddToCartandReqQuote.feature",
glue = "org.stepdefinitions", plugin = {"html:HtmlReport", "junit:JunitReport\\Junit.xml", "json:JsonReport\\Jsonreport.json"})

public class TestRunner {

	@AfterClass
	public static void jvm() {

		JVMReport.generateJVMReport("C:\\Users\\Lenovo\\eclipse-workspace\\1-2Taste-EU\\JsonReport\\Jsonreport.json");

	}
}
