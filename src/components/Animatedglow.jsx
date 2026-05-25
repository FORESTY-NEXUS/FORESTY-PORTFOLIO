import React from 'react'

const Animatedglow = () => {
  return (
    <div>
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Animated Glow */}
      <div className="green-glow absolute" />

      {/* Secondary Glow */}
      <div className="green-glow-secondary absolute" />

      {/* Content */}
    

      <style jsx>{`
        .green-glow {
          width: 120vw;
          height: 500px;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(34, 197, 94, 0.9) 0%,
            rgba(34, 197, 94, 0.45) 30%,
            rgba(34, 197, 94, 0.15) 55%,
            rgba(34, 197, 94, 0) 75%
          );
          filter: blur(45px);
          animation: pulseGlow 7s ease-in-out infinite;
        }

        .green-glow-secondary {
          width: 80vw;
          height: 700px;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(34, 197, 94, 0.25) 0%,
            rgba(34, 197, 94, 0.08) 45%,
            transparent 75%
          );
          filter: blur(90px);
          animation: pulseGlowSecondary 9s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }

          25% {
            transform: scale(0.88);
            opacity: 0.55;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }

          75% {
            transform: scale(0.94);
            opacity: 0.7;
          }

          100% {
            transform: scale(1);
            opacity: 0.9;
          }
        }

        @keyframes pulseGlowSecondary {
          0% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.2;
          }

          100% {
            transform: scale(1);
            opacity: 0.45;
          }
        }
      `}</style>
    </div>
    </div>
  )
}

export default Animatedglow
