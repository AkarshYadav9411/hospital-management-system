import { useEffect, useState } from "react";
import { getPatients, deletePatient } from "./patientService";

function PatientList() {
  const [patients, setPatients] = useState([]);

  const loadPatients = async () => {
    try {
      const response = await getPatients();
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this patient?")) {
      return;
    }

    try {
      await deletePatient(id);
      alert("Patient deleted successfully");
      loadPatients();
    } catch (error) {
      console.error(error);
      alert("Failed to delete patient");
    }
  };

  return (
    <div>
      <h2>Patient List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Disease</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              <td>{patient.email}</td>
              <td>{patient.disease}</td>
              <td>
                <button onClick={() => handleDelete(patient.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;