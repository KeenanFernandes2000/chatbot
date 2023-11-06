from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from langchain.schema import HumanMessage, SystemMessage
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder
from langchain.memory import ConversationBufferMemory

load_dotenv()

app = Flask(__name__, static_url_path='', static_folder='static')
chatModel = ChatOpenAI(model="gpt-3.5-turbo")
system_prompt_template = SystemMessagePromptTemplate.from_template("You are a {bot}, keep your response between 20 - 30 words")
human_prompt_template = HumanMessagePromptTemplate.from_template("{msg}")
chat_prompt_template = ChatPromptTemplate.from_messages([system_prompt_template, human_prompt_template])
memory = ConversationBufferMemory()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/chat', methods=['POST'])
def chat():

    chatbot_role = request.json['role']
    user_message = request.json['message']

    if (len(chatbot_role) < 1):
            chatbot_role = "chatbot"

    memory.chat_memory.add_user_message(user_message)

    final_prompt = chat_prompt_template.format_messages(bot=chatbot_role,msg=user_message)

    predMsg = chatModel.predict_messages(final_prompt)
    response = predMsg.content

    memory.chat_memory.add_ai_message(response)

    # print(memory.load_memory_variables({}))

    return jsonify({'bot_response': response})


if __name__ == '__main__':
    app.run(debug=True)