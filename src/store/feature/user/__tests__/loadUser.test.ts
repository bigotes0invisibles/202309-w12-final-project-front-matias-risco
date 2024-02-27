import { UserStateStructure } from "../types";
import userReducer, {
  initialUserState,
  loadUserActionCreator,
} from "../userSlice";

describe("Given the reducer of loadUser", () => {
  describe("When the reducer recive the actualState and the action loadUserActionCreator with the info Ana", () => {
    test("then it should return a newState with the user updated", () => {
      const newUser: UserStateStructure = {
        name: "Ana",
        token: "feawlladfjhwa3",
      };

      const actualState = userReducer(
        initialUserState,
        loadUserActionCreator(newUser),
      );

      expect(actualState).toEqual(expect.objectContaining(newUser));
    });
  });
});
