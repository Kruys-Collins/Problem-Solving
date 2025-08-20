import assert from "assert";
import { 
  TestHelpers,
  WBTCOFT_Transfer
} from "generated";
const { MockDb, WBTCOFT } = TestHelpers;

describe("WBTCOFT contract Transfer event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for WBTCOFT contract Transfer event
  const event = WBTCOFT.Transfer.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("WBTCOFT_Transfer is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await WBTCOFT.Transfer.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualWBTCOFTTransfer = mockDbUpdated.entities.WBTCOFT_Transfer.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedWBTCOFTTransfer: WBTCOFT_Transfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      from: event.params.from,
      to: event.params.to,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualWBTCOFTTransfer, expectedWBTCOFTTransfer, "Actual WBTCOFTTransfer should be the same as the expectedWBTCOFTTransfer");
  });
});
