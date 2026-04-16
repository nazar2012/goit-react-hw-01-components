import style from "./Friend.module.css"

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={style.item}>
            {/* <span class="status">
                {isOnline ? "Online" : "Offline"}
            </span> */}
            <img
                className={style.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={style.name}>{name}</p>
        </li>
    )
}

export default FriendListItem