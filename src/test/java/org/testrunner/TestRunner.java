package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinitions.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/FeatureFiles/Search.feature",
        glue = "org.stepdefinitions",
        plugin = {
                "pretty",
                "html:target/HtmlReport",
                "junit:target/JunitReport/Junit.xml",
                "json:target/JsonReport/Jsonreport.json"
        }
)

public class TestRunner {

    @AfterClass
    public static void jvm() {
        // Get project directory dynamically
        String jsonReportPath = System.getProperty("user.dir") + "/target/JsonReport/Jsonreport.json";
        JVMReport.generateJVMReport(jsonReportPath);
    }
}
