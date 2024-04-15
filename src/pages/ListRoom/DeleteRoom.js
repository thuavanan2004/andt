import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm, message  } from "antd";
import { delRoom } from "../../services/roomsService";
function DeleteRoom (props) {
    const {keyRoom, onLoad} = props;
    const [messageApi, contextHolder] = message.useMessage();
    const handleDelete = async () => {
        const response = await delRoom(keyRoom);
        if(response){
            messageApi.open({
                type: 'success',
                content: 'This is a prompt message with custom className and style',
                className: 'custom-class',
                style: {
                  marginTop: '5vh',
                },
              });
            onLoad();
        }else{
            messageApi.open({
                type: 'success',
                content: 'This is a prompt message with custom className and style',
                className: 'custom-class',
                style: {
                  marginTop: '5vh',
                },
              });
        }
    }
  
    return (
        <>
            {contextHolder}
            <Popconfirm title="Bạn có chắc chắn xóa ?" onConfirm={handleDelete}>
                <Button danger><DeleteOutlined /></Button>
            </Popconfirm>    
        </>
    )
}

export default DeleteRoom;