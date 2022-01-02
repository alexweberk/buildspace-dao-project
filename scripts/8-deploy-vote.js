import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0xA02BA284dE0502b5c7a2a5b8617c68CC5dCF4975"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "ReferralDAO's Epic Proposals",
      votingTokenAddress: "0x77da6DDacF5A28fC7a852770322dF5A208AA3651",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    )
  } catch (error) {
    console.error("Failed to deploy vote module", error);
  }
})();