package it.akademija;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestServisas {

	@Autowired
	private List<Product> productsList;

	@RequestMapping("/productsCollection")
	public List<Product> getProductsCollection() {
		return productsList;
	}
	
}
