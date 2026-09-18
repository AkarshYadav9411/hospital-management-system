import { useState } from "react";
import { createPatient } from "./patientService";

function PatientForm({ onPatientAdded }) {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    disease: "",
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPatient(patient);
      alert("Patient added successfully");

      setPatient({
        name: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        disease: "",
      });

      onPatientAdded();
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Patient Name"
        value={patient.name}
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        placeholder="Patient Age"
        value={patient.age}
        onChange={handleChange}
      />
      <input
        name="gender"
        placeholder="Gender"
        value={patient.gender}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone Number"
        value={patient.phone}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={patient.email}
        onChange={handleChange}
      />
      <input
        name="disease"
        placeholder="Disease"
        value={patient.disease}
        onChange={handleChange}
      />
      <button type="submit">Add Patient</button>
    </form>
  );
}

export default PatientForm;