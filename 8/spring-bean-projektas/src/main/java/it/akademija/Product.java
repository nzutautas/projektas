package it.akademija;

public class Product {

	private double kaina;
	private double svoris;
	private int kiekis;
	private String pavadinimas;
	private String gamintojas;

	public Product() {	}
	
	public Product(String pavadinimas, double kaina) {
		this.pavadinimas = pavadinimas;
		this.kaina = kaina;
	}
	
	public double getKaina() {
		return kaina;
	}

	public void setKaina(double kaina) {
		this.kaina = kaina;
	}

	public double getSvoris() {
		return svoris;
	}

	public void setSvoris(double svoris) {
		this.svoris = svoris;
	}

	public int getKiekis() {
		return kiekis;
	}

	public void setKiekis(int kiekis) {
		this.kiekis = kiekis;
	}

	public String getPavadinimas() {
		return pavadinimas;
	}

	public void setPavadinimas(String pavadinimas) {
		this.pavadinimas = pavadinimas;
	}

	public String getGamintojas() {
		return gamintojas;
	}

	public void setGamintojas(String gamintojas) {
		this.gamintojas = gamintojas;
	}

}
