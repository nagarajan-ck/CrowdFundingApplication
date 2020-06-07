pragma solidity >=0.4.21 <0.7.0;

contract CrowdFunding{
    enum State{
        Ongoing, Failed, Succeeded, PaidOut
    }

    string public name;
    uint public targetAmount;
    uint public fundingDeadline;
    address public beneficiary;
    State public state;

    constructor(string memory contractName,uint targetAmountInEth,uint fundingDeadlineInMins,address beneficiaryAddress) public{
        name = contractName;
        targetAmount = targetAmountInEth * 1 ether; // 1 ether is the amount of weis in 1 ether, and it converts targetAmount into weis
        fundingDeadline = currentTime() + (fundingDeadlineInMins * 1 minutes);
        beneficiary = beneficiaryAddress;
        state = State.Ongoing;
    }

    function currentTime() internal view returns(uint){
        return now;
    }
}