import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url, name, room, setData ) => {
    useEffect(() => {
        let mounted = true;

        const loadData = async () => {
            const response = await  axios.post(url , { 
                userName: name, 
                room: room
            })
            .then(res => {
                if (mounted) {
                    if (res.data === 'Username is taken') {
                        alert(res.data);
                        return;
                    }
                    setData(res.data);
                }
                
            })
            .catch(error => console.warn(error));
   
        }
        loadData();

        return () => {
            mounted = false;
        }
    }, [url, name, room, setData]);
};

const Fetch = ({name, room, url}) => {
    const [data , setData] = useState(null);
    useAxios(url, name, room, setData)
    return (
        <>
            {!data ? ( <h1 data-testid="loading">Loading...</h1>) :
                (data.map((item, index) => <div key={index}>
                    <h1 data-testid="name">{item.userName}</h1>
                    <h2 data-testid="room">{item.room}</h2>
                    <h3 data-testid="last-connection">{item.lastConnection}</h3>
                </div>))
            }
        </>
        )
}

export default Fetch;