import { Table, Tag, Tooltip, Button } from "antd";
import EditRoom from "./EditRoom";
import DeleteRoom from "./DeleteRoom";

function TableRoom (props) {
    const {rooms, onLoad} = props;
    const columns = [
        {
          title: 'Tên phòng',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Số phòng ngủ',
          dataIndex: 'quantityBed',
          key: 'quantityBed',
        },
        {
          title: 'Số người tối đa',
          dataIndex: 'quantityPeople',
          key: 'quantityPeople',
        },
        {
          title: 'Tiện ích',
          dataIndex: "utils",
          key: 'utils',
          render: (_, { utils }) => (
            <>
                <Tooltip placement="top" title={utils}>
                    <Button>Tiện ích</Button>
                </Tooltip>
            </>
        ),
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status',
            render: (_, { status }) => (
                <>
                    {status ? (<Tag color="green">Còn phòng</Tag>) : (<Tag color="gray">Hết phòng</Tag>)}
                </>
            ),
        },
        {
          title: 'Loại phòng',
          dataIndex: 'typeRoom',
          key: 'typeRoom',
          render: (_, { typeRoom }) => (
            <>
                {typeRoom ? (<Tag color="purple">VIP</Tag>) : (<Tag color="gray">Thường</Tag>)}
            </>
            ),
        },
        {
          title: 'Hành động',
          key: 'actions',
          render: (_, record) => (
            <>
                <EditRoom rooms={rooms} keyRoom={record.id} onLoad={onLoad} />
                <DeleteRoom keyRoom={record.id} onLoad={onLoad} />
            </>
            ),
        },
    ]

    return (
        <Table columns={columns} dataSource={rooms} rowKey="id" />
    )
}
export default TableRoom;