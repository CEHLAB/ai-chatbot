import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Robot, Person, Send } from "react-bootstrap-icons";
import { getChatResponse } from "./services/chatService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hello, how can I assist you today?",
      isBot: true,
      id: Date.now(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
  
    const newMessage = {
      text: inputMessage,
      isBot: false,
      id: Date.now(),
    };
  
    setMessages((prev) => [...prev, newMessage]);
  
    try {
      const botResponseText = await getChatResponse(inputMessage);
      
      setMessages((prev) => [
        ...prev,
        {
          text: botResponseText,
          isBot: true,
          id: Date.now() + 1,
        },
      ]);
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API :", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I couldn't process your message at this time.",
          isBot: true,
          id: Date.now() + 1,
        },
      ]);
    }
  
    setInputMessage("");
  };
  

  return (
    <Container
      fluid
      style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
      className="p-0 d-flex flex-column"
    >
      <Row className="bg-dark text-white p-3">
        <Col>
          <h3 className="mb-0">
            <Robot className="me-2" />
            Chakir&#39;s Chatbot
          </h3>
        </Col>
      </Row>

      {/* Chat Messages */}
      <Row className="flex-grow-1 m-0 overflow-auto">
        <Col className="p-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`d-flex mb-3 ${
                message.isBot ? "justify-content-start" : "justify-content-end"
              }`}
            >
              <div
                className={`message ${
                  message.isBot ? "bot-message" : "user-message"
                }`}
              >
                <div className="message-icon">
                  {message.isBot ? <Robot /> : <Person />}
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </Col>
      </Row>

      <Row className="bg-light p-3">
        <Col>
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message here..."
              className="me-2"
            />
            <Button variant="primary" type="submit">
              <Send />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
