import PatientForm from "./PatientForm";
import PatientList from "./PatientList";

function App() {

  const refreshPatients = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Hospital Management System</h1>
      <PatientForm onPatientAdded={refreshPatients} />
      <PatientList />
    </div>
  );
}

export default App;

