---
id: concept
title: Product Concept
---

# Product Concept

Wryve is a closed (private) cloud messenger that allows owners and administrators to have full control over the 
infrastructure and data. The main components include:

## Backend Architecture

The server-side is built using a microservices architecture in Go, utilizing:

- **NATS** as a message bus for microservices communication.
- **Cassandra** as a distributed database optimized for large volumes of messages.
- **S3-compatible storage integration** for secure and scalable handling of media files.

## Client Applications

Client applications are developed using Flutter, ensuring a unified codebase and consistent UX across mobile (iOS, 
Android), desktop (Windows, macOS, Linux), and web platforms.

## Functionality

- **Registration and Authentication** with two-factor protection.
- **Personal and Group Chats**, as well as **Public Channels**.
- **Sending Text, Media content, and other files**.
- **Moderation Tools** (blocking, administration), **E2EE for Privacy**, and **Notification Support**.

## Non-Functional Requirements

Focused on high performance, reliability, and security:

- **Scalability** through clustering (horizontal scaling of service instances and database nodes).
- **Fault Tolerance** (data replication, backups, NATS cluster).
- **Encryption and Auditing** (logging key operations, integration with monitoring systems).

This approach combines the flexibility and scalability of microservices with a cross-platform, user-friendly 
interface, while maintaining privacy and control over corporate or personal data.
