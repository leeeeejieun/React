import React from 'react'

const User = ({userData}) =>{
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
}

const UserList = () =>{
    const users = [
        {email : 'user1@naver.com', name: '사용자1'},
        {email : 'user2@naver.com', name: '사용자2'},
        {email : 'user3@naver.com', name: '사용자3'},
        {email : 'user4@naver.com', name: '사용자4'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
} 

export default UserList;