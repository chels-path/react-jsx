// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

// Import des composants
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

// Variable pour le prénom (changez ici pour tester)
const firstName = "Jean"; // Mettez votre prénom ici, ou laissez vide pour tester "Hello, there!"

function App() {
  return (
    <div className="App">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* Carte produit avec React Bootstrap */}
            <Card className="product-card shadow-lg border-0">
              <Card.Body className="p-0">
                <div className="product-wrapper">
                  {/* Image du produit */}
                  <div className="product-image-section">
                    <Image />
                  </div>
                  
                  {/* Informations du produit */}
                  <div className="product-info-section p-4">
                    <Name />
                    <Price />
                    <Description />
                    
                    {/* Boutons d'action */}
                    <div className="product-actions mt-4">
                      <button className="btn btn-primary btn-lg me-3">
                        Acheter maintenant
                      </button>
                      <button className="btn btn-outline-secondary btn-lg">
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Message personnalisé */}
            <div className="greeting-card mt-5 p-4 text-center">
              {firstName ? (
                <div className="d-flex align-items-center justify-content-center">
                  <span className="greeting-text me-3">
                    Hello, {firstName}! 👋
                  </span>
                  <img 
                    src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" 
                    alt="Welcome" 
                    className="welcome-gif"
                    width="50"
                    height="50"
                  />
                </div>
              ) : (
                <span className="greeting-text">
                  Hello, there! 👋
                </span>
              )}
            </div>

            {/* Message conditionnel pour l'image */}
            {!firstName && (
              <div className="alert alert-info mt-3 text-center">
                Astuce: Ajoutez votre prénom dans la variable firstName pour voir une image!
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
