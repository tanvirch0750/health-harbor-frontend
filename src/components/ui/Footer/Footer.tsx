'use client';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Health Harbor &copy; {new Date().getFullYear()} Created by Tanvir
      Chowdhury
    </Footer>
  );
};

export default FooterComponent;
