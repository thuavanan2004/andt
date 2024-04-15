import { useEffect, useState } from "react";
import { getRooms } from "../../services/roomsService";
import { Button } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import TableRoom from "./ListRoom";
import "./listRoom.css";
import GridRoom from "./GridRoom";

function ListRoom() {
    const [isGrid, setIsGrid] = useState(true);
    const [rooms, setRooms] = useState([]);

    const handleClick = () => {
        setIsGrid(!isGrid);
    }
    const onLoad = () => {
        const fetchApi = async () => {
            const response = await getRooms();
            setRooms(response);
        };
        fetchApi();
    }
    useEffect(() => {
        onLoad();
    }, []);

   
    return (
        <>
            <Button type={isGrid && "primary"} onClick={handleClick}><UnorderedListOutlined /></Button> <Button type={!isGrid && "primary"} onClick={handleClick}><AppstoreOutlined /></Button>
            {isGrid ? 
            ( 
               <GridRoom rooms={rooms} />
            ):(
                <TableRoom rooms={rooms} onLoad={onLoad} />
            )}
        </>
    )
}

export default ListRoom;