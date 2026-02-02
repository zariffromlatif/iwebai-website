import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const NUM_NODES = 20
const NUM_CONNECTIONS = 35

function generateNodes() {
  return Array.from({ length: NUM_NODES }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 2,
  }))
}

function generateConnections(nodes) {
  const connections = []
  for (let i = 0; i < NUM_CONNECTIONS; i++) {
    const from = nodes[Math.floor(Math.random() * nodes.length)]
    const to = nodes[Math.floor(Math.random() * nodes.length)]
    if (from.id !== to.id) {
      connections.push({
        id: i,
        from,
        to,
        delay: Math.random() * 2,
      })
    }
  }
  return connections
}

export default function NeuralNetwork() {
  const [nodes] = useState(generateNodes)
  const [connections] = useState(() => generateConnections(nodes))
  const [dataPackets, setDataPackets] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const connection = connections[Math.floor(Math.random() * connections.length)]
      const newPacket = {
        id: Date.now(),
        connection,
        type: Math.random() > 0.7 ? 'secure' : 'data',
      }
      setDataPackets(prev => [...prev.slice(-10), newPacket])
    }, 500)

    return () => clearInterval(interval)
  }, [connections])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden opacity-40">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.15)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
          </linearGradient>
          <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke="url(#connectionGradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: conn.delay }}
          />
        ))}

        {/* Data Packets */}
        {dataPackets.map((packet) => (
          <motion.circle
            key={packet.id}
            r="0.6"
            fill="white"
            filter="url(#glow)"
            initial={{ 
              cx: packet.connection.from.x, 
              cy: packet.connection.from.y,
              opacity: 0 
            }}
            animate={{ 
              cx: packet.connection.to.x, 
              cy: packet.connection.to.y,
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{ duration: 1, ease: "linear" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size / 10}
              fill="rgba(255, 255, 255, 0.1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 3, 
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size / 20}
              fill="rgba(255, 255, 255, 0.4)"
            />
          </motion.g>
        ))}
      </svg>

      {/* Shield Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Shield glow */}
          <motion.div
            className="absolute inset-0 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: 300, height: 300, marginLeft: -150, marginTop: -150 }}
          />
          
          {/* Scanning ring */}
          <motion.div
            className="absolute border border-white/20 rounded-full"
            style={{ width: 250, height: 250, marginLeft: -125, marginTop: -125 }}
            animate={{
              scale: [1, 1.5],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          
          {/* Central shield */}
          <svg width="120" height="140" viewBox="0 0 120 140" className="relative z-10">
            <motion.path
              d="M60 10 L110 35 L110 75 Q110 110 60 130 Q10 110 10 75 L10 35 Z"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M60 10 L110 35 L110 75 Q110 110 60 130 Q10 110 10 75 L10 35 Z"
              fill="white"
              fillOpacity="0.03"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            {/* Checkmark */}
            <motion.path
              d="M40 70 L55 85 L85 50"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
