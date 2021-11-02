import React from "react";
import MainLayout from "admin/layout/MainLayout";

function Dashboard(props) {
    return (
        <MainLayout>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row align-items-center mb-2">
                        <div className="col">
                            <h2 className="h5 page-title">Welcome!</h2>
                        </div>
                        <div className="col-auto">
                            <form className="form-inline">
                                <div className="form-group d-none d-lg-inline">
                                    <label htmlFor="reportrange" className="sr-only">Date Ranges</label>
                                    <div id="reportrange" className="px-2 py-2 text-muted">
                                        <span className="small"></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-sm"><span
                                        className="fe fe-refresh-ccw fe-16 text-muted"></span></button>
                                    <button type="button" className="btn btn-sm mr-2"><span
                                        className="fe fe-filter fe-16 text-muted"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-4">
                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <small className="text-muted mb-1">Page Views</small>
                                            <h3 className="card-title mb-0">1168</h3>
                                            <p className="small text-muted mb-0"><span
                                                className="fe fe-arrow-down fe-12 text-danger"></span><span>-18.9% Last week</span>
                                            </p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <span className="sparkline inlineline"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <small className="text-muted mb-1">Conversion</small>
                                            <h3 className="card-title mb-0">68</h3>
                                            <p className="small text-muted mb-0"><span
                                                className="fe fe-arrow-up fe-12 text-warning"></span><span>+1.9% Last week</span>
                                            </p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <span className="sparkline inlinepie"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <small className="text-muted mb-1">Visitors</small>
                                            <h3 className="card-title mb-0">108</h3>
                                            <p className="small text-muted mb-0"><span
                                                className="fe fe-arrow-up fe-12 text-success"></span><span>37.7% Last week</span>
                                            </p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <span className="sparkline inlinebar"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <div id="lineChart"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card shadow mb-4">
                                <div className="card-header">
                                    <strong>Goal</strong>
                                </div>
                                <div className="card-body px-4">
                                    <div className="row border-bottom">
                                        <div className="col-4 text-center mb-3">
                                            <p className="mb-1 small text-muted">Completions</p>
                                            <span className="h3">26</span><br/>
                                            <span className="small text-muted">+20%</span>
                                            <span className="fe fe-arrow-up text-success fe-12"></span>
                                        </div>
                                        <div className="col-4 text-center mb-3">
                                            <p className="mb-1 small text-muted">Goal Value</p>
                                            <span className="h3">$260</span><br/>
                                            <span className="small text-muted">+6%</span>
                                            <span className="fe fe-arrow-up text-success fe-12"></span>
                                        </div>
                                        <div className="col-4 text-center mb-3">
                                            <p className="mb-1 small text-muted">Conversion</p>
                                            <span className="h3">6%</span><br/>
                                            <span className="small text-muted">-2%</span>
                                            <span className="fe fe-arrow-down text-danger fe-12"></span>
                                        </div>
                                    </div>
                                    <table className="table table-borderless mt-3 mb-1 mx-n1 table-sm">
                                        <thead>
                                        <tr>
                                            <th className="w-50">Goal</th>
                                            <th className="text-right">Conversion</th>
                                            <th className="text-right">Completions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Checkout</td>
                                            <td className="text-right">5%</td>
                                            <td className="text-right">260</td>
                                        </tr>
                                        <tr>
                                            <td>Add to Cart</td>
                                            <td className="text-right">55%</td>
                                            <td className="text-right">1260</td>
                                        </tr>
                                        <tr>
                                            <td>Contact</td>
                                            <td className="text-right">18%</td>
                                            <td className="text-right">460</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow mb-4">
                                <div className="card-header">
                                    <strong className="card-title">Top Selling</strong>
                                    <a className="float-right small text-muted" href="#!">View all</a>
                                </div>
                                <div className="card-body">
                                    <div className="list-group list-group-flush my-n3">
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-3 col-md-2">
                                                    <img src="./assets/products/p1.jpg" alt="..."
                                                         className="thumbnail-sm"/>
                                                </div>
                                                <div className="col">
                                                    <strong>Fusion Backpack</strong>
                                                    <div className="my-0 text-muted small">Gear, Bags</div>
                                                </div>
                                                <div className="col-auto">
                                                    <strong>+85%</strong>
                                                    <div className="progress mt-2" style="height: 4px;">
                                                        <div className="progress-bar" role="progressbar"
                                                             style="width: 85%" aria-valuenow="85" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-3 col-md-2">
                                                    <img src="./assets/products/p2.jpg" alt="..."
                                                         className="thumbnail-sm"/>
                                                </div>
                                                <div className="col">
                                                    <strong>Luma hoodies</strong>
                                                    <div className="my-0 text-muted small">Jackets, Men</div>
                                                </div>
                                                <div className="col-auto">
                                                    <strong>+75%</strong>
                                                    <div className="progress mt-2" style="height: 4px;">
                                                        <div className="progress-bar" role="progressbar"
                                                             style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-3 col-md-2">
                                                    <img src="./assets/products/p3.jpg" alt="..."
                                                         className="thumbnail-sm"/>
                                                </div>
                                                <div className="col">
                                                    <strong>Luma shorts</strong>
                                                    <div className="my-0 text-muted small">Shorts, Men</div>
                                                </div>
                                                <div className="col-auto">
                                                    <strong>+62%</strong>
                                                    <div className="progress mt-2" style="height: 4px;">
                                                        <div className="progress-bar" role="progressbar"
                                                             style="width: 62%" aria-valuenow="62" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-3 col-md-2">
                                                    <img src="./assets/products/p4.jpg" alt="..."
                                                         className="thumbnail-sm"/>
                                                </div>
                                                <div className="col">
                                                    <strong>Brown Trousers</strong>
                                                    <div className="my-0 text-muted small">Trousers, Women</div>
                                                </div>
                                                <div className="col-auto">
                                                    <strong>+24%</strong>
                                                    <div className="progress mt-2" style="height: 4px;">
                                                        <div className="progress-bar" role="progressbar"
                                                             style="width: 24%" aria-valuenow="24" aria-valuemin="0"
                                                             aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow eq-card  mb-4">
                                <div className="card-header">
                                    <strong>Region</strong>
                                </div>
                                <div className="card-body">
                                    <div className="map-box my-5"
                                         style="position:relative; max-width: 320px; max-height: 200px; margin:0 auto;">
                                        <div id="dataMapUSA"></div>
                                    </div>
                                    <div className="row align-items-bottom my-2">
                                        <div className="col">
                                            <p className="mb-0">France</p>
                                            <span className="my-0 text-muted small">+10%</span>
                                        </div>
                                        <div className="col-auto text-right">
                                            <p className="mb-0">118</p>
                                            <div className="progress mt-2" style="height: 4px;">
                                                <div className="progress-bar" role="progressbar" style="width: 85%"
                                                     aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center my-2">
                                        <div className="col">
                                            <p className="mb-0">Netherlands</p>
                                            <span className="my-0 text-muted small">+0.6%</span>
                                        </div>
                                        <div className="col-auto text-right">
                                            <p className="mb-0">1008</p>
                                            <div className="progress mt-2" style="height: 4px;">
                                                <div className="progress-bar" role="progressbar" style="width: 85%"
                                                     aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center my-2">
                                        <div className="col">
                                            <p className="mb-0">Italy</p>
                                            <span className="my-0 text-muted small">+1.6%</span>
                                        </div>
                                        <div className="col-auto text-right">
                                            <p className="mb-0">67</p>
                                            <div className="progress mt-2" style="height: 4px;">
                                                <div className="progress-bar" role="progressbar" style="width: 85%"
                                                     aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center my-2">
                                        <div className="col">
                                            <p className="mb-0">Spain</p>
                                            <span className="my-0 text-muted small">+118%</span>
                                        </div>
                                        <div className="col-auto text-right">
                                            <p className="mb-0">186</p>
                                            <div className="progress mt-2" style="height: 4px;">
                                                <div className="progress-bar" role="progressbar" style="width: 85%"
                                                     aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow eq-card mb-4">
                                <div className="card-header">
                                    <strong className="card-title">Traffic</strong>
                                    <a className="float-right small text-muted" href="#!">View all</a>
                                </div>
                                <div className="card-body">
                                    <div className="chart-box mb-3" style="min-height:180px;">
                                        <div id="customAngle"></div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="row align-items-center mb-2">
                                            <div className="col">
                                                <p className="mb-0">Direct</p>
                                                <span className="my-0 text-muted small">+10%</span>
                                            </div>
                                            <div className="col-auto text-right">
                                                <p className="mb-0">218</p>
                                                <span className="dot dot-md bg-success"></span>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-2">
                                            <div className="col">
                                                <p className="mb-0">Organic Search</p>
                                                <span className="my-0 text-muted small">+0.6%</span>
                                            </div>
                                            <div className="col-auto text-right">
                                                <p className="mb-0">1002</p>
                                                <span className="dot dot-md bg-warning"></span>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-2">
                                            <div className="col">
                                                <p className="mb-0">Referral</p>
                                                <span className="my-0 text-muted small">+1.6%</span>
                                            </div>
                                            <div className="col-auto text-right">
                                                <p className="mb-0">67</p>
                                                <span className="dot dot-md bg-primary"></span>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <p className="mb-0">Social</p>
                                                <span className="my-0 text-muted small">+118%</span>
                                            </div>
                                            <div className="col-auto text-right">
                                                <p className="mb-0">386</p>
                                                <span className="dot dot-md bg-secondary"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow eq-card mb-4">
                                <div className="card-header">
                                    <strong>Browsers</strong>
                                </div>
                                <div className="card-body">
                                    <div className="chart-box mt-3 mb-5">
                                        <div id="radarChartWidget"></div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="row align-items-center my-2">
                                            <div className="col-6 col-xl-3 my-3">
                                                <span className="mb-0">Safari</span>
                                                <div className="progress my-2" style="height: 4px;">
                                                    <div className="progress-bar" role="progressbar" style="width: 10%"
                                                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xl-3 my-3 text-right">
                                                <span>118</span><br/>
                                                <span className="my-0 text-muted small">+10%</span>
                                            </div>
                                            <div className="col-6 col-xl-3 my-3">
                                                <span className="mb-0">Chrome</span>
                                                <div className="progress my-2" style="height: 4px;">
                                                    <div className="progress-bar" role="progressbar" style="width: 36%"
                                                         aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xl-3 my-3 text-right">
                                                <span>1008</span><br/>
                                                <span className="my-0 text-muted small">+36%</span>
                                            </div>
                                            <div className="col-6 col-xl-3 my-3">
                                                <span className="mb-0">Opera</span>
                                                <div className="progress my-2" style="height: 4px;">
                                                    <div className="progress-bar" role="progressbar" style="width: 85%"
                                                         aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xl-3 my-3 text-right">
                                                <span>67</span><br/>
                                                <span className="my-0 text-muted small">+1.6%</span>
                                            </div>
                                            <div className="col-6 col-xl-3 my-3">
                                                <span className="mb-0">Edge</span>
                                                <div className="progress my-2" style="height: 4px;">
                                                    <div className="progress-bar" role="progressbar" style="width: 85%"
                                                         aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xl-3 my-3 text-right">
                                                <span>186</span><br/>
                                                <span className="my-0 text-muted small">+118%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Dashboard;
