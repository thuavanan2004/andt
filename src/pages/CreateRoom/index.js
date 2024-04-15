import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import { createRoom } from "../../services/roomsService";
const {TextArea} = Input;
function CreateRoom () {
    const [form] = Form.useForm();
    const options = [
        {
            label:"Điều hòa",
            value: "Điều hòa"
        },
        {
            label:"Máy giặt",
            value: "Máy giặt"
        },
        {
            label:"Nóng lạnh",
            value: "Nóng lạnh"
        },
        {
            label:"TV",
            value: "TV"
        },
    ]
    const handleSubmit = async (value) => {
        const response = await createRoom(value);
        if(response) {
            form.resetFields();
            alert("Tạo phòng thành công")
        }else {
            alert("Tạo phòng không thành công")
        }
    }

    return (
        <>
            <h2>Thêm phòng mới</h2>
            <Form layout="vertical" onFinish={handleSubmit} form={form}>
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <Form.Item
                            label="Tên phòng"
                            name="name"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Số lượng giường"
                            name="quantityBed"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Số người tối đa"
                            name="quantityPeople"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                        >
                            <TextArea maxLength={200} />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            label="Tiện ích"
                            name="utils"
                        >
                           <Select options={options} mode="multiple" allowClear placeholder="Chọn tiện ích" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Trạng thái"
                            name="status"
                        >
                            <Switch checkedChildren="Hoạt động" unCheckedChildren="Ngừng hoạt động" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Loại phòng"
                            name="typeRoom"
                        >
                            <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item >
                            <Button htmlType="submit">Tạo mới</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default CreateRoom;