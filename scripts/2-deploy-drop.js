import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const app = sdk.getAppModule('0xA02BA284dE0502b5c7a2a5b8617c68CC5dCF4975');

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "ReferralDAO Membership",
      description: "A DAO that rewards referrals",
      image: readFileSync("scripts/assets/pic.jpg"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );

    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (err) {
    console.log("Failed to deploy bundleDrop module", err);
  }
})();