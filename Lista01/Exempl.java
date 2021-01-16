//Questão 3

public class Exempl {
	public static void main(String[] args) {
		int a = 9;
		int b = 0;
		if ((a > 11) && (++b <= 100)){
			System.out.println(a*b);
		} else {
			System.out.println(a-b);
		}
	}
}

/*O println do if só vai ser executado se as duas condições forem satisfeitas;
 caso uma não seja verdadeira, o println do else será executado. */

