import FriendListItem from "../Friend/FriendListItem"

function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    )
}

export default FriendList