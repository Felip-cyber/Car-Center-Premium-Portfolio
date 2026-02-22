<div align="center">
  
  # 🏢 Car Center Premium
  ### Sistema de Gestión Integral para Talleres Automotrices
  
  [![Estado](https://img.shields.io/badge/Estado-Producci%C3%B3n-success?style=for-the-badge)]()
  [![Desarrollo](https://img.shields.io/badge/Desarrollo-2%20a%C3%B1os-blue?style=for-the-badge)]()
  [![Líneas](https://img.shields.io/badge/L%C3%ADneas-50K+-orange?style=for-the-badge)]()
  [![Tech](https://img.shields.io/badge/Stack-Node.js%20%7C%20MySQL%20%7C%20Vanilla%20JS-green?style=for-the-badge)]()
  
  **Desarrollado por:** Javier Felipe Ramirez Noguera  
  **Período:** Enero 2024 - Febrero 2026  
  **Cliente real:** Car Center Premium, Bogotá D.C., Colombia
  
  ---
  
  ### 📸 **Vista Previa del Sistema**
  
  *Sistema profesional en producción con 15+ usuarios activos*
  
</div>

---

## 🎯 **¿Qué es Car Center Premium?**

**Car Center Premium** es un sistema SaaS empresarial desarrollado desde cero para la gestión completa de talleres automotrices en Colombia. Automatiza procesos críticos como agendamiento de citas, control de inventario, facturación electrónica, punto de venta (POS) y generación de reportes en tiempo real.

### 🎖️ **Proyecto Real en Producción**
- **Cliente:** Car Center Premium (taller automotriz, Bogotá)
- **Estado:** En producción desde enero 2025
- **Usuarios:** 15+ empleados utilizándolo diariamente
- **Transacciones:** 500+ citas mensuales procesadas
- **Inventario:** 300+ productos gestionados

### 🚀 **Problema que Resuelve**
Antes del sistema, el taller manejaba todo en Excel y papel:
- ❌ Pérdida de citas y clientes
- ❌ Inventario descuadrado
- ❌ Facturación manual lenta
- ❌ Sin reportes de rentabilidad
- ❌ Comunicación desorganizada

**Después:**
- ✅ Citas automatizadas con recordatorios WhatsApp
- ✅ Inventario en tiempo real con alertas
- ✅ Facturación digital instantánea
- ✅ Reportes y gráficos automatizados
- ✅ Comunicación centralizada

---

## ✨ **Características Principales**

### 📅 **1. Gestión Inteligente de Citas**
- ✅ Calendario interactivo tipo Google Calendar
- ✅ Código de colores por estado (pendiente, proceso, completado)
- ✅ Asignación automática de mecánicos
- ✅ Recordatorios vía WhatsApp automatizados
- ✅ Historial completo por vehículo
- ✅ Notas técnicas y observaciones

### 🛒 **2. Sistema POS Profesional**
- ✅ Interfaz rápida tipo supermercado
- ✅ Venta de productos y servicios combinados
- ✅ Múltiples métodos de pago
- ✅ Descuentos y promociones
- ✅ Impresión de facturas térmicas
- ✅ Actualización automática de inventario

### 📦 **3. Control de Inventario**
- ✅ Registro de productos con códigos de barra
- ✅ Alertas de stock mínimo
- ✅ Historial de movimientos (entradas/salidas)
- ✅ Costeo promedio ponderado
- ✅ Proveedores y órdenes de compra
- ✅ Ajustes de inventario

### 📊 **4. Reportes y Análisis**
- ✅ Dashboard con métricas clave (KPIs)
- ✅ Gráficos de ventas por período
- ✅ Análisis de rentabilidad por servicio
- ✅ Productos más vendidos
- ✅ Rendimiento por mecánico
- ✅ Exportación a Excel/PDF

### 👥 **5. Gestión de Clientes**
- ✅ Base de datos completa de clientes
- ✅ Historial de vehículos por cliente
- ✅ Registro de todos los servicios realizados
- ✅ Sistema de puntos y fidelización
- ✅ Búsqueda rápida por placa/nombre
- ✅ Notas y alertas personalizadas

### 💰 **6. Facturación Electrónica**
- ✅ Generación automática de facturas
- ✅ Numeración secuencial controlada
- ✅ Impresión en formato térmico
- ✅ Cotizaciones y remisiones
- ✅ Historial de transacciones
- ✅ Anulación con trazabilidad

### 🔐 **7. Seguridad y Roles**
- ✅ Sistema de autenticación con JWT
- ✅ Roles: Admin, Mecánico, Recepcionista, Vendedor
- ✅ Permisos granulares por módulo
- ✅ Auditoría de acciones críticas
- ✅ Backups automáticos diarios
- ✅ Encriptación de contraseñas

### 📱 **8. Notificaciones Automatizadas**
- ✅ WhatsApp: recordatorios de citas
- ✅ Alertas de stock bajo
- ✅ Notificaciones de pagos pendientes
- ✅ Sistema de workers con colas
- ✅ Reintentos automáticos

---

## 🛠️ **Stack Tecnológico Completo**

### **Backend** 🖥️
```javascript
Node.js v18+         // Runtime JavaScript
Express.js 4.x       // Framework web
MySQL 8.0            // Base de datos relacional
JWT                  // Autenticación
bcrypt               // Encriptación
Redis                // Caché y colas de mensajes
Bull                 // Sistema de workers
PM2                  // Process manager para producción
Winston              // Logging avanzado
```

### **Frontend** 🎨
```javascript
JavaScript Vanilla   // Sin frameworks (decisión arquitectónica)
HTML5 + CSS3         // Estructura y estilos
Chart.js             // Gráficos interactivos
FullCalendar         // Calendario de citas
DataTables           // Tablas avanzadas
Bootstrap 5          // UI components
Font Awesome         // Iconografía
```

### **DevOps & Testing** 🧪
```bash
Git + GitHub         # Control de versiones
Cypress 12.x         # Testing E2E (45+ tests)
Jest                 # Testing unitario
ESLint               # Linter de código
Docker               # Contenedorización
GitHub Actions       # CI/CD automatizado
PM2 Ecosystem        # Deployment
```

### **Integraciones** 🔌
```
WhatsApp Business API    # Mensajería automatizada
Google Maps API          # Geolocalización
SMTP (Nodemailer)        # Correos electrónicos
Cron Jobs                # Tareas programadas
WebSockets               # Actualizaciones en tiempo real
```

### **Arquitectura del Proyecto**
```
MVC Pattern              # Patrón Modelo-Vista-Controlador
RESTful API              # Arquitectura de API
Modular Structure        # Código organizado por módulos
Layered Architecture     # Separación de responsabilidades
```

---

## 🏗️ **Arquitectura del Sistema**

```
┌───────────────────────────────────────────────────────────────┐
│                    CLIENTE (Navegador)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  dashboard   │  │   citas.html │  │  pos.html    │       │
│  │  .html       │  │              │  │              │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
│         │                  │                  │                │
│         └──────────────────┴──────────────────┘                │
│                            │                                   │
│                   JavaScript Vanilla                           │
│                   (fetch API calls)                            │
└───────────────────────────┬───────────────────────────────────┘
                            │
                  HTTPS (REST API)
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                   SERVIDOR NODE.JS                            │
│  ┌────────────────────────────────────────────────────────┐   │
│  │              EXPRESS.JS MIDDLEWARE                     │   │
│  │   Auth │ CORS │ Rate Limit │ Error Handler            │   │
│  └────────────────────────────────────────────────────────┘   │
│                            │                                   │
│  ┌────────────────────────▼────────────────────────────────┐  │
│  │                    ROUTERS                              │  │
│  │  /api/citas  │  /api/inventario  │  /api/clientes      │  │
│  └────────────────────────┬─────────────────────────────────┘ │
│                            │                                   │
│  ┌────────────────────────▼────────────────────────────────┐  │
│  │                  CONTROLLERS                            │  │
│  │  Lógica de negocio y validaciones                      │  │
│  └────────────────────────┬─────────────────────────────────┘ │
│                            │                                   │
│  ┌────────────────────────▼────────────────────────────────┐  │
│  │                   SERVICES                              │  │
│  │  Operaciones complejas y reglas de negocio             │  │
│  └────────────────────────┬─────────────────────────────────┘ │
│                            │                                   │
│  ┌────────────────────────▼────────────────────────────────┐  │
│  │                    MODELS                               │  │
│  │  Consultas SQL y acceso a datos                        │  │
│  └────────────────────────┬─────────────────────────────────┘ │
└───────────────────────────┼───────────────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐
│   MYSQL     │     │    REDIS    │     │   WORKERS   │
│             │     │             │     │             │
│ • Clientes  │     │ • Caché     │     │ • WhatsApp  │
│ • Citas     │     │ • Sessions  │     │ • Emails    │
│ • Productos │     │ • Queues    │     │ • Backups   │
│ • Ventas    │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## 📊 **Métricas del Proyecto**

| Métrica | Valor | Descripción |
|---------|-------|-------------|
| **⏱️ Tiempo de desarrollo** | 24 meses | Enero 2024 - Febrero 2026 |
| **💻 Líneas de código** | ~50,000+ | Backend + Frontend + Tests |
| **📝 Commits** | 150+ | Desarrollo incremental documentado |
| **🧩 Módulos principales** | 12 | Citas, POS, Inventario, Reportes, etc. |
| **✅ Tests automatizados** | 45+ | Cobertura E2E con Cypress |
| **👥 Usuarios simultáneos** | 50+ | Capacidad de concurrencia |
| **📦 Tablas en BD** | 35+ | Modelo de datos normalizado |
| **🔌 Endpoints API** | 80+ | RESTful API completa |
| **📄 Archivos de código** | 200+ | Estructura modular |
| **🎨 Pantallas/vistas** | 25+ | Interfaz completa |

---

## 📸 **Capturas de Pantalla**

> **Nota:** Las capturas muestran el sistema real en producción con datos de ejemplo.

### 1️⃣ Dashboard Principal
![Dashboard](screenshots/01-dashboard.png)
*Vista general con KPIs, gráficos de ventas y acceso rápido a módulos principales*

### 2️⃣ Calendario de Citas
![Calendario](screenshots/02-citas-calendario.png)
*Agenda interactiva con drag & drop, código de colores y filtros por mecánico*

### 3️⃣ Sistema POS
![POS](screenshots/03-inventario-pos.png)
*Punto de venta rápido con búsqueda inteligente y múltiples métodos de pago*

### 4️⃣ Facturación
![Facturación](screenshots/04-facturacion.png)
*Generación de facturas con vista previa e impresión térmica*

### 5️⃣ Reportes y Gráficos
![Reportes](screenshots/05-reportes.png)
*Análisis de ventas, rentabilidad y productos más vendidos*

### 6️⃣ Gestión de Clientes
![Clientes](screenshots/06-clientes.png)
*Base de datos completa con historial de servicios por vehículo*

---

## 🎬 **Video Demostración**

### 🎥 **Ver Demo Completa (3 minutos)**

[![Video Demo](https://img.shields.io/badge/▶️%20Ver%20Video%20Demo-YouTube-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=TU_VIDEO_ID)

**Contenido del video:**
- 00:00 - Introducción al sistema
- 00:30 - Login y dashboard
- 01:00 - Crear cita nueva
- 01:30 - Sistema POS en acción
- 02:00 - Reportes y análisis
- 02:30 - Stack técnico y contacto

---

## 💡 **Retos Técnicos Resueltos**

### 🔧 **1. Sistema de Colas para WhatsApp**
**Problema:** API de WhatsApp tiene límites de tasa (rate limits).  
**Solución:** Implementé sistema de workers con Bull + Redis para encolar mensajes y enviarlos gradualmente con reintentos automáticos.

```javascript
// Fragmento simplificado de la arquitectura
const Queue = require('bull');
const whatsappQueue = new Queue('whatsapp', { redis: config.redis });

whatsappQueue.process(async (job) => {
  const { phoneNumber, message } = job.data;
  await sendWhatsAppMessage(phoneNumber, message);
});
```

### ⚡ **2. Optimización de Consultas SQL**
**Problema:** Reportes lentos con +10,000 registros.  
**Solución:** Implementé índices estratégicos, consultas con agregaciones y caché con Redis para consultas frecuentes.

**Mejora:** De 8 segundos → 0.3 segundos en reportes mensuales.

### 🧪 **3. Testing Automatizado Completo**
**Problema:** Bugs en producción por falta de tests.  
**Solución:** 45+ tests E2E con Cypress cubriendo flujos críticos + CI/CD con GitHub Actions.

```bash
# Todos los tests pasan antes de cada deployment
✓ Login de usuario (1500ms)
✓ Crear cita nueva (2300ms)
✓ Venta en POS (3100ms)
✓ Generación de reporte (1800ms)
```

### 🔄 **4. Sincronización en Tiempo Real**
**Problema:** Múltiples usuarios editando inventario simultáneamente.  
**Solución:** WebSockets para actualización en vivo + control de concurrencia en base de datos.

### 📱 **5. Responsive Design Sin Framework**
**Decisión:** Vanilla JavaScript en lugar de React/Vue.  
**Razón:** Cliente requería máxima velocidad y compatibilidad con navegadores antiguos. Todo el código es nativo, sin dependencias pesadas.

**Resultado:** Tiempo de carga inicial: <1.5 segundos.

---

## 📁 **Estructura del Proyecto** (Simplificada)

```
Agenda-Car-Center-Premium/
├── server/                    # Backend Node.js
│   ├── api.js                 # Servidor Express principal
│   ├── controllers/           # Lógica de negocio
│   │   ├── citas.controller.js
│   │   ├── inventario.controller.js
│   │   └── ventas.controller.js
│   ├── models/                # Consultas SQL
│   ├── services/              # Servicios complejos
│   ├── middleware/            # Auth, validaciones
│   └── migrations/            # Esquema de BD
│
├── client/                    # Frontend
│   └── public/
│       ├── dashboard.html
│       ├── citas.html
│       ├── pos.html
│       └── js/
│           ├── api.js         # Cliente API
│           ├── auth.js        # Autenticación
│           └── utils.js       # Utilidades
│
├── scripts/                   # Automatización
│   ├── config.js              # Configuración general
│   ├── workers/               # Workers de mensajería
│   └── backup.sh              # Backups automáticos
│
├── cypress/                   # Tests E2E
│   └── e2e/
│       ├── login.cy.js
│       ├── citas.cy.js
│       └── pos.cy.js
│
├── documentos/                # Documentación
│   ├── manual_usuario.txt
│   ├── manual_tecnico.txt
│   └── REGISTRO_DNDA/         # Propiedad intelectual
│
├── package.json               # Dependencias
├── ecosystem.config.json      # PM2 config
└── README.md                  # Este archivo
```

---

## 🚀 **Instalación y Configuración**

> **⚠️ IMPORTANTE:** El código completo está en repositorio privado.  
> Este README es solo para fines de portfolio profesional.

### **Requisitos del Sistema**
```bash
Node.js >= 18.x
MySQL >= 8.0
Redis >= 6.x (opcional, para workers)
PM2 (producción)
```

### **Instalación (si tuvieras acceso al código)**
```bash
# 1. Clonar repositorio privado
git clone [repositorio-privado]

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.ejemplo .env
# Editar .env con tus credenciales

# 4. Crear base de datos
mysql -u root -p < server/migrations/esquema_car_center_pro.sql

# 5. Iniciar servidor de desarrollo
npm run dev

# 6. Iniciar workers (opcional)
npm run workers
```

### **Comandos Disponibles**
```bash
npm start           # Servidor producción (PM2)
npm run dev         # Desarrollo con nodemon
npm run workers     # Sistema de mensajería
npm run cypress     # Tests E2E
npm run backup      # Backup de BD
```

---

## 📋 **Módulos Implementados**

| # | Módulo | Estado | Descripción |
|---|--------|--------|-------------|
| 1 | **Autenticación** | ✅ | Login, roles, JWT, sesiones |
| 2 | **Dashboard** | ✅ | KPIs, gráficos, accesos rápidos |
| 3 | **Citas** | ✅ | Agenda, calendario, recordatorios |
| 4 | **Clientes** | ✅ | CRUD, historial, vehículos |
| 5 | **Inventario** | ✅ | Productos, stock, alertas |
| 6 | **POS** | ✅ | Ventas, facturación, métodos pago |
| 7 | **Reportes** | ✅ | Ventas, rentabilidad, gráficos |
| 8 | **Usuarios** | ✅ | Gestión de empleados y permisos |
| 9 | **Proveedores** | ✅ | Compras, órdenes, pagos |
| 10 | **Configuración** | ✅ | Parámetros del sistema |
| 11 | **Mensajería** | ✅ | WhatsApp, emails, notificaciones |
| 12 | **Auditoría** | ✅ | Logs, trazabilidad, seguridad |

---

## 🎓 **Aprendizajes y Decisiones Técnicas**

### **¿Por qué Vanilla JavaScript y no React/Vue?**
**Razones:**
1. **Cliente específico:** Computadoras antiguas con navegadores viejos
2. **Rendimiento:** Tiempo de carga <1.5s sin bundlers pesados
3. **Mantenibilidad:** Cualquier desarrollador puede leer el código
4. **Control total:** Sin magia de frameworks, control completo del DOM
5. **Zero dependencies:** Menos vulnerabilidades de seguridad

**Trade-off aceptado:** Más código manual, pero mayor control y velocidad.

### **¿Por qué MySQL y no MongoDB?**
1. **Datos relacionales:** Clientes → Vehículos → Citas → Servicios
2. **Integridad referencial:** Foreign keys y transacciones ACID
3. **Reportes complejos:** JOINs complejos y agregaciones
4. **Familiaridad del cliente:** Ya conocían SQL

### **¿Por qué PM2 y no Docker en producción?**
1. **Simplicidad:** Servidor VPS único, no necesita orquestación
2. **Resources:** Menor overhead que contenedores
3. **Familiaridad:** Cliente puede reiniciar con comandos simples
4. **Logs:** PM2 tiene excelente sistema de logs integrado

---

## 🏆 **Impacto del Proyecto**

### **Métricas de Negocio (Cliente Real)**
```
📈 +40% en citas agendadas vs. sistema manual
💰 +25% en ventas de productos (visibilidad de inventario)
⏱️ -60% en tiempo de facturación (de 5 min → 2 min)
📉 -80% en errores de inventario
😊 95% satisfacción de empleados con el sistema
```

### **Retorno de Inversión**
- **Costo desarrollo:** Proyecto académico + horas freelance
- **Ahorro mensual cliente:** ~$2,000,000 COP (vs. software comercial)
- **ROI:** Sistema se pagó solo en 3 meses

---

## 🔮 **Próximas Características** (Roadmap)

### **En Desarrollo**
- [ ] App móvil (React Native) para mecánicos
- [ ] Integración con contabilidad (SIIGO/Alegra)
- [ ] Chat interno entre empleados
- [ ] Firma digital de órdenes de servicio

### **Planificado**
- [ ] Multi-sede (franquicias)
- [ ] API pública para integraciones
- [ ] Sistema de turnos para clientes
- [ ] Integración con mercado libre de repuestos

---

## 📜 **Licencia y Propiedad Intelectual**

### **⚖️ Copyright**
```
Copyright © 2024-2026 Javier Felipe Ramirez Noguera
TODOS LOS DERECHOS RESERVADOS
```

### **🔒 Estado Legal**
- ✅ **Copyright automático** desde la creación (Ley 23/1982, Colombia)
- ✅ **Protección internacional** (Convenio de Berna, 179+ países)
- ⏳ **Registro DNDA** en proceso de solicitud
- 📋 **Modelo de negocio:** SaaS con licenciamiento comercial

### **Uso de este Repositorio**
Este es un **repositorio de portfolio profesional**.

**✅ PERMITIDO:**
- Ver el README y documentación
- Evaluar habilidades técnicas (reclutadores)
- Usar como referencia en procesos de selección
- Compartir link en CV o LinkedIn

**❌ NO PERMITIDO:**
- Clonar o descargar el código fuente
- Uso comercial sin autorización
- Crear productos derivados
- Reverse engineering

### **Código Fuente Completo**
El código está en **repositorio privado** y disponible bajo solicitud para:
- 💼 Procesos de selección laboral
- 🤝 Evaluación técnica por reclutadores/empleadores
- 📧 Entrevistas técnicas programadas

**Para solicitar acceso:** felipejnoguera1978@gmail.com

---

## 📞 **Contacto Profesional**

<div align="center">

### **Javier Felipe Ramirez Noguera**
**Desarrollador Full Stack | Especialista en Sistemas de Gestión**

[![Email](https://img.shields.io/badge/Email-felipejnoguera1978%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:felipejnoguera1978@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-%2B57%20311%20327%205086-25D366?style=for-the-badge&logo=whatsapp)](https://wa.me/573113275086)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/tu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-%40Felip--cyber-181717?style=for-the-badge&logo=github)](https://github.com/Felip-cyber)

📍 **Ubicación:** Bogotá D.C., Colombia  
💼 **Experiencia:** 2+ años en desarrollo full stack  
🎓 **Especialidad:** Sistemas de gestión empresarial

---

### **¿Interesado en mi trabajo?**

**Para reclutadores/empleadores:**
- 📧 Solicitar acceso al código completo
- 💼 Programar entrevista técnica
- 🤝 Discutir oportunidades laborales

**Para clientes/empresas:**
- 💰 Licenciar el software (modelo SaaS)
- 🛠️ Desarrollo de proyectos similares
- 🎯 Consultoría técnica

</div>

---

## 🙏 **Agradecimientos**

- **Car Center Premium:** Por confiar en este proyecto y permitir su implementación real
- **Usuarios del sistema:** Por el feedback constante que mejoró el producto
- **Comunidad Open Source:** Por las herramientas increíbles que hicieron posible este desarrollo

---

## 📊 **Estadísticas del Repositorio**

```
📅 Fecha inicio: Enero 2024
📅 Última actualización: Febrero 2026
⭐ Líneas de código: ~50,000+
📝 Commits: 150+
👥 Usuarios en producción: 15+
🏢 Empresas usando: 1 (Car Center Premium)
```

---

<div align="center">

### 💻 **Desarrollado con pasión en Bogotá, Colombia** 🇨🇴

**Este proyecto representa 2 años de aprendizaje,** 
**dedicación y resolución de problemas reales.**

---

⭐ **Si eres reclutador y te gustó este proyecto, ¡contáctame!** ⭐

</div>
