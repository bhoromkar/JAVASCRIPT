class EmployeeWageOne {
    
}
    function employeeWage(){
    const FULL_DAY_HOUR = 8;
    const PART_DAY_HOUR = 4;
    const WAGE_PER_HOUR = 20;
    const TOTAL_WORKING_DAYS = 20;
    const TOTAL_WORKING_HOUR = 100;

        let dayWage=0;
        var day = 1;
        var workingHour=0;
        var totalWage=0;

        while (day <= TOTAL_WORKING_DAYS && workingHour < TOTAL_WORKING_HOUR) {
            var isPresent=Math.floor(Math.random()*3)
            switch (isPresent) {
                case 1 : {

                    dayWage = PART_DAY_HOUR * WAGE_PER_HOUR;
                    console.log("part time");
                    workingHour = workingHour + PART_DAY_HOUR;
                }
                case 2 : {

                    dayWage = FULL_DAY_HOUR * WAGE_PER_HOUR;
                    console.log("full time");
                    workingHour += FULL_DAY_HOUR;
                }
                default : console.log("absent");
            }

            totalWage=totalWage+dayWage;
            console.log(workingHour + " working hour");
            console.log(dayWage);
            console.log(day);
            day++;


        }
        console.log(totalWage);
    }
    employeeWage();