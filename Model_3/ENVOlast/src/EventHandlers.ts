/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  WBTCOFT,
  WBTCOFT_Transfer,
} from "generated";

WBTCOFT.Transfer.handler(async ({ event, context }) => {
  const entity: WBTCOFT_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.WBTCOFT_Transfer.set(entity);
});
