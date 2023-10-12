# Online Shop Backend with FastAPI

## Project Description
This project aims to develop the backend for an online shop using FastAPI, a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

The online shop backend will provide the necessary API endpoints to handle various e-commerce functionalities, such as user authentication, product listing and search, cart management, order processing, and more. FastAPI's asynchronous capabilities will be leveraged to ensure efficient and scalable processing of incoming requests.

## Features
- User authentication and authorization
- Product listing and search
- Cart management (add, remove, update items)
- Order processing and tracking
- User profile management
- Payment gateway integration
- Error handling and validation
- API documentation using OpenAPI (Swagger UI) or ReDoc

## Technologies Used
- FastAPI: A modern, fast web framework for building APIs with Python
- Python: The programming language used for backend development
- SQLAlchemy: A SQL toolkit and Object-Relational Mapping (ORM) library for Python
- PostgreSQL: A powerful, open-source relational database management system
- JWT (JSON Web Tokens): A standard for securely transmitting information between parties as a JSON object
- Pydantic: A data validation and parsing library for Python

## Installation and Setup
1. Clone the repository: `git clone https://github.com/your-username/online-shop-backend`
2. Navigate to the project directory: `cd online-shop-backend`
3. Create and activate a virtual environment:
   - For Windows:
     ```
     python -m venv venv
     venv\Scripts\activate
     ```
   - For Linux/Mac:
     ```
     python3 -m venv venv
     source venv/bin/activate
     ```
4. Install the required dependencies: `pip install -r requirements.txt`
5. Set up the PostgreSQL database and configure the connection in the `config.py` file.
6. Run the database migrations: `alembic upgrade head`
7. Start the development server: `uvicorn main:app --reload`

## API Documentation
The API documentation can be accessed by visiting the `/docs` endpoint (e.g., `http://localhost:8000/docs`) in your browser. The interactive documentation provides detailed information about each API endpoint, request/response schemas, and allows for easy testing and exploration of the API.

## Contributing
If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push the branch to your forked repository.
4. Submit a pull request with a detailed description of your changes.




Enjoy building your online shop backend with FastAPI!
