import styles from '../styles/Home.module.css';

import PageIcon from '../components/PageIcon';

import { FaHome } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar() {
  return (
    <Container style={{ width: '40%', margin: 'auto', padding: '10px' }}>
      <Row style={{ alignItems: 'center', justifyItems: 'center' }}>
        <Col>
          <PageIcon children={<FaMusic size={40} />} />
        </Col>
        <Col>
          <PageIcon children={<FaMapMarkerAlt size={40} />} />
        </Col>
        <Col>
          <PageIcon children={<FaHome size={40} />} />
        </Col>
        <Col>
          <PageIcon children={<FaChartLine size={40} />} />
        </Col>
        <Col>
          <PageIcon children={<MdSettings size={40} />} />
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
