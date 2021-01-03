import numpy as np
import pandas as pd
import string
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.pipeline import Pipeline
from joblib import dump

spam_data = pd.read_csv('spam.csv', encoding='latin', engine='python')

spam_data = spam_data.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], axis = 1)
spam_data = spam_data.rename(columns = {'v1': 'Spam/Not', 'v2': 'Message'})
grouped = spam_data.groupby('Spam/Not')

spam_data_copy = spam_data['Message'].copy()

def preprocess(text):
    text = text.translate(str.maketrans('', '', string.punctuation))
    text = [word for word in text.split() if word.lower() not in stopwords.words('english')]
    return " ".join(text)

spam_data_copy = spam_data_copy.apply(preprocess)

vectorizer = TfidfVectorizer()
vectorized_data = vectorizer.fit_transform(spam_data_copy)

X_train, x_test, Y_train, y_test = train_test_split(vectorized_data, spam_data['Spam/Not'], random_state=42)

spam_model = LogisticRegression(solver='liblinear', penalty='l1', random_state=42)
spam_model.fit(X_train, Y_train)
predictions = spam_model.predict(x_test)
print("Spam Classification Model's Accuracy: {}%".format(accuracy_score(y_test, predictions) * 100))

test = vectorizer.transform(['URGENT! Your Mobile No 1234 was awarded a Prize', 'Hello, your bank payment is due soon!'])
test_pred = spam_model.predict(test)
print(test_pred)

pipeline = Pipeline(steps= [('tfidf', TfidfVectorizer()), 
                            ('model', LogisticRegression(solver='liblinear', penalty='l1', random_state=42))])
pipeline.fit(spam_data_copy, spam_data['Spam/Not'])

pipeline_test = ['URGENT! Your Mobile No 1234 was awarded a Prize', 'Hello, your bank payment is due soon!']
pipeline_pred = pipeline.predict(pipeline_test)
print(pipeline_pred)

dump(pipeline, filename="spam_classification.joblib")