import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';


const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const network = await hre.ethers.provider.getNetwork();
  const signers = await hre.ethers.getSigners();
  const accounts = await hre.getNamedAccounts();
  const deployer = accounts.admin;

  console.log((await hre.ethers.provider.getBalance(deployer)).toString());

  const {address} = await hre.deployments.deploy("RabbitFinance", {
    from: deployer,
    args: [
      "0x10ed43c718714eb63d5aa57b78b54704e256024e", // pancake router
      "0xb8F51C26ADe855aEBed10fE5cB4649C23a501Eb7",
    ],
    log: true,
  });

  console.log((await hre.ethers.provider.getBalance(deployer)).toString());
};

func.tags = ['RabbitFinance'];

export default func;
