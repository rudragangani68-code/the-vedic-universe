import React, { useEffect } from 'react';
import { X, Camera, Check, FileCode2, Copy } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface ImageGuidanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageGuidanceModal: React.FC<ImageGuidanceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPath = () => {
    navigator.clipboard.writeText('src/data/products.ts');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="image-guide-modal-overlay"
      className="fixed inset-0 z-50 bg-[#4A1710]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        id="image-guide-modal-card"
        className="w-full max-w-2xl bg-[#DDB477] border border-[#D5CDBF] shadow-2xl p-6 sm:p-8 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1 text-[#6E6557] hover:text-[#4A1710] transition-colors"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-[#EDE6D8] flex items-center justify-center text-[#4A4337]">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#705B4B] font-medium block">
              The Vedic Universe • Image Integration Guide
            </span>
            <h3 className="font-serif text-2xl text-[#4A1710] font-normal">
              Packaging Photo Replacement Instructions
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-[13px] text-[#5A4638] font-light leading-relaxed mb-6">
          The website is engineered to seamlessly integrate your exact official packaging photographs without modifying your labels, typography, or printed details.
        </p>

        {/* Current Product Aspect Ratios */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs tracking-[0.18em] uppercase text-[#736A5D] font-medium">
            Product Image Specifications:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#F8F0E2] border border-[#E5DFD2] p-3 text-xs text-[#3E382F]"
              >
                <span className="font-medium block text-[#4A1710] line-clamp-1">
                  {prod.name.replace('The Vedic Universe ', '')}
                </span>
                <span className="text-[11px] text-[#786F62] block mt-0.5">
                  Target Net Qty: {prod.netQuantity}
                </span>
                <span className="inline-block mt-1.5 px-1.5 py-0.5 bg-[#FAF7F1] border border-[#D5CDBF] text-[10px] font-mono">
                  Aspect: 1:1 (Square)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="bg-[#FFF8ED] border border-[#E0D8C8] p-4 text-xs text-[#4E473D] space-y-3 mb-6">
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#5A170E] text-[#FFF5E5] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-[#4A1710] font-medium">Upload your photos:</strong>
              <p className="text-[11px] text-[#6A6255] font-light mt-0.5">
                Save your raw package pack photos in <code className="bg-[#EFEAE0] px-1 py-0.5 font-mono">/src/assets/images/</code>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#5A170E] text-[#FFF5E5] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
              2
            </span>
            <div className="flex-1">
              <strong className="text-[#4A1710] font-medium">Edit central data file:</strong>
              <p className="text-[11px] text-[#6A6255] font-light mt-0.5">
                Open <code className="bg-[#EFEAE0] px-1 py-0.5 font-mono">src/data/products.ts</code> and update the image import or URL.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyPath}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#5A170E] text-[#FFF5E5] text-[10px] tracking-wider uppercase font-medium"
                >
                  {copied ? <Check className="w-3 h-3 text-[#A8D5A2]" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Path Copied' : 'Copy File Path'}</span>
                </button>
                <span className="text-[10px] text-[#7A7162] font-mono">src/data/products.ts</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#5A170E] text-[#FFF5E5] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-[#4A1710] font-medium">Automatic rendering:</strong>
              <p className="text-[11px] text-[#6A6255] font-light mt-0.5">
                The product grid, detail view, quick search, and inquiry flows will automatically display your official packaging without any code changes needed!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#5A170E] text-[#FFF5E5] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#3D372E] transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
