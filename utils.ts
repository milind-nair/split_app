import { userList } from "./static";
import { User } from "./types";

export const isUserAlreadyPresent: (user: User) => boolean = (user) => {
  if (
    userList.filter((user1) => {
      return user1.EmailId == user.EmailId;
    }).length > 0
  )
    return true;
  return false;
};
