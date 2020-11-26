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
  Checkbox,
  Switch,
  Button,
  AutoComplete,
} from "antd";
import moment from "moment";
import { useState } from "react";

const { Content } = Layout;
const { Title } = Typography;

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
  const [formData, setFormData] = useState({
    title: '',
    imagePath: '',
    price: {
      normal: 0,
      early_bird: 0
    },
    dates: {
      start_date: '',
      end_date: ''
    },
    duration: '',
    open: false,
    instructors: [],
    description: ''
  });

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log(values.dates[0])
  };

  function onChangeStartDate(date, e) {   
       setFormData((formData) => ({
         ...formData,
          dates: {
            ...formData.dates,
            start_date: e
          }
       }))
  }

  function onTitleChange(e) {
    const newTitle = e.target.value;
    setFormData((formData) => ({
      ...formData,
         title: {
          ...formData.title,
          title: newTitle
        }
    }))
  }

  function onDurationChange(e) {
    const newDur = e.target.value;
    setFormData((formData) => ({
      ...formData,
         duration: {
          ...formData.duration,
          duration: newDur
        }
    }))
  }

  function onImgPathChange(e) {
    const newPath = e.target.value;
    setFormData((formData) => ({
      ...formData,
         imagePath: {
          ...formData.imagePath,
          imagePath: newPath
        }
    }))
  }

  function onDescriptionChange(e) {
    const newDesc = e.target.value;
    setFormData((formData) => ({
      ...formData,
         description: {
          ...formData.description,
          description: newDesc
        }
    }))
  }

  function onChangeBookable(checked) {
    setFormData((formData) => ({
      ...formData,
         open: {
          ...formData.open,
          open: checked
        }
    }))
  }

  function onChange_1(e) {
    const value = e.target.value;
    const checked = e.target.checked;
    setFormData((prevState) => {
      let newState = {...prevState};
      if (checked) {
        newState.instructors = newState.instructors.concat(value);
      } else {
        const index = newState.instructors.indexOf(value);
        if (index > -1) {
          newState.instructors.splice(index, 1);
        }
      }
      return newState;
    });
    console.log(formData);
  }

  function onChangeEndDate(date, e) {   
    setFormData((formData) => ({
      ...formData,
       dates: {
         ...formData.dates,
         end_date: e
       }
    }))
  }

  function onEarlyBirdChange(data, e) {
    setFormData((formData) => ({
      ...formData,
       dates: {
         ...formData.price,
         early_bird: e
       }
    }))
  }

  function onNormalPriceChange(data, e) {
    setFormData((formData) => ({
      ...formData,
       dates: {
         ...formData.price,
         normal: e
       }
    }))
  }

  function disableForEndDate(current) {
    return current && current < moment(formData.dates.start_date);
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

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
            <Input onChange={onTitleChange} placeholder="Title" />
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
            <Input onChange={onDurationChange} placeholder="Duration" />
          </Form.Item>
          <Form.Item
            name="imagePath"
            label="Image path"
            rules={[
              {
                message: "Please input a valid image url!",
              },
            ]}
          >
            <Input onChange={onImgPathChange} placeholder="Image Path" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol }}
            name="open"
            label="Bookable"
            valuePropName="checked"
          >
            <Switch onChange={onChangeBookable} />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol }}
            name="instructors"
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
                  <Checkbox value="01" style={{ lineHeight: "32px" }} onChange={onChange_1}>
                    John Tsevdos
                  </Checkbox>
                </Col>
                <Col span={16}>
                  <Checkbox value="02" style={{ lineHeight: "32px" }} onChange={onChange_1}>
                    Yiannis Nikopoulos
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea onChange={onDescriptionChange}/>
          </Form.Item>
          <Form.Item label="Dates" rules={[{ required: true }]}>
            <Form.Item
              name="start_date"
              style={{ display: "inline-block", width: "calc(50% + 12px)" }}
            >
              <DatePicker disabledDate={disabledDate} placeholder="Start Date" onChange={(value, e) => onChangeStartDate(value,e)}/>
            </Form.Item>
            <Form.Item
              name="end_date"
              style={{ display: "inline-block", width: "calc(50% + 12px)" }}
            >
              <DatePicker disabledDate={disableForEndDate} placeholder="End Date" onChange={(value, e) => onChangeEndDate(value,e)}/>
            </Form.Item>
          </Form.Item>
          <Form.Item label="Price">
            <Row>
              <Form.Item
                name="early_bird"
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
                <InputNumber onChange={(value, e) => onEarlyBirdChange(value,e)}/>
              </Form.Item>
              <Form.Item
                name="normal"
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
                <InputNumber onChange={(value, e) => onNormalPriceChange(value,e)}/>
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
