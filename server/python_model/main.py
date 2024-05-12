# Importing libraries
import numpy as np
import sys 
import pickle
from scipy.stats import mode

with open('final_svm_model.pickle', 'rb') as f:
    final_svm_model = pickle.load(f)
with open('final_nb_model.pickle', 'rb') as f:
    final_nb_model = pickle.load(f)
with open('final_rf_model.pickle', 'rb') as f:
    final_rf_model = pickle.load(f)
with open('symptom_index.pickle', 'rb') as f:
    symptom_index = pickle.load(f)
with open('encoder.pickle', 'rb') as f:
    encoder = pickle.load(f)
with open('new_rf_classifier.pickle', 'rb') as f:
    new_rf_classifier = pickle.load(f)
with open('new_encoder_X.pickle', 'rb') as f:
    new_encoder_X  = pickle.load(f)
with open('new_encoder_y.pickle', 'rb') as f:
    new_encoder_y  = pickle.load(f)    


data_dict = {
	"symptom_index":symptom_index,
	"predictions_classes":encoder.classes_
}




def predictDisease(symptoms):
	symptoms = symptoms.split(",")
	input_data = [0] * len(data_dict["symptom_index"])
	for symptom in symptoms:
		index = data_dict["symptom_index"][symptom]
		input_data[index] = 1	
	
	input_data = np.array(input_data).reshape(1,-1)

	rf_prediction = final_rf_model.predict(input_data)[0]
	nb_prediction = final_nb_model.predict(input_data)[0]
	svm_prediction = final_svm_model.predict(input_data)[0]
	

	final_prediction = mode([rf_prediction, nb_prediction, svm_prediction])[0]
	predictions = {
		"rf_model_prediction": rf_prediction,
		"naive_bayes_prediction": nb_prediction,
		"svm_model_prediction": svm_prediction,
		"final_prediction":final_prediction
	}
	return predictions





def predict_doctor(disease):
    try:
        disease_encoded = new_encoder_X.transform([disease])[0]
        predicted_specialty = new_rf_classifier.predict([[disease_encoded]])[0]
        predicted_specialty_name = new_encoder_y.inverse_transform([predicted_specialty])[0]
        return predicted_specialty_name
    except:
        return "General Physician"

Userinput =sys.argv
finalInput = " ".join(Userinput[1:])
T = predictDisease(finalInput)
user_input_disease = data_dict["predictions_classes"][T["final_prediction"]]
predicted_specialty = predict_doctor(user_input_disease)
print(predicted_specialty)
