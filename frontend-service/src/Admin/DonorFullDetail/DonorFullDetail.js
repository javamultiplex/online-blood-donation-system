import React from 'react';
import {
    Table,
    Button,
    Container,
    Row,
    Col,
    Spinner
} from 'reactstrap';
import classes from './DonorFullDetail.module.css';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import Footer from '../../Footer/Footer';
import { connect } from 'react-redux';
import { bloodDonorDetail, bloodDonorUpdateStatus } from '../../redux/actions/donor/getAndUpdateDonorDetail';

class DonorFullDetail extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getDetail(id);
    }

    render() {
        const spinner = <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" />
        const output = <table>
            <tbody>
                <tr>
                    <td className={classes.img}>
                        <img src={`data:image/jpeg;base64,${this.props.bloodDonor.image ? this.props.bloodDonor.image : ''}`} width="300px" height="300px" alt="profilepic" />
                    </td>
                    <td className={classes.td}>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{`${this.props.bloodDonor.firstName} ${this.props.bloodDonor.middleName} ${this.props.bloodDonor.lastName}`}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{this.props.bloodDonor.gender}</td>
                                </tr>
                                <tr>
                                    <th>D.O.B</th>
                                    <td>{this.props.bloodDonor.dob}</td>
                                </tr>
                                <tr>
                                    <th>Blood Group</th>
                                    <td>{this.props.bloodDonor.bloodGroup}</td>
                                </tr>
                                <tr>
                                    <th>Body Weight</th>
                                    <td>{this.props.bloodDonor.bodyWeight} Kg</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{this.props.bloodDonor.emailId}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{this.props.bloodDonor.address ? this.props.bloodDonor.address.completeAddress : ''}</td>
                                </tr>
                                <tr>
                                    <th>Area</th>
                                    <td>{this.props.bloodDonor.address ? this.props.bloodDonor.address.area : ''}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{this.props.bloodDonor.address ? this.props.bloodDonor.address.city : ''}</td>
                                </tr>
                                <tr>
                                    <th>Pincode</th>
                                    <td>{this.props.bloodDonor.address ? this.props.bloodDonor.address.zip : ''}</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>{this.props.bloodDonor.address ? this.props.bloodDonor.address.state : ''}</td>
                                </tr>
                                <tr>
                                    <th>Contact</th>
                                    <td>{this.props.bloodDonor.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td><Button
                                        color={this.props.bloodDonor.status === 'INACTIVE' ? 'success' : 'danger'}
                                        onClick={() => this.props.updateStatus(this.props.bloodDonor.id, this.props.bloodDonor.status === 'INACTIVE' ? 'ACTIVE' : 'INACTIVE')}>{
                                            this.props.bloodDonor.status === 'INACTIVE' ? 'ACTIVATE NOW' : 'DEACTIVATE NOW'
                                        }</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </td>
                </tr>
            </tbody>
        </table>
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <AdminTopNavigation />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <Dashboard />
                    </Col>
                    <Col xs="9">
                        <DashboardPage icon="users" name="Donor Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Table}>
                            {this.props.loading ? spinner : output}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        bloodDonor: state.donorDetail.bloodDonor,
        loading: state.donorDetail.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (id) => dispatch(bloodDonorDetail(id)),
        updateStatus: (id, status) => dispatch(bloodDonorUpdateStatus(id, status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonorFullDetail);