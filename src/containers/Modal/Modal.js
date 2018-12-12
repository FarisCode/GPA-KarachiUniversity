import React, { Component } from 'react'
import styles from './Modal.module.scss'
import CourseAdder from '../../components/CourseAdder/CourseAdder';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class Modal extends Component {
  state = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
    creditValue1: 3,
    creditValue2: 3,
    creditValue3: 3,
    creditValue4: 3,
    creditValue5: 3,
    creditValue6: 3,
    creditValue7: 3,
    creditValue8: 3,
  }

  onMarksChange1 = (e) => {
    this.setState({ value1: e.target.value });
  }
  onMarksChange2 = (e) => {
    this.setState({ value2: e.target.value });
  }
  onMarksChange3 = (e) => {
    this.setState({ value3: e.target.value });
  }
  onMarksChange4 = (e) => {
    this.setState({ value4: e.target.value });
  }
  onMarksChange5 = (e) => {
    this.setState({ value5: e.target.value });
  }
  onMarksChange6 = (e) => {
    this.setState({ value6: e.target.value });
  }
  onMarksChange7 = (e) => {
    this.setState({ value7: e.target.value });
  }
  onMarksChange8 = (e) => {
    this.setState({ value8: e.target.value });
  }
  onCreditChange1 = (e) => {
    this.setState({ creditValue1: e.target.value });
  }
  onCreditChange2 = (e) => {
    this.setState({ creditValue2: e.target.value });
  }
  onCreditChange3 = (e) => {
    this.setState({ creditValue3: e.target.value });
  }
  onCreditChange4 = (e) => {
    this.setState({ creditValue4: e.target.value });
  }
  onCreditChange5 = (e) => {
    this.setState({ creditValue5: e.target.value });
  }
  onCreditChange6 = (e) => {
    this.setState({ creditValue6: e.target.value });
  }
  onCreditChange7 = (e) => {
    this.setState({ creditValue7: e.target.value });
  }
  onCreditChange8 = (e) => {
    this.setState({ creditValue8: e.target.value });
  }

  onResetBtnClick=()=>{
    this.setState({
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      value6: 0,
      value7: 0,
      value8: 0,
      creditValue1: 3,
      creditValue2: 3,
      creditValue3: 3,
      creditValue4: 3,
      creditValue5: 3,
      creditValue6: 3,
      creditValue7: 3,
      creditValue8: 3,
    })
  }

  render() {
    return (
      <div className={styles.Modal} >
        <div className={styles.Header}>
          <div className={styles.Logo}>
          </div>
          <div>
            <span>CGPA Calculator</span>
            <p>University of Karachi</p>
          </div>
        </div>

        <div className={styles.Main}>
          <div className={styles.Courses}>
            <CourseAdder courseNum='1' onMarksChange={this.onMarksChange1} value={this.state.value1} creditValue={this.state.creditValue1} onCreditChange={this.onCreditChange1} /><hr color='#ddd' />
            <CourseAdder courseNum='2' onMarksChange={this.onMarksChange2} value={this.state.value2} creditValue={this.state.creditValue2} onCreditChange={this.onCreditChange2} /><hr color='#ddd' />
            <CourseAdder courseNum='3' onMarksChange={this.onMarksChange3} value={this.state.value3} creditValue={this.state.creditValue3} onCreditChange={this.onCreditChange3} /><hr color='#ddd' />
            <CourseAdder courseNum='4' onMarksChange={this.onMarksChange4} value={this.state.value4} creditValue={this.state.creditValue4} onCreditChange={this.onCreditChange4} /><hr color='#ddd' />
            <CourseAdder courseNum='5' onMarksChange={this.onMarksChange5} value={this.state.value5} creditValue={this.state.creditValue5} onCreditChange={this.onCreditChange5} /><hr color='#ddd' />
            <CourseAdder courseNum='6' onMarksChange={this.onMarksChange6} value={this.state.value6} creditValue={this.state.creditValue6} onCreditChange={this.onCreditChange6} /><hr color='#ddd' />
            <CourseAdder courseNum='7' onMarksChange={this.onMarksChange7} value={this.state.value7} creditValue={this.state.creditValue7} onCreditChange={this.onCreditChange7} /><hr color='#ddd' />
            <CourseAdder courseNum='8' onMarksChange={this.onMarksChange8} value={this.state.value8} creditValue={this.state.creditValue8} onCreditChange={this.onCreditChange8} /><hr color='#ddd' />
          </div>
          <Button style={{ right: '200px', top: 'calc(100% - 88px)',color:'#fff', backgroundColor:'#555555' }} onClick={this.onResetBtnClick} variant="contained" disabled={false} >
            Reset
          </Button>
          <Button variant="contained" color="primary" disabled={false} >
            Calculate GPA
            <Icon style={{ position: 'relative', left: 5 }}>send</Icon>
          </Button>
        </div>

        <div className={styles.Footer}>
          Calculations are performed by the equations and table provided on <a href="http://www.uok.edu.pk/sem_results/rules.php" target="_blank" rel="noopener noreferrer">Official Website</a>
        </div>
      </div>
    )
  }
}
