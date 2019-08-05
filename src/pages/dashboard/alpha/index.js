import React from 'react'
import { Table } from 'antd'
import { Helmet } from 'react-helmet'
// import PaymentCard from 'components/CleanUIComponents/PaymentCard'
// import PaymentAccount from 'components/CleanUIComponents/PaymentAccount'
// import PaymentTransaction from 'components/CleanUIComponents/PaymentTransaction'
// import ChartCard from 'components/CleanUIComponents/ChartCard'
import Authorize from 'components/LayoutComponents/Authorize'
// import { tableData } from './data.json'

// eslint-disable-next-line no-unused-vars
const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      return response.json()
    })
    .then(myJson => {
      console.log(myJson)
      // console.log('tableData', tableData)
    })
}

class DashboardAlpha extends React.Component {
  render() {
    getData()

    const tableColumns = [
      {
        title: 'First Name',
        dataIndex: 'fname',
        key: 'fname',
      },
      {
        title: 'Last Name',
        dataIndex: 'lname',
        key: 'lname',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dob',
        key: 'dob',
      },
    ]

    const fakeTempData = [
      {
        fname: 'Jane',
        lname: 'Doe',
        email: 'janedoe@something.com',
        id: 1,
        dob: '09/09/1999'
      }
    ]

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">User Dashboard</strong>
        </div>
        <div className="row" />
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>All RYD Users</strong>
                </div>
                <div className="utils__titleDescription">All current users are listed</div>
              </div>
              <div className="card-body">
                <Table
                  className="utils__scrollTable"
                  scroll={{ x: '100%' }}
                  columns={tableColumns}
                  dataSource={fakeTempData}
                  // dataSource={tableData}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
       
      </Authorize>
    )
  }
}

export default DashboardAlpha
