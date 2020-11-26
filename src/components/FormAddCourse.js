import {
  Typography,
  Row,
  Layout,
  Spin,
  Col,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

const { Content } = Layout;
const { Title } = Typography;
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
            label="Title"
            rules={[
              {
                required: true,
                message: "Please input the title of the course!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="duration"
            label="Duration"
            rules={[
              {
                required: true,
                message: "Please input the duration of the course!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Duration" />
          </Form.Item>
          <Form.Item
            name="imagePath"
            label="Image path"
            rules={[
              {
                required: true,
                message: "Please input a valid image url!",
              },
            ]}
          >
            <Input placeholder="Image Path" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol }}
            name="bookable"
            label="Bookable"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Checkbox></Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol }}
            name="checkbox-group"
            label="Instructors"
            rules={[
              {
                required: true,
              },
            ]}
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
          <Form.Item name={"description"} label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="dates" label="Dates" rules={[{ required: true }]}>
            <Form.Item
              // validateStatus="error"
              // help="Please select the correct date"
              style={{ display: "inline-block", width: "calc(50% + 12px)" }}
            >
              <DatePicker placeholder="Start Date" />
            </Form.Item>
            <Form.Item
              style={{ display: "inline-block", width: "calc(50% + 12px)" }}
            >
              <DatePicker placeholder="End Date" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Price">
            <Row>
              <Form.Item
                name="earlyBird"
                label="Early Bird"
                rules={[
                  {
                    required: true,
                    type: "number",
                    min: 0,
                    message: "Please input a valid number!",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="normalPrice"
                label="Normal Price"
                rules={[
                  {
                    required: true,
                    type: "number",
                    min: 0,
                    message: "Please input a valid number!",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Row>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default FormAddCourse;
