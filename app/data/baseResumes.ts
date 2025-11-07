export type BaseResumeProfile = {
  name: string; // profile display name used as the select value
  resumeText: string; // full plain-text resume template
};

// Seed with a default profile. You can add more profiles to this array.
export const baseResumes: BaseResumeProfile[] = [
  {
    name: 'Lindsay Jackson (FS)',
    resumeText: `
Senior Software Engineer

Lindsay Jackson
Senior Software Engineer
lindsay.jackson1630@gmail.com
+1 (325) 313 0928
Houston, TX, USA

Summary:

Senior Software Engineer with over 10 years of experience delivering scalable, high-performance web and mobile solutions across industries
including healthcare, finance, retail, and education. Proven expertise in cloud-native architectures, microservices, and full-stack development 
using technologies such as Python(Django, Flask), ASP.NET Core, React.js, Node.js, Docker, and Kubernetes. Adept at driving large-scale cloud migrations, real-time systems, and secure API integrations 
that comply with standards like HIPAA, FHIR, PCI DSS, and GDPR. Recognized for leading cross-functional teams and shipping mission-critical platforms 
used by millions of users globally, while optimizing system reliability, security, and user experience. Passionate about automation, DevOps (CI/CD), and building solutions 
that improve operational efficiency and end-user satisfaction.

Professional Experience:

Senior Software Engineer at Softeq Consulting: 01/2025 - Current
•	Led the modernization of the healthcare systems by transitioning legacy applications to a cloud-based microservices architecture using Python (FastAPI), PHP (Laravel), Docker, and Kubernetes. The migration to AWS reduced operational costs by 25% and improved system uptime by 21%.
•	Designed and implemented scalable RESTful APIs for secure and efficient communication between internal systems and external partners. Integrated HL7 and FHIR standards to ensure interoperability, improving care coordination and real-time data sharing.
•	Developed a centralized patient management system using PHP (Laravel), Python, and PostgreSQL, consolidating patient data across hospital locations. This enabled real-time record retrieval and significantly reduced data inconsistencies and medical errors.
•	Built real-time data integration pipelines using Python, Azure Event Hubs, and WebSockets to process data from IoT healthcare devices. Enabled real-time monitoring of patient vitals like heart rate and blood pressure, enhancing critical care response.
•	Spearheaded the development of a telehealth platform using PHP, WebRTC, and REST APIs, integrated with scheduling systems and patient records. Developed cross-platform mobile apps using React Native, reducing no-show rates by 12% and improving patient access.
•	Implemented predictive analytics solutions in collaboration with data scientists using Python, TensorFlow, and Flask to forecast outcomes from historical data. This helped reduce hospital readmissions and enabled proactive care planning.
•	Automated insurance claim processing using Laravel, Azure Logic Apps, SQL Server, and Python, reducing manual effort by 41%. This improved financial operations and sped up the claim approval lifecycle.
•	Enhanced security and compliance by implementing OAuth 2.0, JWT, and role-based access control (RBAC). Maintained adherence to HIPAA, HL7, and FHIR standards and conducted vulnerability scans in collaboration with the InfoSec team.
•	Established CI/CD pipelines using Azure DevOps and GitLab, enabling automated builds, testing, and deployments. Utilized the ELK Stack (Elasticsearch, Logstash, Kibana) for real-time monitoring, significantly improving release reliability and issue detection.

Software Solution Engineer at AGKSOFT: 09/2023 – 01/2025
•	Spearheaded the migration of Rover’s legacy monolithic architecture to a containerized microservices ecosystem using Python (Flask), .NET Core, Docker, and Kubernetes, significantly enhancing scalability, resilience, and development velocity.
•	Designed and developed APIs to support core features including bookings, sitter onboarding, and payments, integrating Stripe for transactions and implementing secure OAuth 2.0 and JWT protocols for end-to-end user authentication.
•	Led the development of cross-platform mobile applications using React Native and .NET Core, enabling customers to manage services on the go. This mobile-first approach increased user engagement by 20% across iOS and Android.
•	Built a real-time pet tracking and notification system using SignalR, Redis, and Google Maps APIs, allowing live updates and location tracking during pet walks and stays—boosting user transparency and retention.
•	Collaborated with data scientists to integrate machine learning models into the booking engine, providing personalized sitter recommendations based on historical behavior, preferences, and regional trends.
•	Introduced CI/CD automation with Jenkins and GitLab CI, which reduced deployment times by 34% and minimized human error across environments, significantly improving release reliability.
•	Strengthened platform security by implementing role-based access control (RBAC), encrypting sensitive data, and enforcing fine-grained permission models to reduce attack surfaces and support platform growth.
•	Integrated internationalization (i18n) support to enable multi-language and multi-currency functionality, unlocking Rover’s expansion into non-English-speaking markets while maintaining consistent UX globally.

Software Engineer at Oracle : 06/2020 – 09/2023
•	Designed and built highly scalable microservices using Node.js, Express, and TypeScript, capable of handling millions of concurrent tax filings and financial transactions during peak season. Created modular RESTful APIs for key operations including payment processing, tax submission, and user account lifecycle management, enabling seamless communication with third-party services like Plaid and Stripe and ensuring the platform maintained uptime and responsiveness under extreme traffic conditions.
•	Modernized the QuickBooks user interface by re-architecting the frontend with React.js, Redux, and TypeScript, replacing legacy components incrementally with Angular-based solutions where appropriate. This significantly improved application performance, reduced rendering time, and enhanced overall accessibility and usability, empowering small business users to manage their finances more efficiently across devices and browsers.
•	Led a large-scale cloud migration initiative by transitioning legacy systems to AWS, containerizing services with Docker, and orchestrating deployments using Kubernetes and Terraform. This transformation enabled autoscaling, reduced downtime incidents by over 30%, and decreased infrastructure costs by migrating from fixed provisioning to cloud-native elasticity, thus enabling faster disaster recovery and greater operational resilience.
•	Optimized performance across MongoDB and PostgreSQL databases by refactoring database schemas, implementing sharding strategies, and applying index optimization techniques. This improved query execution speeds by up to 40%, enabling rapid retrieval of user financial histories, invoice data, and transactional records across millions of accounts while reducing I/O overhead in high-volume environments.
•	Implemented robust security measures using JWT, OAuth 2.0, and Multi-Factor Authentication (MFA) to enforce strong access controls and protect sensitive financial information. These efforts ensured full compliance with PCI DSS, GDPR, and CCPA, while minimizing vulnerability exposure and enabling detailed audit logging to support internal compliance and external regulatory reviews.
•	Built real-time event-driven systems using WebSockets, Redis, and Node.js for Credit Karma, enabling immediate notifications for users regarding credit score changes, fraud alerts, and account updates. This proactive engagement model improved platform trust and led to higher user retention, particularly in credit-monitoring features.
•	Partnered with data scientists to embed machine learning-powered financial recommendations into QuickBooks, leveraging TensorFlow models and Node.js-based inference APIs to help small businesses forecast cash flow trends, optimize expense categories, and receive personalized insights. This led to increased financial literacy among users and improved decision-making for business owners.

Software Developer I at The Home Spot : 02/2017 – 06/2020
•	Developed a real-time inventory management system using Python (Flask), Java (Spring Boot), and AngularJS, enabling stock tracking across hundreds of stores. This increased inventory visibility, reduced shortages, and provided employees with timely data to fulfill customer demand more effectively.
•	Spearheaded the migration from a monolithic system to a containerized microservices architecture using Python, Java, Docker, and Kubernetes, allowing for improved scalability, faster deployment cycles, and seamless handling of seasonal traffic surges during major retail events.
•	Developed RESTful and GraphQL APIs for mission-critical services including order processing, inventory sync, and customer profile management using Django REST Framework and Spring Boot. These integrations enabled faster data flow between frontend and backend systems, resulting in a smoother checkout experience for online shoppers.
•	Implemented secure authentication mechanisms using OAuth 2.0, JWT, and Multi-Factor Authentication (MFA) for both customers and internal staff. These upgrades significantly improved the platform’s security posture, especially around sensitive customer and payment data.
•	Designed and launched a mobile-first frontend using React Native, connected to backend APIs built in Python (Django). This solution allowed store associates to manage inventory, access order details, and serve customers via handheld devices. This innovation boosted in-store operational efficiency and streamlined task execution on the sales floor.
•	Migrated core applications to AWS cloud infrastructure using EC2, S3, and RDS, leading to a 21% reduction in infrastructure costs and substantial gains in platform reliability and availability during promotional periods.
•	Automated the CI/CD pipeline using Jenkins and GitLab CI, minimizing manual intervention and reducing release downtime by 32%. This allowed the engineering team to deploy new features and fixes more frequently and reliably, enhancing overall development velocity and minimizing regression risk.

Web/Mobile Developer at Amazon : 11/2015 – 02/2017
•	Developed and maintained the core learning platform using React.js for the frontend and Node.js with Express.js for the backend, providing students and instructors with a smooth and interactive interface.
•	Built and integrated RESTful APIs to handle user authentication, course content management, and data synchronization across devices, ensuring a seamless experience for both instructors and learners.
•	Optimized database schemas in MongoDB to efficiently store course data, quizzes, assignments, and student progress, enabling quick retrieval and secure data handling for millions of users.
•	Worked on real-time communication features using WebSockets, allowing students and instructors to engage in live discussions, quizzes, and virtual classrooms.
•	Collaborated with the product and design teams to continually enhance the platform’s UI/UX, introducing features like personalized dashboards, user progress tracking, and notifications.
•	Integrated third-party services like Zoom and Google Drive for live classes and document sharing, allowing users to participate in virtual learning without leaving the platform.
•	Automated the deployment process using Jenkins and GitLab CI/CD, reducing deployment time by 30% and ensuring more reliable releases of new features and updates.


Skills:

Node.js (Express, NestJS)
ASP.NET Core (C#)
Python (Flask, Django, FastAPI)
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

Education
•Bachelor of Science in Business Administration, Minor in Computer Science
Questrom School of Business, Boston University | USA
2016 – 2020

•Bachelor’s Degree: Computer Science
The University of Tokyo | Japan
2011 – 2015

Licenses & Certifications
•Professional Scrum Master I (PSM I)
Scrum.org | Issued Apr 2020 | Credential ID 659752
https://www.scrum.org/user/659752

•Google Data Analytics Specialization
Coursera | Issued Mar 2023 | Credential ID ATZV3LSS7K5R
https://www.coursera.org/account/accomplishments/specialization/certificate/ATZV3LSS7K5R

    `
  },
  {
    name: 'Lindsay Jackson (AI)',
    resumeText: `
Senior Software Engineer

Lindsay Jackson
Senior Software Engineer
lindsay.jackson1630@gmail.com
+1 (325) 313 0928
Houston, TX, USA

Summary:

Senior Software Engineer with over 10 years of experience delivering scalable, high-performance web and mobile solutions across industries
including healthcare, finance, retail, and education. Proven expertise in cloud-native architectures, microservices, and full-stack development 
using technologies such as Python(Django, Flask), ASP.NET Core, React.js, Node.js, Docker, and Kubernetes. Adept at driving large-scale cloud migrations, real-time systems, and secure API integrations 
that comply with standards like HIPAA, FHIR, PCI DSS, and GDPR. Recognized for leading cross-functional teams and shipping mission-critical platforms 
used by millions of users globally, while optimizing system reliability, security, and user experience. Passionate about automation, DevOps (CI/CD), and building solutions 
that improve operational efficiency and end-user satisfaction.

Experience:
Senior Software Engineer at Walmart Global Tech: 02/2024 – Present
• Led the development of a ride-matching platform (Uber-style) with Python microservices + WebSockets, ensuring 99.9% uptime and real-time communication at scale
• Rearchitected backends using AWS Lambda, DynamoDB, and serverless patterns, lowering infrastructure costs 25% while enabling elastic scaling
• Spearheaded the design and integration of an AI-powered customer support chatbot with OpenAI GPT, LangChain, and Microsoft Semantic Kernel, integrated into a Next.js frontend, reducing support response times by 48% and lifting CSAT ratings
• Built interactive analytics dashboards in Next.js + D3.js, visualizing predictions, anomaly alerts, and business KPIs for stakeholders in real time
• Automated anomaly detection and forecasting pipelines with PyTorch, scikit-learn, and Pandas, cutting reporting cycles by 40%, and optimized AI inference latency through ONNX Runtime and TensorRT, ensuring low-latency chatbot and analytics responses in production environments
• Mentored engineers on full-stack best practices, LLM integration, and cloud-native architecture, improving team output by 33%

Software Engineer at Amazon: 07/2022 – 05/2024
• Delivered scalable healthcare and e-commerce full-stack applications using Python, Node.js, React, and Angular that supported both internal teams and customer-facing platforms
• Implemented AI/ML features, including predictive analytics, recommendation engines, and automated content pipelines
• Integrated RESTful and GraphQL APIs to connect AI models with backend services and dashboards, providing real-time insights and low-latency analytics for business decisions
• Worked closely with frontend engineers to develop and test Angular and React pages, incorporating modular components
• Deployed microservices on AWS and Azure, ensuring elastic scaling, high availability, and robust AI inference pipelines
• Implemented automated testing and CI/CD pipelines using PyTest, Jest, Selenium, Docker, Kubernetes, and GitHub Actions, streamlining deployments and ensuring reliable production performance

Software Engineer at Volt Systems: 05/2021 – 08/2022
• Developed end-to-end AI-powered web applications using Python, Angular, and TypeScript for healthcare and e-commerce clients, enhancing workflow automation and decision-making
• Built machine learning pipelines with TensorFlow, scikit-learn, NumPy, implementing demand forecasting, anomaly detection, and personalized recommendation engines, improving operational efficiency by 37%
• Integrated LLM/NLP solutions using OpenAI GPT, LangChain, Microsoft Semantic Kernel to automate customer support, content generation, and document processing, reducing manual work by 42%
• Implemented cloud-native services for AI workloads on AWS (Lambda, S3, SageMaker, RDS), and GCP (Vertex AI, Cloud Functions, GKE), achieving high availability and auto-scaling for analytics
• Designed REST/GraphQL APIs and WebSocket endpoints to deliver real-time AI insights to frontend dashboards, ensuring low-latency interactions for business users
• Helped frontend engineers in developing 6 Angular pages with modular components, two-way data binding, and RxJS observables, ensuring a maintainable, scalable, and high-performance frontend architecture
• Implemented unit and integration testing using Jest, Cypress, and PyTest, ensuring reliable and robust AI-powered applications

Software Engineer at Hillside Farms: 02/2019 – 07/2020
• Implemented AI-driven agricultural and logistics solutions using Python, Node.js, and Next.js, automating operational decisions and forecasts
• Developed predictive analytics models for inventory, crop yield, and demand forecasting using scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, increasing operational efficiency by 29%
• Leveraged NLP pipelines to analyze market trends, generate automated operational reports, and extract insights from unstructured data, reducing manual reporting time by 46%
• Built real-time dashboards with Next.js, Chart.js, and TailwindCSS to display AI-driven insights, anomaly alerts, and operational KPIs for management and stakeholders
• Optimized databases and data pipelines (PostgreSQL, Redis) to accelerate ML training and inference, reducing query latency by 33%

Freelance Web Developer at Self Employed: 06/2016 – 04/2021
• Delivered end-to-end web solutions for global clients using Python (Django, Flask), Node.js (Express.js), React, Angular, and PHP, building scalable full-stack applications tailored to business requirements
• Designed and optimized databases (PostgreSQL, MySQL, MongoDB), improving query performance and ensuring data reliability across client platforms
• Integrated OpenAI and third-party APIs (Stripe, Twilio, SendGrid) into applications, enabling advanced features such as automated content generation, secure payments, and real-time communication
• Managed full project lifecycles from architecture to deployment on AWS, Azure, and Heroku
• Implemented AI/ML models for analytics, personalization, and forecasting for clients

Full Stack Developer Intern at IBM: 08/2015 – 02/2016
• Assisted in building end-to-end web applications using Python (Flask) on the backend and AngularJS/JavaScript on the frontend
• Contributed to the development of RESTful APIs for internal tools, enabling smooth integration between data services and user interfaces
• Supported deployment pipelines with Git, Docker, and Jenkins, gaining early exposure to CI/CD practices
• Enhanced user experience by implementing responsive UI components and form validations using AngularJS and Bootstrap
• Conducted unit testing and debugging to improve application reliability and reduce issue resolution time

Software Developer at Pilot Flying J: 06/2015 – 12/2015
• Designed and implemented full-stack web applications using Node.js, with AngularJS on the frontend
• Built and optimized data pipelines with MySQL and MongoDB, implementing caching strategies with Redis to reduce API response times by 28% and improve throughput
• Developed interactive dashboards using AngularJS, D3.js, Chart.js, and Bootstrap for reporting KPIs, enabling management to identify operational bottlenecks and improve decision-making speed by 35%
• Integrated third-party APIs and WebSocket services to provide real-time shipment tracking and notifications, enhancing operational visibility and user experience

QA Developer at Tango Reliability: 05/2014 – 05/2015
• Designed and executed comprehensive test plans for web and backend applications built with Python (Django) and JavaScript, ensuring adherence to functional and performance requirements
• Implemented automated regression and load testing pipelines using Selenium, PyTest, and Postman, increasing test coverage to 93% and reducing post-release defects by 37%
• Integrated continuous testing into CI/CD pipelines using Jenkins and Git, enabling faster feedback loops and consistent software quality
• Collaborated closely with developers to reproduce, debug, and resolve software issues, reducing incident turnaround time by 42%

Skills:
OpenAI GPT APIs
LangChain
Microsoft Semantic Kernel
TensorFlow
PyTorch
Scikit-learn
Pandas
NumPy
ONNX Runtime
TensorRT
LLMs
NLP
Predictive Analytics
Recommendation Engines
Python
FastAPI
Django
Flask
Node.js
Express
NestJS
Microservices
Event-Driven Architecture
gRPC
WebSockets
Celery
Asyncio
RESTful APIs
GraphQL Integration
OAuth 2.0
API Gateway Design
React.js
Next.js
Angular
TypeScript
JavaScript ES6+
Redux
RxJS
TailwindCSS
Material UI
Ant Design
Chart.js
Responsive UX Architecture
PostgreSQL
MySQL
MongoDB
SQLite
Redis
DynamoDB
Firebase
Elasticsearch
ETL Pipelines
Query Optimization
Data Caching
Data Modeling
AWS (Lambda, EC2, S3, RDS, DynamoDB, SageMaker)
Azure (App Services, Functions, Cosmos DB)
GCP (Cloud Functions, Vertex AI, GKE)
Docker
Kubernetes
Terraform
Nginx
Gunicorn
Vercel
Heroku
Auto-Scaling & High Availability
GitHub Actions
GitLab CI
Jenkins
Docker Compose
Supervisor
CI/CD Pipelines
Monitoring & Logging
Grafana
Prometheus
PyTest
Unittest
Selenium
Cypress
Playwright
Factory Boy
Postman
Load Testing (Locust, k6)
Coverage.py
Git
GitHub
GitLab
Bitbucket
Jira
Confluence
Notion
Figma
Jupyter


Education
•Bachelor of Science in Business Administration, Minor in Computer Science
Questrom School of Business, Boston University | USA
2016 – 2020

•Bachelor’s Degree: Computer Science
The University of Tokyo | Japan
2011 – 2015

Licenses & Certifications
•Professional Scrum Master I (PSM I)
Scrum.org | Issued Apr 2020 | Credential ID 659752
https://www.scrum.org/user/659752

•Google Data Analytics Specialization
Coursera | Issued Mar 2023 | Credential ID ATZV3LSS7K5R
https://www.coursera.org/account/accomplishments/specialization/certificate/ATZV3LSS7K5R

    `
  },
  {
    name: 'Louis Bailey (AI)',
    resumeText: `
Senior Software Engineer

Louis Bailey
luoisbailey21412@gmail.com
Senior Software Engineer
+1 (346) 214 1881
San Antonio, TX, USA

Summary:

AI/ML and Generative AI Specialist with 10+ years of experience architecting and delivering intelligent, cloud-native, and production-scale systems 
across healthcare, finance, retail, and education. Expertise in LLMs (GPT, LLaMA, Claude), GenAI apps, RAG, multimodal AI, recommendation engines, and predictive analytics. 
Proven success in deploying AI pipelines with MLOps best practices (MLflow, Kubeflow, Vertex AI, SageMaker), integrating AI into real-time systems, and 
ensuring compliance with HIPAA, FHIR, PCI DSS, and GDPR. Recognized for leading high-impact AI initiatives that transformed platforms into smarter, more efficient, and globally scalable solutions.

Professional Experience:

Senior Software Engineer at Softcom: 06/2022 - Current
•	Led migration of legacy SaaS products into cloud-native microservices enhanced with AI-powered copilots, reducing operational costs by 25% and boosting platform uptime by 21%.
•	Built RAG-based semantic search using LangChain, FAISS, and Hugging Face embeddings, enabling natural language querying across large customer datasets.
•	Designed and deployed multimodal AI models combining LLMs with computer vision for real-time video annotation, content tagging, and in-app recommendations.
•	Engineered predictive analytics pipelines in PyTorch + Azure Event Hubs to power real-time dashboards, reducing business decision latency by 40%.
•	Created a GenAI-driven knowledge assistant for customer support using OpenAI APIs + Pinecone, cutting response times by 32%.
•	Integrated TensorFlow-based predictive maintenance models into core SaaS features, preventing downtime and improving reliability.
•	Automated full AI lifecycle with MLflow + Kubernetes, enabling continuous model training, deployment, and monitoring.
•	Strengthened AI system security by embedding RBAC, GDPR-compliant data anonymization, and encrypted model outputs.

AI/ML Engineer at Rover: 03/2020 – 09/2022
•	Architected a personalized pet sitter recommendation engine using PyTorch embeddings, boosting match accuracy by 19%.
•	Deployed real-time pet activity recognition models (TensorFlow Lite + CV) in mobile apps to detect anomalies (e.g., health risks).
•	Built GenAI-powered onboarding assistants for customers and sitters, improving activation rates by 27%.
•	Integrated signal-based anomaly detection with Redis + Google Maps APIs to enhance live pet-tracking and notifications.
•	Collaborated with data scientists to embed ML-based behavioral models into the booking engine for improved retention.
•	Deployed AI services with GitLab CI/CD + Kubernetes, enabling seamless low-latency inference.
•	Strengthened security for AI APIs with JWT-based model access controls and usage monitoring.
•	Contributed to Rover’s global expansion by building multi-language, AI-powered translation and i18n systems.
•	Implemented bias detection pipelines for sitter recommendation models, ensuring fairness across demographics.

AI/ML Developer at Intuit : 01/2018 – 02/2020
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

AI Developer Intern at IBM : 11/2015 – 02/2017
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
•Bachelor of Science, Computer Science (10/2011 – 08/2015)
The University of Tokyo | Japan
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
  { name: 'Venkat Mani (QA)',
    resumeText: `
Senior Software Engineer

Venkat Mani
Senior QA Engineer
manivenkat9120@outlook.com
+1 346 214 1881
Tampa, Florida, USA

Summary: 

Senior QA Engineer with 10+ years of experience ensuring the reliability, performance, and compliance of complex enterprise systems 
across healthcare, finance, SaaS, manufacturing, IoT, and eCommerce domains. Expert in test automation, continuous testing, and data-driven quality analytics 
within Agile and DevOps environments. Skilled at designing robust QA frameworks, defining quality strategy, and integrating automated tests 
in CI/CD pipelines across AWS, Azure, and Kubernetes environments. Proven record of improving product stability, reducing release times, and enhancing user experience 
through proactive defect prevention and rigorous testing methodologies.

Professional Experience:

Senior QA Engineer at American National Bank: 01/2023 - Current
•	Integrate AI/ML services into production workflows, deploying FastAPI-based microservices to power personalization and real-time analytics, reducing service latency by 33%. 
•	Design and maintain queue-based architectures using Celery and Redis, orchestrating asynchronous processing pipelines and reducing processing time by 30%. 
•	Lead the architecture of a modular CMS platform using Django and PostgreSQL, scaling to over 500K monthly users and improving publishing cycles by 62%. 
•	Optimize backend infrastructure with Redis caching and Cloudflare CDN, achieving a 46% improvement in page load speeds and global API responsiveness. 
•	Implement role-based access control and multi-factor authentication in an EHR platform using Flask and MongoDB, securing 1M+ patient records. 
•	Automate CI/CD pipelines with Docker, GitHub Actions, and Kubernetes, enabling zero-downtime updates and enhancing deployment efficiency. 
•	Oversee ML pipeline lifecycle, from data wrangling to inference serving via FastAPI on AWS SageMaker, improving model deployment speed by 25%. 

QA AUtomation Engineer/Software Engineer in Test at Aetna : 03/2020 – 09/2022
•	Architect scalable e-Learning and Content Management Systems using FastAPI and PostgreSQL, reducing manual coordination by 73%.
•	Develop intelligent course recommendation features with scikit-learn, boosting learner engagement by 38%.
•	Build ADA-compliant frontends using React.js and Tailwind CSS, enhancing accessibility scores and reducing bounce rates by 33%. 
•	Engineer GraphQL and RESTful APIs for real-time e-commerce, handling over $10M in transactions annually. 
•	Design security-focused middleware layers in FastAPI, improving API error rates and traceability. 
•	Refactor legacy Node.js systems into Python microservices, enhancing maintainability and reducing onboarding time by 45%. 

Senior Quality Assurance Analyst at PNC : 01/2018 – 02/2020
•	Rebuild video analytics portals into Python and Laravel-based microservices, enabling scalable data ingestion and analysis. 
•	Architect Learning Management Systems using Laravel and FastAPI, supporting adaptive assessments and real-time learning paths. 
•	Develop scalable RESTful APIs using Laravel and FastAPI, supporting multi-tenant environments and SSO integration. 
•	Lead development of real-time dashboards with Vue.js, integrating WebSocket engagement tracking and Python logging services. 
•	Collaborate with data science teams to deploy NLP and recommendation models, enabling tailored content delivery. 
•	Refactor legacy ASP.NET Core services, aligning them with Laravel + Python stacks for unified system behavior.
•	Build micro-frontends with React and TypeScript, enhancing UI component reusability and accessibility compliance. 
•	Engineer CI/CD pipelines with GitHub Actions and Azure DevOps, enabling zero-downtime releases on Kubernetes. 
•	Integrate external platforms through OAuth2-secured APIs, ensuring seamless sync of institutional records.

Quality Assurance Analyst at Synchrony : 09/2015 – 03/2017
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
•Bachelor of Science, Computer Science (09/2009 – 03/2013)
Kyoto Univeristy | Japan
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
  { name: 'Zain Abdeen (FS)',
    resumeText: `
    Senior Software Engineer

Zain Abdeen
https://www.linkedin.com/in/zain-abdeen-445673219/
opulent915@gmail.com
+1 423 301 2901
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

Software Engineer at EmergentWirelessSolutions(Client: IBM) : 10/2020 – 03/2023
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
Quinnipiac University | Japan
    `
  },

];

export function getBaseResumeByName(name: string | null | undefined): string | null {
  if (!name) return null;
  const profile = baseResumes.find(p => p.name === name);
  return profile ? profile.resumeText : null;
}
