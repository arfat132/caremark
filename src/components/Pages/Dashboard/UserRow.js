import React from 'react';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { AiOutlineUsergroupAdd } from "@react-icons/all-files/ai/AiOutlineUsergroupAdd";
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { _id, email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{_id}</td>
            <td></td>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <button onClick={makeAdmin} className="text-secondary font-bold rounded text-xl  p-1 text-center "><AiOutlineUsergroupAdd /></button>}
                <button className="text-red-600 font-bold rounded text-xl  p-1 text-center justify-end"><RiDeleteBin6Line /></button>
            </td>
        </tr>
    );
};

export default UserRow;