import {Component} from 'react'

import "./index.css"

class AgeCalculator extends Component {
  state = {yearOfBirth: '', errorMessage: false, resultMessage: false}


  setIsErrorOccurred = value =>{
      this.setState({errorMessage:value})

  }

  setIsResultVisible=value=>{
      this.setState({resultMessage:value})
  }


  calculateAge = () => {
    const {yearOfBirth} = this.state
    const dateOfBirth = new Date(yearOfBirth)
    const birthOfYear = birthYear.getFullYear()

    const presentDate = new Date()
    const presentYear = presentDate.getFullYear()
    return presentYear - birthOfYear
  }


onClickAgeCalculate=()=>{
    const{yearOfBirth} = this.state 
    const age = this.calculateAge()

    
    if (age > 0 && yearOfBirth.length <= 4 && Number.isInteger(age)) {
      this.setIsErrorOccurred(false)
      this.setIsResultVisible(true)
    } else {
      this.setIsErrorOccurred(true)
    }
  }
}  

renderCalculateButton = ()=> (
        <div className ="button-container">
            <button type="button" onClick={this.onClickAgeCalculate}
            className="calculate-button">Calculate</button>
        </div>
    )


    calculateAgeText=()=>{
        const calculatedAge =this.calculateAge()

        if (calculatedAge=== 1 ){
            return `You are ${calculatedAge} year old by the end of 2021`
        }
            return `You are ${calculatedAge} years old by the end of 2021` 
    }

    renderCalculatedAge=()=>{
        const{resultMessage} = this.state 

        if(resultMessage){
            return (
            <p className = "calculated-age-text">{this.calculateAgeText}</p>)
        }
        return null;
    }

    renderErrorMessage =()=>{
        const{errorMessage} = this.state 
        if (errorMessage){
            return (
     <p className="error-message">Enter the year that you are Born</p>

            )
        }return null
    }

    onChangeYearOfBirth = (event) =>{
        const {value} = event.target 
        this.setState({yearOfBirth:value})
        this.setState({errorMessage:false})
        this.setState({resultMessage:false})
    }

    renderInputField=() =>{
        const {yearOfBirth} = this.state 
        return (
        <input type = "text" placeholder = "Enter the year that you are born " className="input-field"
        value={yearOfBirth} onChange = {this.onChangeYearOfBirth}/>
        )
    }

    renderAgeCalculatorCard=()=>(
        <div className="age-calculator-card">
      <h1 className="heading">Age Calculator</h1>
      <div className="form-container">
        <div className="input-with-error-container">
          {this.renderInputField()}
          {this.renderErrorMessage()}
        </div>
        {this.renderCalculatedAge()}
        {this.renderCalculateButton()}
      </div>
    </div>
    )
      render() {
           <div className="age-calculator-container">
        {this.renderAgeCalculatorCard()}
        <div className="image-container">
          <img
            alt="stages of human"
            className="age-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
          />
        </div>
         </div>
      }
}


export default AgeCalculator