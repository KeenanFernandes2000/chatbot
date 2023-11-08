# Chatbot Server with Langchain and OpenAI

Welcome to the Chatbot Server project, which utilizes the Langchain library and OpenAI to create a chatbot capable of understanding and responding to user input in natural language.

## Project Overview

This project provides a chatbot server with a simple web interface that allows users to interact with the chatbot. The chatbot uses Langchain to interface with OpenAI's GPT model for generating responses.

## Prerequisites

Before setting up and using the project, make sure you have the following prerequisites:

- Python version 3.11
- OpenAI API Key

## Setup

Follow these steps to set up the Chatbot Server:

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:KeenanFernandes2000/chatbot.git

   ```

2. Create a virtual environment:

   ```python
   python -m venv .venv
   ```

3. Activate the environment:

   ### Windows

   ```cmd
   .venv\Scripts\activate
   ```

   ### Unix or MacOS

   ```bash
   source .venv/bin/activate
   ```

4. Install the required packages

   ```python
   pip install -r requirements.txt
   ```

5. Create and setup enviroment variables

   ```
   OPENAI_API_KEY="enter your openai API key"
   ```

6. Run the python file

   ```python
   python server.py
   ```

7. To interact with the chatbot open the below URL in your browser

   ```
   http://127.0.0.1:5000
   ```

8. You should see this webpage

   ![Chatbot webpage](./screenshots/Chatbot%20Page.png)

9. You can assign a chatbot role under "Current AI Role", to maintaine the role do not change the field, leaving the role empty the chatbot will assume a default role

10. You will see a simple chat interface with an input field and a "Send" button.

11. Type your message in the input field and click "Send."

12. The chatbot will process your message and respond with a message in the chat log.

13. The "Send" button will be disabled for 5 seconds after clicking to prevent multiple requests.

## Termination

To stop the server and end the script, you can use the following steps:

1. In the terminal where the server is running, press `Ctrl + C`.

2. To deactive the environment type this in the terminal:

   ```bash
   deactivate
   ```

   Remember to perform these action when you no longer need the chatbot server to be running.

# Happy chatting with your chatbot!
