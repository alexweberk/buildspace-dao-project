import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';

const voteModule = sdk.getVoteModule(
  "0x5863f97C512F98AAC4847aFdD1e4b214C3a40162"
);

const tokenModule = sdk.getTokenModule(
  "0x77da6DDacF5A28fC7a852770322dF5A208AA3651"
);

(async () => {
  try {
    await tokenModule.grantRole("minter", voteModule.address);
    console.log(
      "Successfully gave vote module permissions to act on token module",
    );
  } catch (error) {
    console.error(
      "Failed to grant vote module permissions on token module",
      error
    );
    process.exit(1);
  }

  try {
    const ownedTokenBalnce = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS
    );

    const ownedAmount = ethers.BigNumber.from(ownedTokenBalnce.value);
    const percent90 = ownedAmount.div(100).mul(90);

    await tokenModule.transfer(
      voteModule.address,
      percent90
    );
    console.log("✅ Successfully transferred tokens to vote module");
  } catch (error) {
    console.error("failed to transfer tokens to vote module", error);
  }
})();