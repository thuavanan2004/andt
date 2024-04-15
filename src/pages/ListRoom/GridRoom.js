import { Tag, Tooltip, Badge, Card, Row, Col } from "antd";

function GridRoom(props) {
    const {rooms} = props;
    return (
        <>
             <Row gutter={[20, 20]}>
                    {rooms.map((item) => (
                        <Col span={12} key={item.id} >
                            <Badge.Ribbon text={item.typeRoom ? ("VIP") : ("Thường")} color={item.typeRoom ? ("purple") : ("gray")}>
                                <Card title={item.name} bordered={true}>
                                    <p> Số lượng giường : <strong>{item.quantityBed}</strong> </p>
                                    <p> Số lượng người tối đa : <strong>{item.quantityPeople}</strong> </p>
                                    <p> <Badge status={item.status ? "success" : "error"}  text="Trạng thái" /> </p>
                                    <p> <Tag color="purple"><Tooltip title={item.utils}>Tiện ích</Tooltip></Tag>  </p>
                                </Card>
                            </Badge.Ribbon>
                        </Col>
                    ))}
                </Row>
        </>
    )
}
export default GridRoom;