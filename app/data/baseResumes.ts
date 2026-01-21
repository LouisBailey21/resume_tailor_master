export type BaseResumeProfile = {
  name: string; // profile display name used as the select value
  resumeText: string; // full plain-text resume template
};

// Seed with a default profile. You can add more profiles to this array.
export const baseResumes: BaseResumeProfile[] = [
  {
    name: 'Patrick Clark',
    resumeText: `
Senior Software Engineer

Patrick Clark
patrick.clark0205@outlook.com
Senior Software Engineer
+13253130928
Tampa, FL 33602

Summary:

Senior Software Engineer and AI/ML Specialist with 10+ years of experience designing and deploying AI-powered applications in production environments. 
Strong background in LLMs, generative AI, computer vision, recommendation systems, and real-time ML pipelines, 
with hands-on experience using frameworks like PyTorch, TensorFlow, LangChain, and vector databases. Proven at integrating AI models into scalable cloud-native systems on Azure and AWS, 
with solid MLOps practices, security, and compliance. Experienced in turning complex ML capabilities into reliable, user-facing products that deliver measurable business impact.

Professional Experience:

Senior Software Engineer at Kiggla: 01/2025 - Current
•	Engineered full-stack applications with React.js + Node.js, integrated with Azure Functions and Cosmos DB, enabling scalable multi-tenant solutions and reducing response time by 30%.
•	Built image recognition pipelines using Cloudsight API + TensorFlow, automating media tagging and content validation, improving processing efficiency by 35%.
•	Developed RESTful and GraphQL APIs integrated with Azure App Services, ensuring secure and low-latency data access for web and mobile clients.
•	Automated CI/CD pipelines using Azure DevOps + GitHub Actions, reducing deployment errors and accelerating release cycles by 25%.
•	Designed dynamic dashboards and responsive UIs with React.js + Tailwind CSS, increasing end-user engagement and usability scores by 20%.
•	Implemented RBAC security and HIPAA-compliant data handling across Azure-hosted services, ensuring regulatory compliance for sensitive information.
•	Evaluated and integrated third-party APIs (Granicus-style) for workflow automation, improving task efficiency for internal teams by 15%.
•	Orchestrated microservices with Azure Kubernetes Service (AKS) and Event Hubs, optimizing real-time communication and event-driven processing across the platform.

Software Engineer III at SimpleView: 02/2022 – 12/2024
•	Developed full-stack applications with React.js + Node.js and deployed on Azure App Services, enhancing platform scalability and reducing downtime by 20%.
•	Built AI-powered recommendation engines using PyTorch + Azure Event Hubs, enabling real-time pet sitter matching and increasing booking accuracy by 19%.
•	Integrated Cloudsight API for real-time image recognition, automating activity and anomaly detection in mobile apps, improving monitoring efficiency by 30%.
•	Implemented RESTful APIs for secure communication between web/mobile clients and Azure-hosted backend services, reducing API latency by 25%.
•	Deployed CI/CD pipelines with Azure DevOps + Kubernetes, enabling automated testing and seamless production deployments.
•	Created dynamic dashboards and responsive UI components, improving user interaction and app engagement by 22%.
•	Embedded JWT-based authentication and RBAC in APIs, ensuring secure access control for multi-tenant environments.
•	Optimized Azure-hosted microservices for event-driven processing and real-time notifications, reducing system lag and improving end-user responsiveness.

Software Engineer II at Amazon : 06/2018 – 02/2022
•	Built fraud detection systems combining deep learning classifiers + ensemble ML, reducing fraudulent transactions by 29% across retail POS and e-commerce platforms.
•	Designed LLM-driven product catalog parsing (OCR + GPT models) for automated SKU classification, pricing updates, and inventory tagging.
•	Partnered with merchandising and finance teams to deploy demand forecasting and inventory optimization models in AWS SageMaker, improving stock management for millions of products.
•	Built real-time sales and promotion alert systems with Kafka + TensorFlow Serving for proactive inventory restocking and dynamic pricing strategies.
•	Migrated retail ML workloads to cloud-native Kubernetes clusters, improving scalability, high availability, and disaster recovery for peak shopping seasons.
•	Optimized databases (Postgres, MongoDB) with AI-assisted query planners to accelerate transaction, inventory, and customer behavior lookups.
•	Built personalized product recommendation systems using TensorFlow + embeddings, enhancing cross-selling and upselling across web and mobile platforms.
•	Implemented AI-driven anomaly detection for point-of-sale and e-commerce transactions to flag pricing errors, stock discrepancies, and fraudulent activity before impacting operations.

Software Developer at The Home Spot : 02/2017 – 03/2018
•	Designed demand forecasting models with Prophet + TensorFlow, integrated into a Python (FastAPI) microservice for real-time retail planning.
•	Built transaction fraud detection APIs using Django REST Framework + ensemble ML classifiers, reducing fraudulent activity by 17%.
•	Developed Node.js (Express) services to handle order workflows, integrated with AI-enhanced recommendation APIs for personalized product suggestions.
•	Engineered real-time inventory sync APIs in FastAPI, boosting system responsiveness during seasonal peaks.
•	Deployed microservices with AI-based predictive caching across Django + Node.js backends, improving page load speed by 22%.
•	Leveraged NLP models (Python + spaCy) to analyze customer reviews, integrated with Django dashboards to guide restocking.
•	Migrated legacy services to a Python/Node.js hybrid microservices stack on AWS (EC2, S3, RDS), improving scalability and fault tolerance.
•	Automated CI/CD pipelines for Python/Node projects with Jenkins and GitLab CI, embedding unit tests and ML model validation.

Software Developer Intern at IBM : 11/2015 – 01/2017
•	Built adaptive HR recommendation engines with Python (Django + FastAPI) APIs serving Scikit-learn + TensorFlow models to suggest personalized training, career paths, and learning resources for employees.
•	Developed a Node.js (Express.js) backend for real-time employee interactions, powering WebSocket-based live feedback, onboarding sessions, and performance reviews.
•	Created LLM-powered HR chatbots for employee Q&A, policy guidance, and benefits queries, exposed via FastAPI microservices.
•	Integrated Django REST APIs with React.js to deliver personalized employee dashboards and AI-driven performance and engagement tracking.
•	Engineered real-time analytics pipelines using FastAPI + WebSockets, monitoring employee engagement during training, surveys, and collaboration activities.
•	Optimized training and career recommendations with vector similarity models deployed as FastAPI endpoints, enabling personalized learning paths for employees.
•	Implemented secure authentication flows (OAuth 2.0, JWT) across Node.js and Django backends for HR managers and employees.
•	Integrated third-party AI services (Zoom transcription, Google NLP) into FastAPI endpoints for content enrichment, meeting summaries, and HR analytics.


Skills:

LLMs (GPT, Claude, LLaMA)
LangChain
Hugging Face Transformers
RAG
Vector Databases (Pinecone, Weaviate, FAISS)
PyTorch
TensorFlow
Scikit-learn
OpenCV
YOLO
NLP
CV
Recommendation Engines
MLflow
Kubeflow
Weights & Biases
DVC
Databricks
Spark
Kafka
Airflow
Docker
Kubernetes
Terraform
AWS SageMaker
Bedrock
Azure ML
GCP Vertex AI
Anthropic API
OpenAI API
Python (FastAPI, Flask, Django)
Node.js (Express, Nest)
C#
ASP.NET Core
React.js
React Native
TypeScript
PostgreSQL
MongoDB
Redis
Snowflake
BigQuery
Vector DBs
HIPAA
PCI DSS
GDPR
CCPA
Differential Privacy
Federated Learning Security
ELK Stack
Prometheus
Grafana
PyTest
Postman
Cypress

Education:
•Bachelor of Science, Computer Science (9/2010 – 05/2014)
Indiana University Bloomington | US
    `
  },
    {
    name: 'Lindsay Jackson',
    resumeText: `
Senior Software Engineer

Lindsay Jackson
jacksonlind1323@outlook.com
Senior Software Engineer
+14233011901
Houston, TX 77002

Summary:

AI-focused Senior Engineer with 10+ years of experience designing and deploying production-grade AI/ML systems across healthcare, fintech, and enterprise SaaS. 
Specialized in agentic AI workflows, LLM-driven reasoning engines, and graph-based data modeling, with deep expertise in Python, PyTorch, TensorFlow, Hugging Face, and cloud-native AI deployments 
(AWS, Snowflake, Kubernetes). Proven record of modernizing legacy systems into AI-first platforms, building scalable multi-agent ecosystems, and ensuring compliance in high-stakes healthcare environments.

Professional Experience:

Senior Software Engineer at Hexagon: 01/2025 - Current
•	Architected a multi-agent orchestration platform in Python using LangChain and LlamaIndex, enabling reasoning-based workflows for triage, care planning, and EHR automation across hospital networks.
•	Built Retrieval-Augmented Generation (RAG) pipelines with Hugging Face Transformers, Pinecone vector DB, and AWS Bedrock, generating structured summaries from unstructured medical transcripts.
•	Developed knowledge graph integrations with Neo4j and AWS Neptune to unify patient history, claims data, and provider workflows, enabling downstream graph-based reasoning and predictive analytics.
•	Engineered real-time voice/NLP pipelines using PyTorch and Azure Speech Services, achieving sub-second latency for clinical dictation, diagnosis support, and sentiment-aware triage scoring.
•	Automated end-to-end MLOps workflows in AWS SageMaker for model training, evaluation, and deployment, with versioned model registries and drift detection.
•	Designed security guardrails for agentic systems (prompt injection detection, RBAC-aware inference policies, HIPAA-compliant audit logging).
•	Scaled multi-region AWS infrastructure with Kubernetes and Terraform, supporting tens of millions of inference requests/month while maintaining >99.99% uptime


Senior Software Engineer at Epoq Legal US: 09/2023 – 01/2025
•	Designed an LLM-powered AI agent ecosystem for contextual pet care, using LangChain, OpenAI embeddings, and vectorized persistent memory across DynamoDB and Pinecone.
•	Built semantic knowledge retrieval pipelines for long-term memory and context preservation in multi-turn conversations with users and sitters.
•	Implemented real-time incident detection workflows (pet tracking, emergency alerts) with AWS EventBridge, SignalR, and speech-to-text services for hands-free caregiver updates.
•	Architected graph-based sitter matching algorithms using Neo4j and PyTorch GNNs, modeling relationships between pets, caregivers, and service history to predict sitter fit and trustworthiness.
•	Developed containerized AI microservices in Python and deployed via Kubernetes + AWS SageMaker, supporting A/B testing of new AI features at production scale.
•	Introduced a multi-tenant MLOps pipeline in GitLab CI/CD with rollout gating, enabling safe experiments in production AI services.
•	Mentored engineers on integrating agentic workflows beyond chatbots, focusing on multi-step reasoning and collaboration between agents.


Software Engineer at Oracle : 06/2020 – 09/2023
•	Built an image analysis engine in Python to detect anomalies and classify financial documents, applying probabilistic modeling to highlight errors or inconsistencies in scanned invoices and receipts.
•	Integrated Graph Databases (Neo4j) for visual relationship modeling between scanned documents, accounts, and transactions, uncovering patterns and dependencies.
•	Developed Generative AI image enhancement and inpainting agents using Hugging Face + TensorFlow to automatically clean, enhance, and reconstruct scanned documents and forms for audit-ready outputs.
•	Implemented AI-powered image assistants with AWS Rekognition + LangChain to guide users through document uploads, verification, and validation workflows, integrated directly into financial platforms.
•	Led ETL modernization efforts using dbt + Snowflake to preprocess, normalize, and store large-scale image datasets for ML model training and evaluation.
•	Built reinforcement learning agents for automated document categorization and prioritization, dynamically adjusting based on document quality, type, and processing urgency.
•	Deployed image processing AI workflows into AWS SageMaker pipelines, scaling predictive and classification models to millions of scanned documents across enterprise platforms.

Software Developer at The Home Spot : 01/2017 – 06/2020
•	Built a real-time inventory forecasting agent using TensorFlow, Kafka Streams, and Snowflake, predicting stockouts and automatically triggering supplier reorders.
•	Designed a knowledge graph of products, suppliers, and store locations in AWS Neptune, applying GNNs to optimize distribution during seasonal surges.
•	Developed a graph-powered recommendation engine for product bundling, trained on customer purchase histories and store-level sales graphs.
•	Deployed predictive AI workflows on AWS SageMaker + Kubernetes, reducing per-store out-of-stock incidents by 28%.
•	Created containerized ETL pipelines in Airflow to unify transactional, IoT, and vendor data into Snowflake for downstream AI workloads.
•	Integrated symbolic reasoning rules into replenishment workflows, combining deterministic business constraints with ML predictions for explainable decision-making.
•	Automated CI/CD pipelines for AI workloads with Jenkins + GitLab CI, enabling daily retraining and deployment of high-volume predictive models.


Web Developer at Amazon : 03/2015 – 01/2017
•	Built a collaborative learning agent in Python and Node.js using reinforcement learning to adapt quizzes dynamically to student performance.
•	Implemented a graph-based content recommendation engine with Neo4j, modeling relationships between concepts, student progress, and instructor materials.
•	Developed a real-time classroom orchestration system using WebSockets + LangChain to manage student/teacher multi-agent interactions.
•	Integrated speech-based reasoning agents with Web Speech API + Hugging Face for accessibility and adaptive test assistance.
•	Deployed scalable AI-driven dashboards (React.js + D3.js) visualizing sentiment, progress, and content mastery, powered by predictive ML services in AWS.
•	Designed automated knowledge tracing pipelines in TensorFlow to predict dropout risk and recommend intervention paths for instructors.
•	Collaborated with researchers on symbolic AI integrations into student-facing tools, enhancing explainability in adaptive learning recommendations.



Skills:

Python (FastAPI, Flask, Django)
C#
ASP.NET Core
Node.js
TypeScript
JavaScript
React.js
React Native
Angular
PyTorch
TensorFlow
Hugging Face
LangChain
LlamaIndex
RAG pipelines
Reinforcement Learning (RL, RLHF)
Graph Neural Networks (GNNs)
Symbolic AI
Multimodal AI (Vision, Text, Speech)
Speech Recognition (ASR)
TTS
Prompt Engineering
Model Fine-Tuning & Distillation
Snowflake
Databricks
BigQuery
AWS (SageMaker, Bedrock, EC2, S3, RDS)
GCP Vertex AI
Neo4j
AWS Neptune
Pinecone
Chroma
Weaviate
Airflow
dbt
Kafka
Spark
Docker
Kubernetes
Terraform
GitLab CI/CD
GitHub Actions
Jenkins
Azure DevOps
CloudWatch
Prometheus
Grafana
MLflow
Weights & Biases
REST
GraphQL
gRPC
WebSockets
OAuth 2.0
JWT
Event-Driven Microservices
Kafka Streams
RabbitMQ
PostgreSQL
SQL Server
MySQL
MongoDB
DynamoDB
Redis
Elasticsearch
HIPAA
GDPR
PCI DSS
RBAC
MFA
Prompt Injection Mitigation
Bias & Fairness Auditing
Model Explainability (SHAP, LIME)
AI Agents & Multi-Agent Systems (AutoGPT, CrewAI, LangGraph)
Low-Latency Inference (ONNX, TensorRT, Quantization)
Federated Learning
Synthetic Data Generation
Responsible & Ethical AI

Education:
•Bachelor of Science, Mechanical Engineering (2010 – 2014)
Virginia State University | US

License:
•Professional Scrum Master I (PSM I) (https://www.scrum.org/user/659752)
Scrum.org
Issued Apr 2020
Credential ID 659752

•Google Data Analytics Specialization (https://www.coursera.org/account/accomplishments/specialization/certificate/ATZV3LSS7K5R)
Coursera
Issued Mar 2023 
Credential ID ATZV3LSS7K5R

    `
  },
  { name: 'Louis Bailey (FS)',
    resumeText: `
    Senior Software Engineer

Louis Bailey
Senior Software Engineer
luoisbailey21412@gmail.com
+1 (430) 964 0645
San Antonio, TX, USA

Summary:

Senior Software Engineer with over 10 years of experience delivering scalable, high-performance SaaS platforms and web/mobile applications 
across diverse domains including finance, retail, and education. Proven expertise in cloud-native architectures, microservices, and full-stack development 
using technologies like C#, ASP.NET Core, React.js, Node.js, Python, Docker, and Kubernetes. Skilled in driving large-scale cloud migrations, real-time systems, and secure API 
integrations that serve multi-tenant environments and global user bases. Known for leading cross-functional teams and delivering mission-critical solutions 
with high availability and performance. Passionate about DevOps, automation (CI/CD), and building robust platforms that improve operational efficiency, developer productivity, and customer experience.


Professional Experience:

Senior Software Engineer at Softcom: 06/2022 - Current
•	Led the platform-wide modernization effort by decomposing a tightly coupled legacy application into independent microservices using ASP.NET Core, containerized with Docker, and orchestrated via Kubernetes. Migrating workloads to AWS (ECS, RDS, S3, CloudWatch) reduced infrastructure costs by 25%, improved deployment reliability, and increased system uptime to 99.97%, enabling on-demand scalability and region-specific failover.
•	Designed and implemented RESTful API gateways and internal services using .NET 6, TypeScript, and Node.js, establishing standardized service contracts for internal and external integrations. These APIs supported customer usage metering, billing, authentication, and workflow automations, and were hardened for multitenancy using strict isolation and tenant-aware logic.
•	Developed a centralized customer and user identity management service using Entity Framework Core, PostgreSQL, and Redis for session caching. This system unified authentication across web, mobile, and partner apps, and allowed dynamic permission and role mapping for thousands of enterprise tenants with complex access control models.
•	Built real-time communication and collaboration pipelines using SignalR, Azure Service Bus, and Redis Pub/Sub, enabling rich interactive features like presence detection, live updates, and cross-user notifications within a collaborative workspace UI. These capabilities were instrumental in expanding the platform's value to remote teams and distributed users.
•	Spearheaded the development of an integrated video calling and virtual meeting module using WebRTC, tightly coupled with the calendar, chat, and scheduling systems. Backed by ASP.NET Core APIs and a React Native frontend, the module improved product engagement and reduced churn for enterprise customers offering remote support or virtual consultation services.
•	Collaborated with data science teams to integrate machine learning models for customer behavior prediction and usage insights. We exposed TensorFlow models via RESTful endpoints using ASP.NET Core, and used them to power recommendation engines, usage alerts, and intelligent onboarding workflows — leading to a measurable drop in churn and a 21% increase in feature adoption.
•	Automated billing, usage tracking, and claims processing workflows using Azure Logic Apps, SQL Server, and Entity Framework, connecting seamlessly to third-party CRMs, payment gateways, and finance systems. These automations reduced manual data entry by over 40% and ensured accuracy in invoicing and revenue recognition.
•	Implemented enterprise-grade security architecture using OAuth 2.0, JWT tokens, and RBAC policies, supporting granular permissions, audit trails, and identity federation (via SAML/OIDC). Worked closely with InfoSec to conduct penetration testing, threat modeling, and ensure SOC 2 Type II compliance.
•	Established CI/CD pipelines using Azure DevOps, GitLab, and GitHub Actions, integrating build, test, and deployment stages with Terraform for infrastructure provisioning. Leveraged ELK Stack, Prometheus, and Grafana for real-time monitoring, telemetry, and alerting. These pipelines enabled daily releases with rollback support and significantly reduced production incident recovery times.

Software Engineer at Rover: 03/2020 – 09/2022
•	Spearheaded the migration of Rover’s legacy monolithic architecture to a containerized microservices ecosystem using ASP.NET Core, Docker, and Kubernetes, enhancing scalability and fault tolerance while improving development agility.
•	Designed and developed APIs to support core features such as pet service bookings, sitter onboarding, payment transactions, and secure user authentication. Integrated Stripe for payment processing and enforced secure OAuth 2.0 and JWT protocols to ensure safe and seamless financial transactions across web and mobile applications.
•	Led the development of cross-platform mobile applications using React Native and ASP.NET Core, allowing users to manage bookings, view sitter profiles, and communicate on-the-go. The intuitive mobile experience contributed to a 20% increase in app engagement and user satisfaction across both iOS and Android platforms.
•	Built a real-time pet tracking and notification system using SignalR, Redis, and Google Maps APIs, which allowed pet owners to receive instant updates and live tracking during walks or boarding sessions. This transparency significantly increased user trust and engagement, leading to a measurable boost in customer retention.
•	Collaborated with data scientists to integrate machine learning models that delivered personalized pet sitter recommendations based on historical data, behavior, and preferences. These ML-driven enhancements resulted in improved booking rates and a more tailored user experience, helping Rover match customers with ideal service providers.
•	Introduced automated CI/CD pipelines using Jenkins and GitLab, reducing deployment times by 34% and increasing release stability. This automation ensured quick iteration, consistent quality, and reduced hotfix incidents, while supporting parallel development across multiple microservices.
•	Played a central role in strengthening platform-wide security by implementing role-based access control (RBAC), encrypting sensitive user data, and integrating fine-grained permissions. This ensured compliance with industry standards and greatly reduced the risk of data breaches and unauthorized access, especially during platform scaling and geographic expansion.
•	Developed and integrated internationalization (i18n) support, enabling the platform to support multiple languages and currencies. This effort allowed Rover to enter new global markets and increased international user adoption while maintaining consistent UX across all regions.

Software Developer at Intuit : 01/2018 – 02/2020
•	Built scalable microservices using Node.js, Express, and TypeScript to handle millions of retail transactions, inventory updates, and order workflows, integrating with Stripe, PayPal, and logistics providers for seamless payment and fulfillment.
•	Modernized the e-commerce frontend with React.js, Redux, and TypeScript, improving load times, responsiveness, and accessibility across devices while enhancing user experience for millions of shoppers.
•	Led a large-scale cloud migration to AWS using Docker, Kubernetes, and Terraform, enabling autoscaling, reducing downtime incidents by 30%, and cutting infrastructure costs by transitioning from fixed provisioning to cloud-native elasticity.
•	Optimized MongoDB and PostgreSQL databases by refactoring schemas, implementing sharding strategies, and applying indexing techniques, improving query speeds by 40% for catalogs, customer accounts, and transaction histories.
•	Implemented secure authentication using JWT, OAuth 2.0, and MFA for customers and internal staff, achieving full PCI DSS, GDPR, and CCPA compliance while supporting detailed audit logging.
•	Developed real-time event-driven systems with WebSockets and Redis for live inventory tracking, order notifications, and promotional updates, boosting customer engagement and retention.
•	Automated CI/CD pipelines using Jenkins, GitLab CI, and Docker, reducing average deployment times by 40%, improving rollback reliability, and enabling blue/green deployment strategies for high-traffic retail platforms.
•	Partnered with data science teams to integrate TensorFlow-based ML recommendation engines, delivering personalized product suggestions, upsell and cross-sell opportunities, and enhancing overall shopping experience.

Associate Software Developer at The Home Spot : 02/2017 – 03/2018
•	Developed a real-time inventory management system using ASP.NET Core, Java(Spring) and AngularJS, enabling stock tracking across hundreds of stores. This increased inventory visibility, reduced shortages, and provided employees with timely data to fulfill customer demand more effectively.
•	Spearheaded the migration from a monolithic system to a containerized microservices architecture using Java-based services, Docker and Kubernetes, allowing for improved scalability, faster deployment cycles, and seamless handling of seasonal traffic surges during major retail events.
•	Developed RESTful APIs for mission-critical services including order processing, inventory sync, and customer profile management using Java(Spring Boot) and .NET Core. These integrations enabled faster data flow between frontend and backend systems, resulting in a smoother checkout experience for online shoppers.
•	Implemented secure authentication mechanisms using OAuth 2.0, JWT, and multi-factor authentication (MFA) for both customers and internal staff. These upgrades significantly improved the platform’s security posture, especially around sensitive customer and payment data.
•	Designed and launched a mobile-first frontend using React Native, allowing store associates to manage inventory, access order details, and serve customers via handheld devices. This innovation boosted in-store operational efficiency and streamlined task execution on the sales floor.
•	Migrated core applications to AWS cloud infrastructure using EC2, S3, and RDS, leading to a 21% reduction in infrastructure costs and substantial gains in platform reliability and availability during promotional periods.
•	Automated the CI/CD pipeline using Jenkins and GitLab CI, minimizing manual intervention and reducing release downtime by 32%. This allowed the engineering team to deploy new features and fixes more frequently and reliably.

Web Developer Intern at IBM : 11/2015 – 02/2017
•	Developed and maintained the core HR management platform using React.js for the frontend and Node.js with Express.js for the backend, providing HR managers and employees with a smooth and interactive interface.
•	Built and integrated RESTful APIs to handle employee authentication, payroll management, leave requests, and performance tracking, ensuring a seamless experience for both HR teams and employees.
•	Optimized database schemas in MongoDB and PostgreSQL to efficiently store employee records, training modules, and engagement analytics, enabling fast retrieval and secure data handling for thousands of users.
•	Worked on real-time communication features using WebSockets, allowing managers and employees to engage in live chats, performance reviews, and onboarding sessions.
•	Collaborated with the product and design teams to continually enhance the platform’s UI/UX, introducing personalized dashboards, notifications, and reporting tools for HR administrators.
•	Integrated third-party services like Zoom and Google Workspace for virtual interviews, training sessions, and document management, enabling HR operations without leaving the platform.


Skills:

Node.js (Express, NestJS)
ASP.NET Core (C#)
Python (Flask)
Java (Spring Boot)
C++
React.js 
Angular
TypeScript
Redux
Responsive UI design
React Native
AngularJS
WebSockets
reusable component libraries
Storybook
RESTful APIs
GraphQL (Apollo)
OAuth 2.0
JWT
SignalR
Redis
microservices
concurrency control
AWS (EC2, S3, CloudFront, Lambda)
Azure (App Services, Event Hubs)
Docker
Kubernetes
Helm
Jenkins
GitLab CI/CD
Hadoop
Spark
Azure Synapse
real-time analytics
TensorFlow
AI integration (chatbots, booking optimization)
HIPAA
HL7
FHIR
PCI DSS
GDPR
Azure AD
MSAL
RBAC
data encryption
Jest
Enzyme
JUnit
Postman
Swagger
New Relic
Datadog
Azure Monitor
Prometheus
ELK Stack
Git
Jira
VS Code
PM2
MongoDB
PostgreSQL
MySQL
SQL Server

Education:
•Bachelor of Science, Computer Science (10/2011 – 08/2015)
The University of Tokyo | Japan
    `
  },
  { name: 'Timmy Lorenz',
    resumeText: `
Senior Software Engineer

Timmy Lorenz
Senior Software Engineer
timmy.le0510@outlook.com
+1 430 964 0645
Tampa, Florida, USA

Summary: 

Senior QA Engineer with 10+ years of experience ensuring the reliability, performance, and compliance of complex enterprise systems 
across healthcare, finance, SaaS, manufacturing, IoT, and eCommerce domains. Expert in test automation, continuous testing, and data-driven quality analytics 
within Agile and DevOps environments. Skilled at designing robust QA frameworks, defining quality strategy, and integrating automated tests 
in CI/CD pipelines across AWS, Azure, and Kubernetes environments. Proven record of improving product stability, reducing release times, and enhancing user experience 
through proactive defect prevention and rigorous testing methodologies.

Professional Experience:

Senior Software Engineer at Hexagon: 05/2025 - Current
•	Integrate AI/ML services into production workflows, deploying FastAPI-based microservices to power personalization and real-time analytics, reducing service latency by 33%. 
•	Design and maintain queue-based architectures using Celery and Redis, orchestrating asynchronous processing pipelines and reducing processing time by 30%. 
•	Lead the architecture of a modular CMS platform using Django and PostgreSQL, scaling to over 500K monthly users and improving publishing cycles by 62%. 
•	Optimize backend infrastructure with Redis caching and Cloudflare CDN, achieving a 46% improvement in page load speeds and global API responsiveness. 
•	Implement role-based access control and multi-factor authentication in an EHR platform using Flask and MongoDB, securing 1M+ patient records. 
•	Automate CI/CD pipelines with Docker, GitHub Actions, and Kubernetes, enabling zero-downtime updates and enhancing deployment efficiency. 
•	Oversee ML pipeline lifecycle, from data wrangling to inference serving via FastAPI on AWS SageMaker, improving model deployment speed by 25%. 

Software Engineer IV at Apple : 06/2024 – 05/2025
•	Architect scalable e-Learning and Content Management Systems using FastAPI and PostgreSQL, reducing manual coordination by 73%.
•	Develop intelligent course recommendation features with scikit-learn, boosting learner engagement by 38%.
•	Build ADA-compliant frontends using React.js and Tailwind CSS, enhancing accessibility scores and reducing bounce rates by 33%. 
•	Engineer GraphQL and RESTful APIs for real-time e-commerce, handling over $10M in transactions annually. 
•	Design security-focused middleware layers in FastAPI, improving API error rates and traceability. 
•	Refactor legacy Node.js systems into Python microservices, enhancing maintainability and reducing onboarding time by 45%. 

Software Engineer IV at Microsoft : 10/2021 – 06/2023
•	Rebuild video analytics portals into Python and Laravel-based microservices, enabling scalable data ingestion and analysis. 
•	Architect Learning Management Systems using Laravel and FastAPI, supporting adaptive assessments and real-time learning paths. 
•	Develop scalable RESTful APIs using Laravel and FastAPI, supporting multi-tenant environments and SSO integration. 
•	Lead development of real-time dashboards with Vue.js, integrating WebSocket engagement tracking and Python logging services. 
•	Collaborate with data science teams to deploy NLP and recommendation models, enabling tailored content delivery. 
•	Refactor legacy ASP.NET Core services, aligning them with Laravel + Python stacks for unified system behavior.
•	Build micro-frontends with React and TypeScript, enhancing UI component reusability and accessibility compliance. 
•	Engineer CI/CD pipelines with GitHub Actions and Azure DevOps, enabling zero-downtime releases on Kubernetes. 
•	Integrate external platforms through OAuth2-secured APIs, ensuring seamless sync of institutional records.

Software Engineer III at Boeing Defense : 11/2017 - 11/2021
•Developed and maintained automated API, integration, and end-to-end test frameworks for mission-critical defense systems using Python (PyTest) and .NET, integrated into Jenkins CI/CD pipelines to support secure and reliable software delivery.
•Designed automated test harnesses for cross-platform user interfaces (web and mobile clients) validating command-and-control workflows, system notifications, and operational scenarios across multiple environments.
•Implemented real-time system validation for distributed and event-driven architectures using SignalR/WebSockets and Redis, ensuring stability, data integrity, and low-latency communication in continuous integration environments.
•Collaborated closely with systems engineers and data science teams to validate machine learning model integrations, supporting decision-support and recommendation capabilities; automated A/B and statistical validation testing to verify model accuracy and operational impact.
•Built and optimized Jenkins and GitLab CI pipelines for automated regression, smoke, and integration testing, reducing deployment verification cycles by 34% while meeting aerospace quality and compliance standards.
•Planned and executed performance, stress, and load testing using JMeter and Locust, validating system scalability and throughput under peak operational and mission-load conditions.
•Established test governance and compliance controls, including RBAC, encrypted test data handling, audit-ready reporting, and internationalization (i18n) testing, supporting secure, globally deployed defense platforms.

Software Developer at ServiceNow : 12/2015 – 09/2017
•	Tested the learning management and content delivery platform, ensuring scalability and reliability for over 1M active users.
•	Built automated smoke and regression tests using Mocha, Jest, and Selenium integrated into GitLab pipelines.
•	Validated real-time data synchronization features built on WebSockets for instant course progress updates and live sessions.
•	Conducted cross-platform UI and accessibility testing for web and mobile experiences to meet global accessibility standards.
•	Performed API validation and security testing for third-party integrations with Zoom, Google Drive, and AWS CloudFront.
•	Implemented defect classification metrics and reporting dashboards in JIRA and Confluence to improve team visibility.


Skills:

Node.js (Express, NestJS)
ASP.NET Core (C#)
Python (Flask)
Java (Spring Boot)
PHP (Laravel)
SQL
C++
React.js 
Angular
TypeScript
Redux
Responsive UI design
React Native
AngularJS
WebSockets
Unit Testing
Selenium
Cypress
Postman
PyTest
Robot Framework
TestNG
JUnit
Jest
Mocha
Playwright
Appium
Jenkins
GitLab CI/CD
Azure DevOps
Jira
Zephyr
QTest
SonarQube
AWS
Azure
GCP
ELK Stack
Terraform
Kubernetes
Docker
ISO 9001
HIPAA
PCI DSS
GDPR
FDA 21 CFR Part 11
Power BI
Excel
SQL Queries for Test Data


Education:
•Bachelor of Science, Computer Science (2007 – 2011)
University of Florida | US
    `

  },
  { name: 'Zackery Jackson (QA)',
    resumeText: `Senior Software Engineer

Zackery Jackson
Senior QA Automation Lead
jacksonzackery9320@outlook.com
+1 325 313 0928
Miami, FL, USA

Summary: 

Senior QA Automation Lead / SDET with over 12 years of experience designing and implementing automation frameworks and QA strategies 
for enterprise web and mobile platforms. Expert in Selenium, Cypress, Playwright, and API testing, with deep experience integrating test automation 
into CI/CD pipelines using Jenkins, GitLab, and Docker. Proven success leading QA initiatives at Warner Bros. Discovery, CNN, and Cox Automotive, 
improving test efficiency, quality coverage, and delivery speed. Passionate about shift-left testing, continuous improvement, and building high-performing QA teams.

Professional Experience:

Senior QA Lead at Warner Bros. Discovery: 08/2023 - Current
•	Architected a scalable test automation framework using Python (Pytest), Selenium, and Playwright, seamlessly integrated into GitLab CI/CD pipelines, enabling continuous validation of microservices with over 80% regression coverage across multiple environments.
•	Developed and maintained end-to-end UI automation suites for React.js front-end applications within the Registration, Messaging, and Ads teams, reducing manual testing time by 60% and ensuring faster deployment cycles.
•	Implemented comprehensive load and performance testing strategies using k6 and Grafana, diagnosing bottlenecks and enhancing service response times by 35% under peak traffic conditions.
•	Designed automated API test collections in Postman and Newman, validating RESTful endpoints for revenue reporting, campaign analytics, and user management services.
•	Introduced shift-left testing practices by embedding QA validation into development pipelines, enabling early defect detection and reducing post-deployment issues by 45%.
•	Led sprint planning and test strategy sessions as part of the Technical Center of Excellence (TCOE), aligning QA processes with agile development standards and organizational KPIs.
•	Established centralized QA documentation repositories, including test plans, execution reports, and automation guides, standardizing team workflows and reducing onboarding time for new engineers.
•	Mentored a team of six QA engineers on automation design patterns, code review processes, and advanced debugging techniques, elevating overall testing efficiency across the group.

Senior QA Analyst at WarnerMedia: 04/2021 - 08/2023
•	Designed and implemented Cypress and Selenium WebDriver frameworks to automate testing for high-visibility CNN platforms like Magic Wall, Facts First, and the Election Center, ensuring consistent, accurate, and timely data rendering.
•	Automated complex backend validation scripts for REST APIs, focusing on real-time election data synchronization and results accuracy, which improved system reliability during peak broadcast events.
•	Integrated automated testing workflows into Jenkins pipelines, cutting manual regression efforts by 65% and improving build verification turnaround from two days to under three hours.
•	Performed cross-browser and responsive testing using BrowserStack, validating rendering and interactivity across 25+ device configurations, ensuring consistency for millions of end users.
•	Collaborated with developers and product teams to implement BDD/TDD testing using Cucumber and Gherkin, embedding test automation at the earliest stages of software development.
•	Executed performance and stress tests on dynamic news dashboards to ensure fault tolerance and zero downtime during live election coverage.
•	Developed custom test reporting dashboards that visualized build stability, defect trends, and automation coverage metrics for executive QA reviews.

Senior SDET / QA Automation Engineer at CNN: 09/2019 - 04/2021
•	Collaborated with data science teams to integrate AI/ML services into production workflows, deploying Flask- and FastAPI-based microservices to power personalization, content categorization, and real-time learner analytics.
•	Designed and maintained queue-based architectures using Celery and Redis, orchestrating asynchronous processing pipelines for appointments, content recommendations, and background jobs—resulting in a 33% latency reduction during traffic spikes.
•	Led the architecture and delivery of a modular CMS platform using Django and PostgreSQL, with role-based publishing workflows and fine-grained permissions, scaling to over 500K monthly users with 62% faster content publishing cycles.
•	Optimized backend infrastructure with Redis caching and Cloudflare CDN, improving global API responsiveness by 320ms and achieving a 46% improvement in page load speeds under high concurrency.
•	Integrated role-based access control and multi-factor authentication (MFA) into an enterprise-grade EHR platform using Flask and MongoDB, securing sensitive medical records (HIPAA-compliant) for 200+ clinics and 1M+ patient records.
•	Automated CI/CD pipelines with Docker, GitHub Actions, and Kubernetes, enabling blue-green deployments, zero-downtime updates, and consistent delivery across staging, QA, and production environments.
•	Oversaw the full ML pipeline lifecycle, from data wrangling (pandas, NumPy) and model training (scikit-learn, TensorFlow) to inference serving via FastAPI with GPU-optimized deployments on AWS SageMaker and Lambda.

QA Engineer at Cox Automotive Inc: 02/2017 – 09/2019
•	Developed and maintained Selenium and WebdriverIO test frameworks in TypeScript, enabling full end-to-end coverage for the company’s Digital Retailing platform across browsers and devices.
•	Integrated automated testing into Jenkins pipelines with Docker-based environments, standardizing QA deployment and reducing environment inconsistency across teams.
•	Configured BrowserStack for scalable cloud-based UI validation, improving test execution parallelism and reducing infrastructure maintenance costs.
•	Designed API test automation scripts using Mocha, Chai, and Postman, verifying vehicle listing synchronization between services and third-party integrations.
•	Introduced parallel execution and distributed test orchestration, reducing suite runtime by over 50% and enabling daily test runs on feature branches.
•	Developed automated reporting tools to capture runtime metrics, coverage summaries, and CI trends for engineering leadership.
•	Partnered with DevOps teams to design automated deployment pipelines, aligning release and validation cycles for production deployments.

Software Developer at Fiserv: 04/2014 – 02/2017
•	Built extensible mobile test automation frameworks using Java, Appium, and Selenium Grid, supporting continuous validation of iOS and Android banking applications.
•	Automated the Google Play and Apple App Store submission pipeline, integrating build verification, code signing, and deployment workflows for over 30 financial institution apps.
•	Implemented data-driven regression testing for transaction workflows and account synchronization, improving defect detection by 45%.
•	Collaborated with developers to design reusable test hooks and APIs for faster test script creation and coverage extension.
•	Performed security validation and encryption compliance checks for financial data transfers, ensuring adherence to PCI-DSS standards.
•	Developed and maintained SQL-based test data management scripts, reducing environment preparation time by 70%.
•	Executed cross-platform compatibility testing across multiple OS versions and devices to maintain consistent functionality for end users.

QA Analyst Intern at Fiserv : 10/2011 – 09/2012
•	Assisted in manual and automated testing for early-stage mobile banking applications across iOS and Android platforms.
•	Developed initial Selenium test scripts for regression validation, contributing to the foundation of the automation framework later adopted by production teams.
•	Executed app store submission verifications and supported build validation for client-specific financial applications.
•	Tested app UI/UX for design consistency, responsiveness, and device compatibility.
•	Logged and tracked bugs in Jira, collaborating with development teams to ensure timely resolution and retesting.

Tech Support Intern at Southern Polytechnic State University : 09/2015 – 03/2017
•	Provided hands-on support in building and maintaining computer lab systems, performing hardware installations, BIOS configurations, and OS deployments.
•	Assisted in software imaging and setup of lab environments for IT and engineering courses, ensuring uniform system readiness across 10+ classrooms.
•	Troubleshot network connectivity issues, driver conflicts, and printer malfunctions, maintaining operational uptime for faculty and student labs.
•	Documented recurring technical issues and supported process improvement initiatives for the IT helpdesk.
•	Worked alongside senior IT staff to implement patch updates and system upgrades during maintenance windows.

Skills:

Node.js (Express, NestJS)
ASP.NET Core (C#)
Python (Flask)
Java (Spring Boot)
PHP (Laravel)
SQL
C++
React.js 
Angular
TypeScript
Redux
Responsive UI design
React Native
AngularJS
WebSockets
Unit Testing
Selenium
Cypress
Postman
PyTest
Robot Framework
TestNG
JUnit
Jest
Mocha
Playwright
Appium
Jenkins
GitLab CI/CD
Azure DevOps
Jira
Zephyr
QTest
SonarQube
AWS
Azure
GCP
ELK Stack
Terraform
Kubernetes
Docker
ISO 9001
HIPAA
PCI DSS
GDPR
FDA 21 CFR Part 11
Power BI
Excel
SQL Queries for Test Data
PostgreSQL
MySQL
MongoDB
REST APIs
GraphQL
JSON/XML Validation

Education:
•Bachelor of Science, Information Technology (09/2006 – 03/2011)
Southern Polytechnic State University | USA`
  },
  { name: 'Zain Abdeen',
    resumeText: `
    Senior Software Engineer

Zain Abdeen
Senior Software Engineer
zainabdeen0110@outlook.com
+1 423 301 1901
Tampa, Florida, USA

Summary: 

Full Stack Engineer with 10+ years of experience delivering scalable SaaS platforms and cloud-native applications across fintech, edtech, and healthcare. 
Expert in Node.js, C# (.NET), Python (Flask), and Laravel, with strong frontend skills in React, Vue, Svelte, and TypeScript. 
Skilled in microservices, real-time systems, and DevOps practices (Docker, Kubernetes, CI/CD). Proven ability to build secure, performant APIs and integrate AI/ML models and third-party systems. 
Committed to clean architecture, accessibility, and cross-functional collaboration.

Professional Experience:

Senior Software Engineer at EmergentWirelessSolutions: 03/2023 - Current
•	Collaborated with data science teams to integrate AI/ML services into production workflows, deploying Flask- and FastAPI-based microservices to power personalization, content categorization, and real-time learner analytics.
•	Designed and maintained queue-based architectures using Celery and Redis, orchestrating asynchronous processing pipelines for appointments, content recommendations, and background jobs—resulting in a 33% latency reduction during traffic spikes.
•	Led the architecture and delivery of a modular CMS platform using Django and PostgreSQL, with role-based publishing workflows and fine-grained permissions, scaling to over 500K monthly users with 62% faster content publishing cycles.
•	Optimized backend infrastructure with Redis caching and Cloudflare CDN, improving global API responsiveness by 320ms and achieving a 46% improvement in page load speeds under high concurrency.
•	Integrated role-based access control and multi-factor authentication (MFA) into an enterprise-grade EHR platform using Flask and MongoDB, securing sensitive medical records (HIPAA-compliant) for 200+ clinics and 1M+ patient records.
•	Automated CI/CD pipelines with Docker, GitHub Actions, and Kubernetes, enabling blue-green deployments, zero-downtime updates, and consistent delivery across staging, QA, and production environments.
•	Oversaw the full ML pipeline lifecycle, from data wrangling (pandas, NumPy) and model training (scikit-learn, TensorFlow) to inference serving via FastAPI with GPU-optimized deployments on AWS SageMaker and Lambda.

Software Engineer at EmergentWirelessSolutions(Client: IBM) : 104/2020 – 03/2023
•	Architected and implemented a scalable e-Learning and Content Management System using Python (FastAPI), Express (Node.js), and PostgreSQL, reducing manual academic coordination by 73% and supporting 10,000+ concurrent users with multi-tenant capabilities.
•	Developed intelligent course recommendation and auto-tagging features using scikit-learn and spaCy, increasing learner engagement and content discoverability—leading to a 38% rise in course completions.
•	Built a modern, ADA-compliant frontend using React.js and Tailwind CSS with deep integration into Python services, improving accessibility scores and reducing bounce rates by 33% across course pages.
•	Engineered GraphQL and RESTful APIs in Django and Graphene to support real-time e-commerce campaign management (Shopify, Klaviyo, Recharge), handling over $10M in annual transaction volume.
•	Led real-time collaboration feature development including live document editing, chat, and virtual classroom support using Python WebSocket servers and Socket.IO—resulting in a 38% increase in platform session time.
•	Designed reusable, security-focused middleware layers in FastAPI, covering API rate-limiting, audit logging, token-based auth, and input validation—helping reduce API error rates and improve traceability.
•	Refactored a legacy Node.js monolith into independently deployed Python microservices, applying Clean Architecture, DDD principles, and CI best practices to reduce developer onboarding time by 45% and improve maintainability.

Software Developer at Google : 06/2016 – 03/2020
•	Rebuilt a monolithic video analytics portal into modular, Python and Laravel-based microservices, using Service-Oriented Architecture (SOA) to enable scalable ingestion and analysis of high-volume emotional response data across marketing and research campaigns.
•	Re-architected a Learning Management System into Laravel and Python (FastAPI)-based microservices, supporting scalable delivery of multimedia courses, adaptive assessments, and real-time learning paths across thousands of concurrent learners.
•	Built secure, scalable RESTful APIs using Laravel (Sanctum, Passport) and Python (FastAPI, OAuth2), enabling multi-tenant student progress tracking, RBAC, and SAML-based SSO integration for educational institutions.
•	Led the development of real-time analytics dashboards with Vue.js, Inertia.js, and Blade templates, integrating WebSocket engagement tracking (Laravel Echo + Pusher) and Python-based logging services to visualize learner interactions during lectures and exams.
•	Integrated Flask-based AI/ML microservices into the LMS, powering automated content tagging, learning path personalization, and real-time sentiment analysis. Communicated via secure JSON APIs and asynchronous webhooks for low-latency ML insights.
•	Collaborated with data science teams to deploy NLP and recommendation models using Python (spaCy, scikit-learn, TensorFlow), enabling tailored content delivery and dynamic quiz generation based on user behavior.
•	Refactored legacy ASP.NET Core (C#) services and integrated with Laravel + Python stack, aligning authentication, user data models, and shared assessment data pipelines for unified system behavior and gradual service migration.
•	Developed CMS-driven course creation features using Strapi, Drupal, WordPress, and Flask-admin, allowing instructors to manage lessons, quizzes, and media assets—cutting course setup time by 45%.
•	Built micro-frontends with React, TypeScript, and Tailwind CSS, offering reusable UI components for feedback collection, progress reporting, and accessibility-compliant (WCAG 2.1) learning interfaces across devices.
•	Engineered end-to-end CI/CD pipelines with GitHub Actions and Azure DevOps, orchestrating Python (pytest), PHP (PHPUnit), and .NET (xUnit) unit tests, Docker-based container builds, and blue-green deployments on Kubernetes for zero-downtime releases.
•	Integrated external academic platforms (SIS, LMS plugins, AI grading engines) through OAuth2-secured APIs, webhooks, and ETL pipelines (Python-based), ensuring seamless sync of enrollment, attendance, and evaluation records across institutional systems.
•	Applied professional software engineering practices, including Clean Architecture, domain-driven design (DDD), infrastructure-as-code (Terraform, Docker Compose), and Agile delivery with Jira and Confluence.

Freelance Web Developer at Upwork : 09/2015 – 03/2017
•	Developed and maintained a modern, component-based learning platform UI using React.js, later migrating select modules to Vue 3 and SvelteKit for performance-critical dashboards. Prioritized accessibility, responsiveness, and cross-browser compatibility across devices.
•	Crafted responsive layouts using TailwindCSS and custom utility classes, ensuring pixel-perfect design consistency across mobile, tablet, and desktop. Achieved full WCAG AA compliance for accessibility in all core learning modules.
•	Built modular frontend logic using TypeScript, enhancing maintainability and reducing runtime errors in production by nearly 43%. Leveraged Vite and ESBuild for blazing-fast dev experience and optimized builds.
•	Integrated and consumed RESTful APIs for authentication, course content, and student data, using Axios and Fetch with robust error handling and caching. Improved perceived performance by preloading assets and using skeleton loaders in Vue and React.
•	Designed real-time classroom features using WebSockets and reactive state management libraries (e.g., Svelte stores, Vuex, Redux Toolkit), enabling instant messaging, quiz polling, and collaborative tools with minimal latency.
•	Integrated third-party services like Zoom (live video classrooms) and Google Drive (file sharing), embedding them via custom modals and safe iFrame wrappers. Enabled seamless, in-app usage without disrupting navigation flow.


Skills:

Node.js (Express, NestJS)
ASP.NET Core (C#)
Python (Flask)
Java (Spring Boot)
C++
React.js 
Angular
TypeScript
Redux
Responsive UI design
React Native
AngularJS
WebSockets
reusable component libraries
Storybook
RESTful APIs
GraphQL (Apollo)
OAuth 2.0
JWT
SignalR
Redis
microservices
concurrency control
AWS (EC2, S3, CloudFront, Lambda)
Azure (App Services, Event Hubs)
Docker
Kubernetes
Helm
Jenkins
GitLab CI/CD
Hadoop
Spark
Azure Synapse
real-time analytics
TensorFlow
AI integration (chatbots, booking optimization)
HIPAA
HL7
FHIR
PCI DSS
GDPR
Azure AD
MSAL
RBAC
data encryption
Jest
Enzyme
JUnit
Postman
Swagger
New Relic
Datadog
Azure Monitor
Prometheus
ELK Stack
Git
Jira
VS Code
PM2
MongoDB
PostgreSQL
MySQL
SQL Server

Education:
•Bachelor of Science, Computer Science (10/2013 – 08/2017)
Quinnipiac University | US
    `
  },
  {
    name: 'Soumik Banerjee',
    resumeText: `Senior Software Engineer

    Soumik Banerjee
    Senior Software Engineer
    soumik.banerjee3009@outlook.com
    14309640645
    Austin, TX 78757
    
    Summary: 
    
    Experienced Full Stack Engineer with 10+ years delivering scalable, responsive SaaS platforms and microservices 
    using C# (.NET), Python, Java (Spring Boot), React, Vue, Svelte, and TypeScript. Skilled in building cloud-native applications across Azure and AWS, 
    integrating AI/ML models, and driving high-performance, accessible user interfaces with TailwindCSS and real-time features. 
    Proficient in modern DevOps practices (CI/CD, Docker, Kubernetes), event-driven architecture (Kafka, RabbitMQ), and test automation (xUnit, Cypress, Selenium). 
    Adept at collaborating across teams, mentoring developers, and delivering secure, data-intensive solutions in fintech, edtech, and analytics-driven environments.    

    Professional Experience:
    
    Senior Software Engineer at Samsung Electronics: 05/2023 - Current
    •	Architected and deployed microservices using C# (.NET 6/7), Docker, and Kubernetes, designing scalable, modular systems with gRPC and REST APIs. Implemented service discovery, circuit breakers, and health checks for fault-tolerant, production-grade environments.
    •	Integrated AI and machine learning models into .NET-based microservices using ML.NET, ONNX Runtime, and Azure Cognitive Services, powering features like real-time sentiment analysis, recommendation engines, and document classification—driving a 40% boost in actionable insights.
    •	Designed resilient cloud-native infrastructures on Azure (AKS, Cosmos DB) and AWS (ECS, RDS, S3) using Terraform and Helm for infrastructure-as-code. Enabled multi-region, auto-healing deployments with 99.99% uptime and built-in observability.
    •	Developed responsive full-stack applications with .NET Core (Web API, SignalR) on the backend and React + TypeScript + Tailwind CSS on the frontend. Ensured seamless UX across devices with PWA support, boosting user satisfaction by 25%.
    •	Led a mentorship and training initiative, coaching junior developers in C#, Entity Framework Core, and modern frontend frameworks. Improved team velocity and cut onboarding time by 52% through hands-on pairing, code reviews, and architectural walkthroughs.
    •	Implemented robust CI/CD pipelines using GitHub Actions, Azure DevOps, and Jenkins, incorporating automated Docker builds, vulnerability scanning (Snyk), and blue-green deployments—resulting in a 54% reduction in deployment time and increased release confidence.
    •	Built event-driven, intelligent microservices using Azure Service Bus, RabbitMQ, and Apache Kafka, processing high-throughput data streams with real-time alerting and AI-driven decision logic. Enabled actionable analytics pipelines with OpenTelemetry and Prometheus/Grafana.
    •	Achieved 92%+ automated test coverage with xUnit, Selenium, Cypress, and SpecFlow, supporting TDD and BDD methodologies. Embedded automated testing into CI workflows to ensure stability, reliability, and minimal regression across all environments.

    Software Engineer at Microsoft: 09/2021 - 04/2023
    •	Re-architected a monolithic video analytics platform into a distributed, microservices-based SaaS solution using ASP.NET Core, Docker, and Kubernetes, enabling modular scalability for handling large volumes of video-based emotion response data across multiple brand campaigns.
    •	Developed RESTful APIs to support emotion-scoring workflows, secure content delivery, campaign performance tracking, and user authentication, integrating with OAuth2, external IDPs, and internal permission controls to support agency and brand-level access tiers.
    •	Improved data processing performance across SQL Server and MongoDB backends, optimizing queries and implementing in-memory caching (Redis) and advanced indexing strategies, reducing emotion scoring and response aggregation latency by 33%.
    •	Implemented real-time streaming notifications using SignalR, Redis Pub/Sub, and WebSocket-based interfaces to provide brands and analysts with immediate feedback on audience reactions as test panels interacted with video content.
    •	Built CI/CD pipelines with GitHub Actions, Helm, and Kubernetes, automating infrastructure provisioning, test coverage analysis, and rolling deployments with zero downtime—cutting release times by over 52% and improving system reliability.
    •	Integrated machine learning models using ML.NET, ONNX Runtime, and Python-based pipelines (scikit-learn, NumPy, pandas) for facial expression analysis, emotion classification, and viewer engagement prediction. Used Python for preprocessing large video metadata, aligning time-coded emotion data with panelist reactions across frames.
    •	Developed and deployed auxiliary Python-based microservices for AI workflows, including Flask-based inference endpoints and background workers (with Celery + RabbitMQ) for batch model scoring, asynchronous analytics tasks, and feature extraction.
    •	Enabled localization and region-aware analytics, incorporating Python’s i18n libraries to support multilingual datasets and regional formatting. Helped expand the platform’s ability to test and optimize ads globally with compliant, culturally aligned UX.
   
    Software Engineer at AMD: 01/2016 - 09/2021
    •	Designed and developed highly modular micro-frontends using React, TypeScript, and Tailwind CSS, building dynamic procurement, invoicing, and contract management experiences that scaled across multiple enterprise modules. Collaborated with designers and UX researchers to deliver accessible, WCAG-compliant components via Storybook and a shared design system, increasing development velocity across teams by 32%.
    •	Architected and implemented scalable APIs using ASP.NET Core and Entity Framework Core, facilitating multi-step approval workflows, supplier integration, budgeting controls, and real-time audit trails. Focused on clean architecture principles and DDD patterns to ensure maintainability and separation of concerns in high-complexity finance modules.
    •	Built intelligent dashboards and interactive data visualizations using Highcharts, Recharts, and custom D3.js components to surface real-time KPIs such as invoice cycle time, supplier spend compliance, and forecasted savings. Optimized rendering for large datasets using virtualization and debouncing techniques, delivering responsive user experiences in data-heavy views.
    •	Integrated with third-party ERP and HR systems including SAP, Workday, NetSuite, and Oracle Financials, leveraging secure OAuth2, SAML, and webhook-based pipelines to ensure data integrity and synchronization across financial systems. Implemented fallback logic and monitoring to prevent failures in critical external dependencies.
    •	Improved frontend performance and maintainability through code splitting, lazy loading, and dependency optimization via Webpack and Vite, reducing initial load times by over 42% and improving maintainability by modularizing business logic into reusable hooks and services.
    •	Engineered automated CI/CD pipelines using GitHub Actions, Azure DevOps, and Docker, integrating linting, unit testing (Jest, xUnit), containerization, infrastructure-as-code (Terraform), and blue-green deployments into production Kubernetes clusters with zero downtime.
    •	Collaborated in agile, cross-functional product teams with PMs, designers, QA, and DevOps, participating in sprint planning, backlog grooming, technical design reviews, and post-mortems. Played a key role in prioritizing technical debt, refactoring legacy code, and scaling high-traffic modules used by Fortune 500 clients.
    •	Implemented advanced RBAC and multi-tenant architecture to support enterprise clients with strict compliance and audit requirements (SOX, GDPR). Developed configurable access layers and approval routing based on user roles, regions, and organizational hierarchy.

    Software Developer(Intern) at Altera: 01/2013 – 08/2013
    •	Built scalable trading services in Java using Spring Boot and Kafka to support high-volume crypto transactions. Optimized key components in the trade matching engine to reduce execution latency and improve overall system responsiveness during peak traffic.
    •	Developed secure C# (.NET Core) services for fraud detection and regulatory compliance, integrating with KYC/AML providers. Detection precision reached above 98%, while false positives remained under 1.4%, leading to stronger audit outcomes.
    •	Engineered real-time wallet balance tracking using Redis, Kafka Streams, and WebSockets. This eliminated sync issues and delivered sub-second updates to users, improving trust and transparency across the platform.
    •	Implemented centralized authentication flows with OAuth2 and JWT across C# and Java stacks. Login-related errors dropped significantly, and session management maintained 99.99% uptime, supporting smooth multi-device access.
    •	Built asynchronous ledger pipelines using RabbitMQ and Kafka for asset transfers and reconciliation processes. Achieved a 99% transaction finality within 30 seconds benchmark, even during volatile market conditions.
    •	Developed RESTful APIs for onboarding, interest projections, and loan servicing using Spring Boot and ASP.NET Core. Maintained consistent response times under high concurrency without compromising reliability.
    •	Collaborated on Angular front-end components for live price tickers, charts, and user dashboards. The design emphasized responsiveness and clarity, helping increase platform engagement and retention among high-frequency users.
    •	Automated CI/CD pipelines using Jenkins, Docker, and Helm for both Java and .NET services. Reduced average deployment times by over 60%, while cutting rollback frequency by more than half through improved test and release coverage.

    Skills:
    
    C#, 
    .NET Core (6/7)
    Java
    Spring Boot
    Python, Flask
    JavaScript
    TypeScript
    React.js
    Vue.js
    Svelte
    SvelteKit
    Angular
    Redux
    Redux Toolkit
    TailwindCSS
    xUnit
    Jest
    Cypress
    Selenium
    SpecFlow
    D3.js
    Azure (AKS, Cosmos DB, Azure DevOps)
    AWS (ECS, EC2, RDS, S3, CloudWatch)
    Docker
    Kubernetes
    Terraform
    Helm
    GitHub Actions
    Jenkins
    GitLab CI/CD
    Vite
    Webpack
    TeamCity
    OpenTelemetry
    Prometheus
    Grafana
    SQL Server
    PostgreSQL
    MongoDB
    Redis
    Cosmos DB
    RESTful APIs
    gRPC
    SignalR
    WebSockets
    OAuth 2.0
    JWT
    SAML
    RabbitMQ
    Apache Kafka
    Azure Service Bus
    Stripe
    Zoom
    Google APIs
    ML.NET
    ONNX Runtime
    scikit-learn
    NumPy
    pandas
    Celery
    HIPAA
    GDPR
    SOX
    PCI DSS
    CCPA
    KYC/AML
    RBAC
    MFA
    Audit Logging
    ELK Stack (Elasticsearch, Logstash, Kibana)
    Postman
    Cypress
    xUnit
    Jest
    Selenium
    SpecFlow
    Snyk
    OpenTelemetry
    Prometheus
    Grafana
    Git
    GitHub
    GitLab
    Jira
    Storybook
    ESBuild
    Highcharts
    Recharts
    Oracle Financials
    SAP
    NetSuite
    Workday

    Education:
    Master's Degree of Computer & Electrical Engineering in 2013
    The University of New Mexico | USA
    
    Licenses & Certifications:
    Supervised Machine Learning: Regression and Classification
    Coursera, Issued Mar 2024
    https://www.coursera.org/account/accomplishments/certificate/3BUMV3R46DJD
    `
  },
  {
    name: 'Josh Wright',
    resumeText: `Senior Software Engineer

    Josh Wright
    Senior Software Engineer
    joshwright120@outlook.com
    13253130928
    Austin, TX 78702
    
    Summary: 
    
    Senior Software Engineer with 10+ years of experience delivering scalable web and mobile applications 
    across healthcare, finance, e-commerce, and education. Expert in full-stack development using Node.js, ASP.NET Core, React.js, and Python. 
    Proven track record in modernizing legacy systems, building microservices, and leading cloud migrations on AWS and Azure. 
    Strong background in real-time systems, DevOps automation, and compliance with HIPAA, FHIR, PCI DSS, and GDPR standards. 
    Passionate about solving complex engineering challenges and creating high-impact, user-centric solutions.

    Professional Experience:
    
    Senior Software Engineer at Kiggla: 03/2025 - Current
    •	Architected and deployed microservices using C# (.NET 6/7), Docker, and Kubernetes, designing scalable, modular systems with gRPC and REST APIs. Implemented service discovery, circuit breakers, and health checks for fault-tolerant, production-grade environments.
    •	Integrated AI and machine learning models into .NET-based microservices using ML.NET, ONNX Runtime, and Azure Cognitive Services, powering features like real-time sentiment analysis, recommendation engines, and document classification—driving a 40% boost in actionable insights.
    •	Designed resilient cloud-native infrastructures on Azure (AKS, Cosmos DB) and AWS (ECS, RDS, S3) using Terraform and Helm for infrastructure-as-code. Enabled multi-region, auto-healing deployments with 99.99% uptime and built-in observability.
    •	Developed responsive full-stack applications with .NET Core (Web API, SignalR) on the backend and React + TypeScript + Tailwind CSS on the frontend. Ensured seamless UX across devices with PWA support, boosting user satisfaction by 25%.
    •	Led a mentorship and training initiative, coaching junior developers in C#, Entity Framework Core, and modern frontend frameworks. Improved team velocity and cut onboarding time by 52% through hands-on pairing, code reviews, and architectural walkthroughs.
    •	Implemented robust CI/CD pipelines using GitHub Actions, Azure DevOps, and Jenkins, incorporating automated Docker builds, vulnerability scanning (Snyk), and blue-green deployments—resulting in a 54% reduction in deployment time and increased release confidence.
    •	Built event-driven, intelligent microservices using Azure Service Bus, RabbitMQ, and Apache Kafka, processing high-throughput data streams with real-time alerting and AI-driven decision logic. Enabled actionable analytics pipelines with OpenTelemetry and Prometheus/Grafana.
    •	Achieved 92%+ automated test coverage with xUnit, Selenium, Cypress, and SpecFlow, supporting TDD and BDD methodologies. Embedded automated testing into CI workflows to ensure stability, reliability, and minimal regression across all environments.

    Senior Software Engineer at Amazon: 12/2020 - 01/2025
    •	Led the Platform Engineering initiative within Amazon to build a next-generation image-based release system for foundational AWS services, enabling immutable deployments and reducing cold start times by 45% across distributed systems.
    •	Architected and implemented deployment automation that updated system software consistently across Amazon’s vast global service ecosystem, improving release reliability, rollback safety, and observability.
    •	Partnered with SRE and security teams to ensure zero-downtime software rollouts, enhancing compliance with PCI DSS and internal audit standards.
    •	Reengineered a legacy reservation system into a scalable, cloud-native platform using ASP.NET Core, C#, and Node.js, improving performance and maintainability while supporting existing business logic during phased migration.
    •	Migrated core components to a hybrid AWS and Azure environment, implementing containerized workloads with Docker and Kubernetes for rapid deployment and predictable scaling.
    •	Integrated AI-driven optimization models using Python, FastAPI, and Azure Machine Learning to analyze usage patterns, automate resource allocation, and improve system throughput by 23%.
    •	Built real-time analytics dashboards using Node.js, Angular, and WebSockets to track user engagement, system load, and deployment metrics, reducing operational response times by 37%.
    •	Strengthened authentication across services with Azure AD, MSAL, and JWT-based security, achieving enterprise-grade access control and session security.
    •	Introduced GitOps workflows using GitHub Actions, Helm, and Terraform to fully automate infrastructure provisioning and software updates, cutting deployment time in half.
    •	Mentored a cross-functional team of 6 engineers, promoting best practices in distributed systems design, continuous delivery, and cloud-native architecture.

    Software Engineer at Google: 10/2017 - 12/2020
    •	Developed a real-time inventory management system using Express.js, Java (Spring Boot), and AngularJS, enabling stock tracking across hundreds of stores. This increased inventory visibility, reduced shortages, and provided employees with timely data to fulfill customer demand more effectively.
    •	Developed a highly responsive user interface for PayPal’s transaction platform using React.js, reducing page load time by 32% and increasing user satisfaction scores by 27%. Created reusable components and optimized virtual DOM performance for dynamic user flows.
    •	Revamped a legacy platform module using Angular, improving application scalability and maintainability. Refactored inefficient data flows and reduced memory footprint by restructuring component hierarchies.
    •	Implemented a payment-splitting feature on the checkout page using React, Redux, and RESTful APIs, driving a 13% increase in user engagement and a smoother multi-party transaction experience.
    •	Redesigned CSS and layout logic to ensure pixel-perfect, cross-browser compatibility across major platforms, enhancing visual consistency and usability.
    •	Engineered RESTful backend services in Java and Spring Boot for payment processing, authentication, and session management. Ensured seamless integration with frontend via clearly defined API contracts.
    •	Built and optimized backend modules in C++ to support performance-critical services, including transaction validation and fraud checks. Applied memory-efficient data structures and multithreading to handle high concurrency workloads.
    •	Created a reusable React component library, standardizing UI patterns and reducing development time by 30%. Integrated with Storybook for live documentation and team adoption.
    •	Implemented unit and integration tests using Jest, Enzyme, and JUnit, improving code coverage and reducing production bugs by 40%. Introduced CI checks for UI regression detection.
    •	Managed application state using Redux and Context API, handling complex user interactions and asynchronous data fetching across payment workflows.
    •	Collaborated with business and UX teams to translate product requirements into scalable technical solutions. Participated in Agile ceremonies, sprint planning, and design reviews.

    Software Developer at Amazon: 08/2016 – 09/2017
    •	Supported the development of high-volume software systems focused on scalability and reliability. Contributed to optimizing backend services and database access patterns for speed and resilience.
    •	Built responsive web interfaces using HTML5, CSS3, and jQuery, improving front-end interactivity and mobile responsiveness for critical user workflows.
    •	Designed and implemented user-facing features in collaboration with senior engineers and product managers, resulting in increased user engagement and lower churn.
    •	Assisted in C++ module development for backend services, applying concepts like hash maps, linked lists, and priority queues to optimize algorithmic performance and reduce response latency in transaction-heavy operations.
    •	Applied Object-Oriented Design principles to structure reusable and extensible components in both frontend and backend codebases.
    •	Developed foundational knowledge in algorithms, data structures, databases, and operating systems through hands-on work and mentorship, preparing for higher-complexity engineering challenges.
    •	Participated in code reviews and estimations, contributing to a 12% increase in team efficiency and helping deliver projects on time with consistent quality.

    Skills:
    
    Node.js (Express, NestJS)
    ASP.NET Core (C#)
    Python (FastAPI, Django, Flask)
    Java (Spring Boot)
    C++
    React.js
    Angular
    TypeScript
    Redux
    Responsive UI design
    React
    Redux
    React Native
    AngularJS
    Vue.js
    Svelte
    WebSockets
    reusable component libraries
    Storybook
    RESTful APIs
    GraphQL (Apollo)
    OAuth 2.0
    JWT
    SignalR
    Redis
    microservices
    concurrency control
    AWS (EC2, S3, CloudFront, Lambda)
    Azure (App Services, Event Hubs)
    Docker
    Kubernetes
    Helm
    Jenkins
    GitLab CI/CD
    Hadoop
    Spark
    Azure Synapse
    real-time analytics
    TensorFlow
    AI integration (chatbots, booking optimization)
    HIPAA
    HL7
    FHIR
    PCI DSS
    GDPR
    Azure AD
    MSAL
    RBAC
    data encryption
    Jest
    Enzyme
    JUnit
    Postman
    Swagger
    New Relic
    Datadog
    Azure Monitor
    Prometheus
    ELK Stack
    Git
    Jira
    VS Code
    PM2
    MongoDB
    PostgreSQL
    MySQL
    SQL Server

    Education:
    Bachelor's Degree of Computer Science (08/2012 - 05/2016)
    Rose-Hulman Institute of Technology | USA
    
    `
  }, 
  {
    name: 'Vincent Maradiaga',
    resumeText: `Senior Software Engineer

    Vincent Maradiaga
    Senior Software Engineer
    vincent.maradev1009@outlook.com
    14099411954
    Houston, TX 77096
    
    Summary: 
    
    Senior Software Engineer with 7+ years of experience designing and delivering full-stack, cloud-native solutions 
    across healthcare, e-learning, financial, and e-commerce domains. Skilled in modernizing legacy systems, 
    building microservices, and handling real-time data workflows. Experienced in AI/LLM integration, automation, and predictive analytics 
    using OpenAI, Claude, TensorFlow, and PyTorch. Proficient in cloud platforms (AWS, Azure, GCP), DevOps, containerization (Docker/Kubernetes), and secure, compliant enterprise applications. 
    Passionate about creating scalable, user-centric platforms with strong focus on security, compliance, and performance.

    Professional Experience:
    
    Senior Software Engineer at RUI(Client-TrainUp): 09/2023 - Current
      •	Led full-stack development for an AI-driven productivity and e-learning/financial insights platform using React.js, Next.js, Angular, and TypeScript on the frontend and Node.js (NestJS, Express) plus Ruby on Rails on the backend, helping modernize a legacy single-tenant application into a modular, multi-tenant architecture.
      •	Designed and implemented an interactive AI chat and workspace interface with real-time input/output schema validation, integrating Markdown and LaTeX rendering for complex, structured responses such as reports, financial summaries, and technical docs.
      •	Integrated OpenAI and Anthropic Claude as core LLM providers, implementing prompt templates, system messages, content filters, and safety guardrails for both general chat and file-enhanced workspace flows, including financial-style analysis and narrative generation.
      •	Built real-time data handling for chats and shared workspaces using WebSocket-style streaming, enabling synchronous collaboration and reducing perceived latency for end users.
      •	Implemented contextual file search over uploaded documents stored in PostgreSQL and MongoDB, with RBAC-based access rules to control workspace sharing, team roles, and data visibility for documents like financial statements, contracts, and operational reports.
      •	Developed supporting ML microservices in Python (FastAPI + TensorFlow) for embeddings, classification, and content scoring, exposing them to Node.js APIs and instrumenting them with OpenTelemetry, Prometheus, and Grafana for metrics and tracing.
      •	Extended the platform to support financial-style workflows, such as automated report generation and structured summaries of CSV/Excel exports, using Ruby on Rails services to normalize data, store transaction-like records, and expose them via APIs consumed by the AI layer.
      •	Created automation flows using n8n and webhooks to schedule tasks like document summarization, content tagging, and notification dispatch, reducing manual operational overhead.
      •	Deployed modular microservices using Docker and Kubernetes on Azure, using Azure PostgreSQL and MongoDB Atlas, and configured Nginx with Certbot for SSL. Monitored services with Datadog, Sentry, and ELK for logs and error tracking.
      •	Used Notion as a lightweight CRM/project hub to track user feedback, onboarding pipelines, and roadmap items; documented APIs with Swagger and validated endpoints using Postman and Jest/Supertest.

    Software Engineer at Kiggla(Client-7 Souls Tattoo): 04/2021 - 08/2023
    •	Modernized a legacy desktop tracking system into a cross-platform app for a health-adjacent and e-commerce service business using React, Angular, React Native, Electron.js, and selectively Ruby on Rails for internal admin and reporting tools.
    •	Designed and implemented an admin dashboard using React, Redux, and TypeScript, integrating REST and GraphQL APIs backed by Node.js (Express, NestJS), PostgreSQL, and MongoDB for real-time reporting, team management, and performance analytics.
    •	Migrated tightly coupled server logic into domain-based microservices in Node.js and C# (.NET Core) (billing, reporting, media, notifications), enabling independent deployment and scaling. Used PM2 and Nodemon in development and early process management.
    •	Built real-time data handling for a Slack-style communication system with DM, group chats, and video/audio calls using WebSockets, SignalR-style patterns, and Kurento media server, providing low-latency messaging and call setup.
    •	Developed e-commerce features including online booking payments, gift card sales, merchandise checkout, and recurring subscription management using Stripe/PayPal APIs, integrated with dashboards for revenue tracking and order management.
    •	Integrated OpenAI-based assistants for automatic timesheet summarization, policy explanations, and template responses; experimented with PyTorch models to tag sessions and detect outliers in usage patterns.
    •	Implemented automation scripts and scheduled background jobs in C# (.NET Core) and Node.js to handle recurring tasks (report generation, billing reminders, S3 cleanup), monitored via AWS CloudWatch, New Relic, and Sentry.
    •	Deployed services to AWS (EC2, Lambda, S3), used Redis for caching and session management, and collaborated on infrastructure with Kubernetes clusters provisioned via Terraform, instrumented with Prometheus and Grafana.
    •	Used Airtable as a lightweight CRM to track clients, sessions, merchandise sales, and billing; built n8n workflows to sync Airtable data with internal dashboards and generate automated notifications.
    •	Ensured better security with JWT-based authentication, RBAC, and fine-grained permissions; validated code quality using ESLint, Prettier, and implemented tests with Jest, Cypress, Mocha, and Chai.

    Software Engineer at Infosys: 02/2019 - 03/2021
    •	Contributed to multiple enterprise and healthcare/e-learning oriented projects, building full-stack web applications with Next.js (SSR/ISR), Angular, and MongoDB Atlas, later introducing PostgreSQL for transactional modules.
    •	Helped migrate parts of a monolithic legacy platform into a more modular, API-first system using Node.js (Express, NestJS) and PHP for legacy integrations, deployed across AWS and GCP using Docker and early Kubernetes setups managed via Terraform.
    •	Built admin and analytics UIs with Radix UI, Tailwind CSS, and Angular, providing user management, permission configuration, and reporting views for internal stakeholders.
    •	Implemented secure authentication flows with NextAuth.js (JWT, MFA) and supported healthcare-style access patterns with RBAC and HL7/FHIR-aware data models for some client-facing tools.
    •	Documented services with Swagger/OpenAPI, and tested APIs using Postman, Supertest, Jest, and Sinon for mocking. Implemented front-end unit tests with Karma and Jasmine, increasing confidence in release quality.
    •	Assisted in instrumenting services with New Relic, Datadog, and basic ELK logging to monitor performance and errors; contributed to initial adoption of OpenTelemetry traces for key services.
    •	Set up CI/CD pipelines using GitHub Actions to build Docker images and push them to GHCR.io, deploying to AWS EC2; wrote detailed Confluence documentation and coordinated work in Trello.

    Software Developer at IBM: 07/2018 – 01/2019
    •	Rebuilt a core product filter page by replacing legacy JavaScript/HTML/CSS with modular components using React and Angular, improving maintainability and performance for a customer communication platform used in insurance and health-workflow scenarios.
    •	Integrated front-end views with backend services built in Node.js (Express) and Java (Spring Boot), consuming APIs documented with Swagger and validated via Postman.
    •	Worked on real-time data handling for notification and status updates, ensuring front-end components correctly rendered near real-time changes from server events.
    •	Assisted content/marketing teams by integrating WordPress-based blogs and documentation into the main product via REST APIs and custom UI components.
    •	Helped test front-end behavior using Jest, Mocha, and Chai, and adopted code-quality tools (ESLint, Prettier) as part of the CI process. Supported early-stage Kubernetes deployments by verifying front-end stability in containerized environments.
    •	Optimized load performance by ~40% using lazy loading, code splitting, and tree-shaking, and participated in daily standups and code reviews to maintain quality and velocity.

    Skills:
    
    Node.js (Express, NestJS)
    ASP.NET Core
    Python (Flask, FastAPI)
    PHP (Laravel)
    Java (Spring Boot)
    Ruby on Rails
    React.js
    React Native
    AngularJS
    Next.js
    Vue.js
    TypeScript
    Redux
    Electron.js
    AWS (EC2, S3, RDS, Lambda, CloudWatch)
    Azure (App Services, Virtual Machines, Event Hubs, PostgreSQL)
    GCP
    Docker
    Kubernetes
    Terraform
    Helm
    Jenkins
    GitHub Actions
    GitLab CI/CD
    Azure DevOps
    PM2
    Nodemon
    RESTful API Design
    GraphQL
    OAuth 2.0
    JWT
    WebSockets
    SignalR
    HL7
    FHIR
    Stripe
    PayPal
    Plaid
    Zoom
    Google Maps API
    OpenAI
    Anthropic Claude
    n8n automation workflows
    HIPAA
    HL7
    FHIR
    PCI DSS
    GDPR
    CCPA
    RBAC
    MFA
    CSRF Protection
    Data Encryption
    Audit Logging
    Karma
    Jasmine
    Mocha
    Chai
    Jest
    Cypress
    Supertest
    Sinon
    Nodemon
    PM2
    New Relic
    Datadog
    Sentry
    Postman
    Swagger
    ESLint
    Prettier
    pprof (Go)
    Prometheus
    Grafana
    ELK Stack (Elasticsearch, Logstash, Kibana)
    OpenTelemetry
    Git
    GitHub
    GitLab
    Jira
    Figma
    Notion
    Airtable
    WordPress
    WebRTC
    SignalR
    Kurento Media Server
    TensorFlow
    PyTorch
    ML model integration
    embeddings
    classification
    real-time data processing with WebSockets & Azure Event Hubs
    AI-assisted automation and predictive analytics

    Education:
    Bachelor's Degree of Computer Science (09/2014 - 06/2018)
    Argosy University  | CA, USA
    
    `
  }, 
    {
    name: 'Jimmy Liang',
    resumeText: `Senior Software Engineer

    Jimmy Liang
    Senior Software Engineer
    jimmy.liang3003@outlook.com
    14233011901
    Apt 7C, New York, NY 10003
    
    Summary: 
    
    Senior Full Stack Engineer with 10+ years building scalable, cloud-native SaaS and microservices using C# (.NET), Python, Java, React, Vue, Svelte, TypeScript, PHP, and Laravel. 
    Experienced in AI/ML and LLM integrations (ML.NET, ONNX, Azure Cognitive Services, OpenAI, Claude, Gemini), cloud platforms (Azure, AWS), 
    DevOps (CI/CD, Docker, Kubernetes, Terraform), event-driven architecture (Kafka, RabbitMQ), and internal automation (n8n, Zapier, Make.com, Salesforce, Airtable, Notion). 
    Skilled in high-performance frontends, secure, data-intensive systems, mentoring teams, and delivering solutions in healthcare, fintech, and analytics-driven environments.

    Professional Experience:
    
    Senior Software Engineer at Kiggla: 12/2023 - Current
      •	Architected and deployed scalable, HIPAA-compliant microservices for healthcare platforms using C# (.NET 6/7), Docker, Kubernetes, gRPC, and REST APIs, integrating with EHR systems (HL7/FHIR), claims engines, and patient-facing portals, while mentoring engineers on fault-tolerant, production-grade patterns.
      •	Integrated AI/ML models into .NET microservices using ML.NET, ONNX Runtime, Azure Cognitive Services, scikit-learn, and Python pipelines, enabling clinical decision support, risk scoring, and sentiment analysis—driving a 40% increase in actionable insights.
      •	Designed cloud-native, PHI-ready infrastructure on Azure (AKS, Cosmos DB) and AWS (ECS, RDS, S3, PostgreSQL) with Terraform and Helm, delivering multi-region, auto-healing deployments with 99.99% uptime, encryption, audit logging, and full-stack observability (OpenTelemetry, Prometheus, Grafana).
      •	Developed full-stack healthcare apps with .NET Core (Web API, SignalR) on the backend and Next.js + TypeScript + React + TailwindCSS on the frontend, building clinician dashboards, patient portals, and real-time monitoring views—boosting user satisfaction by 25%.
      •	Led mentorship and code reviews, coaching developers in C#, Entity Framework Core, PostgreSQL, secure coding, FHIR/HL7 integrations, OAuth2/JWT, RBAC, and accessibility; improved team velocity and cut onboarding time by 52%.
      •	Implemented CI/CD pipelines with GitHub Actions, Azure DevOps, Jenkins, including automated Docker builds, infrastructure-as-code validation, Snyk security scanning, and blue-green deployments—reducing deployment time by 54% and increasing release confidence in regulated environments.
      •Built event-driven microservices using Azure Service Bus, RabbitMQ, Apache Kafka, processing high-throughput clinical and device data for AI-driven triage, anomaly detection, and real-time alerts.
      •	Delivered LLM-powered workflows by orchestrating OpenAI/LLM APIs and on-prem models for chart summarization, document classification, ICD/CPT code suggestions, and intelligent message routing; ensured safety and reliability with 92%+ automated test coverage using xUnit, Selenium, Cypress, SpecFlow, and TDD/BDD embedded into CI.

    Engineering Director at Lombard International: 03/2020 - 10/2023
    •	Architected and deployed scalable microservices using C# (.NET 6/7), Docker, and Kubernetes, designing modular systems with gRPC and REST APIs, while mentoring engineers on best practices for fault-tolerant production-grade environments.
    •	Integrated AI and machine learning models into .NET-based microservices using ML.NET, ONNX Runtime, and Azure Cognitive Services, enabling real-time sentiment analysis, recommendation engines, and document classification—driving a 40% increase in actionable insights.
    •	Designed cloud-native infrastructures on Azure (AKS, Cosmos DB) and AWS (ECS, RDS, S3) with Terraform and Helm, enabling multi-region, auto-healing deployments with 99.99% uptime and built-in observability.
    •	Developed full-stack applications with .NET Core (Web API, SignalR) on the backend and React + TypeScript + TailwindCSS on the frontend, ensuring seamless UX across devices with PWA support, increasing user satisfaction by 25%.
    •	Led team mentorship, training, and code reviews, coaching junior and mid-level developers in C#, Entity Framework Core, and modern frontend frameworks, improving team velocity and cutting onboarding time by 52%.
    •	Implemented robust CI/CD pipelines using GitHub Actions, Azure DevOps, and Jenkins, incorporating automated Docker builds, vulnerability scanning (Snyk), and blue-green deployments—reducing deployment times by 54% and boosting release confidence.
    •	Built event-driven microservices with Azure Service Bus, RabbitMQ, and Apache Kafka, processing high-throughput data streams with AI-driven decision logic and real-time alerting.
    •	Ensured high-quality software delivery, achieving 92%+ automated test coverage with xUnit, Selenium, Cypress, and SpecFlow, and embedding TDD/BDD practices into CI workflows for reliable, low-regression releases.

    Senior Software Engineer at Lombard International(Client: JPMorgan Chase): 03/2017 - 03/2020
    •	Re-architected a monolithic video analytics platform into a distributed, microservices-based SaaS solution using ASP.NET Core, Docker, and Kubernetes, enabling modular scalability for handling large volumes of video-based emotion response data across multiple brand campaigns.
    •	Developed RESTful APIs to support emotion-scoring workflows, secure content delivery, campaign performance tracking, and user authentication, integrating with OAuth2, external IDPs, and internal permission controls to support agency and brand-level access tiers.
    •	Improved data processing performance across SQL Server and MongoDB backends, optimizing queries and implementing in-memory caching (Redis) and advanced indexing strategies, reducing emotion scoring and response aggregation latency by 33%.
    •	Implemented real-time streaming notifications using SignalR, Redis Pub/Sub, and WebSocket-based interfaces to provide brands and analysts with immediate feedback on audience reactions as test panels interacted with video content.
    •	Built CI/CD pipelines with GitHub Actions, Helm, and Kubernetes, automating infrastructure provisioning, test coverage analysis, and rolling deployments with zero downtime—cutting release times by over 52% and improving system reliability.
    •	Integrated machine learning models using ML.NET, ONNX Runtime, and Python-based pipelines (scikit-learn, NumPy, pandas) for facial expression analysis, emotion classification, and viewer engagement prediction. Used Python for preprocessing large video metadata, aligning time-coded emotion data with panelist reactions across frames.
    •	Developed and deployed auxiliary Python-based microservices for AI workflows, including Flask-based inference endpoints and background workers (with Celery + RabbitMQ) for batch model scoring, asynchronous analytics tasks, and feature extraction.
    •	Enabled localization and region-aware analytics, incorporating Python’s i18n libraries to support multilingual datasets and regional formatting. Helped expand the platform’s ability to test and optimize ads globally with compliant, culturally aligned UX.

    Software Developer at Lombard International: 06/2016 – 03/2017
    •	Designed modular micro-frontends using React, TypeScript, Tailwind CSS, and Storybook for procurement, invoicing, and contract management, delivering WCAG-compliant UI components and increasing cross-team development velocity by 32%.
    •	Architected scalable backend APIs with ASP.NET Core, NestJS, Express.js, and Entity Framework Core, supporting approval workflows, supplier integration, budgeting controls, and real-time audit trails using clean architecture and DDD patterns.
    •	Built analytics dashboards with Highcharts, Recharts, and D3.js, visualizing KPIs such as invoice cycle time and supplier spend compliance, and optimized large data rendering via virtualization, debouncing, and server-side pagination.
    •	Integrated with SAP, Workday, NetSuite, Oracle Financials via REST APIs, NestJS integration services, OAuth2, SAML, and webhooks, adding retry and fallback logic to harden critical financial data flows.
    •	Improved frontend performance using code splitting, lazy loading, Webpack, and Vite, reducing initial load times by 42%+ and encapsulating business logic into reusable hooks and shared services.
    •	Implemented automated CI/CD pipelines with GitHub Actions, Azure DevOps, Docker, Terraform, and Kubernetes, adding Jest/xUnit tests and blue-green deployments to achieve zero-downtime releases.
    •	Collaborated in agile, cross-functional teams, contributing to sprint planning, design reviews, and refactoring .NET/Node.js services while scaling high-traffic modules used by Fortune 500 clients.

    .NET Developer at Sportsnexa: 09/2015 - 03/2016
    •	Implemented in designing, developing, and delivering scalable web applications using ASP.NET MVC, Entity Framework, C#, JavaScript, and jQuery, ensuring maintainable architecture and modular code.
    •	Developed responsive, interactive front-end user interfaces with HTML, CSS, Bootstrap, JavaScript, jQuery, integrating dynamic dashboards, charts, and graphs to visualize real-time sports analytics data.
    •	Built and consumed RESTful APIs to retrieve partial post-backs from web services, and created dynamic view models in JavaScript for seamless, real-time data rendering on web pages.
    •	Designed and implemented backend services using LINQ to Entities and ASP.NET Web API, ensuring efficient data retrieval, business logic encapsulation, and secure access to client-facing features.
    •	Created utility classes for web scraping RSS feeds and other web sources, cleaning and normalizing data before inserting into SQL Server databases to support analytics and reporting.
    •	Designed and maintained SQL Server database tables, stored procedures, and indexes, optimizing queries for high-performance access for data scientists and real-time reporting pipelines.
    •	Implemented CI/CD workflows using Jenkins, enabling automated builds, testing, and deployment across multiple environments, improving release velocity and system reliability.
    •	Managed version control and collaborative development using TortoiseGit, tracking feature changes, bug fixes, and project progress for cross-functional teams.
    •	Applied software development best practices including unit testing, code reviews, modular design, and agile methodologies, ensuring high-quality deliverables and maintainable codebases.

    .Net Developer at Ecommerce Boost Inc: 01/2014 - 05/2015
    •	Converted multiple client legacy applications written in a prehistoric language into modern, maintainable .NET applications, improving overall system reliability and reducing runtime errors by over 40%.
    •	Partnered with client’s CIO and end-users to gather requirements, assess existing workflows, and define conversion strategies, ensuring applications met business needs and compliance standards.
    •	Scoped projects and developed detailed migration plans, identifying dependencies, potential bottlenecks, and performance improvement opportunities before implementation.
    •	Enhanced functionality of converted applications, introducing new features and automations that significantly increased productivity for client teams.
    •	Optimized application performance through database tuning, code refactoring, and implementation of best practices, reducing processing times by up to 50% compared to legacy systems.
    •	Maintained and updated client’s website, creating new product pages using master pages, improving usability, and ensuring consistent design across desktop and mobile devices.
    •	Provided ongoing support and troubleshooting for converted applications and the client’s website, resolving issues quickly and maintaining high client satisfaction.



    Skills:
    
    C#
    .NET Core (6/7)
    ASP.NET MVC
    ASP.NET Core
    Java
    Spring Boot
    Python
    Flask
    JavaScript
    TypeScript
    React.js
    Vue.js
    Svelte
    SvelteKit
    Angular
    Redux
    Redux Toolkit
    TailwindCSS
    Bootstrap
    jQuery
    PHP
    Laravel
    D3.js
    Highcharts
    Recharts
    SignalR
    WebSockets
    Node.js
    Express.js
    NestJS
    Azure (AKS, Cosmos DB, Azure DevOps)
    AWS (ECS, EC2, RDS, S3, CloudWatch)
    Docker
    Kubernetes
    Terraform
    Helm
    GitHub Actions
    Jenkins
    GitLab CI/CD
    Vite
    Webpack
    TeamCity
    OpenTelemetry
    Prometheus
    Grafana
    SQL Server
    PostgreSQL
    MongoDB
    Redis
    Cosmos DB
    RESTful APIs
    gRPC
    SignalR
    WebSockets
    OAuth 2.0
    JWT
    SAML
    RabbitMQ
    Apache Kafka
    Azure Service Bus
    Stripe
    Zoom
    Google APIs
    ML.NET
    ONNX Runtime
    scikit-learn
    NumPy
    pandas
    Celery
    Salesforce
    Airtable
    n8n
    Zapier
    Make.com
    Notion
    OpenAI API
    Claude API
    Gemini API
    HIPAA
    GDPR
    SOX
    PCI DSS
    CCPA
    KYC/AML
    RBAC
    MFA
    Audit Logging
    FHIR/HL7
    PHI Compliance
    Secure Coding
    ELK Stack (Elasticsearch, Logstash, Kibana)
    Postman
    Jest
    Cypress
    xUnit
    Jest
    Selenium
    SpecFlow
    Snyk
    OpenTelemetry
    Prometheus
    Grafana
    WordPress
    PHP
    Laravel
    Custom CMS Development
    Theme & Plugin Development
    SEO Optimization
    Git
    GitHub
    GitLab
    Jira
    Storybook
    ESBuild
    Highcharts
    Recharts
    Oracle Financials
    SAP
    NetSuite
    Workday
    CI/CD Pipelines
    Agile/Scrum
    TDD
    BDD

    Education:
    Bachelor's Degree of Computer Science (09/2012 - 05/2014)
    City Tech, CUNY  | USA

    Associate’s Degree of Computer Technology | Aug 2009 – Apr 2012
    LaGuardia Community College | USA

    
    `
  }, 
      {
    name: 'Filip Kowal',
    resumeText: `Senior Software Engineer

    Filip Kowal
    Senior Software Engineer
    https://www.linkedin.com/in/filip-kowal-6086363a3/
    filip.kowal10@outlook.com
    32-065 Czernichow, woj. malopolskie, Poland
    
    Summary: 
    
    Senior QA Automation Engineer with over 10 years of experience designing and executing large-scale testing strategies for complex, cloud-native applications across healthcare, finance, retail, and education. 
    Expertise in automation frameworks, CI/CD integration, API validation, performance testing, and end-to-end quality assurance for web, mobile, and backend systems. Skilled in Python (Pytest, Behave, Selenium), 
    C# (.NET Test, SpecFlow), and JavaScript (Playwright, Cypress). Adept at driving test architecture in distributed microservices, ensuring compliance with HIPAA, PCI DSS, and GDPR. 
    Passionate about improving reliability, scalability, and customer experience through robust test automation and data-driven QA processes.

    Professional Experience:
    
    Senior QA Engineer at HackerEarth: 04/2024 - Current
    •	Led QA transformation by building Python (Pytest, Behave) and Selenium-based automation frameworks integrated into CI/CD pipelines, achieving 80% regression coverage across microservices.
    •	Validated RESTful APIs and event-driven services in FastAPI and Laravel, implementing API versioning, token-based authentication testing, and error resilience validation.
    •	Built automated data validation suites using Python, PostgreSQL, and MongoDB for ensuring consistency across customer, billing, and analytics services.
    •	Developed end-to-end test scenarios for real-time pipelines (Azure Event Hubs, WebSockets), ensuring accurate analytics and alert generation.
    •	Tested WebRTC-based meeting platform for latency, media quality, and cross-browser reliability using automated WebDriver scripts.
    •	Collaborated with data teams to validate predictive models integrated through TensorFlow APIs, ensuring deterministic behavior and reproducibility.
    •	Automated workflow and billing test cases through Azure Logic Apps, reducing manual validation efforts by 45%.
    •	Strengthened testing security via automated OAuth 2.0 and RBAC tests, supporting GDPR and PCI DSS audit readiness.
    •	Integrated QA checks into Azure DevOps and GitLab pipelines, enabling automated smoke, regression, and post-deploy verification steps monitored via ELK dashboards.

    Software Engineer IV at Roshen: 10/2022 - 02/2024
    •	Developed automated API and end-to-end tests for core services (bookings, onboarding, payments) using Python (Pytest) and .NET test suites integrated into Jenkins pipelines.
    •	Created test harnesses for React Native apps, automating UI and API flows to validate booking and notification scenarios across iOS and Android.
    •	Built real-time system validation for pet tracking modules using SignalR, Redis, and Google Maps APIs, performing continuous integration testing for WebSocket stability.
    •	Collaborated with ML engineers to validate recommendation model integration and conduct A/B test automation for booking accuracy metrics.
    •	Implemented Jenkins and GitLab CI pipelines for automated regression suites, improving deployment verification speed by 34%.
    •	Defined and executed performance and load testing using JMeter and Locust, optimizing throughput for peak booking traffic.
    •	Introduced test governance with RBAC, encrypted test data storage, and i18n testing to support secure, multi-language global releases.

    Software Engineer III at Roshen: 01/2021 - 10/2022
    •	Designed large-scale automation frameworks in Node.js and TypeScript for payment APIs and tax submission services, achieving 95% test coverage for critical user journeys.
    •	Automated UI and backend testing for React and Angular frontends, integrating Cypress, Playwright, and Jest suites for continuous validation.
    •	Developed API contract and performance validation for AWS-hosted microservices using Postman collections and custom Python CLI tools.
    •	Built data integrity testing pipelines across PostgreSQL and MongoDB, implementing validation scripts for multi-tenant data isolation.
    •	Performed penetration and compliance testing with JWT, MFA, and OAuth 2.0 scenarios to meet PCI DSS, GDPR, and CCPA requirements.
    •	Built event-driven test monitors with Redis and WebSockets to verify real-time notifications for Credit Karma users.
    •	Automated full CI/CD QA gates with Jenkins and GitLab CI, reducing manual QA signoff cycles by 40%.
    •	Collaborated with data science teams to automate ML model validation and inference API testing using TensorFlow and Python scripts.

    Software QA Tester II at Softeq: 04/2017 - 08/2020
    •	Designed test automation suites for Python (Flask) and Java (Spring Boot) services managing inventory and orders, achieving stable regression automation.
    •	Validated RESTful APIs for high-volume inventory sync, order lifecycle, and customer profile services with automated Postman and Rest Assured suites.
    •	Automated authentication test cases for OAuth 2.0 and MFA flows, improving login reliability and compliance validation.
    •	Built Selenium-based mobile web test suites for React Native frontends, ensuring responsive and accessible UIs.
    •	Developed API mocking and data simulation tools to emulate seasonal traffic for stress testing.
    •	Participated in AWS cloud migration testing (EC2, S3, RDS), ensuring service availability and failover readiness.
    •	Integrated QA automation into Jenkins CI/CD pipeline, reducing manual regression efforts by 32%.

    Skills:
    
    Pytest
    Selenium
    Behave (BDD)
    Cypress
    Playwright
    SpecFlow
    Postman
    Rest Assured
    JMeter
    Locust
    Robot Framework
    TestNG
    Appium (Mobile Automation)
    Cucumber (Gherkin)
    Allure Reporting
    Serenity BDD
    Python (Flask, FastAPI)
    C#
    ASP.NET Core
    JavaScript
    TypeScript
    Node.js (Express.js, Nest.js)
    React.js
    Java (Spring Boot, TestNG)
    SQL
    Bash / Shell Scripting
    AWS (EC2, S3, Lambda)
    Azure DevOps
    Google Cloud Platform (GCP)
    Docker
    Kubernetes
    Terraform
    Jenkins
    GitLab CI/CD
    CircleCI
    Bamboo
    SonarQube
    Artifactory
    PostgreSQL
    MongoDB
    SQL Server
    Redis
    Oracle DB
    MySQL
    Data Masking
    ETL / Data Pipeline Testing
    Data Migration Validation
    Test Data Management (TDM)
    HIPAA
    PCI DSS
    GDPR
    FHIR
    OAuth 2.0
    JWT
    Role-Based Access Control
    OWASP Top 10
    SAST / DAST
    API & Web Security Testing
    Data Encryption and Privacy Validation
    ELK Stack (Elasticsearch, Logstash, Kibana)
    Prometheus
    Grafana
    New Relic
    Splunk
    Datadog
    CloudWatch
    Dynatrace
    Application Insights
    Jira
    TestRail
    Zephyr
    Xray
    Confluence
    Git
    Bitbucket
    Agile / Scrum
    Continuous Quality Gates
    Shift-Left Testing
    API Contract Testing
    TDD / BDD
    Risk-Based Testing
    Exploratory & Regression Testing

    Education:
    Bachelor’s Degree of Computer Science | Sep 2010 – Apr 2014
    The University of Manchester | UK

    
    `
  }, 
  {
    name: 'Mark Sanchez',
    resumeText: `Senior Software Engineer

    Mark Sanchez
    Senior Software Engineer
    639694726828
    mark.devsanchez510@gmail.com
    Naga City, Philippines
    
    Summary: 
    
    Senior Full Stack Engineer with 8+ years of experience delivering scalable, secure, and high-performance applications in fintech, SaaS, and telecom domains. 
    Specialized in backend development with Node.js (Express, NestJS) and frontend development with React, Next.js, TypeScript, Angular, and Tailwind CSS. 
    Skilled in database optimization, API design, microservices, cloud deployments (AWS, Vercel, Azure, Docker), CI/CD automation, and AI/agent tool integrations. 
    Adept at driving end-to-end software solutions while mentoring teams and ensuring compliance with security and performance standards in Agile environments.

    Professional Experience:
    
    Senior Software Engineer at Freee: 12/2024 - Current
    •	Developed scalable backend services using NestJS to handle high-volume fintech transactions, implementing secure REST and GraphQL APIs with JWT-based authentication and role-based authorization.
    •	Built and maintained Next.js + React dashboards with Tailwind CSS for responsive, accessible, and visually consistent interfaces, improving SEO and load performance by 40%.
    •	Integrated Puppeteer and Playwright for automated financial reporting, testing workflows, and data scraping from third-party sources.
    •	Developed modular Next.js API routes for server-side data fetching, enabling seamless integration with backend microservices and vector DB-based RAG systems for knowledge retrieval.
    •	Optimized PostgreSQL and MSSQL schemas, implemented indexing, stored procedures, and query partitioning that reduced report generation times by 35%.
    •	Automated CI/CD pipelines using Jenkins, Docker, AWS (EC2, S3, RDS, Lambda) and Vercel, enabling zero-downtime deployments and rapid iteration.
    •	Conducted security and performance audits, API benchmarking, and real-time monitoring, ensuring SOC2 compliance and high system reliability.
    •	Authored technical documentation, UML diagrams, and API specifications, aligning engineering deliverables with architectural standards and cross-functional team requirements.


    Software Engineer IV at Virtusa: 03/2022 - 09/2024
    •	Built microservices using Node.js (Express/NestJS) for SaaS telemedicine platforms, implementing modular REST and GraphQL APIs, Redis caching, and event-driven messaging with RabbitMQ.
    •	Developed React.js and Angular dashboards with TypeScript, integrating real-time notifications, file uploads, and AI-powered insights for patient and workflow management.
    •	Designed and maintained PostgreSQL/MySQL schemas, implemented query optimization, caching strategies, and Redis for high-speed data retrieval.
    •	Implemented LangChain and LlamaIndex for agent-based workflows and multimodal AI integration, enabling intelligent recommendations and automated content processing.
    •	Integrated third-party APIs, payment gateways, and monitoring tools (Datadog, Kibana, Azure Monitor) to ensure resilient and fault-tolerant services.
    •	Conducted automated testing with Jest, Cypress, and CI/CD pipeline integration on Azure DevOps, ensuring high-quality releases and minimal production bugs.


    Software Engineer III at Campfire: 02/2020 - 01/2022
    •	Developed and deployed Node.js backend services with Express, designing modular REST APIs and ensuring system reliability for SaaS and telecom workloads.
    •	Built and maintained React.js and Angular frontends with TypeScript, integrating seamlessly with backend APIs and enabling real-time customer-facing dashboards.
    •	Implemented state management using Redux Toolkit for large-scale applications, improving performance, maintainability, and predictable data flow across complex UIs.
    •	Styled and structured modern interfaces using Tailwind CSS, enabling rapid prototyping, consistent design systems, and pixel-perfect responsiveness across devices.
    •	Implemented API security practices including OAuth2, JWT authentication, input validation, and rate limiting to protect systems from malicious requests.
    •	Performed integration and automated regression testing with Jest and Cypress, improving software stability and reducing manual QA overhead.


    Software Engineer II at Mercari: 04/2017 - 02/2020
    •	Contributed to backend services with Express.js and gradually migrated legacy services from Java to a modern TypeScript stack.
    •	Developed React.js components and integrated APIs to build e-commerce features such as shopping carts, product listings, and user profiles.
    •	Implemented SQL query optimizations and caching strategies that reduced data retrieval times and improved platform scalability.
    •	Participated in QA and UAT cycles by writing unit tests in Jest and assisting in debugging production issues.
    •	Deployed microservices to AWS EC2 instances and maintained distributed services with Apache Tomcat and Nginx.

    Skills:
    
    Node.js (Express, NestJS),
    REST/GraphQL APIs,
    Microservices,
    gRPC,
    Authentication/Authorization,
    API Gateway,
    Redis caching,
    Puppeteer,
    Playwright,
    React.js,
    Next.js,
    TypeScript,
    Angular,
    Tailwind CSS,
    JavaScript (ES6+),
    HTML5,
    CSS3,
    Responsive UI,
    UI/UX optimization,
    PostgreSQL,
    MySQL,
    MongoDB,
    MSSQL,
    Oracle DB,
    Redis,
    vector DB,
    schema design,
    indexing,
    query optimization,
    stored procedures,
    AWS (EC2, S3, RDS, Lambda, CloudFront, API Gateway),
    Vercel,
    Docker,
    Jenkins,
    Git/GitFlow,
    CI/CD pipelines,
    Nginx,
    Jest,
    Mocha/Chai,
    Cypress,
    Postman/Newman,
    JUnit,
    load/performance testing,
    vulnerability scanning,
    LangChain,
    LlamaIndex,
    RAG systems,
    multimodal AI integrations,
    Agile/Scrum,
    UAT participation,
    code reviews,
    mentoring,
    technical documentation,
    ISO/SOC2 compliance

    Education:
    Bachelor’s Degree of Computer Science | Sep 2013 – Mar 2017
    Kyoto University | Japan

    
    `
  }, 
];

export function getBaseResumeByName(name: string | null | undefined): string | null {
  if (!name) return null;
  const profile = baseResumes.find(p => p.name === name);
  return profile ? profile.resumeText : null;
}
