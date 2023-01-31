import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CardUser from '../../../../../components/CardUser';
import { UserDTO } from '../../../../../models/user';
import * as userService from '../../../../../services/user-services';

export default function UserData() {

    const params = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.FindUser(params.userName)
            .then(response => {
                setUser(response.data)
            })
            .catch(() => {
                navigate('/find/user/notfound');
            })
    }, []);

    return (
        <>
            {
                user &&
                <CardUser user={user} />
            }
        </>
    )
}