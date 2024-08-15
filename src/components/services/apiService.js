import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your Spring Boot backend URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiService = {
  // Example methods for CRUD operations

  getAllRiders: () => axiosInstance.get('/signup_rider/riders'),

  addNewRider: (newRider) => axiosInstance.post('/signup_rider/add', newRider),

  updateRider: (id, updatedRider) => axiosInstance.put(`/signup_rider/update/${id}`, updatedRider),

  deleteRider: (id) => axiosInstance.delete(`/signup_rider/delete/${id}`),

  getRiderByNameAndEmail: (name, email) => axiosInstance.get(`/signup_rider/getByNameAndEmail/${name}/${email}`),

  // Add more methods as needed for your application
};

export default apiService;
