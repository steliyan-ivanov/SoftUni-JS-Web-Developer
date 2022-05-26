function projectCreation(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let hours = projects * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}




projectCreation(["George",
        "4 "
    ])
    //•	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."