import json
from watson_developer_cloud import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
    version='2018-09-16',
    api_key='rOzTu6mBpvPgKP96UCVUZ-1m_4CrklQXUqRK1_HkbxXR'
)

with open('./fruitbowl.jpg', 'rb') as images_file:
	classes = visual_recognition.classify(
		images_file,
		threshold='0.6',
		classifier_ids='default')
	print(json.dumps(classes, indent=2))