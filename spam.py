import numpy as np
import pandas as pd
import string
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from nltk.corpus import stopwords
# from nltk.stem import SnowballStemmer
from nltk.stem import WordNetLemmatizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.pipeline import Pipeline
from joblib import dump

nltk.download('stopwords')

# clean up data set
spam_data = pd.read_csv('spam.csv', encoding='latin', engine='python')

spam_data = spam_data.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], axis = 1)
spam_data = spam_data.rename(columns = {'v1': 'Spam/Not', 'v2': 'Message'})
grouped = spam_data.groupby('Spam/Not')

spam_data_copy = spam_data['Message'].copy()

# remove punctuation and stop words from text
# removing punctuation --> this uses the 3-argument version 
# of str.maketrans with arguments (x, y, z) where 'x' and 'y'
# must be equal-length strings and characters in 'x'
# are replaced by characters in 'y'. 'z' is a string 
# (string.punctuation here) where each character in the 
# string is mapped to None
# removing stopwords --> simple list comprehension
def preprocess(text):
    text = text.translate(str.maketrans('', '', string.punctuation))
    text = [word.lower() for word in text.split() if word.lower() not in stopwords.words('english')]
    return " ".join(text)

spam_data_copy = spam_data_copy.apply(preprocess)

# def stemming(text):
#     text = text.split()
#     words = ""
#     for i in text:
#         stemmer = SnowballStemmer("english")
#         words += (stemmer.stem(i)) + " "
#     return words

# spam_data_copy = spam_data_copy.apply(stemming)

# Lemmatization and stemming have the same goal of reducing inflection in words, 
# though lemmatization usually produces better results as it utilizes dictonaries 
# to identify a word with its correct lemma. The result is always a dictionary word.
# But, stemming removes prefixes and suffixes and the result might not be an actual 
# dictionary word. Hence, we use lemmatization for more accurate results.
def lemmatization(text):
    text = nltk.word_tokenize(text)
    words = ""
    lemmatizer = WordNetLemmatizer()
    for word in text:
        words += lemmatizer.lemmatize(word) + " "
    return words

spam_data_copy = spam_data_copy.apply(lemmatization)

# vectorize our data
# always use fit_transform for training set
vectorizer = TfidfVectorizer()
vectorized_data = vectorizer.fit_transform(spam_data_copy)

# split data into training and testing data sets
X_train, x_test, Y_train, y_test = train_test_split(vectorized_data, spam_data['Spam/Not'], test_size=0.3, random_state=42)

# utilize a binomial logistic regression model
# fit data to model and get accuracy score
spam_model = LogisticRegression(solver='liblinear', penalty='l1', random_state=42)
spam_model.fit(X_train, Y_train)
predictions = spam_model.predict(x_test)
score = accuracy_score(y_test, predictions) * 100
print("Spam Classification Model's Accuracy: {}%".format(score))

# always use transform for testing set
test = vectorizer.transform(['URGENT! Your Mobile No 1234 was awarded a Prize', 'Hello, your bank payment is due soon!'])
test_pred = spam_model.predict(test)
print(test_pred)

# deploy ML model using pipeline
pipeline = Pipeline(steps= [('tfidf', TfidfVectorizer()), 
                            ('model', LogisticRegression(solver='liblinear', penalty='l1', random_state=42))])
pipeline.fit(spam_data_copy, spam_data['Spam/Not'])

pipeline_test = ['URGENT! Your Mobile No 1234 was awarded a Prize', 'Hello, your bank payment is due soon!']
pipeline_pred = pipeline.predict(pipeline_test)
print(pipeline_pred)

# dump model using joblib to utilize elsewhere
dump(pipeline, filename="spam_classification.joblib")