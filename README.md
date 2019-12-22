# tg-bot

Trying out telegram bot api in conjunction with machine learning

## Useful links

[Your own chat bot (text pre-processing)](https://medium.com/@BhashkarKunal/conversational-ai-chatbot-using-deep-learning-how-bi-directional-lstm-machine-reading-38dc5cf5a5a3)

[Chat bot tutorial](https://pytorch.org/tutorials/beginner/chatbot_tutorial.html)

[How I Used Deep Learning To Train A Chatbot To Talk Like Me (Sorta)](https://adeshpande3.github.io/How-I-Used-Deep-Learning-to-Train-a-Chatbot-to-Talk-Like-Me)

[A toy chatbot powered by deep learning and trained on data from Reddit](https://github.com/pender/chatbot-rnn)

## Useful notes:

### Install docker on ubuntu 18.04

https://www.digitalocean.com/community/tutorials/docker-ubuntu-18-04-1-ru

### Setup tor-proxy server (on AWS EC2 machine):

1. Create `docker-compose.yml` file

```
version: "3.4"

services:
  tor-socks-proxy:
    container_name: tor-socks-proxy
    image: peterdavehello/tor-socks-proxy:latest
    ports:
      - "127.0.0.1:9150:9150"
    restart: unless-stopped
    network_mode: "host"
```

2. `docker-compose up -d`

### Login on AWS EC2

`ssh -i Node.pem ubuntu@3.137.51.198`
