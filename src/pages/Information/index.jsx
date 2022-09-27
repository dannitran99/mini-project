import { useAuth0 } from "@auth0/auth0-react";
import style from './Information.module.scss';

function Information() {
    const {user,isAuthenticated} = useAuth0();
    return (
        <div className={style.contentInfo}>
            {isAuthenticated&&(
                <article>
                    {user?.picture && <img src={user.picture} alt={user?.name}/>}
                    <h2>{user?.name}</h2>
                    <ul>
                        {Object.keys(user).map((object,i)=>
                        <li key={i}>{object}:{user[object]}</li>
                    )}
                    </ul>
                </article>
            )}
        </div>
    );
    }

export default Information;