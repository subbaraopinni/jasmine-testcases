election = function() {};

election.prototype.voteResults = function(region,candiateDetails) {
    if(candiateDetails.length){
				
		candiateDetails.sort(function (x, y) {
			return x.firstName - y.firstName;
		});
		
		console.table(candiateDetails);
	
		const maximumVotes = _.maxBy(candiateDetails, function(entry) {
		  return entry["voteCount"];
		});

		return maximumVotes;
	}
}