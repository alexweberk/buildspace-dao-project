import sdk from './1-initialize-sdk.js';

const app = sdk.getAppModule("0xA02BA284dE0502b5c7a2a5b8617c68CC5dCF4975");

(async () => {
  try {
    // deploys a ERC-20 token
    const tokenModule = await app.deployTokenModule({
      name: "ReferralDAO Governance Token",
      symbol: "REFER",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    )
  } catch (error) {
    console.error("Faileed to deploy token module", error);
  }
})();