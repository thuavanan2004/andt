import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import FormModelEditRoom from "./FormModalEditRoom";
function EditRoom(props) {
    const { rooms, keyRoom, onLoad} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(!isModalOpen);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button danger onClick={handleClick} ><EditOutlined /></Button>
            <Modal title="Chỉnh sửa phòng" open={isModalOpen} onCancel={handleCancel} footer={null} >
                <FormModelEditRoom rooms={rooms} keyRoom={keyRoom} onLoad={onLoad} handleCancel={handleCancel} />
            </Modal>
        </>
    )
}
export default EditRoom;