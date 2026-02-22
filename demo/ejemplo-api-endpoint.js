/**
 * EJEMPLO: Estructura de un endpoint de la API
 * 
 * NOTA: Este es un fragmento SIMPLIFICADO con fines demostrativos.
 * El código completo está en el repositorio privado.
 * 
 * Muestra la arquitectura y patrones utilizados en el proyecto real.
 */

const express = require('express');
const router = express.Router();

// ============================================
// MIDDLEWARE DE AUTENTICACIÓN (Ejemplo)
// ============================================

const verificarToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        error: 'Token no proporcionado' 
      });
    }

    // Nota: La lógica real incluye verificación JWT completa
    // jwt.verify(token, SECRET_KEY)
    
    next();
  } catch (error) {
    res.status(401).json({ success: false, error: 'Token inválido' });
  }
};

// ============================================
// ENDPOINT: Obtener citas
// ============================================

router.get('/api/citas', verificarToken, async (req, res) => {
  try {
    const { fecha, mecanicoId } = req.query;
    
    // Nota: En el código real, esto llama a citasModel.obtenerPorFecha()
    // que ejecuta consultas SQL con prepared statements
    
    const citas = []; // Simulación
    
    res.json({
      success: true,
      data: citas,
      total: citas.length
    });
    
  } catch (error) {
    console.error('Error al obtener citas:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============================================
// ENDPOINT: Crear nueva cita
// ============================================

router.post('/api/citas', verificarToken, async (req, res) => {
  try {
    const { clienteId, vehiculoId, fecha, servicios, mecanicoId } = req.body;
    
    // Validaciones básicas
    if (!clienteId || !fecha || !servicios) {
      return res.status(400).json({
        success: false,
        error: 'Datos incompletos'
      });
    }
    
    // Nota: El código real incluye:
    // 1. Validar disponibilidad del mecánico
    // 2. Verificar que no haya doble reserva
    // 3. Crear cita en base de datos
    // 4. Encolar mensaje de WhatsApp
    // 5. Registrar en auditoría
    
    const nuevaCita = {
      id: 123, // Simulación
      clienteId,
      vehiculoId,
      fecha,
      servicios,
      mecanicoId,
      estado: 'pendiente',
      createdAt: new Date()
    };
    
    res.status(201).json({
      success: true,
      data: nuevaCita,
      message: 'Cita creada exitosamente'
    });
    
  } catch (error) {
    console.error('Error al crear cita:', error);
    res.status(500).json({
      success: false,
      error: 'Error al crear la cita'
    });
  }
});

// ============================================
// ENDPOINT: Actualizar estado de cita
// ============================================

router.patch('/api/citas/:id/estado', verificarToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { nuevoEstado } = req.body;
    
    // Validar estados permitidos
    const estadosValidos = ['pendiente', 'en_proceso', 'completada', 'cancelada'];
    if (!estadosValidos.includes(nuevoEstado)) {
      return res.status(400).json({
        success: false,
        error: 'Estado inválido'
      });
    }
    
    // Nota: El código real actualiza en BD y notifica al cliente
    
    res.json({
      success: true,
      message: `Cita ${id} actualizada a ${nuevoEstado}`
    });
    
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ============================================
// PATRÓN DE RESPUESTA CONSISTENTE
// ============================================

/**
 * TODAS las respuestas de la API siguen este formato:
 * 
 * ÉXITO:
 * {
 *   "success": true,
 *   "data": { ... },
 *   "message": "Opcional"
 * }
 * 
 * ERROR:
 * {
 *   "success": false,
 *   "error": "Mensaje de error",
 *   "code": "CODIGO_ERROR" (opcional)
 * }
 */

// ============================================
// ARQUITECTURA REAL DEL PROYECTO
// ============================================

/**
 * CAPAS:
 * 
 * 1. ROUTER (este archivo)
 *    └─ Define endpoints y ruteo
 * 
 * 2. CONTROLLER
 *    └─ Lógica de negocio y validaciones
 *    └─ Llama a servicios
 * 
 * 3. SERVICE
 *    └─ Operaciones complejas
 *    └─ Integraciones con APIs externas
 * 
 * 4. MODEL
 *    └─ Consultas SQL
 *    └─ Acceso a datos
 * 
 * 5. DATABASE
 *    └─ MySQL con pool de conexiones
 */

module.exports = router;
