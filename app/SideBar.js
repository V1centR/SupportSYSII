export default function Sidebar() {
    return (
      <div className="sidebar" data-background-color="dark">
        <div className="sidebar-logo">
          
          <div className="logo-header" data-background-color="dark">
            <a href="index.html" className="logo">
              <img
                src="assets/img/kaiadmin/logo_light.svg"
                alt="navbar brand"
                className="navbar-brand"
                height="20"
              />
            </a>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right"></i>
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
         
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
           
              <li className="nav-item active">
                <a
                  data-bs-toggle="collapse"
                  href="#dashboard"
                  className="collapsed"
                  aria-expanded="false"
                >
                  <i className="fas fa-home"></i>
                  <p>Home</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="dashboard">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="../demo1/index.html">
                        <span className="sub-item">Dashboards</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>


              <li className="nav-item">
                <a href="widgets.html">
                  <i className="fas fa-desktop"></i>
                  <p>Incidentes</p>
                  <span className="badge badge-danger">99</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="widgets.html">
                  <i className="fas fa-desktop"></i>
                  <p>Messages</p>
                  <span className="badge badge-success">45</span>
                </a>
              </li>

              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <h4 className="text-section">Ferramentas</h4>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#base">
                  <i className="fas fa-layer-group"></i>
                  <p>Root</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="base">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="components/avatars.html">
                        <span className="sub-item">Usuários</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/buttons.html">
                        <span className="sub-item">Grupos</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/gridsystem.html">
                        <span className="sub-item">Permissões</span>
                      </a>
                    </li>                   
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#charts">
                  <i className="far fa-chart-bar"></i>
                  <p>Charts</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="charts">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="charts/charts.html">
                        <span className="sub-item">Incidentes</span>
                      </a>
                    </li>
                    <li>
                      <a href="charts/sparkline.html">
                        <span className="sub-item">Analistas</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#submenu">
                  <i className="fas fa-bars"></i>
                  <p>Menu Levels</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="submenu">
                  <ul className="nav nav-collapse">
                    <li>
                      <a data-bs-toggle="collapse" href="#subnav1">
                        <span className="sub-item">Level 1</span>
                        <span className="caret"></span>
                      </a>
                      <div className="collapse" id="subnav1">
                        <ul className="nav nav-collapse subnav">
                          <li>
                            <a href="#">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a data-bs-toggle="collapse" href="#subnav2">
                        <span className="sub-item">Level 1</span>
                        <span className="caret"></span>
                      </a>
                      <div className="collapse" id="subnav2">
                        <ul className="nav nav-collapse subnav">
                          <li>
                            <a href="#">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <span className="sub-item">Level 1</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }