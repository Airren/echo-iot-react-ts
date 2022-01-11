import { Card, Col, Row, Statistic } from 'antd';
import { useRequest } from 'umi';
import type { FC } from 'react';
import { Gauge, WordCloud, Liquid, RingProgress } from '@ant-design/charts';
import { GridContent } from '@ant-design/pro-layout';
import numeral from 'numeral';
import Map from './components/Map';
import ActiveChart from './components/ActiveChart';
import { queryTags } from './service';
import styles from './style.less';

const { Countdown } = Statistic;

const deadline = Date.now(); // Moment is also OK

const DashboardMonitor: FC = () => {
  const { loading, data } = useRequest(queryTags);

  const wordCloudData = data?.list || [];

  return (
    <GridContent>
      <>
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="实时在线设备情况" bordered={false}>
              <Row>
                <Col md={6} sm={12} xs={24}>
                  <Statistic
                    title="实时在线设备总数"
                    suffix="台"
                    value={numeral(543233).format('0,0')}
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="实时设备健康率" value="99.9%" />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Countdown title="当前时间" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="离线设备数量" suffix="台" value={numeral(234).format('0,0')} />
                </Col>
              </Row>
              <div className={styles.mapChart}>
                <Map />
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card title="设备健康率趋势图SLA" style={{ marginBottom: 24 }} bordered={false}>
              <ActiveChart />
            </Card>
            <Card
              title="实时健康率"
              style={{ marginBottom: 24 }}
              bodyStyle={{ textAlign: 'center' }}
              bordered={false}
            >
              <Gauge
                height={180}
                autoFit
                percent={0.87}
                range={{
                  ticks: [0, 1 / 4, 2 / 4, 3 / 4, 1],
                }}
                axis={{
                  label: {
                    formatter: function formatter(v) {
                      return Number(v) * 100;
                    },
                  },
                }}
                statistic={{
                  content: {
                    content: '优',
                    style: {
                      color: '#30bf78',
                    },
                  },
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card title="项目占比" bordered={false} className={styles.pieCard}>
              <Row style={{ padding: '16px 0' }}>
                <Col span={8}>
                  <RingProgress autoFit height={128} percent={0.28} />
                </Col>
                <Col span={8}>
                  <RingProgress color="#5DDECF" autoFit height={128} percent={0.22} />
                </Col>
                <Col span={8}>
                  <RingProgress color="#2FC25B" autoFit height={128} percent={0.32} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title="重点项目"
              loading={loading}
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <WordCloud
                data={wordCloudData}
                autoFit
                wordField="name"
                weightField="value"
                colorField="name"
                height={162}
                wordStyle={{
                  fontSize: [10, 20],
                }}
              />
            </Card>
          </Col>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title="资源剩余"
              bodyStyle={{ textAlign: 'center', fontSize: 0 }}
              bordered={false}
            >
              <Liquid
                height={161}
                percent={0.35}
                autoFit
                outline={{
                  border: 2,
                  distance: 4,
                }}
                padding={[0, 0, 0, 0]}
                statistic={{
                  content: {
                    style: {
                      fontSize: '16px',
                    },
                  },
                }}
              />
            </Card>
          </Col>
        </Row>
      </>
    </GridContent>
  );
};

export default DashboardMonitor;
