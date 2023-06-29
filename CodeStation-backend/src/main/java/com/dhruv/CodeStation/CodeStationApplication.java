package com.dhruv.CodeStation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
//@JsonAutoDetect(getterVisibility = JsonAutoDetect.Visibility.NONE)
public class CodeStationApplication {

	public static void main(String[] args) {

		// Load environment variables from .env file
		Dotenv dotenv = Dotenv.configure().load();

		// Set the environment variables
		dotenv.entries().forEach(entry -> {
			String key = entry.getKey();
			String value = entry.getValue();
			System.setProperty(key, value);
		});

		SpringApplication.run(CodeStationApplication.class, args);
	}

}
