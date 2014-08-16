
public class DraftChoiceGenerator {
	public static void main( String[] _args ) {
		Team.generateNewDraftOrder();
		for( String _draftPosition : Team.getSortedDraftOrder() ) {
			System.out.println( _draftPosition );
		}
	}
}