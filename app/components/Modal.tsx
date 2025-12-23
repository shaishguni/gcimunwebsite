"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">GCI Model UN</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <p className="text-gray-700 mb-6">
          Join delegates from around the world for a distinguished forum of diplomacy and debate. Experience rigorous discussion, policy development, and lifelong connections.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <div className="text-amber-500 font-bold">•</div>
            <div>
              <h3 className="font-semibold text-gray-900">100+ Delegations</h3>
              <p className="text-sm text-gray-600">From schools worldwide</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-amber-500 font-bold">•</div>
            <div>
              <h3 className="font-semibold text-gray-900">6+ Committees</h3>
              <p className="text-sm text-gray-600">Choose your committee</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-amber-500 font-bold">•</div>
            <div>
              <h3 className="font-semibold text-gray-900">3 Days</h3>
              <p className="text-sm text-gray-600">February 2026</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
