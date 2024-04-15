import { Form, Input, Row, Col, Radio, Space, DatePicker, TimePicker, Button, Switch  } from "antd";
import { bookRoom } from "../../services/bookRoomService";
import { useState } from "react";

const { RangePicker } = DatePicker;

function BookRoom() {
    const [form] = Form.useForm();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    
    
    const rules = [
        {
            required: true,
            message: 'Vui lòng nhập họ tên của bạn !',
        },
    ]
    const optionsServices = [
        {
            label: 'Thuê xe máy',
            value: 'Thuê xe máy',
        },
        {
            label: 'Thuê ô tô 4 chỗ',
            value: 'Thuê ô tô 4 chỗ',
        },
        {
            label: 'Thuê ô tô 7 chỗ',
            value: 'Thuê ô tô 7 chỗ',
        },
        {
            label: 'Thuê ô tô 16 chỗ',
            value: 'Thuê ô tô 16 chỗ',
        },
    ]
    const optionsGift = [
        {
            label: 'Áo cộc',
            value: 'Áo cộc',
        },
        {
            label: 'Mũ',
            value:  'Mũ',
        },
        {
            label: 'Kém chống nắng',
            value: 'Kém chống nắng',
        },
    ]
    const handleOnChangeDate = (_, dateString) => {
      setDate(dateString);
    };
    const handleOnChangeTime = (_, time) => {
       setTime(time);
    };
   
    const handleSubmit = async (values) => {
        const options = {
            ...values,
            date: date,
            time: time
        }
        const response = await bookRoom(options);
        if(response){
            alert("Đặt phòng thành công");
            form.resetFields();
            console.log(response);
        }else{
            alert("Vui lòng đặt phòng sau");
        }
    }
    
    return (
        <>

            <h2> Đặt phòng </h2>            
            <Form 
                layout="vertical"
                onFinish={handleSubmit}
                form={form}
            >
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <Form.Item
                            label="Họ và tên"
                            name="username"
                            rules={rules}
                           
                        >
                            <Input  placeholder="Nhập họ và tên"/> 
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={rules}
                        >
                            <Input placeholder="Nhập số điện thoại" /> 
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={rules}
                        >
                            <Input placeholder="Nhập Email" /> 
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Dịch vụ thêm"
                            name="services"
                        >
                            <Radio.Group >
                                <Space direction="vertical">
                                    {optionsServices.map((item, index) => (
                                        <Radio key={index} value={item.value}>{item.value}</Radio>  
                                    ))}
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="gift" label="Quà tặng">
                            <Radio.Group >
                                <Space direction="vertical">
                                    {optionsGift.map((item, index) => (
                                        <Radio key={index} value={item.value}>{item.value}</Radio>               
                                    ))}
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item 
                            label="Chọn ngày" 
                            name="date" 
                        >
                            <RangePicker
                                placeholder={["Ngày đến", "Ngày đi"]}
                                format="DD/MM/YYYY"
                                onChange={handleOnChangeDate}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Chọn giờ nhận phòng " name="time" >
                            <TimePicker  
                                placeholder="Chọn giờ" 
                                format="hh"
                                onChange={handleOnChangeTime}
                            />

                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="" name="status">
                            <Switch checkedChildren="Hoạt động"  unCheckedChildren="Ngừng hoạt động"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" >Đặt phòng</Button>
                        </Form.Item>
                    </Col>

                </Row>
            </Form>
        </>
    )
}
export default BookRoom;