package org.stepdefinitions;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Configuration;

public class JVMReport {

    public static void generateJVMReport(String jsonPath) {
        // Get the project directory dynamically
        String reportPath = System.getProperty("user.dir") + "/target/JVMReport";
        File reportDirectory = new File(reportPath);

        // Ensure directory exists
        if (!reportDirectory.exists()) {
            reportDirectory.mkdirs();
        }

        // Configure JVM Report
        Configuration config = new Configuration(reportDirectory, "1-2 Taste EU");
        config.addClassifications("OS Name", System.getProperty("os.name"));
        config.addClassifications("OS Version", System.getProperty("os.version"));
        config.addClassifications("Browser", "Chrome");
        config.addClassifications("Project Name", "1-2 Taste EU");

        // Add JSON file to report
        List<String> jsonFiles = new ArrayList<>();
        jsonFiles.add(jsonPath);

        // Generate the report
        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, config);
        reportBuilder.generateReports();
    }
}
