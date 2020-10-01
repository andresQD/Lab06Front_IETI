import React from 'react';

export class UserList extends React.Component {

    render(){
        const lista = this.props.usersList.map((user,i) => 
            <h3> Nombre : {user.user.name} , Usuario : {user.user.userName} , Email : {user.user.email} </h3>
        );
        return(
            <div>
                <h1>Listado de usuarios:</h1>
                {lista}
            </div>
        );
    }
}
export default UserList;