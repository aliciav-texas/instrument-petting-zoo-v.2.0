const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models.js");
const axios = require("axios");

app.use(express.json());
app.use(cors());

app.get("/test", async (req, res) => {
  try {
    axios
      .get(
        "https://en.wikipedia.org/w/api.php?format=json&action=parse&prop=text&section=1&diabletoc=1&redirects=1&page=bulldog"
      )
      .then((response) => {
        console.log("res", response.data.parse.text["*"]);
      });
  } catch (error) {}
});

// === Final Instrument
app.put("/:id/:instrument/final", async (req, res) => {
  try {
    const id = req.params.id;
    const instrument = req.params.instrument;
    const updatedFinalInstrument = db.updateFinalInstrument(id, instrument);
    res.send(updatedFinalInstrument);
  } catch (errorUpdatingFinalInstrument) {
    res.status(400).send(errorUpdatingFinalInstrument);
  }
});

// ==== Retrieve Student Data
app.get("/students", async (req, res) => {
  try {
    const listOfStudentNames = await db.getListOfStudents();
    res.send(listOfStudentNames);
  } catch (errorGettingListOfStudents) {
    console.log("error", errorGettingListOfStudents);
  }
});

app.get("/roster", async (req, res) => {
  try {
    const studentRoster = await db.getListOfAllRegisteredStudents();
    res.send(studentRoster);
  } catch (errorRetrievingStudentRoster) {
    res.status(404).send(errorRetrievingStudentRoster);
  }
});

app.get("/student/:student/id", async (req, res) => {
  try {
    let student = req.params.student;
    const studentID = await db.getStudentID(student);
    res.send(studentID);
  } catch (errorGettingID) {
    res.status(404).send(errorGettingID);
  }
});
app.get("/student/:id/feedback", async (req, res) => {
  try {
    let id = req.params.id;
    const studentFeedback = await db.getStudentFeedback(id);
    res.send(studentFeedback);
  } catch (errorGettingID) {
    res.status(404).send(errorGettingID);
  }
});

// ==== Post Student Assessments

app.post("/PercussionAssessment", async (req, res) => {
  try {
    const assessmentValues = Object.values(req.body);

    db.postStudentInstrumentAssessment("percussion", assessmentValues);
    res.send("Student assesment posted");
  } catch (errorPostingAssessment) {
    res.status(400).send(errorPostingAssessment);
  }
});
app.post("/BrassAssessment", async (req, res) => {
  try {
    const assessmentValues = Object.values(req.body);

    db.postStudentInstrumentAssessment("brass", assessmentValues);
    res.send("Student assesment posted");
  } catch (errorPostingAssessment) {
    res.status(400).send(errorPostingAssessment);
  }
});
app.post("/WoodwindAssessment", async (req, res) => {
  try {
    const assessmentValues = Object.values(req.body);

    db.postStudentInstrumentAssessment("woodwind", assessmentValues);
    res.send("Student assesment posted");
  } catch (errorPostingAssessment) {
    res.status(400).send(errorPostingAssessment);
  }
});

module.exports = app;
