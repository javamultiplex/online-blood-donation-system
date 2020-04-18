import React from 'react';
import classes from './ViewCountry.module.css';
import {
    Container,
    Row,
    Col,
    Badge
} from 'reactstrap';
import DataTable from 'react-data-table-component';
import AdminTopNavigation from '../AdminTopNavigation/AdminTopNavigation';
import Dashboard from '../Dashboard/Dashboard';
import DashboardPage from '../DashboardPage/DashboardPage';
import AdminLeftNavigation from '../AdminLeftNavigation/AdminLeftNavigation';
import Footer from '../../Footer/Footer';
import { connect } from 'react-redux';
import { getAllCountries, deleteCountry } from '../../redux/actions/country/getAndDeleteCountry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const customStyles = {
    headCells: {
        style: {
            fontWeight: 'bold',
            fontSize: '15px'
        },
    },
    cells: {
        style: {
            fontSize: '15px'
        },
    },
};

class ViewCountry extends React.Component {
    componentDidMount() {
        this.props.getAllCountries();
    }

    render() {
        var columns = [
            {
                name: 'Country ID',
                selector: 'id',
                sortable: true
            },
            {
                name: 'Country Name',
                selector: 'name',
                sortable: true
            },
            {
                name: 'Delete',
                cell: row => <Badge color="danger" className={classes.Badge} onClick={() => this.props.deleteCountry(row.id)}><FontAwesomeIcon icon="trash-alt" /></Badge>
            },
        ];        
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
                        <DashboardPage icon="university" name="View Country Details" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <AdminLeftNavigation />
                    </Col>
                    <Col xs="9">
                        <div className={classes.Main}>
                            <DataTable
                                noHeader={true}
                                striped={true}
                                columns={columns}
                                data={this.props.countries}
                                pagination
                                paginationPerPage={5}
                                pointerOnHover={true}
                                paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
                                customStyles={customStyles}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        countries: state.getAndDeleteCountry.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCountries: () => dispatch(getAllCountries()),
        deleteCountry: (id) => dispatch(deleteCountry(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCountry);