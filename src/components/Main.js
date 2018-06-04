import React, { Component } from 'react';
import './Main.css';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid } from 'react-bootstrap';

class Main extends Component{
  constructor(){
    super();
    this.state = { showFilter: false };
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(event){
    var show = !this.state.showFilter
    this.setState({showFilter: show});
  }
  render(){
    const filter = this.state.showFilter;

    var nav = this.state.showFilter ? (
      <nav className="filter">
        <div className="content-container">
          <span className="close"><a onClick={this.handleFilter}><i className="fa fa-times"></i></a></span>
          <h3>Filter by</h3>
          <form action="/action_page.php">
            <input type="date" name="from" placeholder="From"/>
            <input type="date" name="to" placeholder="To"/>
            <a type="submit" className="btn btn-success btn-block">Apply Filters</a>
            <a type="clear" className="btn btn-warning btn-block">Clear Filters</a>
          </form>
        </div>
      </nav>) : (<a onClick={this.handleFilter} className="content-container filter-appear">Filter By</a>);
    
    return(
      <main className="container-fluid">
        <h2>Documents</h2>
        <div className="row">
          <div className="col col-md-3 no-padding-right">
            {nav}
            <nav className="hidden-xs hidden-sm filter">
                    <div className="content-container">
                      <span className="hidden-lg close"><a onClick={this.handleFilter}><i className="fa fa-times"></i></a></span>
                      <h3>Filter by</h3>
                      <form action="/action_page.php">
                        <input type="date" name="from" placeholder="From"/>
                        <input type="date" name="to" placeholder="To"/>
                        <a type="submit" className="btn btn-success btn-block">Apply Filters</a>
                        <a type="clear" className="btn btn-warning btn-block">Clear Filters</a>
                      </form>
                    </div>
            </nav>
          </div>
          <div className="col col-md-9 padding-show-filter">
            <div className="content-container">
              <table>
                <thead>
                  <th>Document Name</th>
                  <th>Date</th>
                </thead>
                <tbody>
                  <tr className="line-even">
                    <td>document-from-2018.pdf</td>
                    <td>1-2-2018</td>
                  </tr>
                  <tr className="line-odd">
                    <td>document-from-2018.pdf</td>
                    <td>1-2-2018</td>
                  </tr>
                  <tr className="line-even">
                    <td>document-from-2018.pdf</td>
                    <td>1-2-2018</td>
                  </tr>
                  <tr className="line-odd">
                    <td>document-from-2018.pdf</td>
                    <td>1-2-2018</td>
                  </tr>
                  <tr className="line-even">
                    <td>document-from-2018.pdf</td>
                    <td>1-2-2018</td>
                  </tr>
                  <tr className="line-odd">
                    <td>document-from-2018.pdf</td>
                    <td>1-2-2018</td>
                  </tr>              
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;