import React, { Component } from 'react';
import axios from 'axios';
import Field from './form/Field';

const currentYear = (new Date()).getFullYear();
var years = [];
for (let i = 1851; i <= currentYear; i++) {
  years.unshift(i);
}

class Search extends Component {
  state = {
    query: '',
    beginDate: (currentYear - 3),
    endDate: currentYear
  }

  search(query) {
    axios.get(`http://localhost:3001/api/search?q=${this.state.query}&begin_date=${this.state.beginDate}0101&end_date=${this.state.endDate}1231`)
  }

  render() {
    return (
      <form>
        <Field placeholder="Topic" label="Topic" type="search" />
        <div className="field is-grouped is-pulled-left">
          <label className="control">
            <h3 className="label">From</h3>
            <div className="select">
              <select defaultValue={currentYear - 3}>
                { years.map(year => <option key={year} value={year}>{year}</option>) }
              </select>
            </div>
          </label>
          <label className="control">
            <h3 className="label">To</h3>
            <div className="select">
              <select defaultValue={currentYear}>
                { years.map(year => <option key={year} value={year}>{year}</option>) }
              </select>
            </div>
          </label>
        </div>
        <Field className="control is-pulled-right">
          <input type="submit" value="Search!" className="button is-info is-large" />
        </Field>
      </form>
    );
  }
}

export default Search;
