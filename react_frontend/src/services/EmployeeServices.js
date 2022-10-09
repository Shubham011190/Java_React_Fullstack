import axios from 'axios'

const EMP_BASE_URL  = "http://localhost:8080/api/v1/employees";
class EmployeeServices{
    getEmployees(){
        return axios.get(EMP_BASE_URL);
    }
}

export default new EmployeeServices();