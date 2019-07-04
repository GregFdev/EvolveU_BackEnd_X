from flask import json
import pytest
import hello

@pytest.fixture
def client():
    hello.app.config['TESTING'] = True
    client = hello.app.test_client()
    yield client

def test_root(client):
	rv = client.get('/')
	print('----rv---',rv)
	print('----rv.headers---',rv.headers)
	print('----rv.status---',rv.status)
	print('----rv.status_code---',rv.status_code)
	print('----rv.data---',rv.data)
	assert(b'Larry' in rv.data)
	assert(b'EvolveU Evaluation' in rv.data)

def test_info(client):
	rv = client.get('/info')
	print('----rv.data---',rv.data)
	data = json.loads(rv.data)
	print('--Data--', data)