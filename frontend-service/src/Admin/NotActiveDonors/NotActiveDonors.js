import React from 'react';
import {
    Table,
    Badge,
    Container,
    Row,
    Col
} from 'reactstrap';
import classes from './NotActiveDonors.module.css';
import Dashboard from '../Dashboard/Dashboard';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import Footer from '../../Footer/Footer';
import { connect } from 'react-redux';
import { bloodDonorInActiveFindAll, bloodDonorInActiveDelete } from '../../redux/actions/donor/getAndDeleteDonor';
class NotActiveDonors extends React.Component {

    componentDidMount(){
        this.props.findAll();
    }

    render() {
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
                    <Col>
                        <DashboardPage icon="users" name="Not Active Donor Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Table}>
                            <Table striped>
                                <tbody>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Blood</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Area</th>
                                        <th>Contact</th>
                                        <th>View</th>
                                        <th>Delete</th>
                                    </tr>
                                    {
                                        this.props.donors.map((donor, index)=>
                                        <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td>{`${donor.firstName} ${donor.middleName} ${donor.lastName}`}</td>
                                        <td>{donor.gender}</td>
                                        <td>{donor.bloodGroup}</td>
                                        <td>{donor.address.state}</td>
                                        <td>{donor.address.city}</td>
                                        <td>{donor.address.area}</td>
                                        <td>{donor.phoneNumber}</td>
                                        <td><Badge
                                            color="info"
                                            onClick={() => this.props.history.push('/admin/donor-full-detail/'+donor.id)}
                                            className={classes.Badge}>View</Badge></td>
                                        <td><Badge
                                            color="danger"
                                            className={classes.Badge}
                                            onClick={()=>this.props.delete(donor.id)}
                                            >Delete</Badge></td>
                                    </tr>)
                                    }
                                </tbody>
                            </Table>
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
        donors: state.inActiveDonor.bloodDonors
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        findAll: () => dispatch(bloodDonorInActiveFindAll()),
        delete: (id)=> dispatch(bloodDonorInActiveDelete(id))
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(NotActiveDonors);