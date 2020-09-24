describe("election", function() {
    var voteDetails;
 
    //This will be called before running each spec
    beforeEach(function() {
        voteDetails = new election();
    });
 
    describe("when voteDetails verify the highest count values", function(){
             
		//Spec for vote number count
        it("should be able to vote result", function() {
			let details = [
				{"firstName": "Anand","surName": "a","dob":"10/01/2011","voteCount": 100},
				{"firstName": "Balaji","surName": "b","dob":"10/01/2010","voteCount": 103},
				{"firstName": "Raju","surName": "r","dob":"10/01/2001","voteCount": 103},
				{"firstName": "Cherry","surName": "c","dob":"10/01/2000","voteCount": 105}
			];
            expect(voteDetails.voteResults("Kharadi",details)).toEqual(
			{
				"firstName": "Cherry",
				"surName": "c",
				"dob":"10/01/2000",
				"voteCount": 105
			});
        });		
    });
});