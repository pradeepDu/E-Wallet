
const {ethers} = require("hardhat");

const main = async () => {
  // Get the contract factory
  const transactionFactory = await hre.ethers.getContractFactory("Transactions");
  
  // Deploy the contract
  const transactionsContract = await transactionFactory.deploy();
  
  // Wait for the deployment to be completed
  await transactionsContract.deployed();
  
  // Log the contract address
  console.log("Transaction deployed to:", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Call the runMain function to start the deployment process
runMain();
