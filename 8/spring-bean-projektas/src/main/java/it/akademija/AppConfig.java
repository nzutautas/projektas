package it.akademija;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource({"classpath*:application-context.xml"})
public class AppConfig {

	@Bean
	public Product naujasP1() {
		return new Product("Pirmas produktas", 10.0);
	}

	@Bean
	public Product naujasP2() {
		return new Product("Antras produktas", 15.0);
	}
}