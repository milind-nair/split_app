import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { User, Group, Split } from "./types";
import { userList } from "./static";
import { log } from "console";
import { isUserAlreadyPresent } from "./utils";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/create_user", (req: Request, res: Response) => {
  const name = req.query.name as string;
  const emailId = req.query.EmailId as string;
  const user: User = {
    Id: userList.length + 1,
    Name: name,
    EmailId: emailId,
  };
  if (isUserAlreadyPresent(user)) {
    res.send("User Already Exists For This Email");
  } else {
    userList.push(user);
    res.send({ message: "User Created Successfully", user: user });
  }
});

app.get("/get_user_list", (req: Request, res: Response) => {
  res.send(userList);
});

app.get("/delete_user/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  let flag : Boolean = false
  userList.forEach((user) => {
    if (user.Id === id) {
      res.send({ "Deleted User": user });
      userList.splice(userList.indexOf(user), 1);
      flag = true
    }
  });
  if(!flag) res.send("No User exists with ID "+ id )
});

app.get("/create_group", (req: Request, res: Response) => {});

app.get("/delete_group", (req: Request, res: Response) => {});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
