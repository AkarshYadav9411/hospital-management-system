package com.hms.hospital_management_system.service;

import com.hms.hospital_management_system.entity.Patient;
import com.hms.hospital_management_system.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    // CREATE
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // GET ALL
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // GET BY ID
    public Optional<Patient> getPatientById(Long id) {
        return patientRepository.findById(id);
    }

    // UPDATE
    public Patient updatePatient(Long id, Patient patient) {

        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Patient not found"));

        existingPatient.setName(patient.getName());
        existingPatient.setAge(patient.getAge());
        existingPatient.setGender(patient.getGender());
        existingPatient.setPhone(patient.getPhone());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setDisease(patient.getDisease());

        return patientRepository.save(existingPatient);
    }

    // DELETE
    public void deletePatient(Long id) {

        if (!patientRepository.existsById(id)) {
            throw new RuntimeException("Patient not found");
        }

        patientRepository.deleteById(id);
    }
}