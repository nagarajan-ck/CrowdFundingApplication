let CrowdFunding = artifacts.require('./CrowdFunding')

contract('CrowdFunding',function(accounts){

    let contract;
    let contractCreator = accounts[0];
    let beneficiary = accounts[1];

    const ONE_ETH = 1000000000000000000;
    // const ONE_ETH = 100;
    const ongoing = 0;
    const failed = '1';
    
    const succeeded = '2';
    const paidout = '3';

    beforeEach(async function(){

        contract = await CrowdFunding.new(
            'funding', //name of contract
            1, // total amount required
            10, // duration of the campaign
            beneficiary,
            {
                from:contractCreator,
                gas: 2000000
            }
        );
    });

    it('contract is initialized', async function(){

        let campaignName = await contract.name.call();
        expect(campaignName).to.equal('funding');

        let targetAmount = await contract.targetAmount.call();
        expect(Number(targetAmount)).to.equal(ONE_ETH);

        let actualBenificiary = await contract.beneficiary.call();
        expect(actualBenificiary).to.equal(beneficiary);

        let state = await contract.state.call();
        expect(state.valueOf().toNumber()).to.equal(ongoing); //valueOf() gives the position of the enum in bigNumber.


    });


});