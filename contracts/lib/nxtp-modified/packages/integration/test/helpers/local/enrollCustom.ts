import { canonizeId, TokenRegistryInterface } from "@connext/nxtp-contracts";
import { TransactionService } from "@connext/nxtp-txservice";
import { createRequestContext } from "@connext/nxtp-utils";
import { utils } from "ethers";

export const enrollCustom = async (
  canonicalToken: { domain: string; tokenAddress: string },
  otherTokens: { domain: string; tokenAddress: string; TokenRegistry: string }[],
  txService: TransactionService,
) => {
  const requestContext = createRequestContext(enrollCustom.name);
  const canonicalId = utils.hexlify(canonizeId(canonicalToken.tokenAddress));
  await Promise.all(
    otherTokens.map(async (token) => {
      console.log("enrollCustom: ", canonicalToken.domain, canonicalId);
      const readData = TokenRegistryInterface.encodeFunctionData("getLocalAddress", [
        +canonicalToken.domain,
        canonicalId,
      ]);
      console.log("readData", readData);
      const encoded = await txService.readTx({ chainId: +token.domain, data: readData, to: token.TokenRegistry });
      console.log("encoded", encoded);
      const [registered] = TokenRegistryInterface.decodeFunctionResult("getLocalAddress", encoded);
      console.log("registered", registered);
      if (registered !== token.tokenAddress) {
        const data = TokenRegistryInterface.encodeFunctionData("enrollCustom", [
          canonicalToken.domain,
          canonicalId,
          token.tokenAddress,
        ]);
        await txService.sendTx({ to: token.TokenRegistry, data, value: 0, chainId: +token.domain }, requestContext);
      }
    }),
  );
};
