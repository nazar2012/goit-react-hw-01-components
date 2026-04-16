import FriendListItem from "../Friend/FriendListItem"
import style from "./Friend.module.css"

function FriendList({ friends }) {
    return (
        <ul className={style.friend_list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    // isOnline={friend.isOnline}
                />
            ))}
        </ul>
    )
}

export default FriendList