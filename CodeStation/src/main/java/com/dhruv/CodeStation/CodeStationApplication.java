package com.dhruv.CodeStation;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
//@JsonAutoDetect(getterVisibility = JsonAutoDetect.Visibility.NONE)
public class CodeStationApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeStationApplication.class, args);
	}

}
