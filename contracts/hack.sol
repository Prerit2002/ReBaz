pragma solidity ^0.8.4;


contract hack {
    address public owner = msg.sender;
    uint public last_completed_migration;

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }


    function pay(address payable _buyer ) payable public {
        _buyer.transfer(msg.value);
    }
    

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

}