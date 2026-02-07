type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;


let e: Employee = {
  name:"kamlesh",
  startDate:"01-02-2024"
}

const teamLead: TeamLead = {
  name: "Kamlesh",
  startDate: "01-11-22",
  department: "Software developer"
};
