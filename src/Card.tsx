import { useState } from "react";
import { User } from "./models/model.user";

function Card(props: any) {
  const [user, setUser] = useState<User>({
    firstname: "Jhon",
    lastname: "Doe",
  });

  return (
    <div>
      {props.thumbnail && <img width={400} src={props.thumbnail}></img>}
      {props.title && <h3>{props.title}</h3>}
    </div>
  );
}

export default Card;
