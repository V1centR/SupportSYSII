import Image from "next/image";

export default function Home() {
  return (
    <div className="page-inner">
      <div className="col-md-12">
                <div className="card card-round">
                  <div className="card-header">
                    <div className="card-head-row card-tools-still-right">
                      <div className="card-title">Transaction History</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-icon btn-clean me-0"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#"
                              >Something else here</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">                      
                      <table className="table align-items-center mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Payment Number</th>
                            <th scope="col" className="text-end">Date & Time</th>
                            <th scope="col" className="text-end">Amount</th>
                            <th scope="col" className="text-end">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <button
                                className="btn btn-icon btn-round btn-success btn-sm me-2"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button
                                className="btn btn-icon btn-round btn-success btn-sm me-2"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button
                                className="btn btn-icon btn-round btn-success btn-sm me-2"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button
                                className="btn btn-icon btn-round btn-success btn-sm me-2"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button
                                className="btn btn-icon btn-round btn-success btn-sm me-2"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button
                                className="btn btn-icon btn-round btn-success btn-sm me-2"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <button
                                className="btn btn-icon btn-round btn-success btn-sm me-2"
                              >
                                <i className="fa fa-check"></i>
                              </button>
                              Payment from #10231
                            </th>
                            <td className="text-end">Mar 19, 2020, 2.45pm</td>
                            <td className="text-end">$250.00</td>
                            <td className="text-end">
                              <span className="badge badge-success">Completed</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
      
    </div>
  );
}
