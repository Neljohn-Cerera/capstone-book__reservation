import { Settings } from "./../../entities/Settings";
import { updateEntity } from "../../utils/updateEntity";
import { databaseError } from "../../utils/databaseError";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { SettingsResponse } from "./setings.response";
import { SettingsArgs } from "./settings.args";

@Resolver()
export class SettingsResolver {
  //Retrieve settings
  @Query(() => Settings)
  async settings(): Promise<Settings | undefined> {
    return (await Settings.findOne({ where: { id: 1 } })) || undefined;
  }

  // Update ReservationStatus
  @Mutation(() => SettingsResponse)
  async updateSettings(
    @Arg("input") dataInput: SettingsArgs
  ): Promise<SettingsResponse> {
    try {
      const settings = await updateEntity(1, Settings, dataInput);

      if (!settings) {
        return {
          errors: [
            {
              field: "settingsId",
              message: "Settings not found",
            },
          ],
          isSucess: false,
        };
      }
      return { settings, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
