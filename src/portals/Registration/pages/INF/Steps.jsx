import React, {useContext, useState} from "react";
import { Layout } from "antd";
import { Form, Input, Select, Button, Divider, Upload, message } from 'antd';
import "../introPage.css";
import { duration, ss, test, sector, btech4yr, im, dd, dm, mtech, phd, mba, msc2yr, msc3yr, qround,  } from "../../data";
import { Link } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import AuthContext from "../../../../context/auth/authContext";
import InfContext from "../../../../context/inf/infContext";
const { Content } = Layout;
const { Option } = Select;

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

function Steps() {
    const authContext = useContext(AuthContext);
    const infContext = useContext(InfContext);
    const {inf} = infContext;
    const {user} = authContext;
     const [chSector,setChSector] = useState(false);
     const [chBtech,setChBtech] = useState(false);
     const [chDM,setChDM] = useState(false);
     const [chDD,setChDD] = useState(false);
     const [chIM,setChIM] = useState(false);
     const [chMtech,setChMtech] = useState(false);
     const [chPhD,setChPhD] = useState(false);
     const [chMBA,setChMBA] = useState(false);
     const [chMSC,setChMSC] = useState(false);
     const [chMSCT,setChMSCT] = useState(false);
     const [chSS,setChSS] = useState(false);
     const [ch,setCh] = useState("n");
     const [skill,setSkill] = useState("n");
    
     function onClick1(){
       if(ch==="y") setCh("n");
       else setCh("y");
     }

     function handleChangeSkill(value) {
        if(value=="other") setSkill(false);
        else setSkill(true);
      }

      function handleChangeSector(value) {
        if(value=="other") setChSector(false);
        else setChSector(true);
      }

      function handleChangeBtech(value) {
        if(value=="y") setChBtech(false);
        else setChBtech(true);
        console.log(chBtech);
      }

      function handleChangeMtech(value) {
        setChMtech(value);
      }

      function handleChangeDD(value) {
        setChDD(value);
      }

      function handleChangeDM(value){
          setChDM(value);
      }

      function handleChangeMBA(value){
          setChMBA(value);
      }

      function handleChangePhD(value){
          setChPhD(value);
      }

      function handleChangeIM(value){
        setChIM(value);
      }

      function handleChangeIM(value){
        setChIM(value);
      }

      function handleChangeMSC(value){
        setChMSC(value);
      }

      function handleChangeMSCT(value){
        setChMSCT(value);
      }

      function handleChangeSS(value){
        setChMSCT(value);
      }
      
  const [form] = Form.useForm();
  
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


      const onFinish = async (values) => {
        const input = document.getElementById("printForm");
        const h = input.offsetHeight;
        const w = input.offsetWidth;
        console.log('input',input,h,w);
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");

          console.log(imgData);
    
          const pdf = new jsPDF();
          pdf.addImage(imgData, "PNG", 20, 20);
          pdf.save("download.pdf");
        });
        // const {intern_description,intern_designation,mode,no_of_offers,other_qualify_rounds,ppo,place_of_posting,resume_shortlisting,stipend,total_rounds,type_of_test,graduation_year,duration,ctc}
        // await inf()
      };

  return (
    <Content style={{ margin: "25px 25px" }} >
    <div id="printForm">
    {/* step1 */}
    <div className='c2 border border-2 rounded'>
    <div style={{textAlign:'center'}}>
    <h2>Company & Job details</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}  
      validateMessages={validateMessages}
      initialValues={{
        cname:user.cname,
        cemail:user.cemail
      }}
    >
    <Form.Item
        name="cname"
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
        value = {user.cname}
      >
        <Input disabled={ch=='n'} />
      </Form.Item>
      <Form.Item
        name="cemail"
        label="Company Email"
        rules={[
          {
            required: true,
          },
        ]}
        
      >
        <Input disabled={ch=='n'} value = {user.cemail} />
      </Form.Item>

      <Form.Item 
        name="category"
        label="Industry Sector"
      >
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeSector}
      disabled={ch=='y'}
    >
      {sector}
    </Select>
      </Form.Item>

      <Form.Item
        name="other"
        label="If selected other, Industry Sector:"
      >
        <Input disabled={chSector&&(ch=='y')} />
      </Form.Item>

      <Form.Item
        name="intern_designation"
        label="Job Designation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item
        name='year'
        label="Required Graduation year"
      >
        <Input disabled={ch=='y'} />
      </Form.Item>

      <Form.Item
        name="eligibility_criteria"
        label="Eligibility criteria:"
        rules={[
          {
            required: true,
          }
        ]}
      >
        <Input disabled={(ch=='y')} />
      </Form.Item>

      <Form.Item 
      label="Mode of Internship?"
      name="mode"
      >
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange}>
        <Option value="Virtual">Virtual</Option>
        <Option value="Physical">Physical</Option>
        </Select>
      </Form.Item>

      <Form.Item 
      label="Internship Duration"
        name="duration"
        >
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
    >
      {duration}
    </Select>
      </Form.Item>

      <Form.Item name="intern_description" label="Job Description">
        <Input.TextArea disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="place_of_posting"
        label="Place of Posting"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      
    </Form>
    </div>

    {/* step2 */}
    <div className="border border-2 rounded c2">
    <div style={{textAlign:'center'}}>
    <h2>HR details</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="designation"
        label="Designation"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Divider />
      <h5>Alternate HR details</h5>
      <Form.Item
        name="aname"
        label="Name"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="adesignation"
        label="Designation"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="aemail"
        label="Email"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item
        name="aphone"
        label="Phone Number"
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      <Form.Item>
      <div style={{textAlign:'right'}}>
      </div>
        
      </Form.Item>
    </Form>
    </div>
    
    {/* step3 */}

    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>ELIGIBLE BRANCHES</h2>
    <p>(Admitted through JEE Advanced)</p>
    </div>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
   

    <Form.Item label="Requirement of B.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeBtech}
      disabled = {chBtech&&(ch=='y')}
    >
      {btech4yr}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of Double Major?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chDM&&(ch=='y')}
    >
      {dm}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Dual Degree Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chDD&&(ch=='y')}
    >
      {dd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of Integrated M.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeIM}
      disabled = {chIM&&(ch=='y')}
    >
      {im}
    </Select>
      </Form.Item>
    
    </Form>
    </div>
    
    {/* step1 */}
    <div className='c2 border border-2 rounded'>
    <div style={{textAlign:'center'}}>
    <h2>Skill Based Hiring</h2></div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}  
      validateMessages={validateMessages}
    >
     <Form.Item label="Do you want to hire students depending on skills?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item disabled label="If the response of previous question is YES, please select the eligible skills">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChangeSkill}
      disabled = {chSS&&(ch=='y')}
    >
      {ss}
    </Select>
      </Form.Item>

      <Form.Item
        name={['skills']}
        label="If selected other, Skills required :"
      >
        <Input disabled={skill&&(ch=='y')} />
      </Form.Item>
      
    </Form>
    </div>

    {/* step4 */}

    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>ELIGIBLE BRANCHES</h2>
    <p>(Admitted through JAM/GATE/CAT/NET)</p>
    </div>
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item label="Requirement of M.Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMtech&&(ch=='y')}
    >
      {mtech}
    </Select>
      </Form.Item>
    
      <Form.Item label="Requirement of PhD Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chPhD&&(ch=='y')}
    >
      {phd}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MBA?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMBA&&(ch=='y')}
    >
      {mba}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMSC&&(ch=='y')}
    >
      {msc2yr}
    </Select>
      </Form.Item>

      <Form.Item label="Requirement of MSc Tech Students?">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item label="If the response of previous question is YES, please select the eligible branches">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled = {chMSCT&&(ch=='y')}
    >
      {msc3yr}
    </Select>
      </Form.Item>
    </Form>

    </div>

        {/* step5 */}
    <div className="border border-2 round c2">
    <div style={{textAlign:'center'}}>
    <h2 style={{margin:'0'}}>SELECTION PROCESS AND STIPEND DETAILS</h2>
    </div>

    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
    
    <Form.Item 
      name= "resume_shortlisting"
      label="Resume Shortlisting?"
      rules={[
          {
            required: true,
          },
        ]}
        >
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="total_rounds"
        label="Total Number of Rounds"
        // rules={[
        //   {
        //     required: false,
        //   },
        // ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item 
      name="type_of_test"
       label="Type of test">
      <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}
    >
      {test}
    </Select>
      </Form.Item>

      <Form.Item 
      name="other_qualify_rounds"
      label="Other Qualification Rounds">
      <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={handleChange}
      disabled={ch=='y'}
    >
      {qround}
    </Select>
      </Form.Item>
      
      <Form.Item
        name="no_of_offers"
        label="Number of offers available for IIT(ISM) students"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>
      
      <Divider />

      <Form.Item
        name="stipend"
        label="Stipend (per month)"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item 
      name="ppo" label="Provision for Pre Placement Offer (PPO)">
        <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} disabled={ch=='y'}>
        <Option value="y">Yes</Option>
        <Option value="n">No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="ctc"
        label="CTC Details, if PPO provided"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input.TextArea disabled={ch=='y'}/>
      </Form.Item>

      <Form.Item
        name="doc"
        label="Upload Document (optional)"
      >
      <p>Company may upload documents like JD, Eligibility criteria, etc</p>
      <Upload {...props}>
            <Button disabled={ch=='y'} icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

    </Form>
    </div>
    </div>

    {/* buttons */}
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >.
        <Form.Item>
      <div style={{textAlign:'center'}}>
      <Button type="primary"  hidden={ch==="y"} onClick={onClick1}>
          Save & Preview
        </Button>
        <Button type="primary" style={{marginRight:'10px'}} hidden={ch==="n"} onClick={onClick1}>
          Back
        </Button>
        <Button type="primary" htmlType="submit" hidden={ch==="n"}>
          Submit
        </Button>
      </div>
        
      </Form.Item>
    </Form>
    </Content>
  );
}

export default Steps;