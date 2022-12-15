let employees = ["Kevin Nguyen","Freddy Kroger", "Obi-Wan Kenobi","Optimus Prime"]
let salaries = [9000,1234,2345,6789]

function validateEntry(){
    let name_validate = document.forms["new_employee"]["full_name"].value
    let salary_validate = document.forms["new_employee"]["salary"].value
    if(name_validate == ""){
        alert("Enter a name.")
        return false
    }
    if(salary_validate == 0){
        alert("Enter a salary higher than 1 dollar.")
        return false
    }else{
        addSalary()
        document.getElementById("new_employee").reset()
    }
}

function addSalary(){
    let new_employee_name = document.getElementById("full_name").value
    let new_salary_amount = document.getElementById("salary").value
    employees.push(new_employee_name)
    salaries.push(parseFloat(new_salary_amount))
    console.log(employees)
    console.log(salaries)
}
function displayResults(){
    let max = 0;
    let final_max = 0;
    let total = 0;
    for(let i=0; i<=salaries.length-1; i++){
        if(max > salaries[i]){
            final_max = max
        }else{
            max = salaries[i]
        }
        total = total + salaries[i]        
    }
    let average_salary = total/(employees.length)
    let position = salaries.indexOf(final_max)
    let display_results = employees[position] + " is paid the most with a salary of $" + salaries[position] + ". The average salary with " + employees.length + " employees is $" + average_salary + "."
    document.getElementById("display_results").innerHTML = display_results
}   

function displaySalary(){
    let final_data = "<tr><th>Employee</th> <th>Salary</th></tr>"
    for(let i=0; i<=employees.length-1; i++){
        final_data +="<tr><td>" + employees[i] + "</td><td>" + salaries[i] + "</td></tr>"
    }
    final_data +="</table>"
    document.getElementById("display_salary").innerHTML = final_data
}