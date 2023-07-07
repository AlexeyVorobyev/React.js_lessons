import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {

    const [users,setUsers] = React.useState([]);
    const [isLoading,setLoading] = React.useState(true);
    const [isSend,setSend] = React.useState(false);
    const [invites,setInvites] = React.useState([]);

    React.useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(json => {
            setUsers(json.data);
            setLoading(false);
        })
        .catch(err => {
            setLoading(true);
            console.log(err);
            alert("Ошибка при получении пользователей.");
        })
    },[])

    const onClickInvite = (id) => {
        if (invites.includes(id)) setInvites(invites.filter((_id) => id !== _id));
        else setInvites([...invites,id])
    }

    return (
        <div className="App">
            {!isSend && <Users items={users} isLoading={isLoading} setSend={setSend} onClickInvite={onClickInvite}/>}
            {isSend && <Success setSend = {setSend} invitesLength={invites.length} setInvites={setInvites}/>}
        </div>
    );
}

export default App;
