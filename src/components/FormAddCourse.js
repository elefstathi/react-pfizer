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
} from "antd";
import axios from 'axios';
import moment from "moment";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import API_BASE_URL from "../api/BaseApi";

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

const FormAddCourse = (course) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [formData, setFormData] = useState( course ? course : {});

  const onFinish = (values) => {
    axios.post(`${API_BASE_URL}/courses`, formData)
      .then(response => history.push("/courses"))
      .catch((error) => {alert('Something went wrong', 'Try again!')})
  };

  function onChangeStartDate(date, e) {
    setFormData((formData) => ({
      ...formData,
      dates: {
        ...formData.dates,
        start_date: e,
      },
    }));
  }

  function onTitleChange(e) {
    const newTitle = e.target.value;
    setFormData((formData) => ({
      ...formData, title: newTitle,
    }));
    console.log(formData);
  }

  function onDurationChange(e) {
    const newDur = e.target.value;
    setFormData((formData) => ({
      ...formData, duration: newDur,
    }));
  }

  function onImgPathChange(e) {
    const newPath = e.target.value;
    setFormData((formData) => ({
      ...formData, imagePath: newPath,
    }));
  }

  function onDescriptionChange(e) {
    const newDesc = e.target.value;
    setFormData((formData) => ({
      ...formData, description: newDesc,
    }));
  }

  function onChangeBookable(checked) {
    setFormData((formData) => ({
      ...formData, open: checked,
    }));
  }

  function onChangeInstructors(e) {
    const value = e.target.value;
    const checked = e.target.checked;
    setFormData((prevState) => {
      let newState = { ...prevState };
      if (checked) {
        if (newState.instructors !== undefined) {
          newState.instructors = newState.instructors.concat(value);
        } else {
          newState.instructors = [];
          newState.instructors.push(value);
        }
      } else {
        if (newState.instructors !== undefined) {
          const index = newState.instructors.indexOf(value);
          if (index > -1) {
            newState.instructors.splice(index, 1); //remove one element at index
          }
        }
      }
      return newState;
    });
  }

  function onChangeEndDate(date, e) {
    setFormData((formData) => ({
      ...formData,
      dates: {
        ...formData.dates,
        end_date: e,
      },
    }));
  }

  function onEarlyBirdChange(value) {
    setFormData((formData) => ({
      ...formData,
      price: {
        ...formData.price,
        early_bird: value,
      },
    }));
  }

  function onNormalPriceChange(value) {
    setFormData((formData) => ({
      ...formData,
      price: {
        ...formData.price,
        normal: value,
      },
    }));
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
      <Title level={2}>{course ? 'Edit Course' : 'Add Course'}</Title>
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
            value={formData.title}
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
            value={formData.duration}
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
            value={formData.imagePath}
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
                  <Checkbox
                    value="01"
                    style={{ lineHeight: "32px" }}
                    checked={formData.instructors && formData.instructors.find(item => item === '01') ? true : false}
                    onChange={onChangeInstructors}
                  >
                    John Tsevdos
                  </Checkbox>
                </Col>
                <Col span={16}>
                  <Checkbox
                    value="02"
                    checked={ formData.instructors && formData.instructors.find(item => item === '02') ? true : false}
                    style={{ lineHeight: "32px" }}
                    onChange={onChangeInstructors}
                  >
                    Yiannis Nikopoulos
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea onChange={onDescriptionChange} />
          </Form.Item>
          <Form.Item label="Dates">
            <Form.Item
              rules={[{ required: true }]}
              name="start_date"
              style={{ display: "inline-block", width: "calc(50% + 12px)" }}
            >
              <DatePicker
                value={formData.dates && formData.dates.start_date}
                disabledDate={disabledDate}
                placeholder="Start Date"
                onChange={(value, e) => onChangeStartDate(value, e)}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              name="end_date"
              style={{ display: "inline-block", width: "calc(50% + 12px)" }}
            >
              <DatePicker
                value={formData.dates && formData.dates.end_date}
                disabledDate={disabledDate}
                placeholder="End Date"
                onChange={(value, e) => onChangeEndDate(value, e)}
              />
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
                <InputNumber
                  value={formData.price && formData.price.early_bird}
                  onChange={onEarlyBirdChange}
                />
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
                <InputNumber
                  value={formData.price && formData.price.normal}
                  onChange={onNormalPriceChange}
                />
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
