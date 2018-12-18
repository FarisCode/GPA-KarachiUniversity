import React, { Component } from 'react'
import styles from './Modal.module.scss'
import CourseAdder from '../../components/CourseAdder/CourseAdder';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Swal from 'sweetalert2'

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
    coursesCount: 0,
    cgpa: 0,
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

  onResetBtnClick = () => {
    Swal({
      title: 'Are you sure?',
      text: "You will lost your current input data!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#028d31',
      cancelButtonColor: 'rgb(85,85,85)',
    }).then((result) => {
      if (result.value) {
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
          coursesCount: 0,
          cgpa: 0,
        })
      }
    })
  }

  onCalculateClickHandler = () => {
    let courseCount = 0;
    let gradePointSum = 0;
    let creditSum = 0;

    const data = { ...this.state };
    for (let i = 1; i <= 8; i++) {
      if ((data['creditValue' + i] >= 1 && data['creditValue' + i] < 4) && (this.gradePointTable(data['value' + i]))) {
        courseCount++;
        gradePointSum += (this.gradePointTable(data['value' + i]) * data['creditValue' + i])
        creditSum += +data['creditValue' + i];
      }
    }
    const cgpa = gradePointSum ? gradePointSum / creditSum : 0;
    this.setState({
      cgpa: cgpa,
      coursesCount: courseCount,
    })
    Swal({
      confirmButtonColor: cgpa ? '#028d31' : 'rgb(85,85,85)',
      type: cgpa ? 'success' : 'error',
      title: cgpa.toFixed(2) + " GPA",
      text: courseCount ? 'Courses Count: ' + courseCount : 'Something went wrong!',
      footer: cgpa ? 'Designed & Developed by&nbsp;<a href="https://fariscode.github.io" style={color:#000; font-weight:bold;} target="_blank">Syed Faris Ahmed</a>' : 'Enter values within given ranges!'
    })
  }

  gradePointTable = (marks) => {
    if (marks < 50) {
      return 0;
    } else if (marks >= 50 && marks <= 52) {
      return 1;
    } else if (marks >= 53 && marks <= 56) {
      return 1.4;
    } else if (marks >= 57 && marks <= 60) {
      return 1.8;
    } else if (marks >= 61 && marks <= 63) {
      return 2.0;
    } else if (marks >= 64 && marks <= 67) {
      return 2.4;
    } else if (marks >= 68 && marks <= 70) {
      return 2.8;
    } else if (marks >= 71 && marks <= 74) {
      return 3.0;
    } else if (marks >= 75 && marks <= 79) {
      return 3.4;
    } else if (marks >= 80 && marks <= 84) {
      return 3.8;
    } else if (marks >= 85 && marks < 101) {
      return 4;
    }
    return 0;
  }

  render() {

    const visible2 = this.state.value1 > 49 && this.state.value1 < 101;
    const visible3 = this.state.value2 > 49 && this.state.value2 < 101;
    const visible4 = this.state.value3 > 49 && this.state.value3 < 101;
    const visible5 = this.state.value4 > 49 && this.state.value4 < 101;
    const visible6 = this.state.value5 > 49 && this.state.value5 < 101;
    const visible7 = this.state.value6 > 49 && this.state.value6 < 101;
    const visible8 = (this.state.value7 > 49 && this.state.value7 < 101) || (this.state.value8 > 49 && this.state.value8 < 101);

    return (
      <div className={styles.Modal} >
        <div className={styles.Header}>
          <div className={styles.Logo}>
          </div>
          <div>
            <span>GPA Calculator</span>
            <p>University of Karachi</p>
          </div>
        </div>

        <div className={styles.Main}>
          <div className={styles.Courses}>
            <CourseAdder courseNum='1' onMarksChange={this.onMarksChange1} value={this.state.value1} creditValue={this.state.creditValue1} onCreditChange={this.onCreditChange1} /><hr color='#ddd' />
            <div style={{ transform: visible2 || visible3 || visible4 || visible5 || visible6 || visible7 || visible8 ? 'scale(1)' : 'scale(0)' }}>
              <CourseAdder courseNum='2' onMarksChange={this.onMarksChange2} value={this.state.value2} creditValue={this.state.creditValue2} onCreditChange={this.onCreditChange2} /><hr color='#ddd' />
            </div>
            <div style={{ transform: visible3 || visible4 || visible5 || visible6 || visible7 || visible8 ? 'scale(1)' : 'scale(0)' }}>
              <CourseAdder courseNum='3' onMarksChange={this.onMarksChange3} value={this.state.value3} creditValue={this.state.creditValue3} onCreditChange={this.onCreditChange3} /><hr color='#ddd' />
            </div>
            <div style={{ transform: visible4 || visible5 || visible6 || visible7 || visible8 ? 'scale(1)' : 'scale(0)' }}>
              <CourseAdder courseNum='4' onMarksChange={this.onMarksChange4} value={this.state.value4} creditValue={this.state.creditValue4} onCreditChange={this.onCreditChange4} /><hr color='#ddd' />
            </div>
            <div style={{ transform:visible5 || visible6 || visible7 || visible8 ? 'scale(1)' : 'scale(0)' }}>
              <CourseAdder courseNum='5' onMarksChange={this.onMarksChange5} value={this.state.value5} creditValue={this.state.creditValue5} onCreditChange={this.onCreditChange5} /><hr color='#ddd' />
            </div>
            <div style={{ transform: visible6 || visible7|| visible8 ? 'scale(1)' : 'scale(0)' }}>
              <CourseAdder courseNum='6' onMarksChange={this.onMarksChange6} value={this.state.value6} creditValue={this.state.creditValue6} onCreditChange={this.onCreditChange6} /><hr color='#ddd' />
            </div>
            <div style={{ transform: visible7 || visible8 ? 'scale(1)' : 'scale(0)' }}>
              <CourseAdder courseNum='7' onMarksChange={this.onMarksChange7} value={this.state.value7} creditValue={this.state.creditValue7} onCreditChange={this.onCreditChange7} /><hr color='#ddd' />
            </div>
            <div style={{ transform: visible8 ? 'scale(1)' : 'scale(0)' }}>
              <CourseAdder courseNum='8' onMarksChange={this.onMarksChange8} value={this.state.value8} creditValue={this.state.creditValue8} onCreditChange={this.onCreditChange8} /><hr color='#ddd' />
            </div>
          </div>
          <div>
            {
              this.state.coursesCount
                ? <span style={{ color: 'red', fontWeight: 'bold', fontSize: '12px', margin: '20px' }}>Course(s) Counted: {this.state.coursesCount}</span>
                : null
            }
            <Button style={{ right: '200px', top: 'calc(100% - 88px)', color: '#fff', backgroundColor: '#555' }} onClick={this.onResetBtnClick} variant="contained" disabled={false} >
              Reset
          </Button>
            <Button variant="contained" color="primary" disabled={false} onClick={this.onCalculateClickHandler} >
              Calculate GPA
            <Icon style={{ position: 'relative', left: 5 }}>send</Icon>
            </Button>
          </div>
        </div>

        <div className={styles.Footer}>
          Calculations are performed by the equations and table provided on <a href="http://www.uok.edu.pk/sem_results/rules.php" target="_blank" rel="noopener noreferrer">Official Website</a>
        </div>
      </div>
    )
  }
}
