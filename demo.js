// 1 st and 2nd question

// let market = [];

// let another;



// while(true){
//     if(another=='done'){

//         alert("Your items are added to your cart")
        
//         break;
//     }
//     else{
//        let item = prompt("Enter item");
//        let quantity = prompt("Enter quantity");
//        let price = prompt("Enter price");
//        let total = quantity*price
//        market.push({item,quantity,price,total})
//         another=prompt("Do you want to continue or done to finish")
//     }

// }  


// let total=0;
// let totalcost=0;
// let highprice=0;
// for(let i=0;i<market.length;i++){

     
//     let price =market[i].price;
//     let item = market[i].item;
//     let quantity = market[i].quantity;
//     total = price*quantity;
//     totalcost+=total
   
//     console.log([i+1]+"."+item+"- Quantity: "+quantity+
//         ", price: "+price+", Total: "+total);

//         if(highprice<price){
//             highprice=price;
            
//         }
//         // 
     
//    }

//    for(let i=0;i<market.length;i++){

//             if(highprice==market[i].price){
//             highprice=highprice*market[i].quantity
//         }
//    }

//    highprice=highprice*(25/100);

   

//    console.log("Total-cost = "+totalcost);
//    console.log("discount "+highprice)

//    let discount = totalcost-highprice;
//    console.log(`After discount :${discount}`)

// //    console.log(market);



// 3rd question


let employee = [];

let pro = prompt(`Main Menu \n 1. Add Employee \n 2. Update Salary \n 3. View Employees \n 4. Calculate Total Salaries \n 5. Exit`) ;

while(true){
    if(pro==1){
        let name = prompt("Enter Employee Name");
        let role = prompt("Enter Employee Role");
        let salary = Number(prompt("Enter Employee salary"));
        employee.push({name,role,salary})
        alert(`${name} added as a ${role} with a salary of ${salary}`);
        pro = prompt(`Main menu \n 1. Add Employee \n 2. Update Salary \n 3. View Employees \n 4. Calculate Total Salaries \n 5. Exit`) ;
        
    }
    else if(pro==2){

        let name = prompt("Which person salary you wants increment");
        let update = Number(prompt("Enter update salary"));
        
        for(let i=0;i<employee.length;i++){
            if(employee[i].name ==name){
                employee[i].salary=update
            }
        }

        alert(`${name} salary is updated to ${update}`)

        pro = prompt(`Main Menu  Choose an action \n 1. Add Employee \n 2. Update Salary \n 3. View Employees \n 4. Calculate Total Salaries \n 5. Exit`) ;
        

    }

    else if(pro ==3){

        for(let i=0;i<employee.length;i++){
            console.log(`${[i+1]}. Name: ${employee[i].name}, Desigination: ${employee[i].role}, Salary: ${employee[i].salary}`)
        }

        alert(`Listed all employees`)

        pro = prompt(`Main Menu  Choose an action \n 1. Add Employee \n 2. Update Salary \n 3. View Employees \n 4. Calculate Total Salaries \n 5. Exit`) ;
        

    }
    else if(pro == 4){
        let total=0;
         
        for(let i=0;i<employee.length;i++){
            total+=employee[i].salary
        }
        alert(`Total Employees salary :${total}`)

        pro = prompt(`Main Menu  Choose an action \n 1. Add Employee \n 2. Update Salary \n 3. View Employees \n 4. Calculate Total Salaries \n 5. Exit`) ;
        
    }
    else if(pro==5){
        alert("Employee Information updated")
        break;
        
    }
    
}


    console.log(employee);


    // checking

// let obj =[{
//     salary:50000
// }]

// let update =599999

// let obj1= obj[0].salary=update

// console.log(obj);
