import axios from "axios";

export const deleteDepartmentById = async (id) => {
  try {
    await axios.delete(`https://vjppro-demo-project.herokuapp.com/api/departments/${id}`);
  } catch (error) {
    console.error(error);
  }
};

  


export const getAllDepartments = async () => {
  try {
    const res = await axios.get(
      `https://vjppro-demo-project.herokuapp.com/api/departments`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getDepartment = async (id) => {
  try {
    const res = await axios.get(
      `https://vjppro-demo-project.herokuapp.com/api/departments/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createDepartment = async (department) => {
  try {
    return await axios.post(
      `https://vjppro-demo-project.herokuapp.com/api/departments`,
      department
    );
  } catch (error) {
    console.error(error);
  }
};

export const updateDepartment = async (id, department) => {
  try {
    return await axios.put(
      `https://vjppro-demo-project.herokuapp.com/api/departments/${id}`,
      department
    );
  } catch (error) {
    console.error(error);
  }
};
