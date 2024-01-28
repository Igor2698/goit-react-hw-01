import { FriendListItem } from "./FriendListItem";
import css from "../src/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
};
