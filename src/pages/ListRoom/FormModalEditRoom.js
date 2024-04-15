import { Row, Col, Form, Switch, Button, Input, Select, message, Spin  } from "antd";
import {editRoom} from "../../services/roomsService";
import { useState } from "react";
const {TextArea} = Input;


function FormModelEditRoom (props) {
    const {rooms ,keyRoom, onLoad, handleCancel} = props;
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [spinning, setSpinning] = useState(false);

    const handleSubmit = async (value) => {
        setSpinning(true);
        const response = await editRoom(keyRoom,value);
        if(response){
            onLoad();
            handleCancel();
            setSpinning(false);
            messageApi.open({
                type: 'success',
                content: 'Cập nhật thông tin phòng thành công !',
                className: 'custom-class',
                style: {
                  marginTop: '5vh',
                },
              });
        }else {
            messageApi.open({
                type: 'error',
                content: 'Cập nhật thông tin phòng không thành công !',
                className: 'custom-class',
                style: {
                  marginTop: '5vh',
                },
              });
        }
    }
    const option = rooms.filter(room => room.id === keyRoom);

    return (
      <>
            {contextHolder}
            <Spin tip="Loading" size="large" spinning={spinning}>
                <Form layout="vertical" onFinish={handleSubmit} form={form} initialValues ={option[0]}>
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
                            <Select mode="multiple" allowClear placeholder="Chọn tiện ích" />
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
                                <Button type="primary" htmlType="submit">Cập nhât</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Spin>
            
      </>  
    )
}
export default FormModelEditRoom;