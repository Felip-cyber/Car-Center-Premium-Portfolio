# 🏗️ Arquitectura del Sistema - Car Center Premium

## 📋 Índice
1. [Visión General](#visión-general)
2. [Arquitectura de Alto Nivel](#arquitectura-de-alto-nivel)
3. [Capas del Sistema](#capas-del-sistema)
4. [Modelo de Datos](#modelo-de-datos)
5. [Flujos Principales](#flujos-principales)
6. [Decisiones Técnicas](#decisiones-técnicas)

---

## 🎯 Visión General

Car Center Premium está construido siguiendo una **arquitectura MVC (Modelo-Vista-Controlador)** tradicional con capas bien definidas y separación clara de responsabilidades.

### Principios Arquitectónicos

```
✅ Separación de Responsabilidades
✅ Modularidad
✅ Escalabilidad Horizontal
✅ Código Mantenible
✅ Seguridad por Diseño
```

---

## 🏛️ Arquitectura de Alto Nivel

### Diagrama de Capas

```
┌─────────────────────────────────────────────────────────────┐
│                     CAPA DE PRESENTACIÓN                    │
│                  (Client-Side / Frontend)                   │
├─────────────────────────────────────────────────────────────┤
│  • HTML5 + CSS3 (Estructura y estilos)                     │
│  • JavaScript Vanilla (Lógica de cliente)                  │
│  • Libraries: Chart.js, FullCalendar, Bootstrap            │
│  • Comunicación: Fetch API (AJAX)                          │
└──────────────────────┬──────────────────────────────────────┘
                       │
                  REST API (JSON)
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                    CAPA DE APLICACIÓN                       │
│                   (Application Layer)                       │
├─────────────────────────────────────────────────────────────┤
│  • Express.js (Routing y Middleware)                       │
│  • JWT Authentication                                       │
│  • CORS, Rate Limiting                                      │
│  • Validaciones de entrada                                 │
│  • Error Handling centralizado                             │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                   CAPA DE NEGOCIO                           │
│                  (Business Logic Layer)                     │
├─────────────────────────────────────────────────────────────┤
│  Controllers/                                               │
│  ├── Lógica de control de flujo                           │
│  ├── Orquestación de servicios                            │
│  └── Transformación de datos                              │
│                                                             │
│  Services/                                                  │
│  ├── Reglas de negocio complejas                          │
│  ├── Cálculos y algoritmos                                │
│  └── Integración con APIs externas                        │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                   CAPA DE DATOS                             │
│                    (Data Layer)                             │
├─────────────────────────────────────────────────────────────┤
│  Models/                                                    │
│  ├── Consultas SQL                                         │
│  ├── ORM simple (custom)                                   │
│  └── Validación de datos                                   │
│                                                             │
│  Database/                                                  │
│  ├── MySQL 8.0 (datos transaccionales)                    │
│  └── Redis (caché y sesiones)                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Capas del Sistema

### 1. **Capa de Presentación** (Frontend)

**Tecnologías:**
- HTML5, CSS3, JavaScript Vanilla
- Bootstrap 5 (UI components)
- Chart.js (gráficos)
- FullCalendar (calendario)

**Responsabilidades:**
```javascript
✅ Renderizar interfaces de usuario
✅ Capturar eventos del usuario
✅ Validaciones básicas del lado del cliente
✅ Comunicación con API vía fetch()
✅ Actualización dinámica del DOM
```

**Estructura de Archivos:**
```
client/public/
├── dashboard.html          # Página principal
├── citas.html              # Gestión de citas
├── pos.html                # Punto de venta
├── inventario.html         # Control de inventario
├── css/
│   └── styles.css          # Estilos globales
└── js/
    ├── api.js              # Cliente API centralizado
    ├── auth.js             # Autenticación
    ├── utils.js            # Utilidades
    └── modules/
        ├── citas.js
        ├── pos.js
        └── inventario.js
```

---

### 2. **Capa de Aplicación** (Middleware)

**Tecnologías:**
- Express.js 4.x
- JWT (jsonwebtoken)
- CORS
- express-rate-limit

**Responsabilidades:**
```javascript
✅ Routing de peticiones HTTP
✅ Autenticación y autorización
✅ Validación de tokens JWT
✅ Control de CORS
✅ Rate limiting (prevenir abuso)
✅ Manejo de errores global
```

**Middleware Stack:**
```javascript
// Orden de ejecución
app.use(cors());                    // 1. CORS
app.use(express.json());            // 2. Parser JSON
app.use(rateLimiter);               // 3. Rate limiting
app.use(authMiddleware);            // 4. Autenticación
app.use('/api', routes);            // 5. Routing
app.use(errorHandler);              // 6. Error handler
```

---

### 3. **Capa de Negocio** (Controllers + Services)

**Tecnologías:**
- Node.js puro
- Lógica de negocio custom

**Controllers: Orquestación**
```javascript
// Ejemplo: citasController.js
exports.crearCita = async (req, res) => {
  try {
    // 1. Validar datos
    const { clienteId, fecha, servicio } = req.body;
    
    // 2. Llamar servicios
    const disponibilidad = await citasService.verificarDisponibilidad(fecha);
    if (!disponibilidad) {
      return res.status(400).json({ success: false, error: 'Horario no disponible' });
    }
    
    // 3. Crear cita
    const cita = await citasService.crear({ clienteId, fecha, servicio });
    
    // 4. Enviar notificación
    await whatsappService.enviarRecordatorio(cita);
    
    // 5. Responder
    res.json({ success: true, data: cita });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
```

**Services: Lógica Compleja**
```javascript
// Ejemplo: inventarioService.js
exports.calcularCosteoPromedioPonderado = (producto, nuevaCompra) => {
  const costoActual = producto.stock * producto.costoUnitario;
  const costoNuevo = nuevaCompra.cantidad * nuevaCompra.precio;
  const stockTotal = producto.stock + nuevaCompra.cantidad;
  
  return (costoActual + costoNuevo) / stockTotal;
};
```

---

### 4. **Capa de Datos** (Models + Database)

**Tecnologías:**
- MySQL 8.0
- mysql2 (driver)
- Redis (caché)

**Models: Acceso a Datos**
```javascript
// Ejemplo: clientesModel.js
exports.buscarPorId = async (id) => {
  const [rows] = await db.execute(
    'SELECT * FROM clientes WHERE id = ?',
    [id]
  );
  return rows[0];
};

exports.crear = async (datos) => {
  const [result] = await db.execute(
    'INSERT INTO clientes (nombre, telefono, email) VALUES (?, ?, ?)',
    [datos.nombre, datos.telefono, datos.email]
  );
  return result.insertId;
};
```

---

## 🗄️ Modelo de Datos (Simplificado)

### Entidades Principales

```sql
-- Clientes
clientes
├── id (PK)
├── nombre
├── telefono
├── email
└── fecha_registro

-- Vehículos
vehiculos
├── id (PK)
├── cliente_id (FK → clientes)
├── placa
├── marca
└── modelo

-- Citas
citas
├── id (PK)
├── vehiculo_id (FK → vehiculos)
├── mecanico_id (FK → usuarios)
├── fecha_hora
├── estado (pendiente, proceso, completado)
└── observaciones

-- Productos
productos
├── id (PK)
├── codigo
├── nombre
├── stock
├── precio_venta
└── stock_minimo

-- Ventas
ventas
├── id (PK)
├── cliente_id (FK → clientes)
├── usuario_id (FK → usuarios)
├── fecha
├── total
└── metodo_pago

-- Detalle de Ventas
ventas_detalle
├── id (PK)
├── venta_id (FK → ventas)
├── producto_id (FK → productos)
├── cantidad
└── precio_unitario
```

### Relaciones

```
clientes (1) ──── (N) vehiculos
vehiculos (1) ──── (N) citas
usuarios (1) ──── (N) citas (como mecánico)
clientes (1) ──── (N) ventas
ventas (1) ──── (N) ventas_detalle
productos (1) ──── (N) ventas_detalle
```

---

## 🔄 Flujos Principales

### Flujo 1: Crear Cita

```
USUARIO → FRONTEND → API → CONTROLLER → SERVICE → MODEL → DB
    ↓                                                        ↓
CONFIRMACIÓN ←──────────────────────────────────────────── ÉXITO
    ↓
WHATSAPP ← WORKER ← QUEUE ← SERVICE
```

**Pasos:**
1. Usuario llena formulario en `citas.html`
2. JavaScript valida datos básicos
3. Fetch POST a `/api/citas`
4. Middleware verifica JWT
5. Controller valida disponibilidad
6. Service crea cita en BD
7. Service encola mensaje WhatsApp
8. Worker envía mensaje asíncrono
9. Frontend recibe confirmación

---

### Flujo 2: Venta en POS

```
CAJERO → POS → CARRITO → API → TRANSACTION
    ↓                              ↓
FACTURA ←──────────────── DESCUENTO STOCK
    ↓
IMPRESIÓN
```

**Pasos:**
1. Cajero escanea productos
2. JavaScript añade a carrito local
3. Usuario confirma venta
4. POST a `/api/ventas`
5. **TRANSACCIÓN SQL:**
   - Crear venta
   - Crear detalle
   - Descontar stock (cada producto)
6. Retornar factura generada
7. Imprimir en impresora térmica

---

## 🛡️ Seguridad

### Autenticación y Autorización

```javascript
// JWT Flow
LOGIN → Verificar credenciales → Generar JWT → Retornar token
    ↓
CLIENTE almacena en localStorage
    ↓
Cada petición incluye: Authorization: Bearer <token>
    ↓
Middleware verifica token → Extrae userId → Inyecta req.user
```

### Protecciones Implementadas

```
✅ Passwords hasheados (bcrypt)
✅ JWT con expiración
✅ CORS configurado
✅ Rate limiting (100 req/15min)
✅ SQL Injection protegido (prepared statements)
✅ XSS protegido (sanitización)
✅ HTTPS en producción
✅ Validación de roles
```

---

## 💡 Decisiones Técnicas Clave

### ¿Por qué Vanilla JS y no React?

**Decisión:** Usar JavaScript puro sin frameworks.

**Razones:**
1. **Rendimiento:** Menor bundle size, carga más rápida
2. **Compatibilidad:** Navegadores antiguos del cliente
3. **Simplicidad:** Sin configuración de Webpack/Babel
4. **Mantenibilidad:** Código más legible para el equipo
5. **Control:** Sin "magia" de frameworks

**Trade-off aceptado:**  
Más código manual, pero mayor control del DOM.

---

### ¿Por qué MySQL y no MongoDB?

**Decisión:** Base de datos relacional.

**Razones:**
1. **Datos estructurados:** Relaciones claras (clientes→vehículos→citas)
2. **Integridad:** Foreign keys y constraints
3. **Transacciones:** ACID para ventas (stock consistency)
4. **Reportes:** JOINs complejos para análisis
5. **Familiaridad:** Equipo ya conocía SQL

---

### ¿Por qué Workers Separados?

**Decisión:** Proceso separado para mensajería.

**Razones:**
1. **Desacoplamiento:** API no espera envío de WhatsApp
2. **Escalabilidad:** Múltiples workers en paralelo
3. **Reintentos:** Si falla, se reintenta automáticamente
4. **Rate Limits:** Controlar velocidad de envío
5. **Monitoreo:** Logs separados para debugging

**Implementación:**
```javascript
// server.js (API)
app.listen(3000);

// workers.js (Mensajería)
whatsappQueue.process(async (job) => {
  // Enviar mensaje
});
```

---

## 📊 Patrones de Diseño Utilizados

### 1. **MVC (Model-View-Controller)**
```
View (HTML)  →  Controller  →  Model  →  Database
     ↑                ↓
     └────── Response ←──────┘
```

### 2. **Singleton (Database Connection)**
```javascript
// Solo una instancia del pool de conexiones
const db = mysql.createPool({ ... });
module.exports = db;
```

### 3. **Middleware Pattern**
```javascript
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
// Chain of responsibility
```

### 4. **Repository Pattern**
```javascript
// Models actúan como repositorios
clientesModel.buscarPorId(id);
citasModel.crear(datos);
```

---

## 🚀 Escalabilidad

### Horizontal Scaling

```
         ┌─────── Load Balancer ───────┐
         │                             │
    ┌────▼────┐              ┌────▼────┐
    │ Server 1│              │ Server 2│
    └────┬────┘              └────┬────┘
         │                        │
         └────────┬───────────────┘
                  │
          ┌───────▼────────┐
          │  MySQL Master  │
          └───────┬────────┘
                  │
       ┌──────────┴──────────┐
       │                     │
  ┌────▼────┐          ┌────▼────┐
  │ Replica 1│          │ Replica 2│
  └──────────┘          └──────────┘
```

**Preparado para:**
- PM2 cluster mode (múltiples procesos)
- Nginx como load balancer
- MySQL replicación master-slave
- Redis como caché compartido

---

## 📈 Monitoreo y Logs

```javascript
// Winston logger
logger.info('Venta creada', { ventaId, total });
logger.error('Error en POS', { error, userId });

// PM2 monitoring
pm2 monit
pm2 logs
```

---

## 🔮 Futuras Mejoras Arquitectónicas

```
⏳ Microservicios (separar inventario, facturación)
⏳ GraphQL (más eficiente que REST)
⏳ WebSockets (actualizaciones en tiempo real)
⏳ Kubernetes (orquestación de contenedores)
⏳ Event Sourcing (trazabilidad completa)
```

---

**Autor:** Javier Felipe Ramirez Noguera  
**Fecha:** Febrero 2026
