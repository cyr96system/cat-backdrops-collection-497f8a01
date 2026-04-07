import { motion } from "framer-motion";

interface ChatPreviewProps {
  backgroundImage: string;
}

const messages = [
  { sent: false, text: "Salut ! Comment ça va ? 😊" },
  { sent: true, text: "Super bien, merci ! Et toi ?" },
  { sent: false, text: "Très bien ! Tu as vu le nouveau thème ?" },
  { sent: true, text: "Oui, j'adore ! 🔥" },
];

const ChatPreview = ({ backgroundImage }: ChatPreviewProps) => {
  return (
    <motion.div
      layout
      className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/50"
      style={{ height: 420 }}
    >
      {/* Header */}
      <div className="bg-card px-4 py-3 flex items-center gap-3 border-b border-border">
        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
          A
        </div>
        <div>
          <p className="text-sm font-semibold text-card-foreground">Alice</p>
          <p className="text-xs text-muted-foreground">En ligne</p>
        </div>
      </div>

      {/* Messages area */}
      <div
        className="px-3 py-4 flex flex-col gap-2 transition-all duration-500 relative overflow-hidden"
        style={{ height: 340 }}
      >
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex flex-col gap-2">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs shadow-md ${
                  msg.sent
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-card/90 text-card-foreground rounded-bl-md backdrop-blur-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-card px-3 py-2 flex items-center gap-2 border-t border-border">
        <div className="flex-1 bg-muted rounded-full px-3 py-1.5 text-xs text-muted-foreground">
          Message...
        </div>
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-foreground">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPreview;
