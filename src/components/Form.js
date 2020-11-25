import {
  Typography,
  Row,
  Layout,
  Spin,
  Col,
  Form,
  Input,
  TimePicker,
  DatePicker,
  Select,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 14 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 14 },
    sm: { span: 16 },
  },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const FormAddCourse = ({ location }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout style={{ padding: 30 }}>
      <Title level={2}>Add Course</Title>
      <Content>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="title"
            label="title"
            rules={[
              {
                required: true,
                message: "Please input the title of the course!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="duration"
            label="duration"
            rules={[
              {
                required: true,
                message: "Please input the duration of the course!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="imagePath"
            label="image path"
            rules={[
              {
                required: true,
                message: "Please input a valid image url!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 4 }}
            name="bookable"
            valuePropName="checked"
          >
            <Checkbox>Bookable</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol }}
            name="checkbox-group"
            label="instructors"
          >
            <Checkbox.Group>
              <Row>
                <Col span={16}>
                  <Checkbox value="John" style={{ lineHeight: "32px" }}>
                    John Tsevdos
                  </Checkbox>
                </Col>
                <Col span={16}>
                  <Checkbox value="Yiannis" style={{ lineHeight: "32px" }}>
                    Yiannis Nikopoulos
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name={"description"} label="description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Dates" style={{ marginBottom: 0 }}>
            <Form.Item
              validateStatus="error"
              help="Please select the correct date"
              style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            >
              <DatePicker />
            </Form.Item>
            <span
              style={{
                display: "inline-block",
                width: "24px",
                lineHeight: "32px",
                textAlign: "center",
              }}
            >
              -
            </span>
            <Form.Item
              style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            >
              <DatePicker />
            </Form.Item>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default FormAddCourse;
