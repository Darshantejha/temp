import React from "react";
import { Layout } from "antd";
import { Form, Input, Select, Button } from 'antd';
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const sector = [];

  sector.push(<Option key={"ana"}>{"Analytics"}</Option>);
  sector.push(<Option key={"con"}>{"Consulting"}</Option>);
  sector.push(<Option key={"coret"}>{"Core(Technical)"}</Option>);
  sector.push(<Option key={"bfsi"}>{"BFSI"}</Option>);
  sector.push(<Option key={"its"}>{"IT/Software"}</Option>);
  sector.push(<Option key={"edt"}>{"Ed Tech"}</Option>);
  sector.push(<Option key={"ecom"}>{"E-commerce"}</Option>);
  sector.push(<Option key={"other"}>{"Other"}</Option>);

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function Step1J() {

      
  const [form] = Form.useForm();
  
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

      const onFinish = (values) => {
        console.log(values);
      };

  return (
    <Content style={{ margin: "25px 25px" }}>
    {/* <Button type="primary" style={{marginRight:'10px'}}>
          Back
        </Button> */}
    <div style={{margin:'5% 0'}}>
    <div style={{textAlign:'center'}}>
    <h2>Company & Job details</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    <Form.Item
        name={['job', 'company']}
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['job', 'email']}
        label="Company Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Industry Sector">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {sector}
    </Select>
      </Form.Item>

      <Form.Item
        name={['company', 'sector']}
        label="If selected other, Industry Sector:"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['job', 'designation']}
        label="Job Designation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['job', 'description']} label="Job Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name={['job', 'place']}
        label="Place of Posting"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
      <div style={{textAlign:'right'}}>
      <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
        
      </Form.Item>
    </Form>
    </div>
    </Content>
  );
}

export default Step1J;
