# Spam Detection Web Application
This is a ReactJS web application that takes in user input and utilizes a Python machine learning model I created sitting on a Flask server to classify the text as spam or ham (not spam). The machine learning model is based off of binomial logistic regression, uses lemmatization over stemming, and removes stopwords and punctuation to achieve higher accuracy in spam classification. Currently, the model's accuracy score is at 94.67703349282297%. Check it out at: https://fightspam.herokuapp.com!