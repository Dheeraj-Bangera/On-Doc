import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../styles/prediction.css";



const Prediction = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSymptoms, setFilteredSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [results, setResults] = useState("");

  const arr = [
    "Itching",
    "Skin Rash",
    "Nodal Skin Eruptions",
    "Continuous Sneezing",
    "Shivering",
    "Chills",
    "Joint Pain",
    "Stomach Pain",
    "Acidity",
    "Ulcers On Tongue",
    "Muscle Wasting",
    "Vomiting",
    "Burning Micturition",
    "Fatigue",
    "Weight Gain",
    "Anxiety",
    "Cold Hands And Feets",
    "Mood Swings",
    "Weight Loss",
    "Restlessness",
    "Lethargy",
    "Patches In Throat",
    "Irregular Sugar Level",
    "Cough",
    "High Fever",
    "Sunken Eyes",
    "Breathlessness",
    "Sweating",
    "Dehydration",
    "Indigestion",
    "Headache",
    "Yellowish Skin",
    "Dark Urine",
    "Nausea",
    "Loss Of Appetite",
    "Pain Behind The Eyes",
    "Back Pain",
    "Constipation",
    "Abdominal Pain",
    "Diarrhoea",
    "Mild Fever",
    "Yellow Urine",
    "Yellowing Of Eyes",
    "Acute Liver Failure",
    "Fluid Overload",
    "Swelling Of Stomach",
    "Swelled Lymph Nodes",
    "Malaise",
    "Blurred And Distorted Vision",
    "Phlegm",
    "Throat Irritation",
    "Redness Of Eyes",
    "Sinus Pressure",
    "Runny Nose",
    "Congestion",
    "Chest Pain",
    "Weakness In Limbs",
    "Fast Heart Rate",
    "Pain During Bowel Movements",
    "Pain In Anal Region",
    "Bloody Stool",
    "Irritation In Anus",
    "Neck Pain",
    "Dizziness",
    "Cramps",
    "Bruising",
    "Obesity",
    "Swollen Legs",
    "Swollen Blood Vessels",
    "Puffy Face And Eyes",
    "Enlarged Thyroid",
    "Brittle Nails",
    "Swollen Extremeties",
    "Excessive Hunger",
    "Extra Marital Contacts",
    "Drying And Tingling Lips",
    "Slurred Speech",
    "Knee Pain",
    "Hip Joint Pain",
    "Muscle Weakness",
    "Stiff Neck",
    "Swelling Joints",
    "Movement Stiffness",
    "Spinning Movements",
    "Loss Of Balance",
    "Unsteadiness",
    "Weakness Of One Body Side",
    "Loss Of Smell",
    "Bladder Discomfort",
    "Continuous Feel Of Urine",
    "Passage Of Gases",
    "Internal Itching",
    "Toxic Look (typhos)",
    "Depression",
    "Irritability",
    "Muscle Pain",
    "Altered Sensorium",
    "Red Spots Over Body",
    "Belly Pain",
    "Abnormal Menstruation",
    "Watering From Eyes",
    "Increased Appetite",
    "Polyuria",
    "Family History",
    "Mucoid Sputum",
    "Rusty Sputum",
    "Lack Of Concentration",
    "Visual Disturbances",
    "Receiving Blood Transfusion",
    "Receiving Unsterile Injections",
    "Coma",
    "Stomach Bleeding",
    "Distention Of Abdomen",
    "History Of Alcohol Consumption",
    "Fluid Overload",
    "Blood In Sputum",
    "Prominent Veins On Calf",
    "Palpitations",
    "Painful Walking",
    "Pus Filled Pimples",
    "Blackheads",
    "Scurring",
    "Skin Peeling",
    "Silver Like Dusting",
    "Small Dents In Nails",
    "Inflammatory Nails",
    "Blister",
    "Red Sore Around Nose",
    "Yellow Crust Ooze",
  ];
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterSymptoms = () => {
    let filteredList = [];
    arr.forEach((value, key) => {
      if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredList = [...filteredList,value];
      }
    });
    setFilteredSymptoms(filteredList);
    console.log(filteredSymptoms)
  };

  const handlePrediction = () => {
   
    console.log(selectedSymptoms)
    axios.post("/user/prediction", { symptoms: selectedSymptoms }).then((response) => {
      const result = response.data;
      console.log(result)
      setResults(result);
    });
  };

  useEffect(() => {
    filterSymptoms();
  }, [searchTerm]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <div className="relative">

      <NavLink to="/">
        <button className=" absolute left-0 z-10 bg-blue-400 text-white font-bold  p-3 text-xl rounded-lg">Home</button>
      </NavLink>
      </div>
      {/* <div id="preloader" /> */}
      <div id="particles-js">
        <section className="white-box">
          <form action="/login" className="search" id="predform" method="post">
            <i className="fa-sharp fa-solid fa-magnifying-glass" />
            <input
              type="text"
              name=""
              id="search-bar"
              placeholder="Search symptoms"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
          <ul id="symp-list">
            {filteredSymptoms.map((symptom,index) => (
              <li
                key={index}
                className="symptom"
                onClick={() => {
                  if (!selectedSymptoms.includes(symptom)) {
                    setSelectedSymptoms([...selectedSymptoms, symptom]);}
                }}
              >
                <h2>{symptom}</h2>
              </li>
            ))}
          </ul>
        </section>
        <section className="title">
          <h1>On-Doc</h1>
        </section>
        <section className="selected-symp-box">
          <ul id="selected">
            {selectedSymptoms.length > 0 ? (
              <>
                {selectedSymptoms.map((symptom,index) => (
                  <li
                    key={index}
                    className="selected-symptom"
                    onClick={() => {
                      const newSelectedSymptoms = [...selectedSymptoms]; // Create a copy of selectedSymptoms array
                      newSelectedSymptoms.splice(index, 1); // Remove the selected symptom at the given index
                      setSelectedSymptoms(newSelectedSymptoms);
                    }}
                  >
                    <h2>{symptom}</h2>
                  </li>
                ))}
              </>
            ) : (
              <div id="noele">No symptoms selected</div>
            )}
          </ul>
          <button
            className="bubbly-button"
            onClick={handlePrediction}
            disabled={selectedSymptoms.length === 0}
          >
            Predict
          </button>
        </section>
        <div className="blurred-background" />
        <section className="absolute right-[180px]  bottom-[300px] z-10">
          <h2 className="font-bold text-2xl">You may need to consult:</h2>
          {results && (
            <>
            </>
          )}
          <div className="bg-gray-100 p-3 rounded-2xl text-xl mt-4 ">
            {results.prediction}
          </div>
        </section>
      </div>
    </>
  );
};

export default Prediction;
