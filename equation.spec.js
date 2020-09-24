describe("equation", function() {
    var equationDetails;
 
    //This will be called before running each spec
    beforeEach(function() {
        equationDetails = new equation();
    });
 
    describe("when equation verify the highest count values", function(){
             
		//Spec for equation number count
        it("should be able to equation result 1 and 5", function() {
            expect(equationDetails.eqResult(1,5)).toEqual(6);			
        });	
		//Spec for equation number count
        it("should be able to equation result 10 and 8", function() {	
            expect(equationDetails.eqResult(10,8)).toEqual(80);			
        });			
    });
});