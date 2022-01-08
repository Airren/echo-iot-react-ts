import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'更快更强的分析工具，正在构建中'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          亿氪生物分析工具集{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};
