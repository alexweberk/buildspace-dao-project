import sdk from "./1-initialize-sdk.js";
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  "0x5bCc40536Ee5718A4065C210Aa6f86a65fe0aC55",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to ReferralDAO",
        image: readFileSync("scripts/assets/star.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (err) {
    console.error("failed to create the new NFT", err);
  }
})();