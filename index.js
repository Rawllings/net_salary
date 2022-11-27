function netSalary() {
    let salary = document.getElementById("salary").value;
    
    if (salary < 24000){
        let tax = salary * 0.1;
        let nssf = salary * 0.06;
        let nhif = salary * 0.025;

        let finSalary = salary - (tax + nssf + nhif);

        document.getElementById("net").innerHTML = `Your net salary is ${finSalary}`
    }

    else if (salary >= 24000 && salary < 32333 ){
        let tax = salary * 0.25;
        let nssf = salary * 0.06;
        let nhif = salary * 0.025;

        let finSalary = salary - (tax + nssf + nhif);

        document.getElementById("net").innerHTML = `Your net salary is ${finSalary}`
    }

    else if (salary > 32333){
        let tax = salary * 0.3;
        let nssf = salary * 0.06;
        let nhif = salary * 0.025;

        let finSalary = salary - (tax + nssf + nhif);

        document.getElementById("net").innerHTML = `Your net salary is ${finSalary}`
    }

    else {
        document.getElementById("net").innerHTML = `Enter salary`
    }
    
    
    
}