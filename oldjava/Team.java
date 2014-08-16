import java.util.Vector;

public enum Team {
	BRAD( 		"Brad", 	1 ),
	AUSTIN( 	"Austin", 	2 ),
	TREY( 		"Trey", 	3 ),
	MIKE( 		"Mike", 	4 ),
	SEAN( 		"Sean", 	5 ),
	DJ( 		"DJ", 		6 ),
	PARHAM(		"Parham", 	7 ),
	JOHN( 		"John", 	8 ),
	BULLITT(	"Bullitt",	9 ),
	GREG( 		"Greg", 	10 ),
	MRHILL( 	"Mr. Hill", 11 ),
	CHRIS( 		"Chris", 	12 );

	private static final int STANDING_WINNER = 1;
	private static final int STANDING_LOSER = 12;
	private static final double WEIGHT_DAMPENER = 4.1;

	private static final int WINNER_BONUS = 1;
	private static final int NORMAL_BONUS = 2;
	private static final int LOSER_BONUS = 3;
	
	public final String managerName;
	public final int standing2012;
	private final int draftChanceWeight;
	
	public int draftPosition;
	
	private Team( String _name, int _standing ) {
		managerName = _name;
		standing2012 = _standing;
		draftChanceWeight = calculateDraftChanceWeight( _standing );
		
		draftPosition = -1;
	}
	
	private int calculateDraftChanceWeight( int _standing2012 ) {
		int draftChanceOffset = getDraftChanceBonus();
		return ( int ) ( _standing2012 / WEIGHT_DAMPENER ) + draftChanceOffset;
	}
	
	private int getDraftChanceBonus() {
		if( isWinner() ) {
			return WINNER_BONUS;
		}
		else if( isLoser() ) {
			return LOSER_BONUS;
		}
		else {
			return NORMAL_BONUS;
		}
	}
	
	private String getFormattedDraftEntry() {
		return draftPosition + ". " + managerName + " (x" + draftChanceWeight + ")";
	}
	
	private boolean isWinner() {
		return standing2012 == STANDING_WINNER;
	}
	
	private boolean isLoser() {
		return standing2012 == STANDING_LOSER;
	}
	
	@Override
	public String toString() {
		return managerName;
	}
	
	//////////////////////////////////////////////
	// ENUM functions

	public static String[] getSortedDraftOrder() {
		String[] draftOrder = new String[12];
		for( Team currentTeam : Team.values() ) {
			draftOrder[currentTeam.draftPosition - 1] = currentTeam.getFormattedDraftEntry();
		}
		return draftOrder;
	}
	
	public static void generateNewDraftOrder() {
		Vector< Team > weightedTeamArray = generateWeightedTeamArray();
		generateDraftPositions(weightedTeamArray);
	}
	
	private static Vector< Team > generateWeightedTeamArray() {
		Vector< Team > weightedArray = new Vector< Team >();
		for( Team team : Team.values() ) {
			weightTeamByStanding(team, weightedArray);
		}
		return weightedArray;
	}
	
	private static void weightTeamByStanding( Team _team, Vector< Team > _weightedArray ) {
		int weight = _team.draftChanceWeight;
		System.out.printf( "Inserting %s %d times \n", new Object[]{_team.toString(), weight} );
		for( int i = 0; i < weight; i++ ) {
			_weightedArray.add(_team);
		}
	}
	
	private static void generateDraftPositions( Vector< Team > _weightedTeamArray ) {
		for( int i = 0; i < 12; i++ ) {
			int randomTeamIndex = ( int ) ( Math.random() * ( _weightedTeamArray.size() ) );
			Team selectedTeam = _weightedTeamArray.elementAt( randomTeamIndex );
			selectedTeam.draftPosition = i + 1;
			removeFromWeightedTeamArray(selectedTeam, _weightedTeamArray);
		}
	}
	
	private static void removeFromWeightedTeamArray( Team _team, Vector< Team > _weightedTeamArray ) {
		while( _weightedTeamArray.contains( _team ) ) {
			_weightedTeamArray.remove( _team );
		}
	}
}
