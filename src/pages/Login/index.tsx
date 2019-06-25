import * as React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
import './index.scss';

class Index extends React.Component<any>{
  public add() {
    this.props.dispatch({
      type: 'global/add',
    })
  }
  public continue() {
    this.props.dispatch({
      type: 'global/continue',
    })
  }
  public render() {
    console.log(this.props);
    return (
      <Form className='g-login'>
        <Input placeholder='账号' />
        <Input placeholder='密码' />
        <Button type='primary' htmlType='submit' className='login-form-button'>
            登陆
          </Button>
      </Form>
    );
  }
}

export default connect(({ global }: any) => ({
  global,
}))(Index);