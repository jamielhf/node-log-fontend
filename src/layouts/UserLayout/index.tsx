import styles from './index.css';
import * as React from 'react';
import { Layout} from 'antd';

const { Content, Footer } = Layout;

export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>  
          <Content style={{ margin: '0 16px' }}>
          
            { this.props.children }
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


