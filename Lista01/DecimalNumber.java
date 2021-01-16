//Questão 11

public class DecimalNumber {
	static double atr = 2.5; 
	
	static void parteInteira() {
		int inteiro =(int) (Math.floor(atr));
		System.out.println(inteiro);
	}
	
	static void parteDecimal() {
		float deci = (float)(atr);
		System.out.println(deci);
	}

	
	public static void main(String[] args) {
		parteInteira();
		parteDecimal();
		
	}
}
