import './App.css';
import 'antd/dist/antd.css';
 import { Form, Input, Button, Checkbox, Modal, Upload, Divider } from 'antd';
 import { UploadOutlined, InboxOutlined } from '@ant-design/icons';


 const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

 const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };


 
function App() {
  return (
    <>
<Modal
          title="Before start ..."
          visible={true}
        >
         <h3>Checklist</h3>
         <p>1. Aadhar Card</p>
         <p>2. Community Certificate (Optional)</p>
         <p>3. Transfer Certificate (Optional)</p>
         <p>4. Passport size photograph</p>
         <p>5. Birth Certificate</p>
         <p>6. Application Number (Father's mobile number during time of registration)</p>
         <Divider></Divider>
         <h3>Steps to be followed:</h3>
         <p>1. Enter your application number. Ideally, this will be father mobile number during time of application</p>
         <p>2. System automatically fills the name if exists. If not, check through date of birth and name of pupil</p>
         <p>3. Upload all mandatory documents. If document is not there, kindly contact and let us know at test@gmail.com</p>
         <p style={{color: 'red'}}>4. Make sure you wait until the success message shows in the screen. </p>

         <h3>Do you want to proceed?</h3>
        </Modal>
      
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload Aadhar Card</Button>
        </Upload>
      </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
   </>
    );
}

 export default App;

// import { Form, Input, Button, Checkbox } from 'antd';
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

// const Demo = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };


// };

// ReactDOM.render(<Demo />, mountNode);
